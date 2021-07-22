import Head from 'next/head'
import { Fragment, useEffect } from 'react'
import Header from "./header";
import Footer from "./footer";
import axios from "axios";
import { wrapper } from '../redux/store';
import Products from "../components/productCrousel"
import Link from 'next/link';
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
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 main_padd_0">
              <div className="customers-testimonials">
                <div id="big" className="owl-carousel owl-theme">
                  {
                    props.sliders.map((slider) => {
                      return (
                        <div className="item" key={slider.id}>
                          <img src={slider.mobileMedia.fullUrl} alt={slider.heading} className="img-fluid mob_view" />
                          <div className="inner_txt">
                            <h1 style={{ width: "90%", wordBreak: "break-word" }}>{slider.heading}</h1>
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

            <div className="col-md-6 main_padd_0">
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

      <a href="#" className="scroll-down mob_view" address="true" onClick={() => scrollDown()}>
        <img src="images/arrow.png" alt="arrow" /><span>scroll
        down
         </span>
      </a>

      <div className="container">
        <div className="sec_padd">
          <div className="row">
            <div className="col-md-12">
              <div className="inner_main_hadding wow fadeInUp">
                <h4>Shop By Categories </h4>
              </div>
            </div>
          </div>
          <div className="row wow fadeInUp">
            <div className="col-md-6">
              <div className="img_ovly"><img src="images/image_1.jpg" alt="" className="img-fluid" /></div>
              <div className="overlay_img"><img src="images/image_2.jpg" alt="" className="img-fluid" /></div>
            </div>
            <div className="col-md-6">
              <div className="inner_left">
                <h3>Our Natural Fabrics</h3>
                <p>Beautiful Fabrics made from 100% Natural Fibres.</p>
                <div className="dropdown">
                  <Link href="/category/natural">
                    <a className="view_bttn dropbtn">View Collection</a></Link>
                  <div className="drop_bg desk_view">
                    <div className="dropdown-content">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="drop_list">
                            <Link href="/category/cotton-natural"><a>Cotton</a></Link>
                            <Link href="/category/silk-natural"><a>Silk</a></Link>
                            <Link href="/category/viscose-natural"><a>Viscose</a></Link>
                            <Link href="/category/linen-natural"><a>Linen</a></Link>
                            <Link href="/category/wool-natural"><a>Wool</a></Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container ok">
        <div className="tab_padd sec_pd_top sec_padd wow fadeInUp">
          <div className="row">
            <div className="col-md-6">
              <div className="img_ovly"><img src="images/lace_2.jpg" alt="" className="img-fluid" /></div>
            </div>
            <div className="col-md-6">
              <div className="left_2 inner_left">
                <h3>Our Lace Fabric Collection</h3>
                <p>Delicate and Intricate Lace fabrics From all over the world</p>
                <div className="dropdown">
                  <Link href="/category/lace">
                    <a className="view_bttn dropbtn">View Collection</a></Link>
                  <div className="drop_bg desk_view">
                    <div className="dropdown-content">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="drop_list">
                            <Link href="/category/sequin-laces"><a>Sequin Laces</a></Link>
                            <Link href="/category/french-laces"><a>French Laces</a></Link>
                            <Link href="/category/3d-laces"><a>3D Laces</a></Link>
                            <Link href="/category/cotton-laces"><a>Cotton Laces</a></Link>
                            <Link href="/category/metallic-laces"><a>Metallic Laces</a></Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right_img_top"><img src="images/lace_1.jpg" alt="" className="img-fluid" /></div>
            </div>
          </div>
        </div>
      </div>
      <div className="sec_padd">
        <div className="secound_hadd_pr inner_main_hadding mob_view wow fadeInUp">
          <h4>Trending</h4>
        </div>
        <div className="container-fluid bg_sec">
          <div className="row">
            <div className="col-md-12">
              <div className="wow fadeInUp">
                <div className="row">
                  <div className="col-md-7">
                    <div className="bg_clr">
                      <h2>The Colour Palette To <span>Brighten Your Mood</span></h2>
                      <Link href="/category/trends">
                        <a className="view_bttn dropbtn" style={{ color: "#fff" }}>View Collection</a></Link>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="sec_padd wow fadeInUp">
          <div className="row">
            <div className="col-md-6">
              <div className="gn_fabric"><img src="images/plain_fabric-02.jpg" alt="" className="img-fluid" /></div>
              <div className="overlay_img"><img src="images/plain_fabric-01.jpg" alt="" className="img-fluid" /></div>
            </div>
            <div className="col-md-6">
              <div className="inner_left">
                <h3>Our Plain Dyed Fabric Collection</h3>
                <p>A Vast Selection Of Solid, Plain Dyed Fabrics In Cotton,Silk and Blends</p>
                <div className="dropdown">
                  <Link href="/category/plain-dyed-best">
                    <a className="view_bttn dropbtn">View Collection</a></Link>
                  {/* <div className="drop_bg desk_view">
                    <div className="dropdown-content">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="drop_list">
                            <a href="#">Chiffon </a>
                            <a href="#">Satin</a>
                            <a href="#">Twill</a>
                            <a href="#">Crepe</a>
                          </div>
                          <div className="drop_list">
                            <a href="#">Cotton</a>
                            <a href="#">Silk</a>
                            <a href="#">Linen</a>
                            <a href="#">Tulle </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="tab_padd sec_pd_top sec_padd wow fadeInUp">
          <div className="row">
            <div className="col-md-6">
              <div className="print_fb"><img src="images/print_2.jpg" alt="" className="img-fluid" /></div>
              <div className="print_fb_overlay mob_view"><img src="images/print_1.jpg" alt="" className="img-fluid" /></div>
            </div>
            <div className="col-md-6">
              <div className="left_2 inner_left">
                <h3>Our Printed Fabric Collection</h3>
                <p>A Collection Of Printed Fabrics, Featuring International Trends and classic Patterns.</p>
                <div className="dropdown">
                  <Link href="/category/prints">
                    <a className="view_bttn dropbtn">View Collection</a>
                  </Link>
                  <div className="drop_bg desk_view">
                    <div className="dropdown-content">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="drop_list">
                            <Link href="/category/cotton-prints"><a>Cotton</a></Link>
                            <Link href="/category/silk-prints"><a>Silk</a></Link>
                            <Link href="/category/chiffon-prints"><a>Chiffon</a></Link>
                            <Link href="/category/linen-prints"><a>Linen</a></Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="printed_2 desk_view"><img src="images/print_1.jpg" alt="" className="img-fluid" /></div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="sec_padd wow fadeInUp">
          <div className="row">
            <div id="collection_slide" className="owl-carousel desk_view">
              <div className="item">
                <img className="desk_view" src="/images/bg_slide.jpg" className="img-fluid" />
                <div className="slide_tx">
                  <h3><span>Our Wedding</span> Fabric Collection</h3>
                  <p className="desk_view">Beautiful Fabrics to Make your Day Perfect</p>
                  <Link href="/search?query=wedding">
                    <a type="button" className="view_slide_bttn learn_bttn">View</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="container-fluid coll_bg mob_view">
        <div className="row">
          <div className="slide_tx po_inherit">
            <h3><span>Wedding</span>Collection</h3>
            <Link href="/search?query=wedding">
              <a type="button" className="view_slide_bttn learn_bttn">View</a>
            </Link>
            <img src="images/bitmap.jpg" className="img-fluid" alt="" />
          </div>
        </div>
      </div>




      <div className="container">
        <div className="row_revers sec_padd wow fadeInUp">
          <div className="row">
            <div className="col-md-7">
              <div className=""><img src="images/image_9.jpg" alt="" className="img-fluid" /></div>
            </div>
            <div className="col-md-5">
              <div className="dis_flex mrg_tp_aw">
                <div className="inner_left">
                  <h3>Autumn Winter</h3>
                  <p>Our collection of fabrics for Autumn Winter, showcase some of the very finest wool fabrics; the
                  very latest in fashionable jacquards and textured fabrics as well as other luxurious and
                        exclusive fabrics. All these and much more.</p>
                  <div className="dropdown">
                    <Link href="/search?query=Autumn">
                      <a className="view_bttn dropbtn lern_bttn">learn more</a></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sec_padd wow fadeInUp">
          <div className="row flex_derection">
            <div className="col-md-5">
              <div className="dis_flex mrg_tp_aw">
                <div className="inner_left">
                  <h3>Spring Summer</h3>
                  <p>Our collection of fabrics for Spring Summer feature the very best in sheer fabrics. Our
                  collection of cotton and other natural fabrics is unsurpassed. We bring to you the best in
                        innovative and trending fabrics from all over the world.</p>
                  <div className="dropdown">
                    <Link href="/search?query=Summer">
                      <a className="view_bttn dropbtn lern_bttn">learn more</a></Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <div className="spring_smmr">
                <img className="desk_view" src="images/image_10.jpg" alt="" />
                <img className="mob_view" src="images/spring_summer_mob.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="sec_padd">
        <div className="container-fluid sub_sec">
          <div className="container">
            <div className="row wow fadeInUp">
              <div className="col-md-12">
                <div className="sub_txt">
                  <h4>Subscribe now and get 15% off</h4>
                  <p>Sign up to get weekly emails with our <span>promotions and special content.</span></p>
                  <div className="input-group custom_input mb-3">
                    <input type="text" className="inner_input form-control" placeholder="Enter your email" id="mail" name="email" />
                    <div className="input-group-append">
                      <span className="input-group-text sign_bttn">Sign Up</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="sec_padd">
        <div className="container-fluid  wow fadeInUp">
          <div className="row">
            <div id="sync2" className="owl-carousel owl-theme fb_slide_txt">
              <div className="item">Cotton</div>
              <div className="item">Silk</div>
              <div className="item">Wool</div>
              <div className="item">Linen</div>
            </div>
            <div id="sync1" className="owl-carousel owl-theme">
              <div className="item">
                <img className="desk_view" src="images/desk_cotton.jpg" alt="" />
                <img className="mob_view" src="images/mob_cotton.jpg" alt="" />
                <div className="over_txt">
                  <h4>Our Cotton Collection</h4>
                  <p>We have a vast variety of your favourite cotton fabrics.</p>
                  <Link href="/category/cotton">
                    <a className="view_bttn view_co dropbtn">View Collection</a></Link>
                </div>
              </div>
              <div className="item">
                <img className="desk_view" src="images/desk_silk.jpg" alt="" />
                <img className="mob_view" src="images/mob_silk.jpg" alt="" />
                <div className="over_txt">
                  <h4>Our silk collection</h4>
                  <p>We have a vast variety of your favourite silk fabrics.</p>
                  <Link href="/category/silk">
                    <a className="view_bttn view_co dropbtn">View Collection</a></Link>
                </div>
              </div>
              <div className="item">
                <img className="desk_view" src="images/desk_wool.jpg" alt="" />
                <img className="mob_view" src="images/mob_wool.jpg" alt="" />
                <div className="over_txt">
                  <h4>Our wool collection</h4>
                  <p>We have a vast variety of your favourite wool fabrics.</p>
                  <Link href="/category/wool">
                    <a className="view_bttn view_co dropbtn">View Collection</a></Link>
                </div>
              </div>
              <div className="item">
                <img className="desk_view" src="images/desk_linen.jpg" alt="" />
                <img className="mob_view" src="images/mob_linen.jpg" alt="" />
                <div className="over_txt">
                  <h4>Our linen collection</h4>
                  <p>We have a vast variety of your favourite linen fabrics.</p>
                  <Link href="/category/linen">
                    <a className="view_bttn view_co dropbtn">View Collection</a></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>





      <section className="sec_padd">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="secound_hadd_pr inner_main_hadding mob_view">
                <h4>Luxury Collection</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row wow fadeInUp">
            <div className="col-md-12 padd_1_0 mob_view">
              <div className="luxury_img_mob">
                <img src="images/luxury_mob.jpg" alt="" className="img-fluid" />
                <div className="luxury_txt_mob">
                  <p>Our collection of premium fabrics in Silks, Laces and much more.</p>
                  <button type="button" className="view_slide_bttn learn_bttn">View collection</button>
                </div>
              </div>
            </div>
          </div>
          <div className="desk_view">
            <div className="row">
              <div className="col-md-6 padd_0">
                <div className="item">
                  <img src="images/lux_sd.jpg" alt="" className="img-fluid" />
                  <div className="luxury_txt">
                    <h1>LUXURY <span>Collection</span></h1>
                    <Link href="/search?query=luxury">
                      <a type="button" className="view_slide_bttn learn_bttn">View collection</a></Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6 padd_0">
                <div className="lux_right_2"><img src="images/lux_sd_2.jpg" alt="" className="img-fluid" /></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec_padd mrg_top wow fadeInUp">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 padd_0">
              <div id="suiting">
                <img className="desk_view" src="images/suiting.jpg" alt="" />
                <img className="mob_view" src="images/suitings_mob.jpg" alt="" />
                <div className="inner_suiting">
                  <h4>The Suiting Collection</h4>
                  <p>Our Collection of the world's finest fabrics<span> For suiting and shirting</span></p>
                  <Link href="/category/suiting">
                    <a className="view_slide_bttn learn_bttn">View collection</a></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec_padd sec_arrivals">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="secound_hadd_pr inner_main_hadding wow fadeInUp">
                <h4>New arrivals</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row wow fadeInUp">
            <div className="col-md-12 padd_0_all">
              <div id="arrivals" className="owl-carousel relativeProducts">
                <Products products={props.products} />
              </div>
            </div>
          </div>
        </div>
      </section>
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

    data.products = products

    return {
      props: data
    }
  }
);

