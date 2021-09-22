import Link from "next/link"

export default function Footer() {

    return (
        <footer>
            <div className="container-fluid ftt_bg wow fadeInUp">
                <div className="container">
                    <div className="inner_top">
                        <div className="footer_lg_aria">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="mob_social_icons mob_view">
                                        <h5>KEEP IN TOUCH WITH US</h5>
                                        <a href="https://www.instagram.com/gandhi_fabrics" target="_blank"><img src="/images/new_img/insta_icon.png" alt="gandhi fabrics" /></a>
                                        <a href="https://www.facebook.com/gandhifabrics.th" target="_blank"><img src="/images/new_img/facebook_icon.png" alt="gandhi fabrics" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="desk_view">
                                <div className="row">
                                    <div className="col-md-6">
                                        <img src="images/logo.png" alt="gandhi fabrics" />
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
                                    <h5>Subscribe to Our Newsletter</h5>
                                    <p>Enjoy our newsletter to stay updated with <span>the latest news and special
                                        sales.</span>
                                    </p>
                                    <form className="footer_form">
                                        <div className="form-group">
                                            <input type="name" className="form-control" placeholder="Name" id="name" required />
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control" placeholder="Email Address" id="email" required />
                                        </div>
                                        <button type="submit" className="btn custom_sub">Subscribe</button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="desk_view">
                                    <div className="ftt_menu">
                                        <h5>Useful Links</h5>
                                        <ul>
                                            <li>
                                                <Link href="/contact">
                                                    <a>Contact</a>
                                                </Link>
                                            </li>
                                            <li><Link href="/about"><a>About Us</a></Link></li>
                                            <li><Link href="/faq"><a>Faq</a></Link></li>
                                        </ul>
                                    </div>
                                    <div className="ftt_menu">
                                        <h5>Our Policies</h5>
                                        <ul>
                                            <li><Link href="/toc"><a>Terms and conditions</a></Link></li>
                                            <li><Link href="/privacy"><a>Privacy Policy</a></Link></li>
                                        </ul>
                                    </div>
                                    <div className="ftt_menu flt_inhrit social_icon">
                                        <h5>Contact Info</h5>
                                        <ul>
                                            <li><p className="text-white"><span><strong>Gandhi 1944,</strong> 326 Phahurat Road, Bangkok 10200, Thailand T+66 (0) 2225 5997, +66 (0) 2225 5503 H 08:45 - 18:00 (Mon-Sun)</span></p>
                                            </li>
                                            <li>
                                                <p className="text-white"> Phone: <a href="tel:+660947741515">+66 (0) 94774 1515 </a><br />
                                                    <a href="tel:+66022252001">+66 (0) 2225 2001</a></p>
                                            </li>
                                            <li className="no_breack"><a href="mailto:ken@gandhifabrics.com">Email: ken@gandhifabrics.com</a></li>
                                        </ul>
                                        <a href="https://www.instagram.com/gandhi_fabrics" target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                                        <a href="https://www.facebook.com/gandhifabrics.th" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></a>
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
                                                    <a href="#">Our Policy</a>
                                                    <button type="button" className="btn btn-link" data-toggle="collapse" data-target="#collapseTwel"><i className="fa fa-plus" /></button>
                                                </h2>
                                            </div>
                                            <div id="collapseTwel" className="collapse" aria-labelledby="headingTwel" data-parent="#accordionExample">
                                                <div className="card-body">
                                                    <ul>
                                                        <li><Link href="/about"><a>About Us</a></Link></li>
                                                        <li><Link href="/faq"><a>Faq</a></Link></li>
                                                        <li><Link href="/toc"><a>Terms and conditions</a></Link></li>
                                                        <li><Link href="/privacy"><a>Privacy Policy</a></Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card ft_acco_bg">
                                            <div className="card-header" id="headingTwel">
                                                <h2 className="mb-0 border-top border-bottom">
                                                    <a href="#">Contact Info</a>
                                                    <button type="button" className="btn btn-link" data-toggle="collapse" data-target="#collapseTwel1"><i className="fa fa-plus" /></button>
                                                </h2>
                                            </div>
                                            <div id="collapseTwel1" className="collapse" aria-labelledby="headingTwel1" data-parent="#accordionExample">
                                                <div className="card-body">
                                                    <p className="text-white"><span><strong>Gandhi 1944,</strong> 326 Phahurat Road, Bangkok 10200, Thailand T+66 (0) 2225 5997, +66 (0) 2225 5503 H 08:45 - 18:00 (Mon-Sun)</span></p>

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
        </footer>
    );
}