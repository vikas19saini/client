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
import useTranslation from "next-translate/useTranslation";

function Checkout() {
    const [reload, setReload] = useState(1)
    const { disableCheckout, cartId, calcShiping, customerCartData } = useCart();
    const router = useRouter();
    const isLoggedIn = useSelector(state => state.config.auth ? state.config.auth : false);
    const [isLoading, setIsLoading] = useState(false);
    const [storePickup, setStorePickup] = useState(false);

    const { t } = useTranslation()

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
                            <h2>{t("cart:some_item_out_of_stock")}</h2>
                            <button className="checkoutBtn" onClick={() => router.push("/cart")}>{t("cart:go_to_cart")}</button>
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
                                                    <i className="fa fa-chevron-left" /> {t("cart:cart")}
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
                                <div className="checkoutInfo mt-0 mt-1 d-none d-sm-block" style={{ height: "70px" }}>
                                    {/* <div className="alert alert-warning">
                                        <p>Due to the current lockdown situation, please expect a delay of 7-10 days in the delivery times for your orders.</p>
                                        <p>เนื่องจากสถานการณ์ล็อกดาวน์ในปัจจุบัน อาจจะทำให้การขนส่งสินค้าเกิดความล่าช้า 7-10 วัน</p>
                                    </div> */}
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
                                                        <i className="fa fa-chevron-left" /> {t("cart:cart")}
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
                                    <div className="card p-3 mb-2 mt-2">
                                        <div className="form-check" style={{ display: "flex", alignItems: "center" }}>
                                            <input style={{ height: "20px", width: "20px" }} onChange={() => setStorePickup(!storePickup)} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label className="form-check-label ml-2" htmlFor="flexCheckDefault" style={{ fontSize: "13px", textTransform: "none" }}>
                                                {t("cart:store_pickup")}
                                            </label>
                                        </div>
                                        <p className="mt-2 text-muted"><small>{t("cart:address")}</small></p>

                                    </div>
                                    {
                                        isLoggedIn &&
                                        <CustomerAddresses storePickup={storePickup} setStorePickup={setStorePickup} cartId={cartId} customerCartData={customerCartData} setReload={setReload} calcShiping={calcShiping} setIsLoading={setIsLoading} />
                                    }
                                    {
                                        !isLoggedIn && <ShippingAddress storePickup={storePickup} calcShiping={calcShiping} setReload={setReload} cartId={cartId} />
                                    }
                                    <div className="mt-5 border-top">
                                        <ul className="mt-2" style={{ listStyle: "none", fontSize: "12px", textAlign: "center" }}>
                                            <li style={{ display: "inline-block" }} className="m-2 text-capitalize font-weight-light text-muted">
                                                <Link href="/about"><a target="_blank" className="text-muted">{t("common:about_us")}</a></Link>
                                            </li>
                                            <li style={{ display: "inline-block" }} className="m-2 text-capitalize font-weight-light text-muted">
                                                <Link href="/privacy"><a target="_blank" className="text-muted">{t("common:policies")}</a></Link>
                                            </li>
                                            <li style={{ display: "inline-block" }} className="m-2 text-capitalize font-weight-light text-muted">
                                                <Link href="/toc"><a target="_blank" className="text-muted">{t("common:toc")}</a></Link>
                                            </li>
                                            <li style={{ display: "inline-block" }} className="m-2 text-capitalize font-weight-light">
                                                <Link href="/contact"><a target="_blank" className="text-muted">{t("common:contact")}</a></Link>
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
}) {

    const [addresses, setAddresses] = useState([]);
    const [calculatinShipping, setCalcShipping] = useState(false);
    const [changeAddress, setChangeAddress] = useState(false);
    const [showAddresses, setShowAddresses] = useState(false);
    const [showPaymentMethod, setShowPaymentMethod] = useState(false);
    const [addedAddress, setAddedAddress] = useState(1);

    const { t } = useTranslation()

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
                        <div className="card p-3 mb-2 mt-2" style={{ display: "flex", flexDirection: "inherit", alignItems: "center", justifyContent: "space-between" }}>
                            <p className="heading m-0">{storePickup ? t("cart:billing_address") : t("cart:shipping_address")}
                            </p>
                            <button type="button" className="btn btn-light" data-toggle="modal" data-backdrop="static" data-keyboard="false" data-target="#addNewAddress">{t("cart:add")}</button>
                        </div>
                    </div>
                    {
                        addresses.map((add) => {
                            return (
                                <div className="col-md-6 col-sm-6 col-xs-12 p-0" key={add.id}>
                                    <div className="check_add_3 checkout card m-md-1">
                                        <div>
                                            <p><span>{add.name}</span> {formatAddress(add)}</p>
                                            <p><span>{t("cart:phone")}: {add.phone}</span></p>
                                            <button disabled={calculatinShipping} title={t("cart:")} className="btn btn-secondary checkoutBtn" type="button" onClick={() => calcShippingCost(add)}>
                                                {calculatinShipping === add.id ? <span className="spinner-border spinner-border-sm"></span> : storePickup ? t("cart:select") : t("cart:deliver_here")}
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
                                <h4>{storePickup ? t("cart:billing_address") : t("cart:shipping_address")}</h4>
                                <div className="seperator" />
                                <p>{t("cart:full_name")}: <span>{customerCartData.address.name}</span></p>
                                <p>{t("cart:delivery_address_input")}: {customerCartData.address.completeAddress}</p>
                                <h5>{t("cart:contact_no")}: {customerCartData.address.phone}</h5>
                                <button className="checkoutBtn" onClick={() => setChangeAddress(true)} style={{ margin: 0 }}>{t("cart:change_address")}</button>
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
    setReload,
    storePickup
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

    const { t } = useTranslation()

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
            await calcShiping(res.data.addressId, storePickup);
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
                    <p className="heading">{t("cart:contact_info")}</p>
                    <div className="input-group">
                        <input type="email" name="email" defaultValue={emailAddress} required={true} className="form-control p-3" placeholder={t("common:email")} />
                        <div className="input-group-btn">
                            <button disabled={isValidating} className="btn btn-secondary text-uppercase p-3 r-0 rounded-right" type="submit">
                                {isValidating ? <span className="spinner-border spinner-border-sm"></span> : t("cart:continue")}
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
                    <p className="heading">{t("cart:password_to_login")}</p>
                    <div className="form-group">
                        <input type="email" name="email" required={true} defaultValue={emailAddress} className="form-control p-3" placeholder={t("common:email")} />
                        <input type="password" name="password" required={true} autoFocus={true} className="form-control p-3 mt-2" placeholder={t("common:password")} />
                        <a href="/forgotPassword" type="button" style={{ color: "inherit" }} className="textBtn ml-0">{t("cart:forgot_password")}</a>
                    </div>
                    <div className="mt-4 mb-5">
                        <button disabled={isLoggingIn} type="submit" className="btn btn-secondary">{
                            isLoggingIn ? <span className="spinner-border spinner-border-sm"></span> : t("cart:continue")
                        }</button>
                        <button onClick={() => {
                            setIsRegisteredUser(false);
                        }} type="button" className="btn btn-outlined ml-2">{t("cart:continue_as_guest")}</button>
                    </div>
                </div>
            </form>
        )
    }

    if (!isRegisteredUser && !showEmailField) {
        return (
            <form onSubmit={guestCheckout}>
                <div className="p-2">
                    <p className="heading">{t("cart:contact_info")}</p>
                    <div className="input-group">
                        <input type="email" name="email" defaultValue={emailAddress} required={true} className="form-control p-3" placeholder={t("common.email")} />
                    </div>
                </div>
                <div className="p-2 mt-4">
                    <p className="heading">{storePickup ? t("cart:billing_address") : t("cart:shipping_address")}</p>
                    <div className="row padding_0">
                        <div className="col-12">
                            <div className="input-group">
                                <input type="text" name="name" autoFocus={true} required={true} className="form-control p-3" placeholder={t("cart:full_name")} />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="input-group mt-3">
                                <textarea name="address" required={true} className="form-control p-3 mt-2" placeholder={t("cart:delivery_address_input")} />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="input-group mt-3">
                                <input type="text" name="city" required={true} className="form-control p-3 mt-2" placeholder={t("cart:city")} />
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="input-group mt-3">
                                <select className="form-control mt-2" required={true} onChange={fetchZones} name="countryId" defaultValue={1}>
                                    <option value="">-{t("cart:country")}-</option>
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
                                    <option value="">-{t("cart:state")}-</option>
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
                                <input type="text" name="postcode" required={true} className="form-control mt-2" placeholder={t("cart:postcode")} />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="input-group mt-3">
                                <input type="text" name="phone" required={true} className="form-control p-3 mt-2" placeholder={t("cart:phone")} />
                            </div>
                        </div>
                        <div className="col-12 mt-4 mb-5">
                            <button disabled={isSaving} type="submit" className="btn btn-secondary processBtn">{
                                isSaving ? <span className="spinner-border spinner-border-sm"></span> : t("cart:continue_to_shipping")
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

    const { t } = useTranslation()

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
                <p className="heading">{storePickup ? t("cart:billing_address") : t("cart:shipping_address")}</p>
                <div className="row padding_0">
                    <div className="col-12">
                        <div className="input-group">
                            <input type="text" name="name" autoFocus={true} required={true} className="form-control p-3" placeholder={t("cart:full_name")} />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="input-group mt-3">
                            <textarea name="address" required={true} className="form-control p-3 mt-2" placeholder={t("cart:delivery_address_input")} />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="input-group mt-3">
                            <input type="text" name="city" required={true} className="form-control p-3 mt-2" placeholder={t("cart:city")} />
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="input-group mt-3">
                            <select className="form-control mt-2" required={true} onChange={fetchZones} name="countryId" defaultValue={1}>
                                <option value="">-{t("cart:country")}-</option>
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
                                <option value="">-{t("cart:state")}-</option>
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
                            <input type="text" name="postcode" required={true} className="form-control mt-2" placeholder={t("cart:postcode")} />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="input-group mt-3">
                            <input type="text" name="phone" required={true} className="form-control p-3 mt-2" placeholder={t("cart:phone")} />
                        </div>
                    </div>
                    <div className="col-12 mt-4 mb-5">
                        <button disabled={isSaving} type="submit" className="btn btn-secondary processBtn">{
                            isSaving ? <span className="spinner-border spinner-border-sm"></span> : t("cart:save_continue")
                        }</button>
                        <button type="button" id="closeModal" data-dismiss="modal" className="btn btn btn-light processBtn ml-2">{t("cart:cancel")}</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Checkout;