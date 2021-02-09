import Head from "next/head"
import { Fragment, useEffect, useState } from "react"
import Footer from "./footer"
import Header from "./header"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios";
import Image from "next/image"
import { GetPriceHtml, stockStatus } from "./helpers"
import Link from "next/link"
import CartButton from "../components/cartButon"
import CheckoutSidebar from "../components/checkoutSide"

export default function Cart() {
    const dispatch = useDispatch()
    const [reload, setReload] = useState(1)
    const [cartProductDetails, setCartProductDetails] = useState([])
    const productsInCart = useSelector(state => state.config.cart ? state.config.cart : [])
    const auth = useSelector(state => state.config.auth ? state.config.auth : false);
    const [disableCheckout, setDisableCheckout] = useState(false)

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

    const removeProduct = async (pid) => {
        let filteredCart = productsInCart.filter(c => c.id !== pid)
        dispatch({ type: "ADD_TO_CART", payload: filteredCart });
        /* Remove cart from db if user is logged in */
        if (auth) {
            await axios.delete(`${process.env.API_URL}cart/remove/${pid}`)
        }
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
                    productsInCart.length > 0 ?
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
                                                                    <i onClick={() => removeProduct(cp.id)} className="fa fa-trash" aria-hidden="true"></i>
                                                                    <i className="fa fa-heart" aria-hidden="true"></i>
                                                                </div>
                                                                <div className="right_content_1">
                                                                    <p><GetPriceHtml product={cp} quantity={cp.cartQuantity} /></p>
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
                                    <CheckoutSidebar disableCheckout={disableCheckout} cart={cartProductDetails} />
                                </div>
                            </div>
                        </div>
                        :
                        <div className="container">
                            <h1>Empty cart</h1>
                        </div>
                }
            </section>
            <Footer />
        </Fragment>
    )
}