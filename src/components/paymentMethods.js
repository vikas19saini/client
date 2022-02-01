import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from 'react-nextjs-toast';
import { useRouter } from 'next/router'
import { PayPalButton } from "react-paypal-button-v2";
import ClipLoader from "react-spinners/ClipLoader";
import useTranslation from "next-translate/useTranslation";

export default function PaymentMethod() {
    let currency = useSelector(state => state.config.currency);
    const [paymentMethod, setPaymentMethod] = useState(null);
    const [allPaymentMethods, setAllPaymentMethods] = useState([]);
    const router = useRouter();
    const cartData = useSelector(state => state.config.cartData);
    const amountToPay = parseFloat((cartData.total * currency.value).toFixed(2))
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setPaymentMethod(null);
    }, [currency])

    useEffect(() => {
        if (paymentMethod && paymentMethod.name === "2c2p") {
            setLoading(true);
            axios.post(`${process.env.API_URL}payments/paymentToken`, {
                cartId: cartData.id,
                currencyId: currency.id
            }).then((res) => {
                if (res.data && res.data.webPaymentUrl) {
                    router.push(res.data.webPaymentUrl)
                }
                setLoading(false)
            });
        }

    }, [paymentMethod]);

    useEffect(() => {
        axios.get(`${process.env.API_URL}payments/config`).then((res) => {
            setAllPaymentMethods(res.data);
            setLoading(false)
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
            router.push(`/thankyou?orderId=${order.order.id}`);
        } catch (err) {
            toast.notify("Unable to place order please contact us!", {
                type: "error",
                title: "Order Failed"
            });
        }
    }

    return (
        <div className="dis_detail blockBorder p-0" id="paymentMethods">
            <div className="center-block">
                <div className="row">
                    <div className="col-md-12 col-12">
                        <ClipLoader color="#417505" css={{
                            display: "block",
                            margin: "0 auto",
                            position: "absolute",
                            top: "50%",
                            right: "50%"
                        }} loading={loading} />
                        <PaymentOptions paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} paymentOptions={allPaymentMethods} />

                        {
                            (paymentMethod && paymentMethod.name === "paypal") && (<PayPalButton options={{
                                clientId: paymentMethod.key,
                                currency: currency.code
                            }}
                                currency={currency.code} amount={amountToPay} env={paymentMethod.mode} style={{
                                    hight: 25,
                                    color: 'gold',
                                    shape: 'rect',
                                    label: 'pay',
                                    fundingicons: true,
                                    tagline: false,
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

    /* let isOptionAvail = false;
    for (let pm of paymentOptions) {
        if (pm.currencies.includes(currency.code.toLowerCase())) {
            isOptionAvail = true;
        }
    } */

    /* if (!isOptionAvail) return (<p className="deliveryErr"><u>We are sorry!</u> We are currently not accepting payments in (<strong>{currency.code.toUpperCase()}</strong>) currency. Please choose another currency to continue checkout. </p>); */

    const { t } = useTranslation()

    return paymentOptions.map((pm, index) => {
        if (pm.currencies.includes(currency.code.toLowerCase())) {
            return (
                <div key={index} className="paymentMethod m-1" onClick={() => setPaymentMethod(pm)}>
                    <div className="radio-item" style={{ display: "flex", alignItems: "center" }}>
                        <div className={(paymentMethod && (paymentMethod.name === pm.name)) ? "outerDot active" : "outerDot"}>
                            <div className={(paymentMethod && (paymentMethod.name === pm.name)) ? "innerDot active" : "innerDot"}></div>
                        </div>

                        <label style={{ cursor: "pointer" }}>
                            {pm.name === "paypal" && t("cart:paypal")}
                            {pm.name === "2c2p" && t("cart:card")}
                        </label>
                    </div>
                    <p className="small mt-3" style={{ textTransform: "none" }}>
                        {pm.name === "paypal" && t("cart:paypal_description")}
                        {pm.name === "2c2p" && t("cart:card_description")}
                    </p>
                </div>
            );
        }
    });

}