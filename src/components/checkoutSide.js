import { useSelector } from "react-redux";
import { formatPrice, useCart } from "../components/helpers";
import { useRouter } from "next/router";
import { toast } from 'react-nextjs-toast';
import { Fragment } from "react";

export default function CheckoutSidebar(props) {
    const router = useRouter();
    let currency = useSelector(state => state.config.currency);
    const cartData = useSelector(state => state.config.cartData);
    const { applyCoupon, isApplyingCoupon, removeCoupon } = useCart();

    const applyCouponCode = async (couponCode) => {
        try {
            let response = await applyCoupon(couponCode);
            toast.notify(`${response.message}`, {
                type: response.type,
                title: response.title
            });
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
            <div className="d-block d-sm-none p-2">
                <div className="dis_detail selectedAdd cartProduct m-0">
                    <div>
                        <h6 className="p-0 m-0">
                            <span id="showCartMobile">Sjow order summary <i className="fa fa-chevron-down"></i></span>
                            <span className="pull-right">{formatPrice(cartData ? cartData.total : 0)}</span>
                        </h6>
                    </div>
                </div>
            </div>
            <div className="appy_sec cart-details d-none d-sm-block">
                <div className="input-group over_bdr_1">
                    {
                        cartData && cartData.coupon ?
                            <div className="couponApplied">
                                <div className="text">
                                    <p>Coupon applied</p>
                                    <p>You save additional {new Intl.NumberFormat('en-IN', { style: "currency", currency: currency.code }).format((cartData.couponDiscount + cartData.discount) * currency.value).replace("THB", "฿")}</p>
                                </div>
                                <div className="couponBtn">
                                    <button type="button" disabled={isApplyingCoupon} onClick={() => removeCouponCode()}>{
                                        isApplyingCoupon ? <div className="loader" /> : "Remove"
                                    }</button>
                                </div>
                            </div> : <>
                                <input type="text" className="inner_input form-control" id="couponCode" name="couponCode" placeholder="Coupon Code" />
                                <div className="input-group-append">
                                    <button className="btn btn-secondary radius" disabled={isApplyingCoupon} onClick={() => applyCouponCode(document.getElementById("couponCode").value)}>{
                                        isApplyingCoupon ? <div className="loader" /> : "Apply Coupon"
                                    }</button>
                                </div>
                            </>
                    }

                </div>
                <div className="price_tt">
                    <p><strong>Price Details</strong></p>
                    <table className="table borderless">
                        <tbody>
                            <tr>
                                <td>Total</td>
                                <td className="align_right">{formatPrice(cartData ? cartData.cartValue : 0)}</td>
                            </tr>
                            <tr>
                                <td>Discount</td>
                                <td className="align_right">{formatPrice(cartData ? cartData.discount : 0)}</td>
                            </tr>
                            <tr>
                                <td>Coupon Discount</td>
                                <td className="align_right">{formatPrice(cartData ? cartData.couponDiscount : 0)}</td>
                            </tr>
                            <tr>
                                <td>Delivery Charges</td>
                                <td className="align_right">{formatPrice(cartData ? cartData.shippingCost : 0)}</td>
                            </tr>
                            <tr className="tb_1">
                                <td>Total Amount <span style={{ fontSize: 10 }}>(Tax included)</span></td>
                                <td className="flt_right">{formatPrice(cartData ? cartData.total : 0)}</td>
                            </tr>
                        </tbody>
                    </table>
                    {
                        !props.hideCheckoutBtn && <button type="button" onClick={() => router.push(`/checkout`)} className="bag_bttn check_out_bttn">Checkout</button>
                    }
                </div>
            </div>
        </Fragment>
    )
}