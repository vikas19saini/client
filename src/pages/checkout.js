import Head from "next/head"
import { Fragment, useEffect, useState } from "react"
import Footer from "./footer"
import Header from "./header"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios";
import { formatAddress, useCart, withAuth } from "../components/helpers"
import CheckoutSidebar from "../components/checkoutSide"
import AddressForm from "../components/customer/addressForm"
import PaymentMethod from "../components/paymentMethods";
import { ToastContainer } from 'react-nextjs-toast';
import BlockUi from "react-block-ui"
import { useRouter } from "next/router"

function Checkout() {
    const [reload, setReload] = useState(1)
    const [addNew, setAddNew] = useState(false);
    const [addresses, setAddresses] = useState([]);
    const [shippingAddress, setShippingAddress] = useState(false);
    const [showPaymentMethods, setShowPaymentMethods] = useState(false);
    const [shippingNotAvailable, setShippingNotAvailable] = useState(false);
    const [isUpdating, setIsUpdating] = useState(false);
    const { disableCheckout, cartId } = useCart();
    const router = useRouter();

    useEffect(() => {
        setIsUpdating(true);
        axios.get(`${process.env.API_URL}address`).then(res => {
            setAddresses(res.data.rows)
            setIsUpdating(false);
        }).catch(err => {
            setIsUpdating(false);
        })
    }, [addNew, reload]);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }, [addNew])

    const setCustomerDeliveryAddress = (add) => {
        setShippingAddress(add);
    }

    useEffect(() => {
        if (shippingAddress) {
            setIsUpdating(true);
            axios.post(`${process.env.API_URL}cart/calculateShipping`, { cartId: cartId, addressId: shippingAddress.id }).then((res) => {
                setShowPaymentMethods(true);
                setReload((new Date()).getTime());
                setShippingNotAvailable(false);
                setIsUpdating(false);
            }).catch(err => {
                setShippingNotAvailable(true);
                setShowPaymentMethods(false);
                setIsUpdating(false);
            });
        }
    }, [shippingAddress])

    useEffect(() => {
        if (document.getElementById("paymentMethods")) {
            document.getElementById("paymentMethods").scrollIntoView({
                behavior: "smooth"
            })
        }
    }, [showPaymentMethods]);

    const changeDeliveryAddress = () => {
        setShippingAddress(null);
        setShowPaymentMethods(false);
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }

    if (disableCheckout) {
        return (
            <Fragment>
                <Head>
                    <title>Cart Details</title>
                </Head>
                <Header shadow />
                <div className="mobile_hidden_vissible" id="cartProducts">
                    <section className="empty-cart">
                        <div className="empty-cart_main">
                            <h2>Some item in your cart is out of stock.</h2>
                            <button className="checkoutBtn" onClick={() => router.push("/cart")}>Go to cart</button>
                        </div>
                    </section>
                </div>
            </Fragment>
        )
    }

    return (
        <Fragment>
            <Head>
                <title>Checkout - Gandhi Fabrics</title>
            </Head>
            <Header shadow />
            <ToastContainer />
            <BlockUi blocking={isUpdating}>
                <section className="inner_product product_info" style={{ background: "#f6f7f7" }}>
                    <div className="container">
                        <div className="row rm" style={{ marginRight: "0px" }}>

                            <div className="checkoutInfo">
                                <div className="alert alert-info">
                                    <p>Due to the current lockdown situation May cause the delivery of goods to be delayed 7-10 days.</p>
                                    <p>เนื่องจากสถานการณ์ล็อกดาวน์ในปัจจุบัน อาจจะทำให้การขนส่งสินค้าเกิดความล่าช้า 7-10 วัน</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-7 col-sm-12">
                                {
                                    shippingAddress && (
                                        <div className="dis_detail selectedAdd cartProduct">
                                            <div>
                                                <h4>Delivery Address</h4>
                                                <p><span>{shippingAddress.name}</span> {formatAddress(shippingAddress)}</p>
                                                <h5>Contact No: {shippingAddress.phone}</h5>
                                                <button className="checkoutBtn" style={{ margin: "0px" }} onClick={changeDeliveryAddress}>Change address</button>
                                                {
                                                    shippingNotAvailable && (
                                                        <p className="deliveryErr">Delivery is not available at your selected location please choose a different delivery location or contact us for more details.</p>
                                                    )
                                                }
                                            </div>
                                        </div>
                                    )
                                }

                                {
                                    (!addNew && !shippingAddress) && (
                                        <div className="row">
                                            <div className="col-md-12 col-sm-12 addressOne cartProduct" style={{ padding: "15px 10px" }}>
                                                <h4>Select delivery address</h4>
                                            </div>
                                            {
                                                addresses.map((add) => {
                                                    return (
                                                        <div className="col-md-12 col-sm-12 addressOne cartProduct" key={add.id}>
                                                            <div className={(shippingAddress === add.id) ? "check_add_3 checkout selected" : "check_add_3 checkout"}>
                                                                {
                                                                    (add.isDefault === 1) && <div className="defaultAddress" title="Default address" />
                                                                }
                                                                <div>
                                                                    <p><span>{add.name}</span> {formatAddress(add)}</p>
                                                                    <p><span>Phone: {add.phone}</span></p>
                                                                    <button title="Click to select address" className="checkoutBtn" type="button" onClick={() => setCustomerDeliveryAddress(add)}>Deliver Here</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    );
                                                })
                                            }
                                            <button type="button" className="addAddressButton cartProduct" onClick={() => setAddNew(true)} style={{ width: "100%", background: "#fff" }}>Add New Address</button>
                                        </div>
                                    )
                                }

                                {
                                    addNew && (<AddressForm setAddNew={setAddNew} />)
                                }

                                {
                                    showPaymentMethods && (<PaymentMethod cartId={cartId} />)
                                }
                            </div>
                            <div className="col-lg-5 col-sm-12 nopadding">
                                <CheckoutSidebar setReload={setReload} hideCheckoutBtn />
                            </div>
                        </div>
                    </div>
                </section>
            </BlockUi>
            <br />
            <Footer />
        </Fragment>
    )
}

export default withAuth(Checkout);