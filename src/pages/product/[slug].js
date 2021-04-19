import Header from "../header";
import Footer from "../footer";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Head from 'next/head'
import { wrapper } from "../../redux/store";
import Products from "../../components/productCrousel"
import { stockStatus } from "../helpers";
import CartButton from "../../components/cartButon";
import OwlCarousel from 'react-owl-carousel2';
import Image from "next/image"
import { toast, ToastContainer } from 'react-nextjs-toast';
import Link from "next/link";
import 'react-photoswipe/lib/photoswipe.css';
import { PhotoSwipe } from 'react-photoswipe';
import {
    isMobile
} from "react-device-detect";

export default function Product(product) {

    let productImages = [...[product.featuredImage], ...product.thumbnails];
    const [openZoom, setOpenZoom] = useState(false);

    useEffect(() => {
        productPageInit() // defined in script.js
    }, [])

    const addToWishlist = () => {
        axios.post(`${process.env.API_URL}wishlist`, { productId: product.id }).then(res => {
            toast.notify(`${res.data.message}`, {
                type: "success",
                title: "Wishlist!"
            })
        }).catch(err => {
            toast.notify(`Something went wrong!`, {
                type: "error",
                title: "Wishlist!"
            })
        })
    }

    return (
        <Fragment>
            <ToastContainer />
            <Head>
                <title>{product.metaTitle ? product.metaTitle : product.name}</title>
                <meta name="description" content={product.metaDescription} />
            </Head>
            <Header shadow />
            <PhotoSwipe isOpen={openZoom} items={
                productImages.map((t) => {
                    return {
                        src: t.fullUrl,
                        w: 1500,
                        h: 1000,
                        title: product.name
                    }
                })
            } options={{
                history: false
            }} onClose={() => setOpenZoom(false)} />
            <section className="inner_product">
                <div className="wd_full">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <OwlCarousel options={{
                                    responsive: {
                                        0: {
                                            items: 1,
                                        },
                                        568: {
                                            items: 1,
                                        },
                                        667: {
                                            items: 1,
                                        },
                                        1170: {
                                            items: 1,
                                        }
                                    },
                                    loop: false,
                                    autoplay: false,
                                    dots: true,
                                    nav: false,
                                    rewind: true,
                                }} id="product_slide" className="owl-carousel" >
                                    {
                                        productImages.map((t) => {
                                            return (
                                                <div className="item" key={t.id}>
                                                    <div className="icon_hard">
                                                        <Image src={t.fullUrl} height={570} width={680} alt={product.name} onClick={() => setOpenZoom(true)} />
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </OwlCarousel>
                            </div>

                            <div className="col-md-6">
                                <div className="main_pd_dis wow fadeInUp">

                                    <CartButton product={product} />
                                    <div className="product_details_right">
                                        <p className="product_details_right_p5">Product Specification / Details</p>
                                        <ul className="product_details_right_p6">
                                            {
                                                product.attributes.map((a) => {
                                                    return (
                                                        <Fragment key={a.id}>
                                                            <li>{a.name}</li>
                                                            <li>{a.productsAttributeValues.attributeDescription} </li>
                                                        </Fragment>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>

                                    <div className="clearfix" />
                                    <div className="tp_bttm desk_view">
                                        <div className="row">
                                            <div className="col-md-5">
                                                <div className="order_s_1 right_s_1">
                                                    <p>Looking for order Bulk?</p>
                                                    <h6><Link href={`/bulk?productId=${product.id}`}><a>Bulk Order</a></Link></h6>
                                                </div>
                                            </div>

                                            <div className="col-md-5">
                                                <div className="order_s_1">
                                                    <p>Want to order sample ?</p>
                                                    <h6>Order Swatch</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <div className={isMobile ? "dis_mrg_1" : "container dis_mrg_1"}>
                <div className="row">
                    <div className="col-md-12">
                        {
                            product.longDescription &&
                            <div className="product_dis_1 wow fadeInUp">
                                <h1>Product Description</h1>
                                <p>{product.longDescription}</p>
                            </div>
                        }
                        {
                            product.shortDescription &&
                            <div className="product_dis_1 wow fadeInUp">
                                <h1>Applications</h1>
                                <p>{product.shortDescription}</p>
                            </div>
                        }
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="dis_help wow fadeInUp">
                            <p>Need help with this product?</p>
                        </div>
                    </div>
                </div>
                <div className="deli_info_br wow fadeInUp">
                    <div className="row">
                        <div className="col-md-4 col-12">
                            <div className="deli_info info_right">
                                <img src="/images/address_icon/mob_i.svg" alt="mobile" />
                                <p><strong>Give us a call</strong> Mon - Sat 10AM to 7Pm</p>
                            </div>
                        </div>

                        <div className="col-md-4 col-6  padd_right">
                            <div className="deli_info info_right">
                                <img src="/images/address_icon/whatsapp.svg" alt="whatsapp" />
                                <p><strong>Chat with us on whatapp</strong> Mon - Sat 10AM to 7Pm</p>
                            </div>
                        </div>

                        <div className="col-md-4 col-6 padd_left">
                            <div className="deli_info bdr_message">
                                <img src="/images/address_icon/message.svg" alt="message" />
                                <p><strong>Drop us an email</strong> Mon - Sat 10AM to 7Pm</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {
                product.relative.length > 0 &&
                <section className="may_leke_sec">
                    <div className={isMobile ? "container w100" : "container"}>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="inner_main_hadding wow fadeInUp">
                                    <h4>You May Also Like</h4>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <OwlCarousel options={{
                                    responsive: {
                                        0: {
                                            items: 1.2,
                                        },
                                        568: {
                                            items: 3,
                                        },
                                        667: {
                                            items: 3,
                                        },
                                        1170: {
                                            items: 3,
                                        }
                                    },
                                    loop: false,
                                    autoplay: false,
                                    dots: false,
                                    nav: false,
                                    margin: 0,
                                }} id="may_like" className="owl-carousel relativeProducts" >
                                    <Products products={product.relative} />
                                </OwlCarousel>
                            </div>
                        </div>
                    </div>
                </section>
            }
            <Footer />
        </Fragment>
    );
}

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
    try {
        let product = await axios.get(`${process.env.API_URL}products/${context.params.slug}`)
        product = product.data;

        let relativeProducts = await axios.get(`${process.env.API_URL}products/relative/${product.id}`);
        relativeProducts = relativeProducts.data

        product.stockStatus = stockStatus(product)

        product.relative = relativeProducts;
        return {
            props: product
        }
    } catch (error) {

        return {
            notFound: true,
        }
    }
})