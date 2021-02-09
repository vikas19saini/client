import Head from "next/head"
import { Fragment, useEffect, useState } from "react"
import Footer from "./footer"
import Header from "./header"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios";
import { formatAddress, stockStatus } from "./helpers"
import CheckoutSidebar from "../components/checkoutSide"
import AddressForm from "../components/customer/addressForm"
import PaymentMethod from "../components/paymentMethods";
import ShippingMethod from "../components/shippingMethods";
import { toast, ToastContainer } from 'react-nextjs-toast';

export default function Cart() {
    const [reload, setReload] = useState(1)
    const [cartProductDetails, setCartProductDetails] = useState([])
    const productsInCart = useSelector(state => state.config.cart ? state.config.cart : [])
    const [disableCheckout, setDisableCheckout] = useState(false)
    const [addNew, setAddNew] = useState(false);
    const [addresses, setAddresses] = useState([]);
    const [shippingAddress, setShippingAddress] = useState(false);
    const [shippingMethods, setShippingMethods] = useState([]);
    const [selectedShippingMethod, setSelectShippingMethod] = useState(null);
    const [amountTopay, setAmountToPay] = useState(0);
    const orderId = useSelector(state => state.config.order ? state.config.order : null);
    let currency = useSelector(state => state.config.currency);
    const dispatch = useDispatch();
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        axios.get(`${process.env.API_URL}address`).then(res => {
            setAddresses(res.data.rows)
        })
    }, [addNew, reload])

    const deleteAddress = (id) => {
        axios.delete(`${process.env.API_URL}address/${id}`).then(res => {
            setReload(reload + 1)
        })
    }

    useEffect(async () => {
        let cartData = []
        for (let ci of productsInCart) {
            let product = await axios.get(`${process.env.API_URL}products/${ci.slug}`)
            product = product.data
            product.cartQuantity = ci.quantity
            cartData = [...cartData, ...[product]]

            if (!stockStatus(product)) {
                setDisableCheckout(true)
            }
        }
        setCartProductDetails(cartData)
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
        if (document.getElementById("shippingMethods")) {
            document.getElementById("shippingMethods").scrollIntoView({
                behavior: "smooth"
            })
        }
        if (shippingAddress) {
            axios.get(`${process.env.API_URL}cart/calculateShipping/${shippingAddress.id}`).then((res) => {
                setShippingMethods(res.data);
            }).catch(err => {
                disableCheckout(true)
            })
        }
    }, [shippingAddress])

    const changeDeliveryAddress = () => {
        setShippingAddress(null);
        setShippingMethods([]);
        setSelectShippingMethod(null);

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }

    useEffect(() => {
        if (document.getElementById("paymentMethods")) {
            document.getElementById("paymentMethods").scrollIntoView({
                behavior: "smooth"
            })
        }
    }, [selectedShippingMethod]);

    useEffect(() => {
        if (amountTopay !== 0 && shippingAddress) {
            let request = {
                shippingAddressId: shippingAddress.id,
                currencyCode: currency.code,
                currencyValue: currency.value,
                shippingCharges: parseFloat(selectedShippingMethod ? selectedShippingMethod.cost.toFixed(2) : 0),
                shipingService: selectedShippingMethod ? selectedShippingMethod.serviceName : "",
                amount: parseFloat(amountTopay.toFixed(2)),
            }
            if (!orderId) {
                axios.post(`${process.env.API_URL}orders`, request).then((res) => {
                    dispatch({ type: "SET_ORDER", payload: res.data.order.id });
                    setIsError(false);
                }).catch(err => {
                    setIsError(true);
                    let msg = err.response.data.message ? err.response.data.message : "Something went wrong!";
                    toast.notify(msg, {
                        type: "error",
                        title: "Checkout!"
                    });
                });
            } else {
                axios.patch(`${process.env.API_URL}orders/${orderId}`, { ...request, ...{ action: "updateAllOrderData" } }).then((res) => {
                    setIsError(false);
                }).catch(err => {
                    setIsError(true);
                    let msg = err.response.data.message ? err.response.data.message : "Something went wrong!";
                    toast.notify(msg, {
                        type: "error",
                        title: "Checkout!"
                    });
                });
            }
        }
    }, [amountTopay]);

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
                                (shippingMethods.length > 0) && (<ShippingMethod shippingMethods={shippingMethods} selectedShippingMethodName={selectedShippingMethod && selectedShippingMethod.serviceName} setSelectShippingMethod={setSelectShippingMethod} />)
                            }

                            {
                                (selectedShippingMethod && !isError) && (<PaymentMethod amount={amountTopay} />)
                            }
                        </div>
                        <div className="col-lg-5 col-sm-12">
                            <CheckoutSidebar setAmountToPay={setAmountToPay} shippingCost={selectedShippingMethod && selectedShippingMethod.cost} disableCheckout={disableCheckout} cart={cartProductDetails} />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </Fragment>
    )
}