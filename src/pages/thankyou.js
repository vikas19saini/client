import Head from "next/head";
import Footer from "./footer";
import Header from "./header";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

export default function About() {
    const router = useRouter();
    const orderId = router.query.orderId;
    const [order, setOrder] = useState(null);
    
    useEffect(() => {
        if (orderId)
            axios.get(`${process.env.API_URL}orders/${orderId}`)
                .then((res) => {
                    setOrder(res.data);
                });

    }, [orderId])

    return (
        <>
            <Head>
                <title>Order Placed - Gandhi</title>
            </Head>
            <Header shadow />
            <section class="inner_product">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="mrg_12 mrg_desk wow fadeInUp">
                                        <div class="or_placed">
                                            <div class="check_img"><img src="/images/place_img.png" /></div>
                                            <div class="check_dis">
                                                <h4>Order Placed</h4>
                                                <p>Your order was placed successfully and will be delivered by <strong>19 Apr,
                                    19.</strong></p>
                                                <h6 class="mob_view">Track Order</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="mrg_12">
                                <div class="main_inner_check main_placed wow fadeInUp">
                                    <div class="check_img"><img src="/images/placed_img.png" /></div>
                                    <div class="check_dis">
                                        <p><strong>Multi colour cotton knit - 7239995</strong></p>
                                        <p>Qnty: 1</p>
                                        <p>Price: USD 4499.00</p>
                                        <p>Expected Delivery: 16 Sep, 19</p>
                                    </div>
                                    <div class="right_icon desk_view">
                                        <p>Track Order</p>
                                    </div>
                                    <div class="right_content_1 desk_view">
                                        <p>View order details</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="dele_add wow fadeInUp">
                                        <h4>Delivery Address</h4>
                                        <p>Mathi <span>7th Main Rd, Old Madiwala, Cashier Layout, 1st</span> Stage, BTM Layout,
                           Bengaluru, Karnataka 560029</p>
                                        <p>Phone: 9876543210</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}