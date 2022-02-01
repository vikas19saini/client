import Link from "next/link"
import useTranslation from 'next-translate/useTranslation'

export default function Footer() {

    const { t } = useTranslation()

    return (
        <footer>
            <div className="container-fluid ftt_bg wow fadeInUp">
                <div className="container">
                    <div className="inner_top">
                        <div className="footer_lg_aria">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="mob_social_icons mob_view">
                                        <h5>{t("common:keep_in_touch")}</h5>
                                        <a href="https://www.instagram.com/gandhi_fabrics" target="_blank"><img src="/images/new_img/insta_icon.png" alt="gandhi fabrics" /></a>
                                        <a href="https://www.facebook.com/gandhifabrics.th" target="_blank"><img src="/images/new_img/facebook_icon.png" alt="gandhi fabrics" /></a>
                                        <a href="https://api.whatsapp.com/send?phone=+66947741515" target="_blank">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#fff" viewBox="0 0 16 16">
                                                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                                            </svg>
                                        </a>
                                        <a href="https://page.line.me/gandhi" target="_blank">
                                            <svg aria-hidden="true" width="20" height="20" focusable="false" data-prefix="fab" data-icon="line" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#fff" d="M272.1 204.2v71.1c0 1.8-1.4 3.2-3.2 3.2h-11.4c-1.1 0-2.1-.6-2.6-1.3l-32.6-44v42.2c0 1.8-1.4 3.2-3.2 3.2h-11.4c-1.8 0-3.2-1.4-3.2-3.2v-71.1c0-1.8 1.4-3.2 3.2-3.2H219c1 0 2.1.5 2.6 1.4l32.6 44v-42.2c0-1.8 1.4-3.2 3.2-3.2h11.4c1.8-.1 3.3 1.4 3.3 3.1zm-82-3.2h-11.4c-1.8 0-3.2 1.4-3.2 3.2v71.1c0 1.8 1.4 3.2 3.2 3.2h11.4c1.8 0 3.2-1.4 3.2-3.2v-71.1c0-1.7-1.4-3.2-3.2-3.2zm-27.5 59.6h-31.1v-56.4c0-1.8-1.4-3.2-3.2-3.2h-11.4c-1.8 0-3.2 1.4-3.2 3.2v71.1c0 .9.3 1.6.9 2.2.6.5 1.3.9 2.2.9h45.7c1.8 0 3.2-1.4 3.2-3.2v-11.4c0-1.7-1.4-3.2-3.1-3.2zM332.1 201h-45.7c-1.7 0-3.2 1.4-3.2 3.2v71.1c0 1.7 1.4 3.2 3.2 3.2h45.7c1.8 0 3.2-1.4 3.2-3.2v-11.4c0-1.8-1.4-3.2-3.2-3.2H301v-12h31.1c1.8 0 3.2-1.4 3.2-3.2V234c0-1.8-1.4-3.2-3.2-3.2H301v-12h31.1c1.8 0 3.2-1.4 3.2-3.2v-11.4c-.1-1.7-1.5-3.2-3.2-3.2zM448 113.7V399c-.1 44.8-36.8 81.1-81.7 81H81c-44.8-.1-81.1-36.9-81-81.7V113c.1-44.8 36.9-81.1 81.7-81H367c44.8.1 81.1 36.8 81 81.7zm-61.6 122.6c0-73-73.2-132.4-163.1-132.4-89.9 0-163.1 59.4-163.1 132.4 0 65.4 58 120.2 136.4 130.6 19.1 4.1 16.9 11.1 12.6 36.8-.7 4.1-3.3 16.1 14.1 8.8 17.4-7.3 93.9-55.3 128.2-94.7 23.6-26 34.9-52.3 34.9-81.5z"></path></svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="desk_view">
                                <div className="row">
                                    <div className="col-md-6">
                                        <img src="/images/logo.png" alt="gandhi fabrics" />
                                    </div>
                                    <div className="col-md-6">
                                        <div className="social_icons pay">
                                            <img className="img" src="/images/new_img/paypal.png" />
                                            <img className="img" src="/images/new_img/visa.png" />
                                            <img className="img" src="/images/new_img/mastercard.png" />
                                            <img className="img" src="/images/new_img/dbd.png" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="inner_ftt">
                                    <h5>{t("common:subscribe_newsletter")}</h5>
                                    <p>{t("common:newsletter_description")}</p>
                                    <form className="footer_form">
                                        <div className="form-group">
                                            <input type="name" className="form-control" placeholder={t("common:name")} id="name" required />
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control" placeholder={t("common:email")} id="email" required />
                                        </div>
                                        <button type="submit" className="btn custom_sub">{t("common:subscribe")}</button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="desk_view">
                                    <div className="ftt_menu">
                                        <h5>{t("common:useful_links")}</h5>
                                        <ul>
                                            <li>
                                                <Link href="/contact">
                                                    <a>{t("common:contact")}</a>
                                                </Link>
                                            </li>
                                            <li><Link href="/about"><a>{t("common:about_us")}</a></Link></li>
                                            <li><Link href="/faq"><a>{t("common:faq")}</a></Link></li>
                                        </ul>
                                    </div>
                                    <div className="ftt_menu">
                                        <h5>Our Policies</h5>
                                        <ul>
                                            <li><Link href="/toc"><a>{t("common:toc")}</a></Link></li>
                                            <li><Link href="/privacy"><a>{t("common:privacy_policy")}</a></Link></li>
                                        </ul>
                                    </div>
                                    <div className="ftt_menu flt_inhrit social_icon">
                                        <h5>{t("common:contact_info")}</h5>
                                        <ul>
                                            <li><p className="text-white">{t("common:footer_address")}</p>
                                            </li>
                                            <li>
                                                <p className="text-white"> Phone: <a href="tel:+660947741515">+66 (0) 94774 1515 </a><br />
                                                    <a href="tel:+66022252001">+66 (0) 2225 2001</a></p>
                                            </li>
                                            <li className="no_breack"><a href="mailto:ken@gandhifabrics.com">Email: ken@gandhifabrics.com</a></li>
                                        </ul>
                                        <a href="https://www.instagram.com/gandhi_fabrics" target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                                        <a href="https://www.facebook.com/gandhifabrics.th" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                        <a href="https://api.whatsapp.com/send?phone=+66947741515" target="_blank">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" style={{ marginTop: "-13px" }} fill="#fff" viewBox="0 0 16 16">
                                                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                                            </svg>
                                        </a>
                                        <a href="https://page.line.me/gandhi" target="_blank">
                                            <svg aria-hidden="true" width="30" style={{ marginTop: "-13px", marginLeft: "20px" }} height="30" focusable="false" data-prefix="fab" data-icon="line" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#fff" d="M272.1 204.2v71.1c0 1.8-1.4 3.2-3.2 3.2h-11.4c-1.1 0-2.1-.6-2.6-1.3l-32.6-44v42.2c0 1.8-1.4 3.2-3.2 3.2h-11.4c-1.8 0-3.2-1.4-3.2-3.2v-71.1c0-1.8 1.4-3.2 3.2-3.2H219c1 0 2.1.5 2.6 1.4l32.6 44v-42.2c0-1.8 1.4-3.2 3.2-3.2h11.4c1.8-.1 3.3 1.4 3.3 3.1zm-82-3.2h-11.4c-1.8 0-3.2 1.4-3.2 3.2v71.1c0 1.8 1.4 3.2 3.2 3.2h11.4c1.8 0 3.2-1.4 3.2-3.2v-71.1c0-1.7-1.4-3.2-3.2-3.2zm-27.5 59.6h-31.1v-56.4c0-1.8-1.4-3.2-3.2-3.2h-11.4c-1.8 0-3.2 1.4-3.2 3.2v71.1c0 .9.3 1.6.9 2.2.6.5 1.3.9 2.2.9h45.7c1.8 0 3.2-1.4 3.2-3.2v-11.4c0-1.7-1.4-3.2-3.1-3.2zM332.1 201h-45.7c-1.7 0-3.2 1.4-3.2 3.2v71.1c0 1.7 1.4 3.2 3.2 3.2h45.7c1.8 0 3.2-1.4 3.2-3.2v-11.4c0-1.8-1.4-3.2-3.2-3.2H301v-12h31.1c1.8 0 3.2-1.4 3.2-3.2V234c0-1.8-1.4-3.2-3.2-3.2H301v-12h31.1c1.8 0 3.2-1.4 3.2-3.2v-11.4c-.1-1.7-1.5-3.2-3.2-3.2zM448 113.7V399c-.1 44.8-36.8 81.1-81.7 81H81c-44.8-.1-81.1-36.9-81-81.7V113c.1-44.8 36.9-81.1 81.7-81H367c44.8.1 81.1 36.8 81 81.7zm-61.6 122.6c0-73-73.2-132.4-163.1-132.4-89.9 0-163.1 59.4-163.1 132.4 0 65.4 58 120.2 136.4 130.6 19.1 4.1 16.9 11.1 12.6 36.8-.7 4.1-3.3 16.1 14.1 8.8 17.4-7.3 93.9-55.3 128.2-94.7 23.6-26 34.9-52.3 34.9-81.5z"></path></svg>
                                        </a>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <div className="bs-example tabs_veiw">
                                    <div className="accordion acco_after" id="accordionExample">
                                        <div className="card ft_acco_bg border_tp">
                                            <div className="card-header" id="headingTen">
                                                <h2 className="mb-0 border-top">
                                                    <a href="#">Shopping Categories</a>
                                                    <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTen" aria-expanded="false">
                                                        <i className="fa fa-plus" /></button>
                                                </h2>
                                            </div>
                                            <div id="collapseTen" className="collapse" aria-labelledby="headingTen" data-parent="#accordionExample">
                                                <div className="card-body">
                                                    <ul>
                                                        <li><a href="/category/bestsellers">Bestsellers</a></li>
                                                        <li><a href="/sale">Sale</a></li>
                                                        <li><a href="/category/natural">Natural Fabric</a></li>
                                                        <li><a href="/category/suiting">Suiting</a></li>
                                                        <li><a href="/category/lace">All About Laces</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card ft_acco_bg">
                                            <div className="card-header" id="headingTwel">
                                                <h2 className="mb-0 border-top">
                                                    <a href="#">{t("common:policies")}</a>
                                                    <button type="button" className="btn btn-link" data-toggle="collapse" data-target="#collapseTwel"><i className="fa fa-plus" /></button>
                                                </h2>
                                            </div>
                                            <div id="collapseTwel" className="collapse" aria-labelledby="headingTwel" data-parent="#accordionExample">
                                                <div className="card-body">
                                                    <ul>
                                                        <li><Link href="/about"><a>{t("common:about_us")}</a></Link></li>
                                                        <li><Link href="/faq"><a>{t("common:faq")}</a></Link></li>
                                                        <li><Link href="/toc"><a>{t("common:toc")}</a></Link></li>
                                                        <li><Link href="/privacy"><a>{t("common:privacy_policy")}</a></Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card ft_acco_bg">
                                            <div className="card-header" id="headingTwel">
                                                <h2 className="mb-0 border-top border-bottom">
                                                    <a href="#">{t("common:contact_info")}</a>
                                                    <button type="button" className="btn btn-link" data-toggle="collapse" data-target="#collapseTwel1"><i className="fa fa-plus" /></button>
                                                </h2>
                                            </div>
                                            <div id="collapseTwel1" className="collapse" aria-labelledby="headingTwel1" data-parent="#accordionExample">
                                                <div className="card-body">
                                                    <p className="text-white">{t("common:footer_address")}</p>

                                                    <p className="text-white"> Phone: <a className="text-white" href="tel:+660947741515">+66 (0) 94774 1515 </a>,
                                                        <a className="text-white" href="tel:+66022252001">+66 (0) 2225 2001</a></p>
                                                    <p><a className="text-white" href="mailto:ken@gandhifabrics.com">Email: ken@gandhifabrics.com</a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="ftt_bttm">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="main_flx_f">
                                        <div className="copy_txt desk_view">
                                            <p>© {(new Date).getFullYear()} Gandhi Fabric. All Rights Reserved | Powered by Lamppost Designs</p>
                                        </div>
                                        <div className="social_icons mob_view pay">
                                            <span><img className="img" src="/images/new_img/paypal.png" /></span>
                                            <span><img className="img" src="/images/new_img/visa.png" /></span>
                                            <span><img className="img" src="/images/new_img/mastercard.png" /></span>
                                            <span><img className="img" src="/images/new_img/dbd.png" /></span>
                                        </div>
                                        <div className="copy_txt mob_view">
                                            <p>© {(new Date).getFullYear()} Gandhi Fabric. All Rights Reserved | Powered by Lamppost Designs</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ marginBottom: "60px" }} className="talk-bubble tri-right round right-in">
                <div className="talktext">
                    <p><a target="_blank" href="https://api.whatsapp.com/send?phone=+66629016292">Trò chuyện bằng Tiếng Việt</a></p>
                </div>
            </div>
            <div className="talk-bubble tri-right round right-in">
                <div className="talktext">
                    <p><a target="_blank" href="https://lin.ee/eWAQkAx">ติดต่อแอดมินผ่านไลน์</a></p>
                </div>
            </div>
        </footer>
    );
}