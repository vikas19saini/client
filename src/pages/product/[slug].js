import Header from "../header";
import Footer from "../footer";
import { Fragment, useEffect } from "react";
import axios from "axios";
import Head from 'next/head'
import { wrapper } from "../../redux/store";
import Products from "../../components/productCrousel"
import { GetPriceHtml, stockStatus } from "../helpers";
import CartButton from "../../components/cartButon";
import OwlCarousel from 'react-owl-carousel2';
import Image from "next/image"

export default function Product(product) {

    let productImages = [...[product.featuredImage], ...product.thumbnails]

    useEffect(() => {
        productPageInit() // defined in script.js
    }, [])

    return (
        <Fragment>
            <Head>
                <title>{product.metaTitle ? product.metaTitle : product.name}</title>
                <meta name="description" content={product.metaDescription} />
            </Head>
            <Header shadow />
            <section className="inner_product">
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
                                loop: true,
                                autoplay: false,
                                dots: true,
                                nav: false,
                                rewind: true,
                            }} className="owl-carousel wow fadeInUp" >
                                {
                                    productImages.map((t) => {
                                        return (
                                            <div className="item" key={t.id}>
                                                <div className="icon_hard">
                                                    <i className="fa fa-heart" aria-hidden="true"></i>
                                                    <Image src={t.fullUrl} height={570} width={680} alt={product.name} />
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

                                <div className="inner_fabric_1">
                                    <div className="main_fab_12">
                                        {
                                            product.attributes.map((a) => {
                                                return (
                                                    <div className="fab_12" key={a.id}>
                                                        <p>{a.productsAttributeValues.attributeDescription} <span>{a.name}</span></p>
                                                    </div>
                                                )
                                            })
                                        }

                                    </div>
                                </div>

                                <div className="row shipp_12">
                                    {/* <div className="col-md-8 col-8">
                                        <div className="shipp_1">
                                            <p>Shipping to 560043, Bangalore. Free 2 Days Shipping </p>
                                        </div>
                                    </div>
                                    <div className="col-md-2 col-2">
                                        <div className="shipp_1 change_1">
                                            <p><strong>Change</strong></p>
                                        </div>
                                    </div> */}
                                </div>

                                <div className="row">
                                    <div className="col-md-4 col-4">
                                        <div className="diliver_1">
                                            <img src="/images/download_deli.png" alt="" />
                                            <p>Download <span>Product Spec</span></p>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-4">
                                        <div className="diliver_1">
                                            <img src="/images/deli_icon.png" alt="" />
                                            <p>Download <span>Product Spec</span></p>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-4 mob_view">
                                        <div className="diliver_1">
                                            <img src="/images/time.png" alt="" />
                                            <p>Return <span>in 30 days</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="tp_bttm desk_view">
                                    <div className="row">
                                        <div className="col-md-5">
                                            <div className="order_s_1 right_s_1">
                                                <p>Looking for order Bulk?</p>
                                                <h6>Bulk Order</h6>
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
            </section>


            <div className="container dis_mrg_1">
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
                <div className="desk_view">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="dis_help wow fadeInUp">
                                <p>Need help with this product?</p>
                            </div>
                        </div>
                    </div>
                    <div className="deli_info_br wow fadeInUp">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="deli_info info_right">
                                    <img src="/images/phone.png" alt="" />
                                    <p><strong>Give us a call</strong> Mon - Sat 10AM to 7Pm</p>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="deli_info info_right">
                                    <img src="/images/whatsapp.png" alt="" />
                                    <p><strong>Chat with us on whatapp</strong> Mon - Sat 10AM to 7Pm</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="deli_info">
                                    <img src="/images/message.png" alt="" />
                                    <p><strong>Drop us an email</strong> Mon - Sat 10AM to 7Pm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                product.relative.length > 0 &&
                <section className="may_leke_sec">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="inner_main_hadding wow fadeInUp">
                                    <h4>You May Also Like</h4>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div id="may_like" className="owl-carousel wow fadeInUp">
                                    <Products products={product.relative} />
                                </div>
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