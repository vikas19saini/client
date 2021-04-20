import { useEffect, useState } from "react"
import PaypalExpressBtn from 'react-paypal-express-checkout';
import { useSelector } from "react-redux";
import axios from "axios";
import { toast, ToastContainer } from 'react-nextjs-toast';
import { useRouter } from 'next/router'

export default function PaymentMethod(props) {
    let currency = useSelector(state => state.config.currency);
    const [paymentMethod, setPaymentMethod] = useState(null);
    const amountToPay = parseFloat((props.cartData.total * currency.value).toFixed(2));
    const [allPaymentMethods, setAllPaymentMethods] = useState([]);
    const router = useRouter();

    useEffect(() => {
        if (paymentMethod === "bank" && document.getElementById("cardForm")) {
            document.getElementById("cardForm").scrollIntoView({
                behavior: "smooth"
            })
        }
    }, [paymentMethod]);

    useEffect(() => {
        axios.get(`${process.env.API_URL}payments/config`).then((res) => {
            setAllPaymentMethods(res.data);
        });
    }, [])

    const onSuccess = async (payment) => {
        try {
            let order = await axios.post(`${process.env.API_URL}orders`, { cartId: props.cartData.id, currency: currency.code, paymentMethod: "paypal" });
            order = order.data;
            await axios.post(`${process.env.API_URL}orders/payment`, {
                orderId: order.order.id,
                transactionNo: payment.paymentID,
                currency: currency.code,
                status: payment.paid ? "SUCCESS" : "FAILED",
                method: "paypal"
            });
            router.push(`thankyou?orderId=${order.order.id}`);
        } catch (err) {
            toast.notify("Unable to place order please contact us!", {
                type: "error",
                title: "Order Failed"
            })
        }
    }

    return (
        <div className="dis_detail blockBorder" id="paymentMethods">
            <ToastContainer />
            <div>
                <h4 className="p0">Payment Method</h4>
            </div>
            <hr className="seperator" />
            <div className="center-block">
                <div className="row">
                    <div className="col-md-12 col-12">
                        {
                            allPaymentMethods.map((pm, index) => {
                                return (
                                    <div key={index} className="paymentMethod" onClick={() => setPaymentMethod(pm)}>
                                        <span className="radio-item">
                                            <input type="radio" onChange={() => setPaymentMethod(pm)} value={pm.name} checked={(paymentMethod && (paymentMethod.name === pm.name))} />
                                            <label>{pm.title}</label>
                                        </span>
                                    </div>
                                );
                            })
                        }
                        {
                            (paymentMethod && paymentMethod.name === "bank") &&
                            (<div className="payViaBank">
                                <p>You'll be redirected to payment page, where you can pay via credit/debit card</p>
                                <form name="payFormCcard" method="post" action={paymentMethod.url}>
                                    <input type="hidden" name="merchantId" value={paymentMethod.merchantId} />
                                    <input type="hidden" name="amount" value={(props.cartData.total * currency.value).toFixed(2)} />
                                    <input type="hidden" name="orderRef" value={props.cartData.id} />
                                    <input type="hidden" name="currCode" value={currency.code.toLowerCase() == "usd" ? "840" : "840"} />
                                    <input type="hidden" name="successUrl" value={`${process.env.WEB_URL}placeorder?cartId=${props.cartData.id}&currencyCode=${currency.code}`} />
                                    <input type="hidden" name="failUrl" value={`${process.env.WEB_URL}checkout`} />
                                    <input type="hidden" name="cancelUrl" value={`${process.env.WEB_URL}checkout`} />
                                    <input type="hidden" name="payType" value="N" />
                                    <input type="hidden" name="payMethod" value="ALL" />
                                    <input type="hidden" name="lang" value="E" />
                                    <input type="hidden" name="remark" value="-" />
                                    <input type="hidden" name="redirect" value="30" />
                                    <input type="submit" value="Pay Now" className="bag_bttn check_out_bttn" />
                                </form>
                            </div>)
                        }
                        {
                            (paymentMethod && paymentMethod.name === "paypal") && (<PaypalExpressBtn client={
                                paymentMethod.mode === "production" ? {
                                    production: paymentMethod.key
                                } : {
                                    sandbox: paymentMethod.key
                                }
                            } currency={currency.code} total={amountToPay} style={{
                                size: 'responsive',
                                color: 'gold',
                                shape: 'pill',
                                label: 'pay',
                                tagline: true,
                                fundingicons: true
                            }} onSuccess={onSuccess} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}