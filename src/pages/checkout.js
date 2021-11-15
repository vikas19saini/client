import Head from "next/head"
import { Fragment, useEffect, useState } from "react"
import Header from "./header"
import axios from "axios";
import { formatAddress, useCart } from "../components/helpers"
import CheckoutSidebar from "../components/checkoutSide"
import PaymentMethod from "../components/paymentMethods";
import { useRouter } from "next/router"
import { useSelector } from "react-redux";
import Link from "next/link";
import { toast, ToastContainer } from 'react-nextjs-toast';
import { useDispatch } from "react-redux"

function Checkout() {
    const [reload, setReload] = useState(1)
    const { disableCheckout, cartId, calcShiping, customerCartData } = useCart();
    const router = useRouter();
    const isLoggedIn = useSelector(state => state.config.auth ? state.config.auth : false);
    const [isLoading, setIsLoading] = useState(false);
    const [storePickup, setStorePickup] = useState(false);

    useEffect(() => {
        if (customerCartData && customerCartData.shippingMethod && customerCartData.shippingMethod === "Store_Pickup") {
            setStorePickup(true)
        } else {
            setStorePickup(false)
        }
    }, [customerCartData])

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
            <ToastContainer />
            <div style={{ background: "#fafafa" }}>
                <div className="checkoutPage">
                    <div style={{ minHeight: "100vh" }} className="row m-0">
                        <div className="col-md-5 order-md-2 p-0 pl-md-5">
                            <div className="pr-md-5 mt-md-5">
                                <div className="py-2 text-center d-block d-md-none border-bottom" style={{ background: "#fafafa" }}>
                                    <div className="row m-0 mt-2" style={{ alignItems: "center" }}>
                                        <div className="col">
                                            <Link href="/cart">
                                                <a style={{ color: "inherit" }} className="btn btn-outline-secondary pull-left">
                                                    <i className="fa fa-chevron-left" /> Cart
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="col">
                                            <a href="/">
                                                <img className="d-block mx-auto mb-2 pull-right" src="/images/logo.png" alt="gandhi" height="50" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="checkoutInfo mt-0 mt-1">
                                    <div className="alert alert-warning">
                                        <p>Due to the current lockdown situation, please expect a delay of 7-10 days in the delivery times for your orders.</p>
                                        <p>เนื่องจากสถานการณ์ล็อกดาวน์ในปัจจุบัน อาจจะทำให้การขนส่งสินค้าเกิดความล่าช้า 7-10 วัน</p>
                                    </div>
                                </div>
                                <div className="pr-md-5 mt-md-5">
                                    <CheckoutSidebar storePickup={storePickup} setReload={setReload} hideCheckoutBtn isCheckoutPage />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 order-md-1 pr-md-5 p-0" style={{ background: "#fff" }}>
                            <div className="pl-md-5">
                                <div className="pl-md-5">
                                    <div className="py-4 text-center d-none d-md-block mb-5 border-bottom" style={{ background: "#fafafa" }}>
                                        <div className="row m-0 mt-2" style={{ alignItems: "center" }}>
                                            <div className="col">
                                                <Link href="/cart">
                                                    <a style={{ color: "inherit" }} className="btn btn-outline-secondary pull-left">
                                                        <i className="fa fa-chevron-left" /> Cart
                                                    </a>
                                                </Link>
                                            </div>
                                            <div className="col">
                                                <a href="/">
                                                    <img className="d-block mx-auto mb-2 pull-right" src="/images/logo.png" alt="gandhi" height="50" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    {
                                        isLoggedIn &&
                                        <CustomerAddresses storePickup={storePickup} setStorePickup={setStorePickup} cartId={cartId} customerCartData={customerCartData} setReload={setReload} calcShiping={calcShiping} setIsLoading={setIsLoading} />
                                    }
                                    {
                                        !isLoggedIn && <ShippingAddress calcShiping={calcShiping} setReload={setReload} cartId={cartId} />
                                    }
                                    <div className="mt-5 border-top">
                                        <ul className="mt-2" style={{ listStyle: "none", fontSize: "12px", textAlign: "center" }}>
                                            <li style={{ display: "inline-block" }} className="m-2 text-capitalize font-weight-light text-muted">
                                                <Link href="/about"><a target="_blank" className="text-muted">About Us</a></Link>
                                            </li>
                                            <li style={{ display: "inline-block" }} className="m-2 text-capitalize font-weight-light text-muted">
                                                <Link href="/privacy"><a target="_blank" className="text-muted">Privacy Policy</a></Link>
                                            </li>
                                            <li style={{ display: "inline-block" }} className="m-2 text-capitalize font-weight-light text-muted">
                                                <Link href="/toc"><a target="_blank" className="text-muted">Terms & Conditions</a></Link>
                                            </li>
                                            <li style={{ display: "inline-block" }} className="m-2 text-capitalize font-weight-light">
                                                <Link href="/contact"><a target="_blank" className="text-muted">Contact</a></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

function CustomerAddresses({
    setReload,
    setIsLoading,
    calcShiping,
    customerCartData,
    cartId,
    storePickup,
    setStorePickup
}) {

    const [addresses, setAddresses] = useState([]);
    const [calculatinShipping, setCalcShipping] = useState(false);
    const [changeAddress, setChangeAddress] = useState(false);
    const [showAddresses, setShowAddresses] = useState(false);
    const [showPaymentMethod, setShowPaymentMethod] = useState(false);
    const [addedAddress, setAddedAddress] = useState(1);

    useEffect(() => {

        if (customerCartData && !customerCartData.address) {
            setShowAddresses(true);
        } else {
            setShowAddresses(false);
        }

        if (customerCartData && customerCartData.address && ((customerCartData.shippingCost > 0) || storePickup)) {
            setShowPaymentMethod(true);
        } else {
            setShowPaymentMethod(false);
        }

    }, [customerCartData]);

    useEffect(() => {
        if (showAddresses || changeAddress) {
            setIsLoading(true);
            axios.get(`${process.env.API_URL}address`).then(res => {
                setAddresses(res.data.rows)
                setIsLoading(false);
            }).catch(err => {
                setIsLoading(false);
            })
        }
    }, [changeAddress, showAddresses, addedAddress]);

    const calcShippingCost = (shippingAddress) => {
        setCalcShipping(shippingAddress.id);
        setShowPaymentMethod(false);
        calcShiping(shippingAddress.id, storePickup).then((d) => {
            setCalcShipping(false);
            setReload(new Date().getTime());
            setChangeAddress(false);
            setShowPaymentMethod(true);
        }).catch(err => {
            setCalcShipping(false);
            setChangeAddress(false);
            setShowPaymentMethod(false);
            toast.notify("Delivery not available at this location.", {
                type: "error",
                title: "Shippment!"
            });
        });
    }

    return (
        <div className="row m-0">
            {
                (showAddresses || changeAddress) &&
                <Fragment>
                    <div className="col-md-12 col-sm-12 col-xs-12 p-0">
                        <div className="card p-3 mb-2 mt-2">
                            <div className="custom-control custom-switch">
                                <input type="checkbox" className="custom-control-input" defaultChecked={storePickup} id="customSwitch1" />
                                <label onClick={() => setStorePickup(!storePickup)} className="custom-control-label" htmlFor="customSwitch1">Want to pick my order from store</label>
                            </div>
                            <p className="mt-2 text-muted"><small><b>Gandhi 1944</b>, 326 Phahurat Road, Bangkok 10200, Thailand T+66 (0) 2225 5997, +66 (0) 2225 5503 H 08:45 - 18:00 (Mon-Sun)</small></p>
                        </div>
                        <div className="card p-3 mb-2 mt-2" style={{ display: "flex", flexDirection: "inherit", alignItems: "center", justifyContent: "space-between" }}>
                            <p className="heading m-0">{storePickup ? "Billing" : "Delivery"} Address
                            </p>
                            <button type="button" className="btn btn-light" data-toggle="modal" data-backdrop="static" data-keyboard="false" data-target="#addNewAddress">Add New</button>
                        </div>
                    </div>
                    {
                        addresses.map((add) => {
                            return (
                                <div className="col-md-6 col-sm-6 col-xs-12 p-0" key={add.id}>
                                    <div className="check_add_3 checkout card m-md-1">
                                        <div>
                                            <p><span>{add.name}</span> {formatAddress(add)}</p>
                                            <p><span>Phone: {add.phone}</span></p>
                                            <button disabled={calculatinShipping} title="Click to select address" className="btn btn-secondary checkoutBtn" type="button" onClick={() => calcShippingCost(add)}>
                                                {calculatinShipping === add.id ? <span className="spinner-border spinner-border-sm"></span> : storePickup ? "Select" : "Deliver Here"}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </Fragment>
            }

            {
                customerCartData && customerCartData.address && !changeAddress &&
                <Fragment>
                    <div className="col-12 p-0">
                        <div className="dis_detail selectedAdd mt-2 card">
                            <div>
                                <h4>{storePickup ? "Billing" : "Delivery"} Address</h4>
                                <div className="seperator" />
                                <p>Name: <span>{customerCartData.address.name}</span></p>
                                <p>Addreess: {customerCartData.address.completeAddress}</p>
                                <h5>Contact No: {customerCartData.address.phone}</h5>
                                <button className="checkoutBtn" onClick={() => setChangeAddress(true)} style={{ margin: 0 }}>Change address</button>
                            </div>
                        </div>
                    </div>
                    {
                        showPaymentMethod &&
                        <div className="col-12 p-0">
                            <PaymentMethod cartId={cartId} />
                        </div>
                    }
                </Fragment>
            }
            <div id="addNewAddress" className="modal" role="dialog">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <CreateNewAddress storePickup={storePickup} setAddedAddress={setAddedAddress} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ShippingAddress({
    cartId,
    calcShiping,
    setReload
}) {

    const [countries, setCountries] = useState([]);
    const [zones, setZones] = useState([]);
    const [isSaving, setIsSaving] = useState(false);
    const dispatch = useDispatch();
    const [isRegisteredUser, setIsRegisteredUser] = useState(false);
    const [isValidating, setIsValidating] = useState(false);
    const [emailAddress, setEmailAddress] = useState("");
    const [isLoggingIn, setIsLoggingIn] = useState(false);
    const [showEmailField, setShowEmailField] = useState(true);

    useEffect(() => {
        axios.get(`${process.env.API_URL}static/countries`).then(res => {
            setCountries(res.data);
            let zones = []

            res.data.forEach(country => {
                country.zones.forEach(zone => {
                    zones.push({ id: zone.id, name: zone.name })
                })
            })
            setZones(zones)
        })
    }, [])

    const fetchZones = (e) => {
        let countryData = countries.filter(c => c.id == e.target.value);
        let zones = []
        countryData.forEach(country => {
            country.zones.forEach(zone => {
                zones.push({ id: zone.id, name: zone.name })
            })
        })

        setZones(zones)
    }

    const guestCheckout = async (e) => {
        e.preventDefault();
        setIsSaving(true);
        try {
            let request = {
                cartId: cartId,
                email: e.target.email.value,
                name: e.target.name.value,
                address: e.target.address.value,
                city: e.target.city.value,
                countryId: e.target.countryId.value,
                zoneId: e.target.zoneId.value,
                postcode: e.target.postcode.value,
                phone: e.target.phone.value
            };

            let res = await axios.post(`${process.env.API_URL}customer/guestCheckout`, request);
            dispatch({ type: "USER_LOGIN", payload: res.data.auth });
            await calcShiping(res.data.addressId);
            setReload(new Date().getTime());
            setIsSaving(false);
        } catch (err) {
            setIsSaving(false);
            toast.notify("Unable to checkout! Please contact us!", {
                type: "error",
                title: "Checkout"
            });
        }
    }

    const checkIsRegisteredUser = (e) => {
        e.preventDefault();
        let email = e.target.email.value;

        if (email) {
            setIsValidating(true);
            axios.post(`${process.env.API_URL}customer/checkUserExist`, { email: email }).then((res) => {
                setIsRegisteredUser(true);
                setIsValidating(false);
                setEmailAddress(email);
                setShowEmailField(false);
            }).catch(err => {
                setIsRegisteredUser(false);
                setIsValidating(false);
                setEmailAddress("");
                setShowEmailField(false);
            })
        }
    }

    const login = (e) => {
        e.preventDefault()
        setIsLoggingIn(true)

        axios.post(`${process.env.API_URL}user/login`, { email: e.target.email.value, password: e.target.password.value }).then(res => {
            setIsLoggingIn(false)
            dispatch({ type: "USER_LOGIN", payload: res.data });
            setReload(new Date().getTime());
        }).catch(async (err) => {
            setIsLoggingIn(false);
            toast.notify(err.response.data.message, {
                type: "error",
                title: "Login Error!"
            });
        })
    }

    if (showEmailField) {
        return (
            <form onSubmit={checkIsRegisteredUser}>
                <div className="p-2">
                    <p className="heading">Contact Information</p>
                    <div className="input-group">
                        <input type="email" name="email" defaultValue={emailAddress} required={true} className="form-control p-3" placeholder="Email Address" />
                        <div className="input-group-btn">
                            <button disabled={isValidating} className="btn btn-secondary text-uppercase p-3 r-0 rounded-right" type="submit">
                                {isValidating ? <span className="spinner-border spinner-border-sm"></span> : "Continue"}
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        )
    }


    if (isRegisteredUser && !showEmailField) {
        return (
            <form onSubmit={login}>
                <div className="p-2">
                    <p className="heading">Please enter your password to login</p>
                    <div className="form-group">
                        <input type="email" name="email" required={true} defaultValue={emailAddress} className="form-control p-3" placeholder="Email Address" />
                        <input type="password" name="password" required={true} autoFocus={true} className="form-control p-3 mt-2" placeholder="Password" />
                        <a href="/forgotPassword" type="button" style={{ color: "inherit" }} className="textBtn ml-0">Forgot Password?</a>
                    </div>
                    <div className="mt-4 mb-5">
                        <button disabled={isLoggingIn} type="submit" className="btn btn-secondary">{
                            isLoggingIn ? <span className="spinner-border spinner-border-sm"></span> : "Continue"
                        }</button>
                        <button onClick={() => {
                            setIsRegisteredUser(false);
                        }} type="button" className="btn btn-outlined ml-2">Continue as Guest</button>
                    </div>
                </div>
            </form>
        )
    }

    if (!isRegisteredUser && !showEmailField) {
        return (
            <form onSubmit={guestCheckout}>
                <div className="p-2">
                    <p className="heading">Contact Information</p>
                    <div className="input-group">
                        <input type="email" name="email" defaultValue={emailAddress} required={true} className="form-control p-3" placeholder="Email Address" />
                    </div>
                </div>
                <div className="p-2 mt-4">
                    <p className="heading">Shipping Address</p>
                    <div className="row padding_0">
                        <div className="col-12">
                            <div className="input-group">
                                <input type="text" name="name" autoFocus={true} required={true} className="form-control p-3" placeholder="Full Name" />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="input-group mt-3">
                                <textarea name="address" required={true} className="form-control p-3 mt-2" placeholder="Address" />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="input-group mt-3">
                                <input type="text" name="city" required={true} className="form-control p-3 mt-2" placeholder="City" />
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="input-group mt-3">
                                <select className="form-control mt-2" required={true} onChange={fetchZones} name="countryId" defaultValue={1}>
                                    <option value="">-Select Country-</option>
                                    {
                                        countries.map(c => {
                                            return (<option value={c.id} key={c.id}>{c.name}</option>)
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="input-group mt-3">
                                <select className="form-control mt-2" name="zoneId" required={false} defaultValue={1}>
                                    <option value="">-Select State-</option>
                                    {
                                        zones.map(z => {
                                            return (<option value={z.id} key={z.id}>{z.name}</option>)
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="input-group mt-3">
                                <input type="text" name="postcode" required={true} className="form-control mt-2" placeholder="Postcode" />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="input-group mt-3">
                                <input type="text" name="phone" required={true} className="form-control p-3 mt-2" placeholder="Phone" />
                            </div>
                        </div>
                        <div className="col-12 mt-4 mb-5">
                            <button disabled={isSaving} type="submit" className="btn btn-secondary processBtn">{
                                isSaving ? <span className="spinner-border spinner-border-sm"></span> : "Continue To Shipping"
                            }</button>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

function CreateNewAddress({
    setAddedAddress,
    storePickup
}) {

    const [countries, setCountries] = useState([]);
    const [zones, setZones] = useState([]);
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        axios.get(`${process.env.API_URL}static/countries`).then(res => {
            setCountries(res.data);
            let zones = []

            res.data.forEach(country => {
                country.zones.forEach(zone => {
                    zones.push({ id: zone.id, name: zone.name })
                })
            })
            setZones(zones)
        })
    }, [])

    const fetchZones = (e) => {
        let countryData = countries.filter(c => c.id == e.target.value);
        let zones = []
        countryData.forEach(country => {
            country.zones.forEach(zone => {
                zones.push({ id: zone.id, name: zone.name })
            })
        })

        setZones(zones)
    }

    const saveAddress = (e) => {
        e.preventDefault();
        setIsSaving(true);

        let request = {
            name: e.target.name.value,
            phone: e.target.phone.value,
            address: e.target.address.value,
            city: e.target.city.value,
            postcode: e.target.postcode.value,
            countryId: e.target.countryId.value,
            zoneId: e.target.zoneId.value,
            type: "home",
            isDefault: 0,
        }

        axios.post(`${process.env.API_URL}address`, request).then(res => {
            toast.notify("New address created", {
                type: "success",
                title: "Success!"
            });
            setIsSaving(false);
            setAddedAddress(new Date().getTime());
            document.querySelector("#closeModal").click();
        }).catch(err => {
            let message = err.response.data.errors ? err.response.data.errors[0].message : "Oops! something went wrong!"
            toast.notify(message, {
                type: "error",
                title: "Error!"
            });
            setIsSaving(false);
        })
    }

    return (
        <form onSubmit={saveAddress}>
            <div className="p-2 mt-4">
                <p className="heading">{storePickup ? "Billing" : "Delivery"} Address</p>
                <div className="row padding_0">
                    <div className="col-12">
                        <div className="input-group">
                            <input type="text" name="name" autoFocus={true} required={true} className="form-control p-3" placeholder="Full Name" />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="input-group mt-3">
                            <textarea name="address" required={true} className="form-control p-3 mt-2" placeholder="Address" />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="input-group mt-3">
                            <input type="text" name="city" required={true} className="form-control p-3 mt-2" placeholder="City" />
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="input-group mt-3">
                            <select className="form-control mt-2" required={true} onChange={fetchZones} name="countryId" defaultValue={1}>
                                <option value="">-Select Country-</option>
                                {
                                    countries.map(c => {
                                        return (<option value={c.id} key={c.id}>{c.name}</option>)
                                    })
                                }
                            </select>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="input-group mt-3">
                            <select className="form-control mt-2" name="zoneId" required={false} defaultValue={1}>
                                <option value="">-Select State-</option>
                                {
                                    zones.map(z => {
                                        return (<option value={z.id} key={z.id}>{z.name}</option>)
                                    })
                                }
                            </select>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="input-group mt-3">
                            <input type="text" name="postcode" required={true} className="form-control mt-2" placeholder="Postcode" />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="input-group mt-3">
                            <input type="text" name="phone" required={true} className="form-control p-3 mt-2" placeholder="Phone" />
                        </div>
                    </div>
                    <div className="col-12 mt-4 mb-5">
                        <button disabled={isSaving} type="submit" className="btn btn-secondary processBtn">{
                            isSaving ? <span className="spinner-border spinner-border-sm"></span> : "Save & Continue"
                        }</button>
                        <button type="button" id="closeModal" data-dismiss="modal" className="btn btn btn-light processBtn ml-2">Cancel</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Checkout;