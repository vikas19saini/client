import Head from "next/head";
import Footer from "./footer";
import Header from "./header";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { formatAddress, formatCurrency } from "../components/helpers";
import { useDispatch } from "react-redux";

export default function About() {
    const router = useRouter();
    const orderId = router.query.orderId;
    const [order, setOrder] = useState(null);
    const dispatch = useDispatch();
    dispatch({ type: "CLEART_CART", payload: 0 });
    dispatch({ type: "SET_CART_DATA", payload: null });

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
                                    <h4>Order Placed</h4>
                                    <p>Your Gandhi order was placed successfully & will be delivered shortly!</p>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="dele_add">
                                                <h4>Order Details</h4>
                                                <p>Order Value: {order && formatCurrency(order.total, { code: order.currencyCode, value: order.currencyValue })}</p>
                                                <p>Shipping Method: {order && order.shippingMethod}</p>
                                                <p>Payment Method: {order && order.payments.length > 0 && order.payments[0].method}</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="dele_add">
                                                <h4>Delivery Address</h4>
                                                <p>{order && formatAddress(order.shippingAddress, true)}</p>
                                                {
                                                    order && order.shippingAddress.phone &&
                                                    <p>Phone: {order.shippingAddress.phone}</p>
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