import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useRouter } from "next/router";
import useSWR from "swr";

export default function Header(props) {
    const [cartItemCount, setCartItemCount] = useState(0)
    const config = useSelector(state => state.config)
    const [showSearchMenu, setShowSearchMenu] = useState(false);
    const [categories, setCategories] = useState([]);
    const router = useRouter();
    const dispatch = useDispatch();

    useEffect(() => {
        navigation() // written in script.js

        if (config.cartItems) {
            setCartItemCount(config.cartItems);
        }
    })

    useEffect(() => {
        axios.get(`${process.env.API_URL}category`).then(response => {
            setCategories(response.data.rows);
        });
    }, []);

    const storeConfig = useSelector(state => state.config);

    const [selectedCurrency, setSelectedCurrency] = useState(storeConfig.currency.id);

    const fetcher = async (url) => await axios.get(url).then(res => res.data);
    const { data } = useSWR(`${process.env.API_URL}static/config`, fetcher, { revalidateOnFocus: false });

    const setCurrency = (e) => {
        let c = data.filter(d => parseInt(e.target.value) === d.id);
        c = c[0];

        dispatch({ type: 'SET_CURRENCY', payload: c });
        setSelectedCurrency(c.id);
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <header className={props.shadow ? "header_area head_shedow" : "header_area"}>
            <div className="main_header_area animated">
                <div className="container-fluid">
                    <nav id="navigation1" className="navigation_1 row">
                        <div className="nav-header">
                            <div className="icon_r_12 tabs_veiw">
                                <div className="inner_po_right">
                                    <div className="icon_up">
                                        <Link href="/cart">
                                            <a className="mobileCart">
                                                <img src="/images/address_icon/card.svg" alt="cart" />
                                                <span className="badge" id="cartItems">{cartItemCount}</span>
                                            </a>
                                        </Link>
                                        <Link href="/account?view=wishlist">
                                            <a>
                                                <img src="/images/address_icon/heart.svg" alt="wishlist" />
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <a className="nav-brand" href="/">
                                <img src="/images/logo.png" alt="gandhi logo" />
                            </a>
                            <div className="nav-toggle" />
                        </div>
                        <div className="nav-menus-wrapper">
                            <ul className="nav-menu categoery_menu align-to-right wt_tx">
                                <li>
                                    <div className="bs-example tabs_veiw">
                                        <div className="accordion acco_after" id="accordionExample_1">
                                            <div className="card">
                                                <div className="card-header" id="heading_1">
                                                    <h2 className="mb-0">
                                                        <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse_1">
                                                            <p>My Accounts</p>
                                                            <i className="fa fa-plus" />
                                                        </button>
                                                    </h2>
                                                </div>
                                                <div id="collapse_1" className="collapse" aria-labelledby="heading_1" data-parent="#accordionExample">
                                                    <div className="card-body">
                                                        {
                                                            config.auth ?
                                                                <ul>
                                                                    <li>
                                                                        <Link href="/account?tab=1">
                                                                            <a className="mobileMenuIcon">Profile</a>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="/account?tab=2">
                                                                            <a className="mobileMenuIcon">Orders</a>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="/account?tab=4">
                                                                            <a className="mobileMenuIcon">Address</a>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="/account?tab=5">
                                                                            <a className="mobileMenuIcon">Wishlist</a>
                                                                        </Link>
                                                                    </li>
                                                                    <li>

                                                                        <a onClick={() => dispatch({ type: "SIGN_OUT" })}>Log Out</a>

                                                                    </li>
                                                                </ul>
                                                                :
                                                                <ul>
                                                                    <li>
                                                                        <Link href="/account">
                                                                            <a className="mobileMenuIcon">Login</a>
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li><Link href="/contact"><a>Enquire</a></Link></li>
                                <li><Link href="/browsing"><a>Live Browsing</a></Link></li>
                                <li className="tp_bd_no">
                                    <a className="show_sub" href="#">All Fabric</a>
                                    <div className="megamenu-panel" id="close_menu">
                                        <div className="nav_head">
                                            <div className="tabs_veiw_s">
                                                <div className="row">
                                                    <div className="col-md-12 col-xs-12">
                                                        <div className="megamenu-lists">
                                                            <ul className="megamenu-list list-col-4">
                                                                <div className="cus_nv ac-menu">
                                                                    <div className="row cus_nv_m ac-list">
                                                                        <div id="some-div" className="expanded">
                                                                            <span>Cottons</span>
                                                                            <div id="some-element" className="sub-menu">
                                                                                <ul>
                                                                                    <li><a className="menuLinkDesktop" href="/category/cotton/plain-cotton">Plain Cotton</a></li>
                                                                                    <li><a className="menuLinkDesktop" href="/category/cotton/printed-cotton">Printed Cotton</a></li>
                                                                                    <li><a className="menuLinkDesktop" href="/category/cotton/cotton-shirting">Cotton Shirting</a></li>
                                                                                    <li><a className="menuLinkDesktop" href="/category/cotton/cotton-blends">Cotton Blends</a></li>
                                                                                    <li><a className="menuLinkDesktop" href="/category/cotton/cotton-embroideries">Cotton Embroideries</a></li>
                                                                                    <li><a className="menuLinkDesktop" href="/category/cotton/cotton-twill">Cotton Twill</a></li>
                                                                                    <li><a className="menuLinkDesktop" href="/category/cotton/cotton-jacquard">Cotton Jacquard</a></li>
                                                                                    <li><a className="menuLinkDesktop" href="/category/cotton/cotton-lace">Cotton Lace</a></li>
                                                                                </ul>
                                                                                <div id="some-div" className="expanded chaild">
                                                                                    <span>Satin</span>
                                                                                    <div id="some-element" className="sub-menu">
                                                                                        <ul>
                                                                                            <li><a className="menuLinkDesktop" href="/category/satin/satin-blends">Satin Blends</a></li>
                                                                                            <li><a className="menuLinkDesktop" href="/category/satin/printed-satins">Printed Satins</a></li>
                                                                                            <li><a className="menuLinkDesktop" href="/category/satin/man-made-satins">Man Made Satins</a></li>
                                                                                            <li><a className="menuLinkDesktop" href="/category/satin/satin-silk">Silk Satin</a></li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div id="some-div" className="expanded">
                                                                            <span>Lace</span>
                                                                            <div id="some-element" className="sub-menu">
                                                                                <ul>
                                                                                    <li><a className="menuLinkDesktop" href="/category/lace/sequin-laces">Sequin Laces</a></li>
                                                                                    <li><a className="menuLinkDesktop" href="/category/lace/french-laces">French Laces</a></li>
                                                                                    <li><a className="menuLinkDesktop" href="/category/lace/3d-laces">3D Laces</a></li>
                                                                                    <li><a className="menuLinkDesktop" href="/category/lace/cotton-laces">Cotton Laces</a></li>
                                                                                    <li><a className="menuLinkDesktop" href="/category/lace/metallic-laces">Metallic Laces</a></li>
                                                                                </ul>
                                                                                <div id="some-div" className="expanded chaild">
                                                                                    <span>Linen</span>
                                                                                    <div id="some-element" className="sub-menu">
                                                                                        <ul>
                                                                                            <li><a className="menuLinkDesktop" href="/category/linen/plain-linen">Plain Linen</a></li>
                                                                                            <li><a className="menuLinkDesktop" href="/category/linen/printed-linen">Printed Linen</a></li>
                                                                                            <li><a className="menuLinkDesktop" href="/category/linen/linen-wool">Linen Wool</a></li>
                                                                                            <li><a className="menuLinkDesktop" href="/category/linen/linen-viscose">Linen Viscose</a></li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div id="some-div" className="expanded">
                                                                            <span>Silk</span>
                                                                            <div id="some-element" className="sub-menu">
                                                                                <ul>
                                                                                    <li><a className="menuLinkDesktop" href="/category/silk/plain-silk">Plain Silk</a></li>
                                                                                    <li><a className="menuLinkDesktop" href="/category/silk/printed-silk">Printed Silk</a></li>
                                                                                    <li><a className="menuLinkDesktop" href="/category/silk/silk-satin">Silk Satin</a></li>
                                                                                    <li><a className="menuLinkDesktop" href="/category/silk/silk-chiffon-and-tulle">Silk Chiffon and Tulle</a></li>
                                                                                    <li><a className="menuLinkDesktop" href="/category/silk/silk-blends">Silk Blends</a></li>
                                                                                    <li><a className="menuLinkDesktop" href="/category/silk/silk-brocade">Silk Brocade</a></li>
                                                                                    <li><a className="menuLinkDesktop" href="/category/silk/silk-jacquard">Silk Jacquard</a></li>
                                                                                    <li><a className="menuLinkDesktop" href="/category/silk/silk-lace">Silk Lace</a></li>
                                                                                </ul>
                                                                                <div id="some-div" className="expanded chaild">
                                                                                    <span>Shirting</span>
                                                                                    <div id="some-element" className="sub-menu">
                                                                                        <ul>
                                                                                            <li><a className="menuLinkDesktop" href="/category/shirting/shirting-cotton">Cotton</a></li>
                                                                                            <li><a className="menuLinkDesktop" href="/category/shirting/shirting-blend">Blend</a></li>
                                                                                            <li><a className="menuLinkDesktop" href="/category/shirting/shirting-silk">Silk</a></li>
                                                                                            <li><a className="menuLinkDesktop" href="/category/shirting/shirting-linen">Linen</a></li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div id="some-div" className="expanded">
                                                                            <span>Bestsellers</span>
                                                                            <div id="some-element" className=" sub-menu">
                                                                                <ul>
                                                                                    <li><a className="menuLinkDesktop" href="/category/bestsellers/lace-best">Lace</a></li>
                                                                                    <li><a className="menuLinkDesktop" href="/category/bestsellers/plain-dyed-best">Plain Dyed</a></li>
                                                                                    <li><a className="menuLinkDesktop" href="/category/bestsellers/prints-best">Prints</a></li>
                                                                                    <li><a className="menuLinkDesktop" href="/category/bestsellers/brocade-best">Brocade</a></li>
                                                                                    <li><a className="menuLinkDesktop" href="/category/bestsellers/satin-best">Satin</a></li>
                                                                                </ul>
                                                                                <div id="some-div" className="expanded chaild">
                                                                                    <span>Wool</span>
                                                                                    <div id="some-element" className=" sub-menu">
                                                                                        <ul>
                                                                                            <li><a className="menuLinkDesktop" href="/category/wool/pure-wool-fabrics">Pure Wool Fabrics</a></li>
                                                                                            <li><a className="menuLinkDesktop" href="/category/wool/wool-blends">Wool Blends</a></li>
                                                                                            <li><a className="menuLinkDesktop" href="/category/wool/wool-gauze">Wool Gauze</a></li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div id="some-div" className="expanded">
                                                                            <span>Trends</span>
                                                                            <div id="some-element" className="sub-menu">
                                                                                <ul>
                                                                                    <li><a className="menuLinkDesktop" href="/category/trends/prints-trends">Prints</a></li>
                                                                                    <li><a className="menuLinkDesktop" href="/category/trends/satin-trends">Satin</a></li>
                                                                                    <li><a className="menuLinkDesktop" href="/category/trends/lace-trends">Lace</a></li>
                                                                                </ul>
                                                                                <div id="some-div" className="expanded chaild">
                                                                                    <span>Traditional </span>
                                                                                    <div id="some-element" className="sub-menu">
                                                                                        <ul>
                                                                                            <li><a className="menuLinkDesktop" href="/category/traditional/silk-traditional">Silk</a></li>
                                                                                            <li><a className="menuLinkDesktop" href="/category/traditional/brocades-traditional">Brocades</a></li>
                                                                                            <li><a className="menuLinkDesktop" href="/category/traditional/prints-traditional">Prints</a></li>
                                                                                            <li><a className="menuLinkDesktop" href="/category/traditional/jacquard-traditional">Jacquard</a></li>
                                                                                            <li><a className="menuLinkDesktop" href="/category/traditional/satin-traditional">Satin</a></li>
                                                                                            <li><a className="menuLinkDesktop" href="/category/traditional/cotton-traditional">Cotton</a></li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div id="some-div" className="expanded">
                                                                            <span>Natural</span>
                                                                            <div id="some-element" className="sub-menu">
                                                                                <ul>
                                                                                    <li><a className="menuLinkDesktop" href="/category/natural/cotton-natural">Cotton</a></li>
                                                                                    <li><a className="menuLinkDesktop" href="/category/natural/silk-natural">Silk</a></li>
                                                                                    <li><a className="menuLinkDesktop" href="/category/natural/viscose-natural">Viscose</a></li>
                                                                                    <li><a className="menuLinkDesktop" href="/category/natural/linen-natural">Linen</a></li>
                                                                                    <li><a className="menuLinkDesktop" href="/category/natural/wool-natural">Wool</a></li>
                                                                                </ul>
                                                                                <div id="some-div" className="expanded chaild">
                                                                                    <span>Man Made</span>
                                                                                    <div id="some-element" className="sub-menu">
                                                                                        <ul>
                                                                                            <li><a className="menuLinkDesktop" href="/category/man-made/polyester-man-made">Polyester</a></li>
                                                                                            <li><a className="menuLinkDesktop" href="/category/man-made/nylon-man-made">Nylon</a></li>
                                                                                            <li><a className="menuLinkDesktop" href="/category/man-made/acetates-man-made">Acetates</a></li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                                <div id="some-div" className="expanded chaild">
                                                                                    <span>Embroideries</span>
                                                                                    <div id="some-element" className="sub-menu">
                                                                                        <ul>
                                                                                            <li><a className="menuLinkDesktop" href="/category/embroideries/cotton-em">Cotton</a></li>
                                                                                            <li><a className="menuLinkDesktop" href="/category/embroideries/silk-em">Silk</a></li>
                                                                                            <li><a className="menuLinkDesktop" href="/category/embroideries/sequins-em">Sequins</a></li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div id="some-div" className="expanded">
                                                                            <span>Prints</span>
                                                                            <div id="some-element" className="sub-menu">
                                                                                <ul>
                                                                                    <li><a className="menuLinkDesktop" href="/category/prints/cotton-prints">Cotton</a></li>
                                                                                    <li><a className="menuLinkDesktop" href="/category/prints/silk-prints">Silk</a></li>
                                                                                    <li><a className="menuLinkDesktop" href="/category/prints/chiffon-prints">Chiffon</a></li>
                                                                                    <li><a className="menuLinkDesktop" href="/category/prints/linen-prints">Linen</a></li>
                                                                                </ul>
                                                                                <div id="some-div" className="expanded chaild">
                                                                                    <span>Jacquards</span>
                                                                                    <div id="some-element" className="sub-menu">
                                                                                        <ul>
                                                                                            <li><a className="menuLinkDesktop" href="/category/jacquards/cotton-jaq">Cotton</a></li>
                                                                                            <li><a className="menuLinkDesktop" href="/category/jacquards/silk-jac">Silk</a></li>
                                                                                            <li><a className="menuLinkDesktop" href="/category/jacquards/blends-jac">Blends</a></li>
                                                                                            <li><a className="menuLinkDesktop" href="/category/jacquards/prints-jac">Prints</a></li>
                                                                                            <li><a className="menuLinkDesktop" href="/category/jacquards/embroideries-jac">Embroideries</a></li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                                <div id="some-div" className="expanded chaild">
                                                                                    <span>Suiting</span>
                                                                                    <div id="some-element" className="sub-menu">
                                                                                        <ul>
                                                                                            <li><a className="menuLinkDesktop" href="/category/suiting/cotton-suiting">Cotton</a></li>
                                                                                            <li><a className="menuLinkDesktop" href="/category/suiting/blend-suiting">Blend</a></li>
                                                                                            <li><a className="menuLinkDesktop" href="/category/suiting/wool-suiting">Wool</a></li>
                                                                                            <li><a className="menuLinkDesktop" href="/category/suiting/linen-suiting">Linen</a></li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bs-example tabs_veiw">
                                                <div className="accordion acco_after" id="accordionExample">
                                                    <div className="card">
                                                        <div className="card-header" id="headingOne">
                                                            <h2 className="mb-0">
                                                                <a href="#">Cotton</a>
                                                                <button type="button" className="btn btn-link" data-toggle="collapse" data-target="#collapseOne"><i className="fa fa-plus" /></button>
                                                            </h2>
                                                        </div>
                                                        <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                                            <div className="card-body">
                                                                <ul>
                                                                    <li><a className="menuLinkDesktop" href="/category/cotton/plain-cotton">Plain Cotton</a></li>
                                                                    <li><a className="menuLinkDesktop" href="/category/cotton/printed-cotton">Printed Cotton</a></li>
                                                                    <li><a className="menuLinkDesktop" href="/category/cotton/cotton-shirting">Cotton Shirting</a></li>
                                                                    <li><a className="menuLinkDesktop" href="/category/cotton/cotton-blends">Cotton Blends</a></li>
                                                                    <li><a className="menuLinkDesktop" href="/category/cotton/cotton-embroideries">Cotton Embroideries</a></li>
                                                                    <li><a className="menuLinkDesktop" href="/category/cotton/cotton-twill">Cotton Twill</a></li>
                                                                    <li><a className="menuLinkDesktop" href="/category/cotton/cotton-jacquard">Cotton Jacquard</a></li>
                                                                    <li><a className="menuLinkDesktop" href="/category/cotton/cotton-lace">Cotton Lace</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card">
                                                        <div className="card-header" id="headingTwo">
                                                            <h2 className="mb-0">
                                                                <a href="#">Satin</a>
                                                                <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo"><i className="fa fa-plus" /></button>
                                                            </h2>
                                                        </div>
                                                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                                            <div className="card-body">
                                                                <ul>
                                                                    <li><a className="menuLinkDesktop" href="/category/satin/satin-blends">Satin Blends</a></li>
                                                                    <li><a className="menuLinkDesktop" href="/category/satin/printed-satins">Printed Satins</a></li>
                                                                    <li><a className="menuLinkDesktop" href="/category/satin/man-made-satins">Man Made Satins</a></li>
                                                                    <li><a className="menuLinkDesktop" href="/category/satin/satin-silk">Silk Satin</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card">
                                                        <div className="card-header" id="headingThree">
                                                            <h2 className="mb-0">
                                                                <a href="#">Lace</a>
                                                                <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree"><i className="fa fa-plus" /></button>
                                                            </h2>
                                                        </div>
                                                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                                            <div className="card-body">
                                                                <ul>
                                                                    <li><a className="menuLinkDesktop" href="/category/lace/sequin-laces">Sequin Laces</a></li>
                                                                    <li><a className="menuLinkDesktop" href="/category/lace/french-laces">French Laces</a></li>
                                                                    <li><a className="menuLinkDesktop" href="/category/lace/3d-laces">3D Laces</a></li>
                                                                    <li><a className="menuLinkDesktop" href="/category/lace/cotton-laces">Cotton Laces</a></li>
                                                                    <li><a className="menuLinkDesktop" href="/category/lace/metallic-laces">Metallic Laces</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card">
                                                        <div className="card-header" id="headingfive">
                                                            <h2 className="mb-0">
                                                                <a href="#">Linen</a>
                                                                <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapsefive"><i className="fa fa-plus" /></button>
                                                            </h2>
                                                        </div>
                                                        <div id="collapsefive" className="collapse" aria-labelledby="headingfive" data-parent="#accordionExample">
                                                            <div className="card-body">
                                                                <ul>
                                                                    <li><a className="menuLinkDesktop" href="/category/linen/plain-linen">Plain Linen</a></li>
                                                                    <li><a className="menuLinkDesktop" href="/category/linen/printed-linen">Printed Linen</a></li>
                                                                    <li><a className="menuLinkDesktop" href="/category/linen/linen-wool">Linen Wool</a></li>
                                                                    <li><a className="menuLinkDesktop" href="/category/linen/linen-viscose">Linen Viscose</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card">
                                                        <div className="card-header" id="headingsix">
                                                            <h2 className="mb-0">
                                                                <a href="#">Silk</a>
                                                                <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapsesix"><i className="fa fa-plus" /></button>
                                                            </h2>
                                                        </div>
                                                        <div id="collapsesix" className="collapse" aria-labelledby="headingsix" data-parent="#accordionExample">
                                                            <div className="card-body">
                                                                <ul>
                                                                    <li><a className="menuLinkDesktop" href="/category/silk/plain-silk">Plain Silk</a></li>
                                                                    <li><a className="menuLinkDesktop" href="/category/silk/printed-silk">Printed Silk</a></li>
                                                                    <li><a className="menuLinkDesktop" href="/category/silk/silk-satin">Silk Satin</a></li>
                                                                    <li><a className="menuLinkDesktop" href="/category/silk/silk-chiffon-and-tulle">Silk Chiffon and Tulle</a></li>
                                                                    <li><a className="menuLinkDesktop" href="/category/silk/silk-blends">Silk Blends</a></li>
                                                                    <li><a className="menuLinkDesktop" href="/category/silk/silk-brocade">Silk Brocade</a></li>
                                                                    <li><a className="menuLinkDesktop" href="/category/silk/silk-jacquard">Silk Jacquard</a></li>
                                                                    <li><a className="menuLinkDesktop" href="/category/silk/silk-lace">Silk Lace</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card">
                                                        <div className="card-header" id="headingseven">
                                                            <h2 className="mb-0">
                                                                <a href="#">Shirting</a>
                                                                <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseseven"><i className="fa fa-plus" /></button>
                                                            </h2>
                                                        </div>
                                                        <div id="collapseseven" className="collapse" aria-labelledby="headingseven" data-parent="#accordionExample">
                                                            <div className="card-body">
                                                                <ul>
                                                                    <li><a className="menuLinkDesktop" href="/category/shirting/shirting-cotton">Cotton</a></li>
                                                                    <li><a className="menuLinkDesktop" href="/category/shirting/shirting-blend">Blend</a></li>
                                                                    <li><a className="menuLinkDesktop" href="/category/shirting/shirting-silk">Silk</a></li>
                                                                    <li><a className="menuLinkDesktop" href="/category/shirting/shirting-linen">Linen</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card">
                                                        <div className="card-header" id="headingeight">
                                                            <h2 className="mb-0">
                                                                <a href="#">Bestsellers</a>
                                                                <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseeight"><i className="fa fa-plus" /></button>
                                                            </h2>
                                                        </div>
                                                        <div id="collapseeight" className="collapse" aria-labelledby="headingeight" data-parent="#accordionExample">
                                                            <div className="card-body">
                                                                <ul>
                                                                    <li><a className="menuLinkDesktop" href="/category/bestsellers/lace-best">Lace</a></li>
                                                                    <li><a className="menuLinkDesktop" href="/category/bestsellers/plain-dyed-best">Plain Dyed</a></li>
                                                                    <li><a className="menuLinkDesktop" href="/category/bestsellers/prints-best">Prints</a></li>
                                                                    <li><a className="menuLinkDesktop" href="/category/bestsellers/brocade-best">Brocade</a></li>
                                                                    <li><a className="menuLinkDesktop" href="/category/bestsellers/satin-best">Satin</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card">
                                                        <div className="card-header" id="headingnine">
                                                            <h2 className="mb-0">
                                                                <a href="#">Wool</a>
                                                                <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapsenine"><i className="fa fa-plus" /></button>
                                                            </h2>
                                                        </div>
                                                        <div id="collapsenine" className="collapse" aria-labelledby="headingnine" data-parent="#accordionExample">
                                                            <div className="card-body">
                                                                <ul>
                                                                    <li><a className="menuLinkDesktop" href="/category/wool/pure-wool-fabrics">Pure Wool Fabrics</a></li>
                                                                    <li><a className="menuLinkDesktop" href="/category/wool/wool-blends">Wool Blends</a></li>
                                                                    <li><a className="menuLinkDesktop" href="/category/wool/wool-gauze">Wool Gauze</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card">
                                                        <div className="card-header" id="headingten">
                                                            <h2 className="mb-0">
                                                                <a href="#">Trends</a>
                                                                <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseten"><i className="fa fa-plus" /></button>
                                                            </h2>
                                                        </div>
                                                        <div id="collapseten" className="collapse" aria-labelledby="headingten" data-parent="#accordionExample">
                                                            <div className="card-body">
                                                                <ul>
                                                                    <li><a className="menuLinkDesktop" href="/category/trends/prints-trends">Prints</a></li>
                                                                    <li><a className="menuLinkDesktop" href="/category/trends/satin-trends">Satin</a></li>
                                                                    <li><a className="menuLinkDesktop" href="/category/trends/lace-trends">Lace</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card">
                                                        <div className="card-header" id="headingeleven">
                                                            <h2 className="mb-0">
                                                                <a href="#">Traditional</a>
                                                                <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseeleven"><i className="fa fa-plus" /></button>
                                                            </h2>
                                                        </div>
                                                        <div id="collapseeleven" className="collapse" aria-labelledby="headingeleven" data-parent="#accordionExample">
                                                            <div className="card-body">
                                                                <ul>
                                                                    <li><a className="menuLinkDesktop" href="/category/traditional/silk-traditional">Silk</a></li>
                                                                    <li><a className="menuLinkDesktop" href="/category/traditional/brocades-traditional">Brocades</a></li>
                                                                    <li><a className="menuLinkDesktop" href="/category/traditional/prints-traditional">Prints</a></li>
                                                                    <li><a className="menuLinkDesktop" href="/category/traditional/jacquard-traditional">Jacquard</a></li>
                                                                    <li><a className="menuLinkDesktop" href="/category/traditional/satin-traditional">Satin</a></li>
                                                                    <li><a className="menuLinkDesktop" href="/category/traditional/cotton-traditional">Cotton</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card">
                                                        <div className="card-header" id="headingtwel">
                                                            <h2 className="mb-0">
                                                                <a href="#">Natural</a>
                                                                <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapsetwel"><i className="fa fa-plus" /></button>
                                                            </h2>
                                                        </div>
                                                        <div id="collapsetwel" className="collapse" aria-labelledby="headingtwel" data-parent="#accordionExample">
                                                            <div className="card-body">
                                                                <ul>
                                                                    <li><a className="menuLinkDesktop" href="/category/natural/cotton-natural">Cotton</a></li>
                                                                    <li><a className="menuLinkDesktop" href="/category/natural/silk-natural">Silk</a></li>
                                                                    <li><a className="menuLinkDesktop" href="/category/natural/viscose-natural">Viscose</a></li>
                                                                    <li><a className="menuLinkDesktop" href="/category/natural/linen-natural">Linen</a></li>
                                                                    <li><a className="menuLinkDesktop" href="/category/natural/wool-natural">Wool</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card">
                                                        <div className="card-header" id="headingtherty">
                                                            <h2 className="mb-0">
                                                                <a href="#">Man Made</a>
                                                                <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapsetherty"><i className="fa fa-plus" /></button>
                                                            </h2>
                                                        </div>
                                                        <div id="collapsetherty" className="collapse" aria-labelledby="headingtherty" data-parent="#accordionExample">
                                                            <div className="card-body">
                                                                <ul>
                                                                    <li><a className="menuLinkDesktop" href="/category/man-made/polyester-man-made">Polyester</a></li>
                                                                    <li><a className="menuLinkDesktop" href="/category/man-made/nylon-man-made">Nylon</a></li>
                                                                    <li><a className="menuLinkDesktop" href="/category/man-made/acetates-man-made">Acetates</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card">
                                                        <div className="card-header" id="headingtherty">
                                                            <h2 className="mb-0">
                                                                <a href="#">Embroideries</a>
                                                                <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapsetherty"><i className="fa fa-plus" /></button>
                                                            </h2>
                                                        </div>
                                                        <div id="collapsetherty" className="collapse" aria-labelledby="headingtherty" data-parent="#accordionExample">
                                                            <div className="card-body">
                                                                <ul>
                                                                    <li><a className="menuLinkDesktop" href="/category/embroideries/cotton-em">Cotton</a></li>
                                                                    <li><a className="menuLinkDesktop" href="/category/embroideries/silk-em">Silk</a></li>
                                                                    <li><a className="menuLinkDesktop" href="/category/embroideries/sequins-em">Sequins</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card">
                                                        <div className="card-header" id="headingfifty">
                                                            <h2 className="mb-0">
                                                                <a href="#">Prints</a>
                                                                <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapsefifty"><i className="fa fa-plus" /></button>
                                                            </h2>
                                                        </div>
                                                        <div id="collapsefifty" className="collapse" aria-labelledby="headingfifty" data-parent="#accordionExample">
                                                            <div className="card-body">
                                                                <ul>
                                                                    <li><a className="menuLinkDesktop" href="/category/embroideries/cotton-em">Cotton</a></li>
                                                                    <li><a className="menuLinkDesktop" href="/category/embroideries/silk-em">Silk</a></li>
                                                                    <li><a className="menuLinkDesktop" href="/category/embroideries/sequins-em">Sequins</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card">
                                                        <div className="card-header" id="headingsixty">
                                                            <h2 className="mb-0">
                                                                <a href="#">Jacquards</a>
                                                                <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapsesixty"><i className="fa fa-plus" /></button>
                                                            </h2>
                                                        </div>
                                                        <div id="collapsesixty" className="collapse" aria-labelledby="headingsixty" data-parent="#accordionExample">
                                                            <div className="card-body">
                                                                <ul>
                                                                    <li><a className="menuLinkDesktop" href="/category/prints/cotton-prints">Cotton</a></li>
                                                                    <li><a className="menuLinkDesktop" href="/category/prints/silk-prints">Silk</a></li>
                                                                    <li><a className="menuLinkDesktop" href="/category/prints/chiffon-prints">Chiffon</a></li>
                                                                    <li><a className="menuLinkDesktop" href="/category/prints/linen-prints">Linen</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card">
                                                        <div className="card-header" id="headingseventy">
                                                            <h2 className="mb-0">
                                                                <a href="#">Suiting</a>
                                                                <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseseventy"><i className="fa fa-plus" /></button>
                                                            </h2>
                                                        </div>
                                                        <div id="collapseseventy" className="collapse" aria-labelledby="headingseventy" data-parent="#accordionExample">
                                                            <div className="card-body">
                                                                <ul>
                                                                    <li><a className="menuLinkDesktop" href="/category/suiting/cotton-suiting">Cotton</a></li>
                                                                    <li><a className="menuLinkDesktop" href="/category/suiting/blend-suiting">Blend</a></li>
                                                                    <li><a className="menuLinkDesktop" href="/category/suiting/wool-suiting">Wool</a></li>
                                                                    <li><a className="menuLinkDesktop" href="/category/suiting/linen-suiting">Linen</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <div className>
                                    <div className="nav-search tabs_veiw_s">
                                        <div className="example">
                                            <form action="/search" autoComplete="off">
                                                <input type="text" placeholder="Search for product, code, or collection." name="query" defaultValue={router.query.query ? router.query.query : ""} />
                                                <button type="submit">
                                                    <img src="/images/address_icon/search.svg" alt="search-icon" />
                                                </button>
                                            </form>
                                        </div>
                                        <li className="desk_view">
                                            <div className="currencySwitch">{
                                                data &&
                                                <select id="luggage" defaultValue={selectedCurrency} onChange={setCurrency}>
                                                    {
                                                        data.map(d => {
                                                            return (<option value={d.id} key={d.id}>{d.code}</option>)
                                                        })
                                                    }
                                                </select>
                                            }</div>
                                        </li>
                                        <Link href="/account?tab=5">
                                            <a>
                                                <img src="/images/address_icon/heart.svg" alt="cart" />
                                            </a>
                                        </Link>
                                        <Link href="/account">
                                            <a>
                                                <img src="/images/address_icon/user.svg" alt="account" />
                                            </a>
                                        </Link>
                                        <Link href="/cart">
                                            <a>
                                                <img src="/images/address_icon/card.svg" alt="cart" />
                                                <span className="badge" id="cartItems">{cartItemCount}</span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </nav>
                    <form className="example mob_view" action="/search" autoComplete="off">
                        <input type="text" placeholder="Search for product, code, or collection." name="query" defaultValue={router.query.query ? router.query.query : ""} />
                        <button type="submit"><img src="/images/address_icon/search.svg" alt="search-icon" /></button>
                    </form>
                </div>
            </div>
        </header>
    );
}