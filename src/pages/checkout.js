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
                    <div className="row">
                        <div className="col-md-5 order-md-2 p-0">
                            <div className="pr-md-5 mt-md-5">
                                <div className="py-2 text-center d-block d-sm-none">
                                    <img className="d-block mx-auto mb-2" src="/images/logo.png" alt="gandhi" height="50" />
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item">
                                                <Link href="/cart">
                                                    <a style={{ color: "inherit" }}>
                                                        Back to Cart
                                                    </a>
                                                </Link>
                                            </li>
                                        </ol>
                                    </nav>
                                </div>
                                <div className="checkoutInfo mt-0">
                                    <div className="alert alert-warning">
                                        <p>Due to the current lockdown situation, please expect a delay of 7-10 days in the delivery times for your orders.</p>
                                        <p>เนื่องจากสถานการณ์ล็อกดาวน์ในปัจจุบัน อาจจะทำให้การขนส่งสินค้าเกิดความล่าช้า 7-10 วัน</p>
                                    </div>
                                </div>
                                <div className="pr-md-5 mt-md-5">
                                    <CheckoutSidebar setReload={setReload} hideCheckoutBtn isCheckoutPage />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 order-md-1 pb-5" style={{ background: "#fff" }}>
                            <div className="py-4 text-center d-none d-sm-block">
                                <img className="d-block mx-auto mb-2" src="/images/logo.png" alt="gandhi" height="50" />
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <Link href="/cart">
                                                <a style={{ color: "inherit" }}>
                                                    Back to Cart
                                                </a>
                                            </Link>
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                            <div className="pl-md-5">
                                <div className="pl-md-5">
                                    {
                                        isLoggedIn &&
                                        <CustomerAddresses cartId={cartId} customerCartData={customerCartData} setReload={setReload} calcShiping={calcShiping} setIsLoading={setIsLoading} />
                                    }
                                    {
                                        !isLoggedIn && <ShippingAddress calcShiping={calcShiping} setReload={setReload} cartId={cartId} />
                                    }
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
    cartId
}) {

    const [addresses, setAddresses] = useState([]);
    const [calculatinShipping, setCalcShipping] = useState(false);
    const [changeAddress, setChangeAddress] = useState(false);
    const [showAddresses, setShowAddresses] = useState(false);
    const [showPaymentMethod, setShowPaymentMethod] = useState(false);

    useEffect(() => {

        if (customerCartData && !customerCartData.address) {
            setShowAddresses(true);
        } else {
            setShowAddresses(false);
        }

        if (customerCartData && customerCartData.address && (customerCartData.shippingCost > 0)) {
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
    }, [changeAddress, showAddresses]);

    const calcShippingCost = (shippingAddress) => {
        setCalcShipping(shippingAddress.id);
        calcShiping(shippingAddress.id).then((d) => {
            setCalcShipping(false);
            setReload(new Date().getTime());
            setChangeAddress(false);
            setShowPaymentMethod(true);
        }).catch(err => {
            setCalcShipping(false);
            setChangeAddress(false);
            setShowPaymentMethod(false);
        });
    }

    return (
        <div className="p-2 row p-0">
            {
                (showAddresses || changeAddress) &&
                <Fragment>
                    <div className="col-12 p-3 card">
                        <h5 className="heading m-0">Shipping Address</h5>
                    </div>
                    {
                        addresses.map((add) => {
                            return (
                                <div className="col-md-6 col-sm-6 col-xs-12 addressOne cartProduct" key={add.id}>
                                    <div className="check_add_3 checkout m-2">
                                        <div>
                                            <p><span>{add.name}</span> {formatAddress(add)}</p>
                                            <p><span>Phone: {add.phone}</span></p>
                                            <button disabled={calculatinShipping} title="Click to select address" className="checkoutBtn" type="button" onClick={() => calcShippingCost(add)}>
                                                {calculatinShipping === add.id ? <div className="loader" /> : "Deliver Here"}
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
                        <div className="dis_detail selectedAdd cartProduct">
                            <div>
                                <h4>Delivery Address</h4>
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
    const dispatch = useDispatch()

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

    return (
        <form onSubmit={guestCheckout}>
            <div className="p-2">
                <p className="heading">Contact Information</p>
                <div className="input-group">
                    <input type="email" name="email" required={true} className="form-control" placeholder="Email Address" />
                </div>
            </div>
            <div className="p-2 mt-4">
                <p className="heading">Shipping Address</p>
                <div className="row padding_0">
                    <div className="col-12">
                        <div className="input-group">
                            <input type="text" name="name" required={true} className="form-control" placeholder="Full Name" />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="input-group mt-3">
                            <input type="text" name="address" required={true} className="form-control" placeholder="Address" />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="input-group mt-3">
                            <input type="text" name="city" required={true} className="form-control" placeholder="City" />
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="input-group mt-3">
                            <select className="form-control" required={true} onChange={fetchZones} name="countryId" defaultValue={1}>
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
                            <select className="form-control" name="zoneId" required={false} defaultValue={1}>
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
                            <input type="text" name="postcode" required={true} className="form-control" placeholder="Postcode" />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="input-group mt-3">
                            <input type="text" name="phone" required={true} className="form-control" placeholder="Phone" />
                        </div>
                    </div>
                    <div className="col-12 mt-3 mb-5">
                        <button disabled={isSaving} type="submit" className="btn btn-secondary processBtn">{
                            isSaving ? <div className="loader" /> : "Continue To Shipping"
                        }</button>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default Checkout;