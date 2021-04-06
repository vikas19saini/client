import axios from "axios";
import Head from "next/head";
import Footer from "./footer";
import Header from "./header";
import { toast, ToastContainer } from 'react-nextjs-toast';
import { useRouter } from "next/router";

export default function Contact() {
    const router = useRouter();

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
                                <h4>Looking for Bulk/Wholesale</h4>
                                <p><span>Questions? Concerns? We're ready to help! Experience our world-class </span>support by sending us a message today.</p>
                            </div>
                        </div>
                    </div>

                    <form id="contactForm" encType="multipart/form-data" method="post" className="floating-form enquer_form" onSubmit={submit}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="floating-label">
                                    <input className="floating-input" type="text" name="name" placeholder=" " required={true} />
                                    <label>Name</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="floating-label">
                                    <input className="floating-input" type="email" name="email" placeholder=" " required={true} />
                                    <label>Email Address</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="floating-label">
                                    <input className="floating-input" type="text" name="phone" placeholder=" " required={true} />
                                    <label>Mobile Number</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="floating-label">
                                    <input className="floating-input" type="number" name="quantity" placeholder=" " required={true} />
                                    <input type="hidden" name="productId" required={true} defaultValue={router.query.productId} />
                                    <input type="hidden" name="type" required={true} defaultValue="bulk" />
                                    <label>Quantity</label>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="floating-label">
                                    <textarea className="floating-input floating-textarea" name="message" placeholder=" " required={true}></textarea>
                                    <label>Details</label>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group custom_upp file_upload capcha_tab">
                                    <span>Upload Reference Pictures</span><label htmlFor="file-upload" className="custom-file-upload"> Upload Files </label>
                                    <div className="input file">
                                        <input type="file" name="file" id="file-upload" accept="image/*" />
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
                    </form>
                </div>
            </section>
            <Footer />
        </>
    );
}