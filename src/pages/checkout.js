import Head from "next/head"
import { Fragment, useEffect, useState } from "react"
import Footer from "./footer"
import Header from "./header"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios";
import { formatAddress } from "./helpers"
import CheckoutSidebar from "../components/checkoutSide"
import AddressForm from "../components/customer/addressForm"
import PaymentMethod from "../components/paymentMethods";
import { ToastContainer } from 'react-nextjs-toast';
import { useRouter } from "next/router"

export default function Cart() {
    const [reload, setReload] = useState(1)
    const [addNew, setAddNew] = useState(false);
    const [addresses, setAddresses] = useState([]);
    const [shippingAddress, setShippingAddress] = useState(false);
    const dispatch = useDispatch();
    const [showPaymentMethods, setShowPaymentMethods] = useState(false);
    const cartId = useSelector(state => state.config.cartId ? state.config.cartId : null);
    const router = useRouter();
    const [cartData, setCartData] = useState(null);

    if (!cartId) {
        router.push("/cart");
    }

    useEffect(() => {
        axios.get(`${process.env.API_URL}address`).then(res => {
            setAddresses(res.data.rows)
        })
    }, [addNew, reload]);

    const deleteAddress = (id) => {
        axios.delete(`${process.env.API_URL}address/${id}`).then(res => {
            setReload(reload + 1)
        })
    }

    useEffect(async () => {
        await axios.get(`${process.env.API_URL}cart/${cartId}`).then((res) => {
            setCartData(res.data);

            if (res.data.status === 2)
                showPaymentMethods(false)

            dispatch({ type: "SET_CART_ITEMS", payload: res.data.products.length });
        });
    }, [reload])

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
        if (shippingAddress)
            axios.post(`${process.env.API_URL}cart/calculateShipping`, { cartId: cartId, addressId: shippingAddress.id }).then((res) => {
                setShowPaymentMethods(true);
                setReload((new Date()).getTime());
            }).catch(err => {
                setShowPaymentMethods(false);
            });
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

    return (
        <Fragment>
            <Head>
                <title>Checkout</title>
            </Head>
            <Header shadow />
            <ToastContainer />
            <section className="inner_product con_tp">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-sm-12">

                            {
                                shippingAddress ? (
                                    <div className="dis_detail selectedAdd">
                                        <div>
                                            <h4>Delivery Address</h4>
                                            <p><span>{shippingAddress.name}</span> {formatAddress(shippingAddress)}</p>
                                            <h5>Contact No: {shippingAddress.phone}</h5>
                                        </div>
                                        <div>
                                            <button className="changeAddressBtn" onClick={changeDeliveryAddress}>Change</button>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="dis_detail wow fadeInUp">
                                        <h4>Select delivery address</h4>
                                    </div>
                                )
                            }

                            {
                                (!addNew && !shippingAddress) && (
                                    <Fragment>
                                        {
                                            addresses.map((add) => {
                                                return (
                                                    <div title="Click to select address" className={(shippingAddress === add.id) ? "check_add_3 checkout selected" : "check_add_3 checkout"} key={add.id}>
                                                        {
                                                            (add.isDefault === 1) && <div className="defaultAddress" title="Default address" />
                                                        }
                                                        <div onClick={() => setCustomerDeliveryAddress(add)}>
                                                            <p><span>{add.name}</span> {formatAddress(add)}</p>
                                                            <p><span>Phone: {add.phone}</span></p>
                                                        </div>
                                                        <div className="check_main_3">
                                                            <div className="pull-left">
                                                                <button className="smalBtn">Edit</button>
                                                            </div>
                                                            <div className="pull-right">
                                                                <button className="smalBtn" onClick={() => deleteAddress(add.id)}>Delete</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })
                                        }
                                        <div className="row" style={{ textAlign: "center", width: "100%" }}>
                                            <div className="col-lg-12 col-sm-12" >
                                                <button type="button" className="addAddressButton" onClick={() => setAddNew(true)}>Add an address</button>
                                            </div>
                                        </div>
                                    </Fragment>
                                )
                            }

                            {
                                addNew && (<AddressForm setAddNew={setAddNew} />)
                            }

                            {
                                showPaymentMethods && (<PaymentMethod cartData={cartData} />)
                            }
                        </div>
                        <div className="col-lg-5 col-sm-12">
                            {cartData && <CheckoutSidebar setReload={setReload} cartData={cartData} />}
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </Fragment>
    )
}