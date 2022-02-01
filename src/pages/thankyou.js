import Head from "next/head";
import Footer from "./footer";
import Header from "./header";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { formatAddress, formatCurrency } from "../components/helpers";
import { useDispatch } from "react-redux";
import useTranslation from "next-translate/useTranslation"

export default function ThankYou() {
    const router = useRouter();
    const orderId = router.query.orderId;
    const [order, setOrder] = useState(null);
    const dispatch = useDispatch();
    dispatch({ type: "CLEART_CART", payload: 0 });
    dispatch({ type: "SET_CART_DATA", payload: null });

    const { t } = useTranslation()

    useEffect(() => {
        window.scrollTo(0, 0);
        if (orderId)
            axios.get(`${process.env.API_URL}orders/${orderId}`)
                .then((res) => {
                    setOrder(res.data);
                });

    }, [orderId]);

    return (
        <Fragment>
            <Head>
                <title>Order Placed - Gandhi</title>
            </Head>
            <Header shadow />
            <section style={{ marginTop: "20px", marginBottom: "20px" }}>
                <div style={{ width: "100%" }}>
                    <div className="row" style={{ margin: "0px" }}>
                        <div className="col-md-12">
                            <div className="mrg_desk">
                                <div className="or_placed" style={{ marginTop: "0px" }}>
                                    <img src="/images/place_img.png" style={{ marginBottom: "20px" }} />
                                    <h4>{t("cart:order_placed")}</h4>
                                    <p>{t("cart:success_message")}</p>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="dele_add">
                                                <h4>{t("cart:order_details")}</h4>
                                                <p>{t("cart:order_value")}: {order && formatCurrency(order.total, { code: order.currencyCode, value: order.currencyValue })}</p>
                                                <p>{t("cart:shipping_method")}: {order && order.shippingMethod}</p>
                                                <p>{t("cart:payment_method")}: {order && order.payments.length > 0 && order.payments[0].method}</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="dele_add">
                                                <h4>{t("cart:shipping_address")}</h4>
                                                <p>{order && formatAddress(order.shippingAddress, true)}</p>
                                                {
                                                    order && order.shippingAddress.phone &&
                                                    <p>{t("cart:contact_no")}: {order.shippingAddress.phone}</p>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">

                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </Fragment>
    );
}