import { useSelector } from "react-redux";
import { formatPrice, getProductPrice } from "../pages/helpers";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

export default function CheckoutSidebar(props) {
    let totalAmount = 0, discount = 0, couponDiscount = 0, totalPay = 0;
    const auth = useSelector(state => state.config.auth ? state.config.auth : false)
    const router = useRouter();

    props.cart.forEach(pro => {
        totalAmount += pro.ragularPrice * pro.cartQuantity
        totalPay += getProductPrice(pro) * pro.cartQuantity
        discount = totalAmount - totalPay
    })

    useEffect(() => {
        props.setAmountToPay && props.setAmountToPay(totalPay);
    }, [props.shippingCost]);
    
    totalPay = totalPay + (props.shippingCost || 0);

    const checkOut = () => {
        if (auth)
            router.push(`/checkout`);
        else
            router.push(`/account?redirect=${window.location.pathname}`);
    }

    return (
        <div className="appy_sec">
            {/* <p>Apply Coupon</p> */}
            <div className="input-group over_bdr_1">
                <input type="text" className="inner_input form-control" placeholder="Enter Coupon Code" id="mail"
                    name="email" />
                <div className="input-group-append">
                    <span className="input-group-text sign_bttn">Appy</span>
                </div>
            </div>
            <div className="price_tt">
                <p><strong>Price Details</strong></p>
                <table className="table borderless">
                    <tbody>
                        <tr>
                            <td>Total MRP</td>
                            <td className="align_right">{formatPrice(totalAmount)}</td>
                        </tr>
                        <tr>
                            <td>Discount on MRP</td>
                            <td className="align_right">{formatPrice(discount)}</td>
                        </tr>
                        <tr>
                            <td>Coupon Discount</td>
                            <td className="align_right">{formatPrice(couponDiscount)}</td>
                        </tr>
                        {/* <tr>
                            <td>Tax</td>
                            <td className="align_right">{tax ? formatPrice(tax) : "Includede"}</td>
                        </tr> */}
                        <tr>
                            <td>Delivery Charges</td>
                            <td className="align_right">{formatPrice(props.shippingCost || 0)}</td>
                        </tr>
                        <tr className="tb_1">
                            <td>Total Amount <span style={{ fontSize: 10 }}>(Tax included)</span></td>
                            <td className="flt_right">{formatPrice(totalPay)}</td>
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