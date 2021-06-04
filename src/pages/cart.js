import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import Footer from "./footer";
import Header from "./header";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Image from "next/image";
import { GetPriceHtml } from "./helpers";
import Link from "next/link";
import CartButton from "../components/cartButon";
import CheckoutSidebar from "../components/checkoutSide";
import { toast, ToastContainer } from 'react-nextjs-toast';
import BlockUi from "react-block-ui";

export default function Cart() {
    const dispatch = useDispatch()
    const [reload, setReload] = useState(1)
    const [cartProductDetails, setCartProductDetails] = useState([])
    const cartId = useSelector(state => state.config.cartId ? state.config.cartId : null);
    const [disableCheckout, setDisableCheckout] = useState(false)
    const [cartData, setCartData] = useState(null);
    let currency = useSelector(state => state.config.currency);
    const [isLoading, setIsLoading] = useState(false);
    const [isUpdating, setIsUpdating] = useState(false);

    useEffect(async () => {
        if (cartId) {
            setIsLoading(true);
            await axios.get(`${process.env.API_URL}cart/${cartId}`).then((res) => {
                if (res.data) {
                    if (res.data.status === 2) {
                        setDisableCheckout(true);
                    } else {
                        setDisableCheckout(false);
                    }
                    dispatch({ type: "SET_CART_ITEMS", payload: res.data.products.length });
                    setCartProductDetails(res.data.products || []);
                    setCartData(res.data);
                }
                setIsLoading(false);
            });
        }

    }, [reload, cartId])

    const removeProduct = async (cartProductId) => {
        setIsUpdating(true);
        await axios.post(`${process.env.API_URL}cart/remove`, {
            cartId: cartId,
            cartProductId: cartProductId
        })
        setDisableCheckout(false)
        setReload(reload + 1)
        setIsUpdating(false);
    }

    const addToWishlist = (pid) => {
        setIsUpdating(true);
        axios.post(`${process.env.API_URL}wishlist`, { productId: pid }).then(res => {
            toast.notify(`${res.data.message}`, {
                type: "success",
                title: "Wishlist!"
            })
            setIsUpdating(false);
        }).catch(err => {
            toast.notify(`Something went wrong!`, {
                type: "error",
                title: "Wishlist!"
            })
            setIsUpdating(false);
        })
    }

    return (
        <Fragment>
            <Head>
                <title>Cart Details</title>
            </Head>
            <Header shadow />
            <ToastContainer />
            <BlockUi blocking={isUpdating}>
                {
                    isLoading ? <div className="mobile_hidden_vissible" id="cartProducts">
                        <section className="empty-cart">
                            <div className="empty-cart_main">
                                <div className="loader" /><br />
                                <h2>Loading your cart..</h2>
                            </div>
                        </section>
                    </div> :
                        cartProductDetails.length > 0 ?
                            <section className="inner_product product_info" style={{ background: "#f6f7f7" }}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="dis_detail wow fadeInUp">
                                                <h4>{cartProductDetails.length} Items in your bag</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row wow fadeInUp">
                                        <div className="col-md-8 nopadding">
                                            {
                                                cartProductDetails.map((cp) => {
                                                    return (
                                                        <div className="row cartProduct" key={cp.id}>
                                                            <div className="col-md-11 col-sm-12">
                                                                <div className="mrg_12">
                                                                    <div className="main_inner_check rm_bdr cartPadding">
                                                                        <div className="check_img">
                                                                            <Link href={`product/${cp.slug}`}>
                                                                                <a>
                                                                                    <Image src={cp.featuredImage.miniThumbnailUrl} width={130} height={130} />
                                                                                </a>
                                                                            </Link>
                                                                        </div>
                                                                        <div className="check_dis">
                                                                            <Link href={`product/${cp.slug}`}>
                                                                                <a>
                                                                                    <p>{cp.name}</p>
                                                                                </a>
                                                                            </Link>
                                                                            <CartButton product={cp} iscartpage reload={reload} setReload={setReload} />
                                                                        </div>
                                                                        <div className="right_icon">
                                                                            <i onClick={() => removeProduct(cp.cartProducts.id)} className="fa fa-trash" aria-hidden="true"></i>
                                                                            <button type="button" onClick={() => addToWishlist(cp.id)} style={{ background: "transparent", border: "0px" }}>
                                                                                <img src="/images/address_icon/heart.svg" />
                                                                            </button>
                                                                        </div>
                                                                        <div className="right_content_1">
                                                                            <p><strong><GetPriceHtml product={cp} quantity={cp.cartProducts.quantity} /></strong></p>
                                                                            {
                                                                                cp.cartProducts.discount ?
                                                                                    <p className="couponDiscountP">Discount {new Intl.NumberFormat('en-IN', { style: "currency", currency: currency.code }).format(cp.cartProducts.discount * currency.value).replace("THB", "฿")}</p>
                                                                                    : ""
                                                                            }
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                        <div className="col-md-4 nopadding">
                                            {cartData && <CheckoutSidebar setReload={setReload} disableCheckout={disableCheckout} cartData={cartData} />}
                                        </div>
                                    </div>
                                </div>
                            </section>
                            :
                            <div className="mobile_hidden_vissible" id="cartProducts">
                                <section className="empty-cart">
                                    <div className="empty-cart_main">
                                        <img src="/images/cart.png" />
                                        <h2>Hey, it feels so light!</h2>
                                        <p>There is nothing in your cart, Let's add some items</p>
                                        <Link href="/account?tab=5"><a className="empty-button">Add From Wishlist</a></Link>
                                    </div>
                                </section>
                            </div>
                }
            </BlockUi>
            <br />
            <Footer />
        </Fragment>
    )
}