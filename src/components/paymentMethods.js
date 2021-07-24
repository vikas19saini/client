import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import axios from "axios";
import { toast, ToastContainer } from 'react-nextjs-toast';
import { useRouter } from 'next/router'
import { PayPalButton } from "react-paypal-button-v2";

export default function PaymentMethod() {
    let currency = useSelector(state => state.config.currency);
    const [paymentMethod, setPaymentMethod] = useState(null);
    const [allPaymentMethods, setAllPaymentMethods] = useState([]);
    const router = useRouter();
    const cartData = useSelector(state => state.config.cartData);
    const amountToPay = parseFloat((cartData.total * currency.value).toFixed(2))

    useEffect(() => {
        setPaymentMethod(null);
    }, [currency])

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
            let order = await axios.post(`${process.env.API_URL}orders`, { cartId: cartData.id, currency: currency.code, paymentMethod: "paypal" });
            order = order.data;
            await axios.post(`${process.env.API_URL}orders/payment`, {
                orderId: order.order.id,
                transactionNo: payment.id,
                currency: currency.code,
                status: payment.status ? payment.status : "FAILED",
                method: "paypal",
                additionalLinks: JSON.stringify({
                    payer: payment.payer.email_address,
                    payerId: payment.payer.payer_id
                })
            });
            router.push(`thankyou?orderId=${order.order.id}`);
        } catch (err) {
            toast.notify("Unable to place order please contact us!", {
                type: "error",
                title: "Order Failed"
            });
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
                        <PaymentOptions paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} paymentOptions={allPaymentMethods} />
                        {
                            (paymentMethod && paymentMethod.name === "bank") &&
                            (<div className="payViaBank">
                                <p>You'll be redirected to payment page, where you can pay via credit/debit card</p>
                                <form name="payFormCcard" method="post" action={paymentMethod.url}>
                                    <input type="hidden" name="merchantId" value={paymentMethod.merchantId} />
                                    <input type="hidden" name="amount" value={(cartData.total * currency.value).toFixed(2)} />
                                    <input type="hidden" name="orderRef" value={cartData.id} />
                                    <input type="hidden" name="currCode" value={paymentMethod.currencyCode} />
                                    <input type="hidden" name="successUrl" value={`${process.env.WEB_URL}placeorder?cartId=${cartData.id}&currencyCode=${currency.code}`} />
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
                            (paymentMethod && paymentMethod.name === "paypal") && (<PayPalButton options={{
                                clientId: paymentMethod.key
                            }}
                                currency={currency.code} amount={amountToPay} env={paymentMethod.mode} style={{
                                    hight: 25,
                                    color: 'gold',
                                    shape: 'rect',
                                    label: 'pay',
                                    fundingicons: true,
                                    tagline: false
                                }} onSuccess={onSuccess} onError={() => {
                                    toast.notify("Payment failed!", {
                                        type: "error",
                                        title: "Order Failed"
                                    });
                                }} catchError={() => {
                                    toast.notify("Payment failed!", {
                                        type: "error",
                                        title: "Order Failed"
                                    });
                                }} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

function PaymentOptions({ paymentOptions, setPaymentMethod, paymentMethod }) {
    let currency = useSelector(state => state.config.currency);

    let isOptionAvail = false;
    for (let pm of paymentOptions) {
        if (pm.currencies.includes(currency.code.toLowerCase())) {
            isOptionAvail = true;
        }
    }

    if (!isOptionAvail) return (<p className="deliveryErr"><u>We are sorry!</u> We are currently not accepting payments in (<strong>{currency.code.toUpperCase()}</strong>) currency. Please choose another currency to continue checkout. </p>);

    return paymentOptions.map((pm, index) => {
        if (pm.currencies.includes(currency.code.toLowerCase())) {
            return (
                <div key={index} className="paymentMethod" onClick={() => setPaymentMethod(pm)}>
                    <span className="radio-item" style={{ display: "flex", alignItems: "center" }}>
                        <span className={(paymentMethod && (paymentMethod.name === pm.name)) ? "outerDot active" : "outerDot"}>
                            <span className={(paymentMethod && (paymentMethod.name === pm.name)) ? "innerDot active" : "innerDot"}></span>
                        </span>
                        <label style={{ cursor: "pointer" }}>{pm.title}</label>
                    </span>
                </div>
            );
        }
    });

}