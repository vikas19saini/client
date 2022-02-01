import { useSelector } from "react-redux";
import { formatPrice, useCart } from "../components/helpers";
import { useRouter } from "next/router";
import { toast } from 'react-nextjs-toast';
import { Fragment, useState } from "react";
import useTranslation from "next-translate/useTranslation";

export default function CheckoutSidebar(props) {
    const router = useRouter();
    let currency = useSelector(state => state.config.currency);
    const cartData = useSelector(state => state.config.cartData);
    const { applyCoupon, isApplyingCoupon, removeCoupon } = useCart();
    const [expend, setExpend] = useState(false)

    const { t } = useTranslation()

    const applyCouponCode = async (couponCode) => {
        try {
            if (couponCode) {
                let response = await applyCoupon(couponCode);
                toast.notify(`${response.message}`, {
                    type: response.type,
                    title: response.title
                });
            }
        } catch (err) {
            console.log(err);
        }
    }

    const removeCouponCode = async () => {
        let response = await removeCoupon();
        toast.notify(`${response.message}`, {
            type: response.type,
            title: response.title
        });
    }

    return (
        <Fragment>
            {
                router.pathname === "/checkout" &&
                <div className="d-block d-sm-none">
                    <div className="dis_detail card m-0">
                        <div>
                            <h6 className="pl-4 pr-4 pb-2 pt-2 m-0" onClick={() => setExpend(!expend)}>
                                <span id="showCartMobile">{t("cart:order_summary")} {expend ? <i className="fa fa-chevron-down" /> : <i className="fa fa-chevron-up" />}</span>
                                <span className="pull-right">{formatPrice(cartData ? cartData.total : 0)}</span>
                            </h6>
                        </div>
                    </div>
                </div>
            }
            <div className={router.pathname === "/checkout" ? expend ? "appy_sec cart-details d-sm-block card" : "appy_sec cart-details d-none d-sm-block card" : "appy_sec cart-details card"}>
                <div className="input-group">
                    {
                        cartData && cartData.coupon ?
                            <div className="couponApplied over_bdr_1">
                                <div className="text">
                                    <p>{t("cart:coupon_applied")}</p>
                                    <p>{t("cart:additional_save")} {new Intl.NumberFormat('en-IN', { style: "currency", currency: currency.code }).format((cartData.couponDiscount + cartData.discount) * currency.value).replace("THB", "฿")}</p>
                                </div>
                                <div className="couponBtn">
                                    <button type="button" disabled={isApplyingCoupon} onClick={() => removeCouponCode()}>{
                                        isApplyingCoupon ? <span className="spinner-border spinner-border-sm"></span> : t("cart:remove")
                                    }</button>
                                </div>
                            </div> : <>
                                <div className="input-group">
                                    <input type="text" id="couponCode" name="couponCode" className="form-control p-2" placeholder={t("cart:promo_code")} />
                                    <div className="input-group-btn">
                                        <button className="btn btn-secondary text-uppercase rounded-right r-0" type="button" disabled={isApplyingCoupon} onClick={() => applyCouponCode(document.getElementById("couponCode").value)}>
                                            {isApplyingCoupon ? <span className="spinner-border spinner-border-sm"></span> : t("cart:apply_coupon")}
                                        </button>
                                    </div>
                                </div>
                            </>
                    }

                </div>
                <div className="price_tt">
                    <p><strong>{t("cart:price_details")}</strong></p>
                    <table className="table borderless">
                        <tbody>
                            <tr>
                                <td>{t("cart:total")}</td>
                                <td className="align_right">{formatPrice(cartData ? cartData.cartValue : 0)}</td>
                            </tr>
                            <tr>
                                <td>{t("cart:discount")}</td>
                                <td className="align_right">{formatPrice(cartData ? cartData.discount : 0)}</td>
                            </tr>
                            <tr>
                                <td>{t("cart:coupon_discount")}</td>
                                <td className="align_right">{formatPrice(cartData ? cartData.couponDiscount : 0)}</td>
                            </tr>
                            <tr>
                                <td>{t("cart:delivery_charges")}</td>
                                <td className="align_right">{formatPrice(cartData ? cartData.shippingCost : 0)}</td>
                            </tr>
                            <tr className="tb_1">
                                <td>{t("cart:payable_amount")}</td>
                                <td className="flt_right">{formatPrice(cartData ? cartData.total : 0)}</td>
                            </tr>
                        </tbody>
                    </table>
                    {
                        !props.hideCheckoutBtn && <button type="button" onClick={() => router.push(`/checkout`)} className="bag_bttn check_out_bttn">{t("cart:checkout")}</button>
                    }
                </div>
            </div>
        </Fragment>
    )
}