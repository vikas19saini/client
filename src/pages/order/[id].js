import Head from "next/head";
import Footer from "../footer";
import Header from "../header";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import { formatCurrency, useCart } from "../../components/helpers";
import { useSelector } from "react-redux";
import axios from "axios";

export default function ValidatePayment() {
    const router = useRouter();
    const id = router.query.id;
    const { customerCartData } = useCart()
    let currency = useSelector(state => state.config.currency);
    const [color, setColor] = useState("bg-info");

    useEffect(() => {
        if (id) {
            validatePaymentHandler()
        }
    }, [id]);

    const validatePaymentHandler = async () => {
        try {
            let paymentResponse = await axios.post(`${process.env.API_URL}payments/validate`, {
                cartId: parseInt(id)
            });

            if (paymentResponse.data.respCode !== "0000") throw new Error("Payment Declined!");

            let order = await axios.post(`${process.env.API_URL}orders`, { cartId: id, currency: currency.code, paymentMethod: "2c2p" });
            order = order.data;

            await axios.post(`${process.env.API_URL}orders/payment`, {
                orderId: order.order.id,
                transactionNo: paymentResponse.data.referenceNo,
                currency: currency.code,
                status: paymentResponse.data.respDesc || "FAILED",
                method: "2c2p",
                additionalLinks: JSON.stringify(paymentResponse.data)
            });

            setColor("bg-success")
            router.push(`/thankyou?orderId=${order.order.id}`);
        } catch (err) {
            console.log(err)
            setColor("bg-warning")
        }
    }

    return (
        <Fragment>
            <Head>
                <title>Order Placed - Gandhi</title>
            </Head>
            <Header shadow />
            <div className="mobile_hidden_vissible">
                <div className="card w-50 paymentConf" style={{ margin: "50px auto" }}>
                    <h5 className={`card-header ${color}`} style={{
                        display: "flex",
                        alignItems: "center"
                    }}><div className="spinner-grow text-white mr-3" role="status" /> Processing Payment</h5>
                    <div className="card-body">
                        <h6 className="card-title">Please wait! We are processing your payment details.</h6>
                        <p className="card-text">Aftre payment confirmation you will received an email at your registered email address.</p>
                        <p className="card-text">Your order details as below:</p>
                        <hr />
                        <p className="card-text m-1"><strong>Order Value :</strong> {customerCartData && formatCurrency(customerCartData.total, { code: currency.code, value: currency.value })}</p>
                        <p className="card-text m-1"><strong>Shiping Method :</strong> {customerCartData && customerCartData.shippingMethod}</p>
                        <p className="card-text m-1"><strong>Address :</strong> {customerCartData && customerCartData.address.completeAddress}</p>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
}