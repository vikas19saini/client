import Head from 'next/head'
import { Fragment, useEffect } from 'react'
import Header from "./header";
import Footer from "./footer";
import axios from "axios";
import { wrapper } from '../redux/store';
import Products from "../components/productCrousel"
import { useRouter } from "next/router";
import Link from 'next/dist/client/link';

export default function Home(props) {

  const route = useRouter();

  useEffect(() => {
    homePageInit() // defined in script.js
  })

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
                <div id="big" className="owl-carousel owl-theme">

                  {
                    props.sliders.map((slider) => {
                      return (
                        <div className="item" key={slider.id}>
                          <img src={slider.mobileMedia.fullUrl} alt={slider.heading} className="img-fluid mob_view" />
                          <div className="inner_txt">
                            <h1>{slider.heading}</h1>
                            <p>{slider.description}</p>
                            <button type="button" onClick={() => route.push(slider.uri)} className="learn_bttn">Learn more</button>
                          </div>
                        </div>
                      );
                    })
                  }

                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div id="thumbs" className="owl-carousel owl-theme">
                {
                  props.sliders.map((slider) => {
                    return (
                      <div className="item" key={slider.id}>
                        <img src={slider.media.fullUrl} alt={slider.heading} className="img-fluid" />
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="sec_padd mob_padd_0">
          <div className="row">
            <div className="col-md-12">
              <div className="inner_main_hadding">
                <h4>What do you want to make?</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 mrg_0">
              <div id="looking_make" className="flx_delection custom_icon owl-carousel owl-theme">
                <div className="item">
                  <div className="lk_make">
                    <Link href="/search?query=dresses">
                      <a>
                        <img src="images/icon_menu/dresses.svg" alt="gandhi fabrics" />
                        <p>Dresses</p>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="item">
                  <div className="lk_make">
                    <Link href="/search?query=blouses">
                      <a>
                        <img src="images/icon_menu/blouses.svg" alt="gandhi fabrics" />
                        <p>Blouses</p>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="item">
                  <div className="lk_make">
                    <Link href="/search?query=skirts">
                      <a>
                        <img src="images/icon_menu/skirts.svg" alt="gandhi fabrics" />
                        <p>Skirts</p>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="item">
                  <div className="lk_make">
                    <Link href="/search?query=jackts">
                      <a>
                        <img src="images/icon_menu/jackts.svg" alt="gandhi fabrics" />
                        <p>Jackets</p>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="item">
                  <div className="lk_make">
                    <Link href="/search?query=suiting">
                      <a>
                        <img src="images/icon_menu/suiting.svg" alt="gandhi fabrics" />
                        <p>Suiting</p>
                      </a>
                    </Link>
                  </div>

                </div>
                <div className="item">
                  <div className="lk_make">
                    <Link href="/search?query=bridal">
                      <a>
                        <img src="images/icon_menu/bridal.svg" alt="gandhi fabrics" />
                        <p>Bridal</p>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="item">
                  <div className="lk_make">
                    <Link href="/search?query=trousers">
                      <a>
                        <img src="images/icon_menu/trousers.svg" alt="gandhi fabrics" />
                        <p>Trousers</p>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="item">
                  <div className="lk_make">
                    <Link href="/search?query=shirts">
                      <a>
                        <img src="images/icon_menu/shirts.svg" alt="gandhi fabrics" />
                        <p>Shirts</p>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="item">
                  <div className="lk_make">
                    <Link href="/search?query=scarves">
                      <a>
                        <img src="images/icon_menu/scarves.svg" alt="gandhi fabrics" />
                        <p>Scarves</p>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="item">
                  <div className="lk_make">
                    <Link href="/search?query=kids">
                      <a>
                        <img src="images/icon_menu/kids.svg" alt="gandhi fabrics" />
                        <p>Kids</p>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="item">
                  <div className="lk_make">
                    <Link href="/search?query=women">
                      <a>
                        <img src="images/icon_menu/women.svg" alt="gandhi fabrics" />
                        <p>Women</p>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="item">
                  <div className="lk_make">
                    <Link href="/search?query=men">
                      <a>
                        <img src="images/icon_menu/men.svg" alt="gandhi fabrics" />
                        <p>Men</p>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="sec_padd sec_bg">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="inner_main_hadding">
                <h4>Bestseller Categories</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div id="best_sellers" className="custom_icon owl-carousel owl-theme mrg_200">
                <div className="item">
                  <img src="images/new_img/20210918_141109_0000.jpg" alt="Gandhi Fabrics" className="img-fluid" />
                  <div className="top_space">
                    <div className="sld_bttm_tx">
                      <Link href="/category/jacquards">
                        <a>
                          <h3>Jacquard Fabrics</h3>
                          <p>Intricately patterned fabrics in silk and blends. <span>A beautiful selection for special
                            occasions.</span></p>
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
                          <h3>Satin Fabrics</h3>
                          <p>Popular fabrics for all occasions, our range has <span>a wide variety in silk, blends and
                            more.</span></p>
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
                          <h3>Silk Prints</h3>
                          <p>The trendiest prints you can find anywhere! <span>Browse our collection today.</span></p>
                        </a>
                      </Link>
                    </div>
                    <button onClick={() => route.push("/category/prints/silk-prints")} type="button" className="shop_bttn">Explore</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="inner_main_hadding">
                <h4>Explore Our Favourites</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="banner_sec_md mrg_85">
                <img src="/images/new_img/img_3.jpg" alt="Gandhi Fabrics" className="img-fluid desk_view" />
                <img src="/images/new_img/mob_1.jpg" alt="Gandhi Fabrics" className="img-fluid mob_view" />
                <div className="banner_overlay_tx">
                  <h3>Experience our exclusive <span>Best-selling fabrics.</span></h3>
                  <button onClick={() => route.push("/category/bestsellers")} type="button" className="shop_bttn flt_none">View all Products</button>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="inner_main_hadding">
                <h4>Recommended For You</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div id="fabric" className="custom_icon mrg_113 cus_icon_size owl-carousel owl-theme">
                <Products products={props.products} />
              </div>
            </div>
          </div>
        </div>
      </section>


      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="inner_main_hadding sec_padd">
                <h4>All About Laces</h4>
              </div>
            </div>
            <div className="col-md-12">
              <div className="banner_sec_md mrg_63">
                <img src="/images/new_img/20210918_142501_0000.jpg" alt="Gandhi Fabrics" className="img-fluid desk_view" />
                <img src="/images/new_img/20210918_142559_0000.jpg" alt="Gandhi Fabrics" className="img-fluid mob_view mob_curb" />
                <div className="clr_tx_img">
                  <div className="trans_bg_clr">
                    <h3>Laces</h3>
                    <p>Delicate and Intricate Lace fabrics <span>from all over the world.</span></p>
                    <button onClick={() => route.push("/category/lace")} type="button" className="shop_bttn flt_none">View all Products</button>
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
              <h4>Trending in Laces</h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div id="best_sellers_1" className="custom_icon mrg_113 owl-carousel owl-theme">
              <div className="item">
                <img src="images/new_img/20210918_143051_0000.jpg" alt="Gandhi Fabrics" className="img-fluid" />
                <div className="top_space">
                  <div className="sld_bttm_tx">
                    <Link href="/category/lace/french-laces">
                      <a>
                        <h3>French Laces</h3>
                        <p>Famous for their delicacy and craftsmanship, <span>with different patterns,techniques and
                          fibres.</span></p>
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
                        <h3>3D Laces</h3>
                        <p>Laces with beads, sequins, appliques and many <span>more interesting embellishments, these laces
                          are</span><span> decadent in their beauty.</span></p>
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
                        <h3>Metallic Laces</h3>
                        <p>Made with metallic thread in the base or as <span>embroidery, these laces are always in
                          trend.</span></p>
                      </a>
                    </Link>
                  </div>
                  <button onClick={() => route.push("/category/lace/metallic-laces")} type="button" className="shop_bttn">Explore</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <section className="sec_padd sec_bg">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="inner_main_hadding">
                <h4>Latest in Laces</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div id="fabric_1" className="custom_icon cus_icon_size cus_dots mrg_113 owl-carousel owl-theme">
                <Products products={props.lace} />
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="natural_fab">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="inner_main_hadding">
                <h4>Popular Fabrics</h4>
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
                      <h4>The Suiting Collection</h4>
                      <p>Our Collection of the world's finest fabrics For suiting and shirting</p>
                      <button onClick={() => route.push("/category/suiting")} type="button" className="shop_bttn flt_none">Discover More</button>
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
                        <h4>Our Plain Dyed Fabric Collection</h4>
                        <p>A Vast Selection Of Solid, Plain Dyed Fabrics In Cotton,Silk and Blends</p>
                        <button onClick={() => route.push("/category/bestsellers/plain-dyed-best")} type="button" className="shop_bttn flt_none">Discover More</button>
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
                      <h4>Our Natural Fabrics</h4>
                      <p>Beautiful Fabrics made from 100% Natural Fibres.</p>
                      <button onClick={() => route.push("/category/natural")} type="button" className="shop_bttn flt_none">Discover More</button>
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
                <h4>Special Deals</h4>
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
            <div id="fabric_2" className="custom_icon cus_icon_size cus_dots mrg_113 owl-carousel owl-theme">
              <Products products={props.sale} />
            </div>
          </div>
        </div>
      </div>


      <section className="sec_bg mrg_120">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="inner_main_hadding">
                <h4>Wedding Fabrics</h4>
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
                    <h3>Wedding Fabric Collection</h3>
                    <p>A collection to make your day beautiful <span>and fulfill your dreams.</span></p>
                    <button onClick={() => route.push("/search?query=wedding")} type="button" className="shop_bttn flt_none">Discover Collection</button>
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
                <h4>Seasons</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="main_flx">
                <div className="col_6 width_full_mob mob_view"><img src="images/new_img/img_13.png" className="img-fluid" /></div>
                <div className="align_c col_6 width_full_mob bg_full bttm_sping_space">
                  <div className="sub_natural sping_autumm sld_bttm_tx">
                    <h4>Spring / Summer</h4>
                    <p>Our collection of fabrics for Spring/Summer feature the very best in sheer fabrics. Our collection of
                      cotton and other natural fabrics is unsurpassed. We bring to you the best in innovative and trending
                      fabrics from all over the world.</p>
                    <button onClick={() => route.push("/search?query=Summer")} type="button" className="shop_bttn flt_none">View Collection</button>
                  </div>
                </div>
                <div className="col_6 width_full_mob desk_view"><img src="images/new_img/img_13.png" className="img-fluid" /></div>
              </div>
              <div className="main_flx seasons">
                <div className="col_6 width_full_mob mob_view"><img src="images/new_img/image_9.png" className="img-fluid" /></div>
                <div className="align_c col_6 width_full_mob bg_full">
                  <div className="sub_natural sping_autumm sld_bttm_tx">
                    <h4>Autumn / Winter</h4>
                    <p>Our collection of fabrics for Autumn/Winter, showcase some of the very finest wool fabrics; the very
                      latest in fashionable jacquards and textured fabrics as well as other luxurious and exclusive fabrics.
                      All these and much more.</p>
                    <button onClick={() => route.push("/search?query=Autumn")} type="button" className="shop_bttn flt_none">View Collection</button>
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
                  <h4>Just Arrived</h4>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div id="just" className="custom_icon cus_icon_size cus_dots mrg_113 owl-carousel owl-theme">
                  <Products products={props.products} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="inner_main_hadding insta_head">
              <h4>Instafeed</h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="section-padding mrg_113">
              <div id="screenshot_slider" className="screenshot_slider owl-carousel owl-theme">
                <div className="item">
                  <img src="/images/new_img/img_14.png" alt="Gandhi Fabrics" />
                </div>
                <div className="item">
                  <img src="/images/new_img/img_15.png" alt="Gandhi Fabrics" />
                </div>
                <div className="item">
                  <img src="/images/new_img/img_16.png" alt="Gandhi Fabrics" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </Fragment>
  )
}


export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {

    let response = await axios.get(process.env.API_URL + "static")
    let data = response.data;

    let products = await axios.get(process.env.API_URL + "products/new");
    products = products.data;

    let laceResponse = await axios.get(`${process.env.API_URL}category/products/lace-trends?limit=30&offset=0&sort=createdAtDesc`);
    let discountedProducts = await axios.get(process.env.API_URL + "products/new?filterBy=discounted");

    data.products = products;
    data.lace = laceResponse.data.rows;
    data.sale = discountedProducts.data;

    return {
      props: data
    }
  }
);

