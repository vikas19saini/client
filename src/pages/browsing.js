import axios from "axios";
import Head from "next/head";
import Footer from "./footer";
import Header from "./header";
import { toast, ToastContainer } from 'react-nextjs-toast';
import { useState } from "react";

export default function Contact() {
    const [tools, setTools] = useState([]);

    const submit = async (e) => {
        e.preventDefault();
        let formData = new FormData(document.querySelector("#contactForm"));
        axios.post(`${process.env.API_URL}customer/enquiry`, formData).then((res) => {
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

    const toolSelection = (t) => {
        let selectedTools = [...tools];

        if (selectedTools.includes(t)) {
            selectedTools = selectedTools.filter(ct => ct !== t);
        } else {
            selectedTools.push(t);
        }

        setTools(selectedTools);
    }

    return (
        <>
            <Head>
                <title>Bulk Order - Gandhi</title>
            </Head>
            <Header shadow />
            <ToastContainer />
            <section className="inner_product con_tp">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="contact_head wow fadeInUp">
                                <h4>Browse Our Store</h4>
                                <p><span>Questions? Concerns? We're ready to help! Experience our world-class</span>support by sending us a message today.</p>
                            </div>
                        </div>
                    </div>

                    <form id="contactForm" encType="multipart/form-data" method="post" className="floating-form enquer_form" onSubmit={submit}>
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
                                <div className="custom_add">
                                    <h2>Preffered Browsing Tool :</h2>
                                    <div className="categories_bx">
                                        <label className="check_cus">Whatsapp Video Call
                                            <input type="checkbox" onClick={() => toolSelection("Whatsapp")} />
                                            <span className="checkmark"></span>
                                        </label>
                                        <label className="check_cus">Facetime
                                            <input type="checkbox" onClick={() => toolSelection("Facetime")} />
                                            <span className="checkmark"></span>
                                        </label>
                                        <label className="check_cus">Google Duo
                                            <input type="checkbox" onClick={() => toolSelection("Google Duo")} />
                                            <span className="checkmark"></span>
                                        </label>
                                        <label className="check_cus">Skype
                                            <input type="checkbox" onClick={() => toolSelection("Skype")} />
                                            <span className="checkmark"></span>
                                        </label>
                                        <label className="check_cus">Google Hangout
                                            <input type="checkbox" onClick={() => toolSelection("Google Hangout")} />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <input type="hidden" name="tool" defaultValue={tools.join(",")} />
                            <input type="hidden" name="type" defaultValue="live" />
                            <div className="col-md-4">
                                <div className="custom_add">
                                    <p>Preffered date:</p>
                                    <input type="datetime-local" name="dateTime" placeholder="Select date" />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="floating-label live_txt">
                                    <textarea className="floating-input floating-textarea" name="message" placeholder=" " required={true}></textarea>
                                    <label>Details</label>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="custom_add terms_bttm">
                                    <p>Terms and conditions :</p>
                                    <div className="w_check">
                                        <p><input type="checkbox" style={{ width: "auto" }} required={true} /> We hereby agree to get on a call with the team at Gandhi Fabrics.</p>
                                    </div>
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
                                    <p>OFFICE ADDRESS <span><strong>Gandhi Impex,</strong> 326 Phahurat Road , Bangkok 10200 , Thailand T+66 (0) 2225 5997,+66 (0) 2225 5503</span></p>
                                    <p><span><strong>GandhiPlus,</strong> C025 2nd Floor China World , 677-681 Chakraphet Road , Bangkok 10200, Thailand T +66 (0) 2222 4962,+66 (0) 2222 4953</span></p>
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