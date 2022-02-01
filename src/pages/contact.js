import axios from "axios";
import Head from "next/head";
import Footer from "./footer";
import Header from "./header";
import { toast, ToastContainer } from 'react-nextjs-toast';
import useTranslation from 'next-translate/useTranslation'

export default function Contact() {

    const { t } = useTranslation()

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
                                <h4>{t("contact:heading")}</h4>
                                <p>{t("contact:description")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="inner_con_head wow fadeInUp">
                                <h5>{t("contact:subheading")}</h5>
                            </div>
                        </div>
                    </div>

                    <form id="contactForm" method="post" className="floating-form wow fadeInUp" onSubmit={submit}>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="floating-label">
                                    <input className="floating-input" type="text" name="name" placeholder=" " required={true} />
                                    <label>{t("contact:name")}</label>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="floating-label">
                                    <input className="floating-input" type="email" name="email" placeholder=" " required={true} />
                                    <label>{t("contact:email")}</label>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="floating-label">
                                    <input className="floating-input" type="text" name="phone" placeholder=" " required={true} />
                                    <label>{t("contact:phone")}</label>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="floating-label">
                                    <textarea className="floating-input floating-textarea" name="message" placeholder=" " required={true}></textarea>
                                    <label>{t("contact:message")}</label>
                                </div>

                            </div>
                            <div className="col-md-12">
                                <button type="submit" className="bag_bttn align_cntr">{t("contact:button")}</button>
                            </div>
                        </div>

                        <div className="row wow fadeInUp">
                            <div className="col-md-12">
                                <div className="inner_con_head">
                                    <h5>{t("contact:customer_service")}</h5>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="con_detail_form">
                                    <p>{t("contact:official_email")} <span><a style={{ color: "inherit" }} href="mailto:ken@gandhifabrics.com">ken@gandhifabrics.com</a></span></p>

                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="con_detail_form">
                                    <p>{t("contact:contact_phone")} <span>
                                        <a style={{ color: "inherit" }} href="tel:+660947741515">+66 (0) 94774 1515</a><br />
                                        <a style={{ color: "inherit" }} href="tel:+66022252001">+66 (0) 2225 2001</a>
                                    </span></p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="con_detail_form">
                                    <p>{t("contact:showroom_address")} {t("contact:address1")}</p>
                                    <p>{t("contact:address2")}</p>
                                    <p>{t("contact:address2")}</p>
                                </div>
                            </div>
                        </div>
                    </form>
                </div >
            </section >
            <Footer />
        </>
    );
}