import Head from "next/head"
import { Fragment, useEffect, useState } from "react"
import Footer from "./footer"
import Header from "./header"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios";
import Image from "next/image"
import { GetPriceHtml } from "./helpers"
import Link from "next/link"
import CartButton from "../components/cartButon"
import CheckoutSidebar from "../components/checkoutSide"

export default function Cart() {
    const dispatch = useDispatch()
    const [reload, setReload] = useState(1)
    const [cartProductDetails, setCartProductDetails] = useState([])
    const cartId = useSelector(state => state.config.cartId ? state.config.cartId : null);
    const [disableCheckout, setDisableCheckout] = useState(false)
    const [cartData, setCartData] = useState(null);
    let currency = useSelector(state => state.config.currency);

    useEffect(async () => {
        if (cartId)
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
            })
    }, [reload])

    const removeProduct = async (cartProductId) => {
        await axios.post(`${process.env.API_URL}cart/remove`, {
            cartId: cartId,
            cartProductId: cartProductId
        })
        setDisableCheckout(false)
        setReload(reload + 1)
    }

    return (
        <Fragment>
            <Head>
                <title>Cart Details</title>
            </Head>
            <Header shadow />
            <section className="inner_product product_info">
                {
                    cartProductDetails.length > 0 ?
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="dis_detail wow fadeInUp">
                                        <h4>{cartProductDetails.length} Items in your bag</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="row wow fadeInUp">
                                <div className="col-md-7">
                                    {
                                        cartProductDetails.map((cp) => {
                                            return (
                                                <div className="row" key={cp.id}>
                                                    <div className="col-md-12">
                                                        <div className="mrg_12">
                                                            <div className="main_inner_check rm_bdr">
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
                                                                    {/* <i className="fa fa-heart" aria-hidden="true"></i> */}
                                                                </div>
                                                                <div className="right_content_1">
                                                                    <p><GetPriceHtml product={cp} quantity={cp.cartProducts.quantity} /></p>
                                                                    {
                                                                        cp.cartProducts.discount ?
                                                                            <p className="couponDiscountP">Coupon discount {new Intl.NumberFormat('en-IN', { style: "currency", currency: currency.code }).format(cp.cartProducts.discount * currency.value).replace("THB", "฿")}</p>
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
                                <div className="col-md-5">
                                    {cartData && <CheckoutSidebar setReload={setReload} disableCheckout={disableCheckout} cartData={cartData} />}
                                </div>
                            </div>
                        </div>
                        :
                        <div className="container">
                            <div className="emptyCart">
                                <img src="/images/emptyCart.svg" alt="emptyCart" />
                                <h1>Your cart is empty</h1>
                                <p>You have no items in your shopping cart let's go buy something!</p>
                                <Link href="/">
                                    <a>
                                        Shop Now!
                                    </a>
                                </Link>
                            </div>
                        </div>
                }
            </section>
            <Footer />
        </Fragment>
    )
}