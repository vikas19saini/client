import Head from "next/head";
import Footer from "./footer";
import Header from "./header";
import { useRouter } from "next/router";
import { useEffect } from "react";
import axios from "axios";

export default function About() {
    const router = useRouter();
    
    useEffect(async () => {
        if (router.query.cartId) {
            try {
                let order = await axios.post(`${process.env.API_URL}orders`, { cartId: router.query.cartId, currency: router.query.currencyCode, paymentMethod: "Bangkokbank" });
                order = order.data;
                await axios.post(`${process.env.API_URL}orders/payment`, {
                    orderId: order.order.id,
                    transactionNo: "BANKOKBANKDUMMY",
                    currency: router.query.currencyCode,
                    status: "SUCCESS",
                    method: "Bangkokbank"
                });
                router.push(`thankyou?orderId=${order.order.id}`);
            } catch (err) {
                router.push(`cart`);
            }
        }
    }, [router]);

    return (
        <>
            <Head>
                <title>Order Placed - Gandhi</title>
            </Head>
            <Header shadow />
            <section style={{ marginTop: "20px", marginBottom: "20px" }}>
                <div className="mobile_hidden_vissible" id="cartProducts">
                    <section className="empty-cart">
                        <div className="empty-cart_main">
                            <div className="loader" />
                            <br />
                            <h2>Please Wait!</h2>
                            <p style={{ marginBottom: "0px" }}>Saving your order details please don't close or press back button!</p>
                            <p> If you are facing any issue please contact us!</p>
                        </div>
                    </section>
                </div>
            </section>
            <Footer />
        </>
    );
}