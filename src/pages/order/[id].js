import Head from "next/head";
import Footer from "../footer";
import Header from "../header";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { formatCurrency, useCart } from "../../components/helpers";
import { useSelector } from "react-redux";

export default function About() {
    const router = useRouter();
    const { customerCartData } = useCart()
    let currency = useSelector(state => state.config.currency);



    return (
        <Fragment>
            <Head>
                <title>Order Placed - Gandhi</title>
            </Head>
            <Header shadow />
            <div className="mobile_hidden_vissible">
                <div className="card w-50" style={{ margin: "50px auto" }}>
                    <h5 className="card-header" style={{
                        display: "flex",
                        alignItems: "center"
                    }}><div class="spinner-grow text-primary mr-3" role="status" /> Processing Payment</h5>
                    <div className="card-body">
                        <h6 className="card-title">Please wait! We are processing your payment details.</h6>
                        <p className="card-text">Aftre payment confirmation you will received an email at your registered email address.</p>
                        <p className="card-text">Your order details as below:</p>
                        <hr />
                        <p className="card-text m-1">Order Value : {customerCartData && formatCurrency(customerCartData.total, { code: currency.code, value: currency.value })}</p>
                        <p className="card-text m-1">Shiping Method : {customerCartData && customerCartData.shippingMethod}</p>
                        <p className="card-text m-1">Address : {customerCartData && customerCartData.address.completeAddress}</p>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
}