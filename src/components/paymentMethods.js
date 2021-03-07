import { useEffect, useState } from "react"
import PaypalExpressBtn from 'react-paypal-express-checkout';
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

export default function PaymentMethod(props) {
    let currency = useSelector(state => state.config.currency);
    const orderId = useSelector(state => state.config.order ? state.config.order : null);
    const [paymentMethod, setPaymentMethod] = useState(null);
    const amountToPay = parseFloat((props.amount * currency.value).toFixed(2));
    const [allPaymentMethods, setAllPaymentMethods] = useState([]);

    useEffect(() => {
        if (paymentMethod === "bank" && document.getElementById("cardForm")) {
            document.getElementById("cardForm").scrollIntoView({
                behavior: "smooth"
            })
        }

        /* setTimeout(() => {
            setPaymentMethod(null);
        }, 10000) */
    }, [paymentMethod]);

    useEffect(() => {
        axios.get(`${process.env.API_URL}payments/config`).then((res) => {
            setAllPaymentMethods(res.data);
        });
    }, [])

    const onSuccess = (payment) => {
        axios.patch(`${process.env.API_URL}orders/${orderId}`, {status: 1}).then((res) => {
            console.log(res);
        })
    }

    return (
        <div className="dis_detail blockBorder" id="paymentMethods">
            <div>
                <h4 className="p0">Payment Method</h4>
            </div>
            <hr className="seperator" />
            <div className="center-block">
                <div className="row">
                    <div className="col-md-12 col-12">
                        {
                            allPaymentMethods.map((pm) => {
                                return (
                                    <div className="paymentMethod" onClick={() => setPaymentMethod(pm)}>
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
                                    <input type="hidden" name="amount" value={amountToPay} />
                                    <input type="hidden" name="orderRef" value={orderId} />
                                    <input type="hidden" name="currCode" value="840" />
                                    <input type="hidden" name="successUrl" value="http://localhost:3005/checkout" />
                                    <input type="hidden" name="failUrl" value="http://localhost:3005/checkout" />
                                    <input type="hidden" name="cancelUrl" value="http://localhost:3005/checkout" />
                                    <input type="hidden" name="payType" value="N" />
                                    <input type="hidden" name="payMethod" value="ALL" />
                                    <input type="hidden" name="lang" value="E" />
                                    <input type="hidden" name="remark" value="-" />
                                    <input type="hidden" name="redirect" value="30" />
                                    <input type="submit" />
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