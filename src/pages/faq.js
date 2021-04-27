import Head from "next/head";
import Footer from "./footer";
import Header from "./header";

export default function Faq() {
    return (
        <>
            <Head>
                <title>FAQ - Gandhi</title>
            </Head>
            <Header shadow />
            <section className="inner_product">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="inner_main_hadding wow fadeInUp">
                                <h4>Faq</h4>
                            </div>
                            <div className="return wow fadeInUp">
                                <ol>
                                    <li>How Do I Track My Order?
                        <p>Please refer to the ‘My Orders’ section of your Account for all the details related to your
                           order. Alternatively, you can email us at <a href="mailto:support@gandhifabrics.com">support@gandhifabrics.com .</a></p>
                                    </li>
                                    <li>Who Will deliver My Order?
                        <p>For Domestic delivery, we offer shipping services through DHL and Thailandpost which can be
                                        selected at the time of placing the order. For International delivery ,we offer shipping
                           services through DHL and Thailandpost which can be selected at the time of placing the order.</p>
                                    </li>
                                    <li>Where Will My Order Be Shipped From?
                        <p>We will be shipping all orders from Bangkok,Thailand.</p>
                                    </li>
                                    <li>How Long Will It Take To Get My Order?
                        <p>We offer different shipping methods which take anywhere from 7-15 days ,depending on your
                           location.</p>
                                    </li>
                                    <li>Which Countries Do You Ship To?
                        <p>We ship all over the world.</p>
                                    </li>
                                    <li>Do I have to Pay Customs And Import Charges?
                        <p>Exchange and Returns</p>
                                    </li>
                                    <li>Can I Return My Order?
                        <p>We do not offer any returns on the fabric once cut, unless there are defects in the yardage,
                           at the time of receipt.</p>
                                    </li>
                                    <li>Can I Exchange My Order?
                        <p>We do not offer any exchanges on the fabric once cut,unless there are defects in the yardage
                           at the time of receipt.</p>
                                    </li>
                                    <li>What are the accepted methods of payment for domestic orders?
                        <p>We accept the following modes of payment</p>
                                    </li>
                                    <li>What are the accepted modes of payment for international orders?
                        <p>We accept the following modes of payment.</p>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}