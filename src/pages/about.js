import Head from "next/head";
import Footer from "./footer";
import Header from "./header";

export default function About() {
    return (
        <>
            <Head>
                <title>About - Gandhi</title>
            </Head>
            <Header shadow />
            <section className="inner_product">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="inner_main_hadding wow fadeInUp">
                                <h4>About Us</h4>
                            </div>
                            <div className="return wow fadeInUp">
                                <p>Gandhi is a legacy of over eight decades. Borne of grit and enthusiasm, we are the culmination of
                                the dream of our founder Hari Sewak Tewari; who, along with his friend started one of the very
                                first fabric retail outlet in the bustling center of Phahurat, in the heart of Bangkok.
                     <span>Today, Gandhi holds its own distinct identity, with two other showrooms, in the same
                                    epicentre where the first one was set up. Our foundation was laid at that very first time, with
                        strong values and commitment, built upon with resilience and steadfastness.</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="ab_img wow fadeInUp">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="ab_align"><img src="/images/ab_1.jpg" alt="about-gandhi" className="img-fluid" /></div>
                            </div>
                            <div className="col-md-4">
                                <div className="ab_align"><img src="/images/ab_2.jpg" alt="about-gandhi" className="img-fluid" /></div>
                            </div>
                            <div className="col-md-4">
                                <div className="ab_align"><img src="/images/ab_3.jpg" alt="about-gandhi" className="img-fluid" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="return wow fadeInUp">
                                <p>Our endeavour, from the beginning has been to provide the very best fabrics from all over the world
                                at attractive and competitive prices, bringing value as well as the latest international trends to
                                our customers.
                     <span>Our product portfolio includes lace and fine fabrics from international ateliers and mills,
                                    as well as a wide range of silk, satins, chiffons and other fabric varieties. In addition, we
                        scour the world for innovative and distinctive textiles to bring to our customers.</span>
                                    <span>We have a fine selection of fabrics for womenswear as well as menswear, with evening wear,
                        trousseau fabrics, casual wear as well as the more formal work wear fabrics.</span>
                                </p>
                            </div>

                            <div className="return wow fadeInUp">
                                <p>Our customers come from all over the world including designers, dressmakers, bespoke tailors and
                     fabric connoisseurs. <span>We pride ourselves in building long-lasting relationships with each and
                        every one of them, by providing fabrics for every taste and suitability.</span>
                                    <span>We, continue our journey to build on a legacy that we are proud of.</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}