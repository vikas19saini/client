import Header from "../header";
import Footer from "../footer";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Head from 'next/head'
import { wrapper } from "../../redux/store";
import Products from "../../components/productCrousel"
import { stockStatus } from "../../components/helpers";
import CartButton from "../../components/cartButon";
import OwlCarousel from 'react-owl-carousel2';
import Image from "next/image"
import Link from "next/link";
import 'react-photoswipe/lib/photoswipe.css';
import { PhotoSwipe } from 'react-photoswipe';
import {
    isMobile
} from "react-device-detect";
import useTranslation from "next-translate/useTranslation"
import { useRouter } from "next/router"

export default function Product(product) {

    let productImages = [...[product.featuredImage], ...product.thumbnails];
    const [openZoom, setOpenZoom] = useState(false);

    const [relativeProducts, setRelativeProducts] = useState([]);
    const { t } = useTranslation()
    const { locale } = useRouter()

    useEffect(() => {
        axios.get(`${process.env.API_URL}products/relative/${product.id}`, {
            headers: {
                lang: locale === 'en' ? "" : locale
            }
        })
            .then((response) => {
                setRelativeProducts(response.data);
            }).catch((err) => {
                console.log(err);
            })
    }, [locale]);

    useEffect(() => {
        productPageInit() // defined in script.js
    }, [locale]);

    return (
        <Fragment>
            <Head>
                <title>{product.metaTitle ? product.metaTitle : product.name}</title>
                <meta name="description" content={product.metaDescription} />
            </Head>
            <Header shadow />
            <PhotoSwipe isOpen={openZoom} items={
                productImages.map((t) => {
                    return {
                        src: t ? t.fullUrl : "/images/placeholder.png",
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
                                            nav: false,
                                            dots: true
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
                                    dots: false,
                                    nav: true,
                                    rewind: true,
                                    navText: ['<button type="button" role="presentation" class="owl-prev"><span aria-label="Previous">‹</span></button>', '<button type="button" role="presentation" class="owl-next"><span aria-label="Next">›</span></button>']
                                }} id="product_slide" className="owl-carousel" >
                                    {
                                        productImages.map((t) => {
                                            return (
                                                <div className="item" key={t ? t.id : Math.random()}>
                                                    <div className="icon_hard">
                                                        <Image quality={100} src={t ? t.fullUrl : "/images/placeholder.png"} height={570} width={680} alt={product.name} onClick={() => setOpenZoom(true)} />
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
                                        <p className="product_details_right_p5">{t("product:product_specification")}</p>
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
                                                    <p>{t("product:bulk")}</p>
                                                    <h6><Link href={`/bulk?productId=${product.id}`}><a style={{ color: "inherit" }}>{t("product:bulk_order")}</a></Link></h6>
                                                </div>
                                            </div>

                                            <div className="col-md-5">
                                                <div className="order_s_1">
                                                    <p>{t("product:sample")}</p>
                                                    <h6><Link href={`/bulk?productId=${product.id}`}><a style={{ color: "inherit" }}>{t("product:swatch")}</a></Link></h6>
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
                                <h1>{t("product:description")}</h1>
                                <p>{product.longDescription}</p>
                            </div>
                        }
                        {
                            product.shortDescription &&
                            <div className="product_dis_1 wow fadeInUp">
                                <h1>{t("product:applications")}</h1>
                                <p>{product.shortDescription}</p>
                            </div>
                        }
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="dis_help wow fadeInUp">
                            <p>{t("product:help")}</p>
                        </div>
                    </div>
                </div>
                <div className="deli_info_br wow fadeInUp">
                    <div className="row">
                        <div className="col-md-4 col-12">
                            <div className="deli_info info_right">
                                <a href="tel:+66-947741515" style={{ color: "inherit", textDecoration: "unset" }}>
                                    <img src="/images/address_icon/mob_i.svg" alt="mobile" />
                                    <p><strong>{t("product:call")}</strong> {t("product:mon_sun")}</p>
                                </a>
                            </div>
                        </div>

                        <div className="col-md-4 col-6  padd_right">
                            <div className="deli_info info_right">
                                <a href="https://api.whatsapp.com/send?phone=+66947741515" style={{ color: "inherit", textDecoration: "unset" }}>
                                    <img src="/images/address_icon/whatsapp.svg" alt="whatsapp" />
                                    <p><strong>{t("product:chat")}</strong> {t("product:mon_sun")}</p>
                                </a>
                            </div>
                        </div>

                        <div className="col-md-4 col-6 padd_left">
                            <div className="deli_info bdr_message">
                                <a href="mailto:support@gandhifabrics.com" style={{ color: "inherit", textDecoration: "unset" }}>
                                    <img src="/images/address_icon/message.svg" alt="message" />
                                    <p><strong>{t("product:drop_email")}</strong></p>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {
                relativeProducts.length > 0 &&
                <section className="sec_padd sec_arrivals">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="secound_hadd_pr inner_main_hadding wow fadeInUp">
                                    <h4>{t("product:related")}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row wow fadeInUp">
                            <div className="col-md-12 padd_0_all">
                                <OwlCarousel options={{
                                    responsive: {
                                        0: {
                                            items: 1.1,
                                            nav: false,
                                        },
                                        568: {
                                            items: 1.1,
                                        },
                                        667: {
                                            items: 3.1,
                                        },
                                        1170: {
                                            items: 3.1
                                        }
                                    },
                                    loop: true,
                                    autoplay: false,
                                    dots: false,
                                    nav: true,
                                    navText: ['<span aria-label="Previous">‹</span>', '<span aria-label="Next">›</span>'],
                                    margin: 10,
                                }} id="arrivals" className="owl-carousel relativeProducts" >
                                    <Products products={relativeProducts} />
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
        const { locale } = context
        let product = await axios.get(`${process.env.API_URL}products/${context.params.slug}`, {
            headers: { lang: locale === "en" ? "" : locale }
        })
        product = product.data;
        product.stockStatus = stockStatus(product)
        return {
            props: product
        }
    } catch (error) {
        return {
            notFound: true,
        }
    }
})