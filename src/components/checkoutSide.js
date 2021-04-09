import { useSelector } from "react-redux";
import { formatPrice } from "../pages/helpers";
import { useRouter } from "next/router";
import axios from "axios";

export default function CheckoutSidebar(props) {
    const auth = useSelector(state => state.config.auth ? state.config.auth : false)
    const router = useRouter();
    let currency = useSelector(state => state.config.currency);

    const checkOut = () => {
        if (auth)
            router.push(`/checkout`);
        else
            router.push(`/account?redirect=${window.location.pathname}`);
    }

    const applyCoupon = () => {
        axios.post(`${process.env.API_URL}cart/applyCoupon`, {
            cartId: props.cartData.id,
            couponCode: document.getElementById("couponCode").value
        }).then((res) => {
            props.setReload((new Date()).getTime());
        }).catch(err => {
            console.log(err);
        })
    }

    const removeCoupon = () => {
        axios.post(`${process.env.API_URL}cart/removeCoupon`, {
            cartId: props.cartData.id,
        }).then((res) => {
            props.setReload((new Date()).getTime());
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <div className="appy_sec">
            <div className="input-group over_bdr_1">
                {
                    props.cartData.coupon ?
                        <div className="couponApplied">
                            <div className="text">
                                <p>Coupon applied</p>
                                <p>You save additional {new Intl.NumberFormat('en-IN', { style: "currency", currency: currency.code }).format(props.cartData.couponDiscount * currency.value).replace("THB", "฿")}</p>
                            </div>
                            <div className="couponBtn">
                                <button type="button" onClick={() => removeCoupon()}>Edit</button>
                            </div>
                        </div> : <>
                            <input type="text" className="inner_input form-control" id="couponCode" placeholder="Enter Coupon Code" />
                            <div className="input-group-append">
                                <button className="input-group-text sign_bttn" onClick={() => applyCoupon()}>Appy</button>
                            </div>
                        </>
                }

            </div>
            <div className="price_tt">
                <p><strong>Price Details</strong></p>
                <table className="table borderless">
                    <tbody>
                        <tr>
                            <td>Total MRP</td>
                            <td className="align_right">{formatPrice(props.cartData.cartValue)}</td>
                        </tr>
                        <tr>
                            <td>Discount on MRP</td>
                            <td className="align_right">{formatPrice(props.cartData.discount)}</td>
                        </tr>
                        <tr>
                            <td>Coupon Discount</td>
                            <td className="align_right">{formatPrice(props.cartData.couponDiscount)}</td>
                        </tr>
                        {/* <tr>
                            <td>Tax</td>
                            <td className="align_right">{tax ? formatPrice(tax) : "Includede"}</td>
                        </tr> */}
                        <tr>
                            <td>Delivery Charges</td>
                            <td className="align_right">{formatPrice(props.cartData.shippingCost || 0)}</td>
                        </tr>
                        <tr className="tb_1">
                            <td>Total Amount <span style={{ fontSize: 10 }}>(Tax included)</span></td>
                            <td className="flt_right">{formatPrice(props.cartData.total)}</td>
                        </tr>
                    </tbody>
                </table>
                {
                    !props.disableCheckout && <button type="button" onClick={checkOut} className="bag_bttn check_out_bttn">Checkout</button>
                }
            </div>
        </div>
    )
}