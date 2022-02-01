import axios from "axios";
import Head from "next/head";
import Footer from "./footer";
import Header from "./header";
import { toast, ToastContainer } from 'react-nextjs-toast';
import { useState } from "react";
import useTranslation from 'next-translate/useTranslation'

export default function Contact() {
    const [tools, setTools] = useState([]);
    const { t } = useTranslation();

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
                                <h4>{t("browsing:heading")}</h4>
                                <p>{t("contact:description")}</p>
                            </div>
                        </div>
                    </div>

                    <form id="contactForm" encType="multipart/form-data" method="post" className="floating-form enquer_form" onSubmit={submit}>
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
                                <div className="custom_add">
                                    <h2>{t("browsing:tools")}</h2>
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
                                    <p>{t("browsing:date")}</p>
                                    <input type="datetime-local" name="dateTime" placeholder="Select date" />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="floating-label live_txt">
                                    <textarea className="floating-input floating-textarea" name="message" placeholder=" " required={true}></textarea>
                                    <label>{t("browsing:details")}</label>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="custom_add terms_bttm">
                                    <p>{t("browsing:toc")}</p>
                                    <div className="w_check">
                                        <p><input type="checkbox" style={{ width: "auto" }} required={true} /> {t("browsing:checkbox")}</p>
                                    </div>
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
                                    <p>{t("contact:contact_phone")}<span>
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
                </div>
            </section>
            <Footer />
        </>
    );
}