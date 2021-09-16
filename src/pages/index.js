import Head from 'next/head'
import { Fragment, useEffect } from 'react'
import Header from "./header";
import Footer from "./footer";
import axios from "axios";
import { wrapper } from '../redux/store';
import Products from "../components/productCrousel"
import { useRouter } from "next/router";

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

      <div className="outer wow fadeInUp">
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

      <a href="#scroll" onClick={() => scrollDown()} className="scroll-down mob_view" address="true">
        <img src="images/arrow.png" alt="gandhi fabrics" /><span>scroll
          down</span></a>


      <div className="container">
        <div className="sec_padd mob_padd_0">
          <div className="row">
            <div className="col-md-12">
              <div className="inner_main_hadding wow fadeInUp">
                <h4>What do you want to make?</h4>
              </div>
            </div>
          </div>
          <div className="row wow fadeInUp">
            <div className="col-md-10 mrg_0">
              <div id="looking_make" className="flx_delection custom_icon owl-carousel owl-theme">
                <div className="item">
                  <div className="lk_make">
                    <img src="images/icon_menu/dresses.svg" alt="gandhi fabrics" />
                    <p>Dresses</p>
                  </div>
                </div>
                <div className="item">
                  <div className="lk_make">
                    <img src="images/icon_menu/blouses.svg" alt="gandhi fabrics" />
                    <p>Blouses</p>
                  </div>
                </div>
                <div className="item">
                  <div className="lk_make">
                    <img src="images/icon_menu/skirts.svg" alt="gandhi fabrics" />
                    <p>Skirts</p>
                  </div>
                </div>
                <div className="item">
                  <div className="lk_make">
                    <img src="images/icon_menu/jackts.svg" alt="gandhi fabrics" />
                    <p>Jackts</p>
                  </div>
                </div>
                <div className="item">
                  <div className="lk_make">
                    <img src="images/icon_menu/suiting.svg" alt="gandhi fabrics" />
                    <p>Suiting</p>
                  </div>
                </div>
                <div className="item">
                  <div className="lk_make">
                    <img src="images/icon_menu/bridal.svg" alt="gandhi fabrics" />
                    <p>Bridal</p>
                  </div>
                </div>
                <div className="item">
                  <div className="lk_make">
                    <img src="images/icon_menu/trousers.svg" alt="gandhi fabrics" />
                    <p>Trousers</p>
                  </div>
                </div>
                <div className="item">
                  <div className="lk_make">
                    <img src="images/icon_menu/shirts.svg" alt="gandhi fabrics" />
                    <p>Shirts</p>
                  </div>
                </div>
                <div className="item">
                  <div className="lk_make">
                    <img src="images/icon_menu/scarves.svg" alt="gandhi fabrics" />
                    <p>Scarves</p>
                  </div>
                </div>
                <div className="item">
                  <div className="lk_make">
                    <img src="images/icon_menu/kids.svg" alt="gandhi fabrics" />
                    <p>Kids</p>
                  </div>
                </div>
                <div className="item">
                  <div className="lk_make">
                    <img src="images/icon_menu/women.svg" alt="gandhi fabrics" />
                    <p>Women</p>
                  </div>
                </div>
                <div className="item">
                  <div className="lk_make">
                    <img src="images/icon_menu/men.svg" alt="gandhi fabrics" />
                    <p>Men</p>
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
              <div className="inner_main_hadding wow fadeInUp">
                <h4>Bestsellers</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div id="best_sellers" className="custom_icon owl-carousel owl-theme mrg_200 wow fadeInUp">
                <div className="item">
                  <img src="images/new_img/img_1.png" alt="gandhi fabrics" className="img-fluid" />
                  <div className="top_space">
                    <div className="sld_bttm_tx">
                      <a href="#">
                        <h3>Cotton Prints</h3>
                        <p>Beautiful Fabrics made from 100% <span>Natural Fibres.</span></p>
                      </a>
                    </div>
                    <button type="button" className="shop_bttn">Shop Now</button>
                  </div>
                </div>
                <div className="item">
                  <img src="images/new_img/img_2.png" alt="gandhi fabrics" className="img-fluid" />
                  <div className="top_space">
                    <div className="sld_bttm_tx">
                      <a href="#">
                        <h3>Cotton Prints</h3>
                        <p>Beautiful Fabrics made from 100% <span>Natural Fibres.</span></p>
                      </a>
                    </div>
                    <button type="button" className="shop_bttn">Shop Now</button>
                  </div>
                </div>
                <div className="item">
                  <img src="images/new_img/img_1.png" alt="gandhi fabrics" className="img-fluid" />
                  <div className="top_space">
                    <div className="sld_bttm_tx">
                      <a href="#">
                        <h3>Cotton Prints</h3>
                        <p>Beautiful Fabrics made from 100% <span>Natural Fibres.</span></p>
                      </a>
                    </div>
                    <button type="button" className="shop_bttn">Shop Now</button>
                  </div>
                </div>
                <div className="item">
                  <img src="images/new_img/img_2.png" alt="gandhi fabrics" className="img-fluid" />
                  <div className="top_space">
                    <div className="sld_bttm_tx">
                      <a href="#">
                        <h3>Cotton Prints</h3>
                        <p>Beautiful Fabrics made from 100% <span>Natural Fibres.</span></p>
                      </a>
                    </div>
                    <button type="button" className="shop_bttn">Shop Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="inner_main_hadding wow fadeInUp">
                <h4>Explore our favourites</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="banner_sec_md mrg_85 wow fadeInUp">
                <img src="images/new_img/img_3.png" alt="gandhi fabrics" className="img-fluid desk_view" />
                <img src="images/new_img/mob_1.png" alt="gandhi fabrics" className="img-fluid mob_view" />
                <div className="banner_overlay_tx">
                  <h3>Experience our exclusive <span>Best-selling fabrics.</span></h3>
                  <button onClick={() => route.push("/category/bestsellers")} type="button" className="shop_bttn flt_none">View all Products</button>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="inner_main_hadding wow fadeInUp">
                <h4>Recommended for you</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div id="fabric" className="custom_icon mrg_113 cus_icon_size owl-carousel owl-theme wow fadeInUp">
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
              <div className="inner_main_hadding sec_padd wow fadeInUp">
                <h4>Trending Now</h4>
              </div>
            </div>
            <div className="col-md-12">
              <div className="banner_sec_md mrg_63 wow fadeInUp">
                <img src="images/new_img/lace_2.png" alt="gandhi fabrics" className="img-fluid desk_view" />
                <img src="images/new_img/mob_lace_2.png" alt="gandhi fabrics" className="img-fluid mob_view" />
                <div className="clr_tx_img">
                  <div className="trans_bg_clr">
                    <h3>Laces</h3>
                    <p>Delicate and Intricate Lace fabrics <span> from all over the world.</span></p>
                    <button onClick={() => route.push("/category/trends/lace-trends")} type="button" className="shop_bttn flt_none">View all Products</button>
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
            <div className="inner_main_hadding sec_padd wow fadeInUp">
              <h4>Natural Fabrics</h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div id="best_sellers_1" className="custom_icon mrg_113 owl-carousel owl-theme wow fadeInUp">
              <div className="item">
                <img src="images/new_img/img_1.png" alt="gandhi fabrics" className="img-fluid" />
                <div className="top_space">
                  <div className="sld_bttm_tx">
                    <a href="#">
                      <h3>Cotton Prints</h3>
                      <p>Beautiful Fabrics made from 100% <span>Natural Fibres.</span></p>
                    </a>
                  </div>
                  <button type="button" className="shop_bttn">Shop Now</button>
                </div>
              </div>
              <div className="item">
                <img src="images/new_img/img_2.png" alt="gandhi fabrics" className="img-fluid" />
                <div className="top_space">
                  <div className="sld_bttm_tx">
                    <a href="#">
                      <h3>Cotton Prints</h3>
                      <p>Beautiful Fabrics made from 100% <span>Natural Fibres.</span></p>
                    </a>
                  </div>
                  <button type="button" className="shop_bttn">Shop Now</button>
                </div>
              </div>
              <div className="item">
                <img src="images/new_img/img_1.png" alt="gandhi fabrics" className="img-fluid" />
                <div className="top_space">
                  <div className="sld_bttm_tx">
                    <a href="#">
                      <h3>Cotton Prints</h3>
                      <p>Beautiful Fabrics made from 100% <span>Natural Fibres.</span></p>
                    </a>
                  </div>
                  <button type="button" className="shop_bttn">Shop Now</button>
                </div>
              </div>
              <div className="item">
                <img src="images/new_img/img_2.png" alt="gandhi fabrics" className="img-fluid" />
                <div className="top_space">
                  <div className="sld_bttm_tx">
                    <a href="#">
                      <h3>Cotton Prints</h3>
                      <p>Beautiful Fabrics made from 100% <span>Natural Fibres.</span></p>
                    </a>
                  </div>
                  <button type="button" className="shop_bttn">Shop Now</button>
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
              <div className="inner_main_hadding wow fadeInUp">
                <h4>Prints</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div id="fabric_1" className="custom_icon cus_icon_size cus_dots mrg_113 owl-carousel owl-theme wow fadeInUp">
                <Products products={props.prints} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="natural_fab">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="inner_main_hadding wow fadeInUp">
                <h4>Categories</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="main_flx mrg_top_113 wow fadeInUp">
                <div className><img src="images/new_img/img10.png" className="img-fluid desk_view" /></div>
                <div className><img src="images/new_img/mob_img_2.png" className="img-fluid mob_view" /></div>
                <div className="align_c">
                  <div className="sub_natural sld_bttm_tx">
                    <h4>Natural Fabrics</h4>
                    <p>Beautiful Fabrics made from 100% Natural Fibres.</p>
                    <button onClick={() => route.push("/category/natural")} type="button" className="shop_bttn flt_none">Discover More</button>
                  </div>
                </div>
              </div>
              <div className="main_flx mrg_top_113 wow fadeInUp">
                <div className="align_c">
                  <div className><img src="images/new_img/img_11.png" className="img-fluid desk_view" /></div>
                  <div className><img src="images/new_img/mob_img_3.png" className="img-fluid mob_view" /></div>
                  <div className="align_c">
                    <div className="sub_natural sld_bttm_tx">
                      <h4>Laces</h4>
                      <p>Beautiful Fabrics made from 100% Natural Fibres.</p>
                      <button onClick={() => route.push("/category/lace")} className="shop_bttn flt_none">Discover More</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="main_flx mrg_top_113 wow fadeInUp">
                <div className><img src="images/new_img/img_12.png" className="img-fluid desk_view" /></div>
                <div className><img src="images/new_img/mob_img_4.png" className="img-fluid mob_view" /></div>
                <div className="align_c">
                  <div className="sub_natural sld_bttm_tx">
                    <h4>Plain dyed</h4>
                    <p>Beautiful Fabrics made from 100% Natural Fibres.</p>
                    <button onClick={() => route.push("/category/bestsellers/plain-dyed-best")} className="shop_bttn flt_none">Discover More</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <div>
        <section className="upto50 mrg_63">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="inner_main_hadding wow fadeInUp">
                  <h4>Special Deals</h4>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 mob_padd_0 wow fadeInUp">
                <div className="banner_sec_md">
                  <a href="#" className="desk_view"><img src="images/new_img/img_8.png" alt="gandhi fabrics" className="img-fluid" /></a>
                  <a href="#" className="mob_view"><img src="images/new_img/mob_img_5.png" alt="gandhi fabrics" className="img-fluid" /></a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div id="fabric_2" className="custom_icon cus_icon_size cus_dots mrg_113 owl-carousel owl-theme wow fadeInUp">
                <Products products={props.sale} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <section className="sec_bg mrg_120">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="inner_main_hadding wow fadeInUp">
                  <h4>Wedding Fabrics</h4>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="banner_sec_md wow fadeInUp">
                  <img src="images/new_img/img_9.png" alt="gandhi fabrics" className="img-fluid desk_view" />
                  <img src="images/new_img/bg_slide.png" alt="gandhi fabrics" className="img-fluid mob_view" />
                  <div className="clr_tx_img">
                    <div className="trans_bg_clr">
                      <h3>Wedding Fabric Collection</h3>
                      <p>Beautiful Fabrics to make your special day <span>more special and your wedding
                        Perfect.</span></p>
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
                <div className="inner_main_hadding sec_padd wow fadeInUp">
                  <h4>Seasons</h4>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="main_flx wow fadeInUp">
                  <div className="col_6 width_full_mob mob_view"><img src="images/new_img/img_13.png" className="img-fluid" /></div>
                  <div className="align_c col_6 width_full_mob bg_full bttm_sping_space">
                    <div className="sub_natural sping_autumm sld_bttm_tx">
                      <h4>Spring / Summer</h4>
                      <p>Our collection of fabrics for Spring/Summer feature the very best in sheer fabrics.
                        Our collection of cotton and other natural fabrics is unsurpassed.We bring to you
                        the best in innovative and trending fabrics from all over the world.</p>
                      <button onClick={() => route.push("/search?query=Summer")} type="button" className="shop_bttn flt_none">View Collection</button>
                    </div>
                  </div>
                  <div className="col_6 width_full_mob desk_view"><img src="images/new_img/img_13.png" className="img-fluid" /></div>
                </div>
                <div className="main_flx seasons wow fadeInUp">
                  <div className="col_6 width_full_mob mob_view"><img src="images/new_img/image_9.png" className="img-fluid" /></div>
                  <div className="align_c col_6 width_full_mob bg_full">
                    <div className="sub_natural sping_autumm sld_bttm_tx">
                      <h4>Autumn / Winter</h4>
                      <p>Our collection of fabrics for Autumn/Winter, showcase some of the very finest wool
                        fabrics; the very latest in fashionable jacquards and textured fabrics as well as
                        other luxurious and exclusive fabrics.All these and much more.</p>
                      <button onClick={() => route.push("/search?query=Autumn")} type="button" className="shop_bttn flt_none">View Collection</button>
                    </div>
                  </div>
                  <div className="col_6 width_full_mob desk_view">
                    <img src="images/new_img/image_9.png" className="img-fluid" />
                  </div>
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
                  <div className="inner_main_hadding wow fadeInUp">
                    <h4>Just arrived</h4>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div id="just" className="custom_icon cus_icon_size cus_dots mrg_113 owl-carousel owl-theme wow fadeInUp">
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
              <div className="inner_main_hadding insta_head wow fadeInUp">
                <h4>Insta feed</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="section-padding mrg_113 wow fadeInUp">
                <div id="screenshot_slider" className="screenshot_slider owl-carousel owl-theme">
                  <div className="item">
                    <img src="images/new_img/img_14.png" alt="gandhi fabrics" />
                  </div>
                  <div className="item">
                    <img src="images/new_img/img_15.png" alt="gandhi fabrics" />
                  </div>
                  <div className="item">
                    <img src="images/new_img/img_16.png" alt="gandhi fabrics" />
                  </div>
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

    let printsResponse = await axios.get(`${process.env.API_URL}category/products/search?query=prints&limit=30&offset=0`);
    let discountedProducts = await axios.get(process.env.API_URL + "products/new?filterBy=discounted");

    data.products = products;
    data.prints = printsResponse.data.rows;
    data.sale = discountedProducts.data;

    return {
      props: data
    }
  }
);

