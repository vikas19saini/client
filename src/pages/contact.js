import Head from "next/head";
import Footer from "./footer";
import Header from "./header";

export default function Contact() {
    return (
        <>
            <Head>
                <title>Contact Us - Gandhi</title>
            </Head>
            <Header shadow />
            <section className="inner_product con_tp">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="contact_head wow fadeInUp">
                                <h4>Contact Us</h4>
                                <p><span>Questions? Concerns? We're ready to help! Experience our world-className </span>support by
                     sending us a message today.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="inner_con_head wow fadeInUp">
                                <h5>Write to Us</h5>
                            </div>
                        </div>
                    </div>

                    <div className="floating-form wow fadeInUp">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="floating-label">
                                    <input className="floating-input" type="text" placeholder=" " />
                                    <label>Name</label>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="floating-label">
                                    <input className="floating-input" type="email" placeholder=" " />
                                    <label>Email Address</label>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="floating-label">
                                    <input className="floating-input" type="number" placeholder=" " />
                                    <label>Mobile Number</label>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="floating-label">
                                    <textarea className="floating-input floating-textarea" placeholder=" "></textarea>
                                    <label>Your Message</label>
                                </div>

                            </div>
                            <div className="col-md-12">
                                <button type="button" className="bag_bttn align_cntr">Send Message</button>
                            </div>
                        </div>



                        <div className="row wow fadeInUp">
                            <div className="col-md-12">
                                <div className="inner_con_head">
                                    <h5>Customer Service</h5>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="con_detail_form">
                                    <p>Official Email <span>Support@gandhi.com</span></p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="con_detail_form">
                                    <p>Mobile Number <span>+91 97884-66774</span></p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="con_detail_form">
                                    <p>OFFICE ADDRESS <span>Gandhi Impex 326 Phahurat Road Bangkok 10200 Thailand T+66 (0) 2225
                           5997/+66 (0) 2225 5503</span></p>
                                    <p><span>GandhiPlus C025 2nd Floor China World 677-681 Chakraphet Road Bangkok 10200 Thailand T +66
                           (0) 2222 4962/+66 (0) 2222 4953</span></p>
                                    <p><span>The Cynosure Bangkok A002-A005 G Floor China World 677-681 Chakraphet Road Bangkok 10200
                           Thailand T+66 (0) 2225 2001-3</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}