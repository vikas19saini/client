import axios from "axios";
import Head from "next/head";
import Footer from "./footer";
import Header from "./header";
import { toast, ToastContainer } from 'react-nextjs-toast';

export default function Contact() {

    const submit = async (e) => {
        e.preventDefault();
        axios.post(`${process.env.API_URL}customer/enquiry`, {
            name: e.target.name.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            message: e.target.message.value,
            type: "contact"
        }).then((res) => {
            toast.notify(`Received your details! we will get back to you soon!`, {
                type: "success",
                title: "Success!"
            });
            document.getElementById("contactForm").reset();
        }).catch((err) => {
            toast.notify(`Something went wrong!`, {
                type: "error",
                title: "Error!"
            });
        })
    }

    return (
        <>
            <Head>
                <title>Contact Us - Gandhi</title>
            </Head>
            <Header shadow />
            <ToastContainer />
            <section className="inner_product con_tp">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="contact_head wow fadeInUp">
                                <h4>Contact Us</h4>
                                <p><span>Questions? Concerns? We're ready to help! Experience our world-class </span>support by
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

                    <form id="contactForm" method="post" className="floating-form wow fadeInUp" onSubmit={submit}>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="floating-label">
                                    <input className="floating-input" type="text" name="name" placeholder=" " required={true} />
                                    <label>Name</label>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="floating-label">
                                    <input className="floating-input" type="email" name="email" placeholder=" " required={true} />
                                    <label>Email Address</label>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="floating-label">
                                    <input className="floating-input" type="text" name="phone" placeholder=" " required={true} />
                                    <label>Mobile Number</label>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="floating-label">
                                    <textarea className="floating-input floating-textarea" name="message" placeholder=" " required={true}></textarea>
                                    <label>Your Message</label>
                                </div>

                            </div>
                            <div className="col-md-12">
                                <button type="submit" className="bag_bttn align_cntr">Send Message</button>
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
                                    <p>Official Email <span><a style={{ color: "inherit" }} href="mailto:support@gandhifabrics.com">support@gandhifabrics.com</a></span></p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="con_detail_form">
                                    <p>Mobile Number <span><a style={{ color: "inherit" }} href="tel:+66-947741515">+66-947741515</a></span></p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="con_detail_form">
                                    <p>OFFICE ADDRESS <span><strong>Gandhi 1944,</strong> 326 Phahurat Road , Bangkok 10200 , Thailand T+66 (0) 2225 5997,+66 (0) 2225 5503</span></p>
                                    <p><span><strong>Gandhi Tessuti,</strong> Address: 205-207 Phahurat Rd, Wang Burapha Phirom, Phra Nakhon, Bangkok 10200, Thailand. T 02-222-7798, 066-140-1326</span></p>
                                    <p><span><strong>The Cynosure Bangkok,</strong> A002-A005 G Floor China World , 677-681 Chakraphet Road , Bangkok 10200 , Thailand T+66 (0) 2225 2001-3</span></p>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
            <Footer />
        </>
    );
}