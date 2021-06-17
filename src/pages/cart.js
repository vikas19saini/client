import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import Footer from "./footer";
import Header from "./header";
import { useSelector } from "react-redux";
import Image from "next/image";
import { GetPriceHtml, useCart } from "../components/helpers";
import Link from "next/link";
import CartButton from "../components/cartButon";
import CheckoutSidebar from "../components/checkoutSide";
import { toast, ToastContainer } from 'react-nextjs-toast';

export default function Cart() {
    const { addtoWishList, remove } = useCart();
    const [cartProductDetails, setCartProductDetails] = useState([]);
    let currency = useSelector(state => state.config.currency);
    const [isLoading, setIsLoading] = useState(true);
    const cartData = useSelector(state => state.config.cartData);

    useEffect(() => {
        setCartProductDetails(cartData ? cartData.products : []);
    }, [cartData]);

    useEffect(() => {
        cartData && setIsLoading(false);
    }, [cartData])

    const removeProduct = async (cartProductId) => {
        let response = await remove(cartProductId);
        toast.notify(`${response.message}`, {
            type: response.type,
            title: response.title
        });
    }

    const addToWishlist = async (pid) => {
        let response = await addtoWishList(pid);
        toast.notify(`${response.message}`, {
            type: response.type,
            title: response.title
        });
    }

    if (cartData === null || cartProductDetails.length === 0) {
        return (
            <Fragment>
                <Head>
                    <title>Cart Details</title>
                </Head>
                <Header shadow />
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
            </Fragment>
        )
    }

    if (isLoading) {
        return (
            <Fragment>
                <Head>
                    <title>Cart Details</title>
                </Head>
                <Header shadow />
                <div className="mobile_hidden_vissible" id="cartProducts">
                    <section className="empty-cart">
                        <div className="empty-cart_main">
                            <div className="loader" /><br />
                            <h2>Loading your cart..</h2>
                        </div>
                    </section>
                </div>
            </Fragment>
        )
    }

    return (
        <Fragment>
            <Head>
                <title>Cart Details</title>
            </Head>
            <Header shadow />
            <ToastContainer />
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
                                                                    <Image quality={100} src={cp.featuredImage.miniThumbnailUrl} width={130} height={130} />
                                                                </a>
                                                            </Link>
                                                        </div>
                                                        <div className="check_dis">
                                                            <Link href={`product/${cp.slug}`}>
                                                                <a>
                                                                    <p>{cp.name}</p>
                                                                </a>
                                                            </Link>
                                                            <CartButton product={cp} iscartpage />
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
                            <CheckoutSidebar />
                        </div>
                    </div>
                </div>
            </section>
            <br />
            <Footer />
        </Fragment>
    )
}