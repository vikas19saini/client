import Head from 'next/head'
import { Fragment, useEffect } from 'react'
import Header from "./header";
import Footer from "./footer";
import axios from "axios";
import { wrapper } from '../redux/store';
import Products from "../components/productCrousel"
import { useRouter } from "next/router";
import Link from 'next/dist/client/link';
import OwlCarousel from 'react-owl-carousel2';
import useTranslation from 'next-translate/useTranslation';

export default function Home(props) {

  const route = useRouter();
  const { pathname } = route
  const { t } = useTranslation()

  return (
    <Fragment>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.metaDescription} />
      </Head>
      <Header />

      <div className="wow fadeInUp">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="customers-testimonials">
                <OwlCarousel options={{
                  items: 1,
                  slideSpeed: 2000,
                  nav: false,
                  autoplay: false,
                  dots: true,
                  loop: true,
                  responsiveRefreshRate: 200,
                }} id="big" className="owl-carousel owl-theme">
                  {
                    props.sliders.map((slider) => {
                      return (
                        <div className="item" key={slider.id}>
                          <img src={slider.mobileMedia.fullUrl} alt={slider.heading} className="img-fluid mob_view" />
                          <div className="inner_txt">
                            <h1>{slider.heading}</h1>
                            <p>{slider.description}</p>
                            <button type="button" onClick={() => route.push(slider.uri)} className="learn_bttn">{t("common:learn_more")}</button>
                          </div>
                        </div>
                      );
                    })
                  }
                </OwlCarousel>
              </div>
            </div>
            <div className="col-md-9">
              <OwlCarousel options={{
                items: 1,
                slideSpeed: 2000,
                nav: false,
                autoplay: false,
                dots: true,
                loop: true,
                responsiveRefreshRate: 200,
              }} id="thumbs" className="owl-carousel owl-theme">
                {
                  props.sliders.map((slider) => {
                    return (
                      <div className="item" key={slider.id}>
                        <img src={slider.media.fullUrl} alt={slider.heading} className="img-fluid" />
                      </div>
                    )
                  })
                }
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div >

      <div className="container">
        <div className="sec_padd mob_padd_0">
          <div className="row">
            <div className="col-md-12">
              <div className="inner_main_hadding">
                <h4>{t("home:what_you_wanna_make")}</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 mrg_0">
              <OwlCarousel options={{
                loop: true,
                autoplay: false,
                dots: false,
                nav: false,
                margin: 0,
                responsive: {
                  0: {
                    items: 3.6,
                  },
                  568: {
                    items: 3.2,
                  },
                  667: {
                    items: 4.2,
                  },
                  1170: {
                    items: 5,
                  }
                }
              }} id="looking_make" className="flx_delection custom_icon owl-carousel owl-theme">
                <div className="item">
                  <div className="lk_make">
                    <Link href="/search?query=dresses">
                      <a>
                        <img src="images/icon_menu/dresses.svg" alt="gandhi fabrics" />
                        <p>{t("common:dresses")}</p>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="item">
                  <div className="lk_make">
                    <Link href="/search?query=blouses">
                      <a>
                        <img src="images/icon_menu/blouses.svg" alt="gandhi fabrics" />
                        <p>{t("common:blouses")}</p>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="item">
                  <div className="lk_make">
                    <Link href="/search?query=skirts">
                      <a>
                        <img src="images/icon_menu/skirts.svg" alt="gandhi fabrics" />
                        <p>{t("common:skirts")}</p>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="item">
                  <div className="lk_make">
                    <Link href="/search?query=jackts">
                      <a>
                        <img src="images/icon_menu/jackts.svg" alt="gandhi fabrics" />
                        <p>{t("common:jackets")}</p>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="item">
                  <div className="lk_make">
                    <Link href="/search?query=suiting">
                      <a>
                        <img src="images/icon_menu/suiting.svg" alt="gandhi fabrics" />
                        <p>{t("common:suiting")}</p>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="item">
                  <div className="lk_make">
                    <Link href="/search?query=bridal">
                      <a>
                        <img src="images/icon_menu/bridal.svg" alt="gandhi fabrics" />
                        <p>{t("common:bridal")}</p>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="item">
                  <div className="lk_make">
                    <Link href="/search?query=trousers">
                      <a>
                        <img src="images/icon_menu/trousers.svg" alt="gandhi fabrics" />
                        <p>{t("common:trousers")}</p>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="item">
                  <div className="lk_make">
                    <Link href="/search?query=shirts">
                      <a>
                        <img src="images/icon_menu/shirts.svg" alt="gandhi fabrics" />
                        <p>{t("common:shirts")}</p>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="item">
                  <div className="lk_make">
                    <Link href="/search?query=scarves">
                      <a>
                        <img src="images/icon_menu/scarves.svg" alt="gandhi fabrics" />
                        <p>{t("common:scarves")}</p>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="item">
                  <div className="lk_make">
                    <Link href="/search?query=kids">
                      <a>
                        <img src="images/icon_menu/kids.svg" alt="gandhi fabrics" />
                        <p>{t("common:kids")}</p>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="item">
                  <div className="lk_make">
                    <Link href="/search?query=women">
                      <a>
                        <img src="images/icon_menu/women.svg" alt="gandhi fabrics" />
                        <p>{t("common:women")}</p>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="item">
                  <div className="lk_make">
                    <Link href="/search?query=men">
                      <a>
                        <img src="images/icon_menu/men.svg" alt="gandhi fabrics" />
                        <p>{t("common:men")}</p>
                      </a>
                    </Link>
                  </div>
                </div>

              </OwlCarousel>
            </div>
          </div>
        </div>
      </div >

      <section className="sec_padd sec_bg">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="inner_main_hadding">
                <h4>{t("home:bestseller_categories")}</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <OwlCarousel options={{
                loop: true,
                autoplay: false,
                dots: true,
                nav: true,
                margin: 40,
                navText: ["<img src='/images/new_img/left.png'>", "<img src='/images/new_img/right.png'>"],
                responsive: {
                  0: {
                    items: 1.2,
                    margin: 20,
                  },
                  568: {
                    items: 1.2,
                  },
                  667: {
                    items: 2,
                  },
                  1170: {
                    items: 2,
                  }
                }
              }} className="custom_icon owl-carousel owl-theme mrg_200">
                <div className="item">
                  <img src="images/new_img/20210918_141109_0000.jpg" alt="Gandhi Fabrics" className="img-fluid" />
                  <div className="top_space">
                    <div className="sld_bttm_tx">
                      <Link href="/category/jacquards">
                        <a>
                          <h3>{t("home:jacquard_fabrics")}</h3>
                          <p>{t("home:jacquard_fabrics_description")}</p>
                        </a>
                      </Link>
                    </div>
                    <button onClick={() => route.push("/category/jacquards")} type="button" className="shop_bttn">Explore</button>
                  </div>
                </div>
                <div className="item">
                  <img src="images/new_img/20210918_141328_0000.jpg" alt="Gandhi Fabrics" className="img-fluid" />
                  <div className="top_space">
                    <div className="sld_bttm_tx">
                      <Link href="/category/satin">
                        <a>
                          <h3>{t("home:satin_fabrics")}</h3>
                          <p>{t("home:satin_fabrics_description")}</p>
                        </a>
                      </Link>
                    </div>
                    <button type="button" onClick={() => route.push("/category/satin")} className="shop_bttn">Explore</button>
                  </div>
                </div>
                <div className="item">
                  <img src="images/new_img/20210918_141421_0000.jpg" alt="Gandhi Fabrics" className="img-fluid" />
                  <div className="top_space">
                    <div className="sld_bttm_tx">
                      <Link href="/category/prints/silk-prints">
                        <a>
                          <h3>{t("home:silk_prints")}</h3>
                          <p>{t("home:silk_prints_description")}</p>
                        </a>
                      </Link>
                    </div>
                    <button onClick={() => route.push("/category/prints/silk-prints")} type="button" className="shop_bttn">Explore</button>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="inner_main_hadding">
                <h4>{t("home:explore_favourites")}</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="banner_sec_md mrg_85">
                <img src="/images/new_img/img_3.jpg" alt="Gandhi Fabrics" className="img-fluid desk_view" />
                <img src="/images/new_img/mob_1.jpg" alt="Gandhi Fabrics" className="img-fluid mob_view" />
                <div className="banner_overlay_tx">
                  <h3>{t("home:explore_favourites_description")}</h3>
                  <button onClick={() => route.push("/category/bestsellers")} type="button" className="shop_bttn flt_none">{t("home:view_all_products")}</button>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="inner_main_hadding">
                <h4>{t("home:recommended_for_you")}</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <OwlCarousel options={{
                loop: true,
                autoplay: false,
                dots: false,
                nav: true,
                margin: 20,
                navText: ["<img src='/images/new_img/left.png'>", "<img src='/images/new_img/right.png'>"],
                responsive: {
                  0: {
                    items: 1.4,
                  },
                  568: {
                    items: 1.2,
                  },
                  667: {
                    items: 2,
                  },
                  1170: {
                    items: 3,
                  }
                }
              }} className="custom_icon mrg_113 cus_icon_size owl-carousel owl-theme">
                <Products products={props.recomm} />
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>


      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="inner_main_hadding sec_padd">
                <h4>{t("home:all_about_laces")}</h4>
              </div>
            </div>
            <div className="col-md-12">
              <div className="banner_sec_md mrg_63">
                <img src="/images/new_img/20210918_142501_0000.jpg" alt="Gandhi Fabrics" className="img-fluid desk_view" />
                <img src="/images/new_img/20210918_142559_0000.jpg" alt="Gandhi Fabrics" className="img-fluid mob_view mob_curb" />
                <div className="clr_tx_img">
                  <div className="trans_bg_clr">
                    <h3>{t("home:laces")}</h3>
                    <p>{t("home:laces_description")}</p>
                    <button onClick={() => route.push("/category/lace")} type="button" className="shop_bttn flt_none">{t("home:view_all_products")}</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="inner_main_hadding sec_padd">
              <h4>{t("home:trending_in_laces")}</h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <OwlCarousel options={{
              loop: true,
              autoplay: false,
              dots: true,
              nav: true,
              margin: 40,
              navText: ["<img src='/images/new_img/left.png'>", "<img src='/images/new_img/right.png'>"],
              responsive: {
                0: {
                  items: 1.2,
                  margin: 20,
                },
                568: {
                  items: 1.2,
                },
                667: {
                  items: 2,
                },
                1170: {
                  items: 2,
                }
              }
            }} className="custom_icon mrg_113 owl-carousel owl-theme">
              <div className="item">
                <img src="images/new_img/20210918_143051_0000.jpg" alt="Gandhi Fabrics" className="img-fluid" />
                <div className="top_space">
                  <div className="sld_bttm_tx">
                    <Link href="/category/lace/french-laces">
                      <a>
                        <h3>{t("home:french_laces")}</h3>
                        <p>{t("home:french_laces_description")}</p>
                      </a>
                    </Link>
                  </div>
                  <button onClick={() => route.push("/category/lace/french-laces")} type="button" className="shop_bttn">Explore</button>
                </div>
              </div>
              <div className="item">
                <img src="images/new_img/20210918_143139_0000.jpg" alt="Gandhi Fabrics" className="img-fluid" />
                <div className="top_space">
                  <div className="sld_bttm_tx">
                    <Link href="/category/lace/3d-laces">
                      <a>
                        <h3>{t("home:3D_laces")}</h3>
                        <p>{t("home:3D_laces_description")}</p>
                      </a>
                    </Link>
                  </div>
                  <button onClick={() => route.push("/category/lace/3d-laces")} type="button" className="shop_bttn">Explore</button>
                </div>
              </div>
              <div className="item">
                <img src="images/new_img/20210918_143228_0000.jpg" alt="Gandhi Fabrics" className="img-fluid" />
                <div className="top_space">
                  <div className="sld_bttm_tx">
                    <Link href="/category/lace/metallic-laces">
                      <a>
                        <h3>{t("home:metallic_laces")}</h3>
                        <p>{t("home:metallic_laces_description")}</p>
                      </a>
                    </Link>
                  </div>
                  <button onClick={() => route.push("/category/lace/metallic-laces")} type="button" className="shop_bttn">Explore</button>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>


      <section className="sec_padd sec_bg">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="inner_main_hadding">
                <h4>{t("home:latest_in_laces")}</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <OwlCarousel options={{
                loop: true,
                autoplay: false,
                nav: true,
                margin: 20,
                navText: ["<img src='/images/new_img/left.png'>", "<img src='/images/new_img/right.png'>"],
                responsive: {
                  0: {
                    items: 1.4,
                    dots: true,
                  },
                  568: {
                    items: 1.2,
                    dots: true,
                  },
                  667: {
                    items: 2.2,
                    dots: true,
                  },
                  1170: {
                    items: 3,
                    dots: false,
                  }
                }
              }} className="custom_icon cus_icon_size cus_dots mrg_113 owl-carousel owl-theme">
                <Products products={props.lace} />
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>


      <section className="natural_fab">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="inner_main_hadding">
                <h4>{t("home:popular_fabrics")}</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="main_flx mrg_top_113">
                <div className><img src="images/new_img/20210918_144728_0000.jpg" className="img-fluid desk_view" /></div>
                <div className="mob_curb"><img src="images/new_img/20210918_144800_0000.jpg" className="img-fluid mob_view" /></div>
                <div className="align_c">
                  <div className="sub_natural sld_bttm_tx">
                    <div className="bg_overlay">
                      <h4>{t("home:the_suiting_collection")}</h4>
                      <p>{t("home:the_suiting_collection_description")}</p>
                      <button onClick={() => route.push("/category/suiting")} type="button" className="shop_bttn flt_none">{t("common:discover_more")}</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="main_flx mrg_top_113">
                <div className="align_c">
                  <div className><img src="images/new_img/20210918_145302_0000.jpg" className="img-fluid desk_view" /></div>
                  <div className="mob_curb"><img src="images/new_img/20210918_145340_0000.jpg" className="img-fluid mob_view" /></div>
                  <div className="align_c">
                    <div className="sub_natural sld_bttm_tx">
                      <div className="bg_overlay">
                        <h4>{t("home:plain_dyed_fabric_collection")}</h4>
                        <p>{t("home:plain_dyed_fabric_collection_description")}</p>
                        <button onClick={() => route.push("/category/bestsellers/plain-dyed-best")} type="button" className="shop_bttn flt_none">{t("common:discover_more")}</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="main_flx mrg_top_113">
                <div className><img src="images/new_img/20210918_145022_0000.jpg" className="img-fluid desk_view" /></div>
                <div className="mob_curb"><img src="images/new_img/20210918_145115_0000.jpg" className="img-fluid mob_view" /></div>
                <div className="align_c">
                  <div className="sub_natural sld_bttm_tx">
                    <div className="bg_overlay">
                      <h4>{t("home:natural_fabrics")}</h4>
                      <p>{t("home:natural_fabrics_description")}</p>
                      <button onClick={() => route.push("/category/natural")} type="button" className="shop_bttn flt_none">{t("common:discover_more")}</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="upto50 mrg_63">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="inner_main_hadding">
                <h4>{t("home:special_deals")}</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 mob_padd_0">
              <div className="banner_sec_md">
                <Link href="/sale">
                  <a className="desk_view">
                    <img src="images/new_img/20210918_144112_0000.jpg" alt="Gandhi Fabrics" className="img-fluid" />
                  </a>
                </Link>
                <Link href="/sale">
                  <a className="mob_view">
                    <img src="images/new_img/20210918_144030_0000.jpg" alt="Gandhi Fabrics" className="img-fluid" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <OwlCarousel options={{
              loop: true,
              autoplay: false,
              nav: true,
              margin: 20,
              navText: ["<img src='/images/new_img/left.png'>", "<img src='/images/new_img/right.png'>"],
              responsive: {
                0: {
                  items: 1.4,
                  dots: true,
                },
                568: {
                  items: 1.2,
                  dots: true,
                },
                667: {
                  items: 2.2,
                  dots: true,
                },
                1170: {
                  items: 3,
                  dots: false,
                }
              }
            }} className="custom_icon cus_icon_size cus_dots mrg_113 owl-carousel owl-theme">
              <Products products={props.sale} />
            </OwlCarousel>
          </div>
        </div>
      </div>


      <section className="sec_bg mrg_120">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="inner_main_hadding">
                <h4>{t("home:wedding_fabrics")}</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="banner_sec_md">
                <img src="/images/new_img/img_9.png" alt="Gandhi Fabrics" className="img-fluid desk_view" />
                <img src="/images/new_img/bg_slide.png" alt="Gandhi Fabrics" className="img-fluid mob_view" />
                <div className="clr_tx_img">
                  <div className="trans_bg_clr">
                    <h3>{t("home:wedding_fabrics_heading")}</h3>
                    <p>{t("home:wedding_fabrics_description")}</p>
                    <button onClick={() => route.push("/search?query=wedding")} type="button" className="shop_bttn flt_none">{t("home:discover_collection")}</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="seasons">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="inner_main_hadding sec_padd">
                <h4>{t("common:seasons")}</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="main_flx">
                <div className="col_6 width_full_mob mob_view"><img src="images/new_img/img_13.png" className="img-fluid" /></div>
                <div className="align_c col_6 width_full_mob bg_full bttm_sping_space">
                  <div className="sub_natural sping_autumm sld_bttm_tx">
                    <h4>{t("home:spring_summer")}</h4>
                    <p>{t("home:spring_summer_description")}</p>
                    <button onClick={() => route.push("/search?query=Summer")} type="button" className="shop_bttn flt_none">{t("home:discover_collection")}</button>
                  </div>
                </div>
                <div className="col_6 width_full_mob desk_view"><img src="images/new_img/img_13.png" className="img-fluid" /></div>
              </div>
              <div className="main_flx seasons">
                <div className="col_6 width_full_mob mob_view"><img src="images/new_img/image_9.png" className="img-fluid" /></div>
                <div className="align_c col_6 width_full_mob bg_full">
                  <div className="sub_natural sping_autumm sld_bttm_tx">
                    <h4>{t("home:autumn_winter")}</h4>
                    <p>{t("home:autumn_winter_description")}</p>
                    <button onClick={() => route.push("/search?query=Autumn")} type="button" className="shop_bttn flt_none">{t("home:discover_collection")}</button>
                  </div>
                </div>
                <div className="col_6 width_full_mob desk_view"><img src="images/new_img/image_9.png" className="img-fluid" /></div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="mrg_120">
        <div className="sec_padd sec_bg">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="inner_main_hadding">
                  <h4>{t("home:just_arrived")}</h4>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <OwlCarousel options={{
                  responsive: {
                    0: {
                      items: 1.4,
                      dots: true,
                    },
                    568: {
                      items: 1.2,
                      dots: true,
                    },
                    667: {
                      items: 2.2,
                      dots: true,
                    },
                    1170: {
                      items: 3,
                      dots: false,
                    }
                  },
                  loop: true,
                  autoplay: false,
                  nav: true,
                  margin: 20,
                  navText: ["<img src='/images/new_img/left.png'>", "<img src='/images/new_img/right.png'>"],
                }} className="custom_icon cus_icon_size cus_dots mrg_113 owl-carousel owl-theme" >
                  <Products products={props.products} />
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="inner_main_hadding insta_head">
              <h4>{t("home:instafeed")}</h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="section-padding mrg_113">
              <OwlCarousel options={{
                responsive: {
                  0: {
                    items: 1.3,
                  },
                  568: {
                    items: 1.2,
                  },
                  667: {
                    items: 3,
                  },
                  1170: {
                    items: 3.2,
                  }
                },
                center: true,
                margin: 20
              }} id="screenshot_slider" className="screenshot_slider owl-carousel owl-theme">
                <div className="item" key={1}>
                  <img src="/images/new_img/img_14.png" alt="Gandhi Fabrics" />
                </div>
                <div className="item" key={2}>
                  <img src="/images/new_img/img_15.png" alt="Gandhi Fabrics" />
                </div>
                <div className="item" key={3}>
                  <img src="/images/new_img/img_16.png" alt="Gandhi Fabrics" />
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment >
  )
}


export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    const { locale } = context

    const config = { headers: { lang: locale === "en" ? "" : locale } }

    let response = await axios.get(process.env.API_URL + "static")
    let data = response.data;

    let products = await axios.get(process.env.API_URL + "products/new", config);
    products = products.data;

    let laceResponse = await axios.get(`${process.env.API_URL}category/products/lace-trends?limit=30&offset=0&sort=createdAtDesc`, config);
    let discountedProducts = await axios.get(process.env.API_URL + "products/new?filterBy=discounted", config);
    let recommendedProducts = await axios.get(process.env.API_URL + "products/new?sort=ragularPriceAsc", config);

    data.products = products;
    data.lace = laceResponse.data.rows;
    data.sale = discountedProducts.data;
    data.recomm = recommendedProducts.data

    return {
      props: data
    }
  }
);

