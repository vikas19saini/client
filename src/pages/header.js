import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useRouter } from "next/router";
import useSWR from "swr";
import useTranslation from 'next-translate/useTranslation'

export default function Header(props) {
    const [cartItemCount, setCartItemCount] = useState(0)
    const config = useSelector(state => state.config)
    /* const [showSearchMenu, setShowSearchMenu] = useState(false); */
    /* const [categories, setCategories] = useState([]); */
    const router = useRouter();
    const { pathname, asPath, query, locale } = router
    const dispatch = useDispatch();
    const { t } = useTranslation()

    useEffect(() => {
        navigation() // written in script.js

        if (config.cartItems) {
            setCartItemCount(config.cartItems);
        }
    }, [pathname])

    /* useEffect(() => {
        axios.get(`${process.env.API_URL}category`).then(response => {
            setCategories(response.data.rows);
        });
    }, []); */

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
        <header className="header_area head_shedow">
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
                            <Link href="/" locale={locale} >
                                <a className="nav-brand" href="/">
                                    <img src="/images/logo.png" alt="gandhi logo" />
                                </a>
                            </Link>
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
                                                            <p>My Accounts</p> <i className="fa fa-plus" />
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
                                <li className="tp_bd_no">
                                    <a className="show_sub" href="#">{t("common:all_falbric")}</a>
                                    <div className="megamenu-panel" id="close_menu" style={{ display: "none" }}>
                                        <div className="nav_head">
                                            <div className="tabs_veiw_s">
                                                <div className="row">
                                                    <div className="col-md-12 col-xs-12">
                                                        <div className="megamenu-lists">
                                                            <ul className="megamenu-list list-col-4">
                                                                <div className="cus_nv ac-menu">
                                                                    <div className="row cus_nv_m ac-list">
                                                                        <div id="some-div" className="expanded">
                                                                            <Link href="/category/cotton" locale={locale}>
                                                                                <a><span>Cottons</span></a>
                                                                            </Link>
                                                                            <div id="some-element" className="sub-menu">
                                                                                <ul>
                                                                                    <li>
                                                                                        <Link href="/category/cotton/plain-cotton" locale={locale}>
                                                                                            <a className="menuLinkDesktop">Plain Cotton</a>
                                                                                        </Link>
                                                                                    </li>
                                                                                    <li>
                                                                                        <Link href="/category/cotton/printed-cotton" locale={locale}>
                                                                                            <a className="menuLinkDesktop">Printed Cotton</a>
                                                                                        </Link>
                                                                                    </li>
                                                                                    <li>
                                                                                        <Link href="/category/cotton/cotton-shirting" locale={locale}>
                                                                                            <a className="menuLinkDesktop">Cotton Shirting</a>
                                                                                        </Link>
                                                                                    </li>
                                                                                    <li>
                                                                                        <Link href="/category/cotton/cotton-blends" locale={locale}>
                                                                                            <a className="menuLinkDesktop">Cotton Blends</a>
                                                                                        </Link>
                                                                                    </li>
                                                                                    <li>
                                                                                        <Link href="/category/cotton/cotton-embroideries" locale={locale}>
                                                                                            <a className="menuLinkDesktop">Cotton Embroideries</a>
                                                                                        </Link>
                                                                                    </li>
                                                                                    <li>
                                                                                        <Link href="/category/cotton/cotton-twill" locale={locale}>
                                                                                            <a className="menuLinkDesktop">Cotton Twill</a>
                                                                                        </Link>
                                                                                    </li>
                                                                                    <li>
                                                                                        <Link href="/category/cotton/cotton-jacquard" locale={locale}>
                                                                                            <a className="menuLinkDesktop">Cotton Jacquard</a>
                                                                                        </Link>
                                                                                    </li>
                                                                                    <li>
                                                                                        <Link href="/category/cotton/cotton-lace" locale={locale}>
                                                                                            <a className="menuLinkDesktop">Cotton Lace</a>
                                                                                        </Link>
                                                                                    </li>
                                                                                </ul>
                                                                                <div id="some-div" className="expanded chaild">
                                                                                    <Link href="/category/satin" locale={locale}>
                                                                                        <a>
                                                                                            <span>Satin</span>
                                                                                        </a>
                                                                                    </Link>
                                                                                    <div id="some-element" className="sub-menu">
                                                                                        <ul>
                                                                                            <li>
                                                                                                <Link href="/category/satin/satin-blends" locale={locale}>
                                                                                                    <a className="menuLinkDesktop">Satin Blends</a>
                                                                                                </Link>
                                                                                            </li>
                                                                                            <li>
                                                                                                <Link href="/category/satin/printed-satins" locale={locale}>
                                                                                                    <a className="menuLinkDesktop">Printed Satins</a>
                                                                                                </Link>
                                                                                            </li>
                                                                                            <li>
                                                                                                <Link href="/category/satin/man-made-satins" locale={locale}>
                                                                                                    <a className="menuLinkDesktop">Man Made Satins</a>
                                                                                                </Link>
                                                                                            </li>
                                                                                            <li>
                                                                                                <Link href="/category/satin/satin-silk" locale={locale}>
                                                                                                    <a className="menuLinkDesktop">Silk
                                                                                                        Satin</a>
                                                                                                </Link>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div id="some-div" className="expanded">
                                                                            <Link href="/category/lace" locale={locale}>
                                                                                <a><span>Lace</span></a>
                                                                            </Link>
                                                                            <div id="some-element" className="sub-menu">
                                                                                <ul>
                                                                                    <li>
                                                                                        <Link href="/category/lace/sequin-laces" locale={locale}>
                                                                                            <a className="menuLinkDesktop">Sequin
                                                                                                Laces</a>
                                                                                        </Link></li>
                                                                                    <li>
                                                                                        <Link href="/category/lace/french-laces" locale={locale}>
                                                                                            <a className="menuLinkDesktop">French
                                                                                                Laces</a>
                                                                                        </Link></li>
                                                                                    <li>
                                                                                        <Link href="/category/lace/3d-laces" locale={locale}>
                                                                                            <a className="menuLinkDesktop">3D Laces</a>
                                                                                        </Link></li>
                                                                                    <li>
                                                                                        <Link href="/category/lace/cotton-laces" locale={locale}>
                                                                                            <a className="menuLinkDesktop">Cotton
                                                                                                Laces</a>
                                                                                        </Link></li>
                                                                                    <li>
                                                                                        <Link href="/category/lace/metallic-laces" locale={locale}>
                                                                                            <a className="menuLinkDesktop">Metallic
                                                                                                Laces</a>
                                                                                        </Link></li>
                                                                                </ul>
                                                                                <div id="some-div" className="expanded chaild">
                                                                                    <Link href="/category/linen" locale={locale}>
                                                                                        <a><span>Linen</span></a>
                                                                                    </Link>
                                                                                    <div id="some-element" className="sub-menu">
                                                                                        <ul>
                                                                                            <li>
                                                                                                <Link href="/category/linen/plain-linen" locale={locale}>
                                                                                                    <a className="menuLinkDesktop">Plain
                                                                                                        Linen</a>
                                                                                                </Link></li>
                                                                                            <li>
                                                                                                <Link href="/category/linen/printed-linen" locale={locale}>
                                                                                                    <a className="menuLinkDesktop">Printed
                                                                                                        Linen</a>
                                                                                                </Link></li>
                                                                                            <li>
                                                                                                <Link href="/category/linen/linen-wool" locale={locale}>
                                                                                                    <a className="menuLinkDesktop">Linen
                                                                                                        Wool</a>
                                                                                                </Link></li>
                                                                                            <li>
                                                                                                <Link href="/category/linen/linen-viscose" locale={locale}>
                                                                                                    <a className="menuLinkDesktop">Linen
                                                                                                        Viscose</a>
                                                                                                </Link></li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div id="some-div" className="expanded">
                                                                            <Link href="/category/silk" locale={locale}>
                                                                                <a><span>Silk</span></a>
                                                                            </Link>
                                                                            <div id="some-element" className="sub-menu">
                                                                                <ul>
                                                                                    <li>
                                                                                        <Link href="/category/silk/plain-silk" locale={locale}>
                                                                                            <a className="menuLinkDesktop">Plain Silk</a>
                                                                                        </Link>
                                                                                    </li>
                                                                                    <li>
                                                                                        <Link href="/category/silk/printed-silk" locale={locale}>
                                                                                            <a className="menuLinkDesktop">Printed
                                                                                                Silk</a>
                                                                                        </Link></li>
                                                                                    <li>
                                                                                        <Link href="/category/silk/silk-satin" locale={locale}>
                                                                                            <a className="menuLinkDesktop">Silk Satin</a>
                                                                                        </Link>
                                                                                    </li>
                                                                                    <li>
                                                                                        <Link href="/category/silk/silk-chiffon-and-tulle" locale={locale}>
                                                                                            <a className="menuLinkDesktop">Silk
                                                                                                Chiffon and Tulle</a>
                                                                                        </Link></li>
                                                                                    <li>
                                                                                        <Link href="/category/silk/silk-blends" locale={locale}>
                                                                                            <a className="menuLinkDesktop">Silk Blends</a>
                                                                                        </Link>
                                                                                    </li>
                                                                                    <li>
                                                                                        <Link href="/category/silk/silk-brocade" locale={locale}>
                                                                                            <a className="menuLinkDesktop">Silk
                                                                                                Brocade</a>
                                                                                        </Link>
                                                                                    </li>
                                                                                    <li>
                                                                                        <Link href="/category/silk/silk-jacquard" locale={locale}>
                                                                                            <a className="menuLinkDesktop">Silk
                                                                                                Jacquard</a>
                                                                                        </Link>
                                                                                    </li>
                                                                                    <li>
                                                                                        <Link href="/category/silk/silk-lace" locale={locale}>
                                                                                            <a className="menuLinkDesktop">Silk Lace</a>
                                                                                        </Link>
                                                                                    </li>
                                                                                </ul>
                                                                                <div id="some-div" className="expanded chaild">
                                                                                    <Link href="/category/shirting" locale={locale}>
                                                                                        <a><span>Shirting</span></a>
                                                                                    </Link>
                                                                                    <div id="some-element" className="sub-menu">
                                                                                        <ul>
                                                                                            <li>
                                                                                                <Link href="/category/shirting/shirting-cotton" locale={locale}>
                                                                                                    <a className="menuLinkDesktop">Cotton</a>
                                                                                                </Link>
                                                                                            </li>
                                                                                            <li>
                                                                                                <Link href="/category/shirting/shirting-blend" locale={locale}>
                                                                                                    <a className="menuLinkDesktop">Blend</a>
                                                                                                </Link>
                                                                                            </li>
                                                                                            <li>
                                                                                                <Link href="/category/shirting/shirting-silk" locale={locale}>
                                                                                                    <a className="menuLinkDesktop">Silk</a>
                                                                                                </Link>
                                                                                            </li>
                                                                                            <li>
                                                                                                <Link href="/category/shirting/shirting-linen" locale={locale}>
                                                                                                    <a className="menuLinkDesktop">Linen</a>
                                                                                                </Link>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div id="some-div" className="expanded">
                                                                            <Link href="/category/bestsellers" locale={locale}>
                                                                                <a><span>Bestsellers</span></a>
                                                                            </Link>
                                                                            <div id="some-element" className=" sub-menu">
                                                                                <ul>
                                                                                    <li>
                                                                                        <Link href="/category/bestsellers/lace-best" locale={locale}>
                                                                                            <a className="menuLinkDesktop">Lace</a>
                                                                                        </Link>
                                                                                    </li>
                                                                                    <li>
                                                                                        <Link href="/category/bestsellers/plain-dyed-best" locale={locale}>
                                                                                            <a className="menuLinkDesktop">Plain Dyed</a>
                                                                                        </Link>
                                                                                    </li>
                                                                                    <li>
                                                                                        <Link href="/category/bestsellers/prints-best" locale={locale}>
                                                                                            <a className="menuLinkDesktop">Prints</a>
                                                                                        </Link>
                                                                                    </li>
                                                                                    <li>
                                                                                        <Link href="/category/bestsellers/brocade-best" locale={locale}>
                                                                                            <a className="menuLinkDesktop">Brocade</a>
                                                                                        </Link>
                                                                                    </li>
                                                                                    <li>
                                                                                        <Link href="/category/bestsellers/satin-best" locale={locale}>
                                                                                            <a className="menuLinkDesktop">Satin</a>
                                                                                        </Link>
                                                                                    </li>
                                                                                </ul>
                                                                                <div id="some-div" className="expanded chaild">
                                                                                    <Link href="/category/wool" locale={locale}>
                                                                                        <a><span>Wool</span></a>
                                                                                    </Link>
                                                                                    <div id="some-element" className=" sub-menu">
                                                                                        <ul>
                                                                                            <li>
                                                                                                <Link href="/category/wool/pure-wool-fabrics" locale={locale}>
                                                                                                    <a className="menuLinkDesktop">Pure Wool Fabrics</a>
                                                                                                </Link>
                                                                                            </li>
                                                                                            <li>
                                                                                                <Link href="/category/wool/wool-blends" locale={locale}>
                                                                                                    <a className="menuLinkDesktop">Wool
                                                                                                        Blends</a>
                                                                                                </Link>
                                                                                            </li>
                                                                                            <li>
                                                                                                <Link href="/category/wool/wool-gauze" locale={locale}>
                                                                                                    <a className="menuLinkDesktop">Wool Gauze</a>
                                                                                                </Link>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div id="some-div" className="expanded">
                                                                            <Link href="/category/trends" locale={locale}>
                                                                                <a><span>Trends</span></a>
                                                                            </Link>
                                                                            <div id="some-element" className="sub-menu">
                                                                                <ul>
                                                                                    <li>
                                                                                        <Link href="/category/trends/prints-trends" locale={locale}>
                                                                                            <a className="menuLinkDesktop">Prints</a>
                                                                                        </Link>
                                                                                    </li>
                                                                                    <li>
                                                                                        <Link href="/category/trends/satin-trends" locale={locale}>
                                                                                            <a className="menuLinkDesktop">Satin</a>
                                                                                        </Link>
                                                                                    </li>
                                                                                    <li>
                                                                                        <Link href="/category/trends/lace-trends" locale={locale}>
                                                                                            <a className="menuLinkDesktop">Lace</a>
                                                                                        </Link>
                                                                                    </li>
                                                                                </ul>
                                                                                <div id="some-div" className="expanded chaild">
                                                                                    <span>Traditional </span>
                                                                                    <div id="some-element" className="sub-menu">
                                                                                        <ul>
                                                                                            <li>
                                                                                                <Link href="/category/traditional/silk-traditional" locale={locale}>
                                                                                                    <a className="menuLinkDesktop">Silk</a>
                                                                                                </Link>
                                                                                            </li>
                                                                                            <li>
                                                                                                <Link href="/category/traditional/brocades-traditional" locale={locale}>
                                                                                                    <a className="menuLinkDesktop">Brocades</a>
                                                                                                </Link>
                                                                                            </li>
                                                                                            <li>
                                                                                                <Link href="/category/traditional/prints-traditional" locale={locale}>
                                                                                                    <a className="menuLinkDesktop">Prints</a>
                                                                                                </Link>
                                                                                            </li>
                                                                                            <li>
                                                                                                <Link href="/category/traditional/jacquard-traditional" locale={locale}>
                                                                                                    <a className="menuLinkDesktop">Jacquard</a>
                                                                                                </Link>
                                                                                            </li>
                                                                                            <li>
                                                                                                <Link href="/category/traditional/satin-traditional" locale={locale}>
                                                                                                    <a className="menuLinkDesktop">Satin</a>
                                                                                                </Link>
                                                                                            </li>
                                                                                            <li>
                                                                                                <Link href="/category/traditional/cotton-traditional" locale={locale}>
                                                                                                    <a className="menuLinkDesktop">Cotton</a>
                                                                                                </Link>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div id="some-div" className="expanded">
                                                                            <Link href="/category/natural" locale={locale}>
                                                                                <a><span>Natural</span></a>
                                                                            </Link>
                                                                            <div id="some-element" className="sub-menu">
                                                                                <ul>
                                                                                    <li>
                                                                                        <Link href="/category/natural/cotton-natural" locale={locale}>
                                                                                            <a className="menuLinkDesktop">Cotton</a>
                                                                                        </Link>
                                                                                    </li>
                                                                                    <li>
                                                                                        <Link href="/category/natural/silk-natural" locale={locale}>
                                                                                            <a className="menuLinkDesktop">Silk</a>
                                                                                        </Link>
                                                                                    </li>
                                                                                    <li>
                                                                                        <Link href="/category/natural/viscose-natural" locale={locale}>
                                                                                            <a className="menuLinkDesktop">Viscose</a>
                                                                                        </Link>
                                                                                    </li>
                                                                                    <li>
                                                                                        <Link href="/category/natural/linen-natural" locale={locale}>
                                                                                            <a className="menuLinkDesktop">Linen</a>
                                                                                        </Link>
                                                                                    </li>
                                                                                    <li>
                                                                                        <Link href="/category/natural/wool-natural" locale={locale}>
                                                                                            <a className="menuLinkDesktop">Wool</a>
                                                                                        </Link>
                                                                                    </li>
                                                                                </ul>
                                                                                <div id="some-div" className="expanded chaild">
                                                                                    <Link href="/category/man-made" locale={locale}>
                                                                                        <a><span>Man Made</span></a>
                                                                                    </Link>
                                                                                    <div id="some-element" className="sub-menu">
                                                                                        <ul>
                                                                                            <li>
                                                                                                <Link href="/category/man-made/polyester-man-made" locale={locale}>
                                                                                                    <a className="menuLinkDesktop">Polyester</a>
                                                                                                </Link></li>
                                                                                            <li>
                                                                                                <Link href="/category/man-made/nylon-man-made" locale={locale}>
                                                                                                    <a className="menuLinkDesktop">Nylon</a>
                                                                                                </Link>
                                                                                            </li>
                                                                                            <li>
                                                                                                <Link href="/category/man-made/acetates-man-made" locale={locale}>
                                                                                                    <a className="menuLinkDesktop">Acetates</a>
                                                                                                </Link>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                                <div id="some-div" className="expanded chaild">
                                                                                    <Link href="/category/embroideries" locale={locale}>
                                                                                        <a><span>Embroideries</span></a>
                                                                                    </Link>
                                                                                    <div id="some-element" className="sub-menu">
                                                                                        <ul>
                                                                                            <li>
                                                                                                <Link href="/category/embroideries/cotton-em" locale={locale}>
                                                                                                    <a className="menuLinkDesktop">Cotton</a>
                                                                                                </Link>
                                                                                            </li>
                                                                                            <li>
                                                                                                <Link href="/category/embroideries/silk-em" locale={locale}>
                                                                                                    <a className="menuLinkDesktop">Silk</a>
                                                                                                </Link>
                                                                                            </li>
                                                                                            <li>
                                                                                                <Link href="/category/embroideries/sequins-em" locale={locale}>
                                                                                                    <a className="menuLinkDesktop">Sequins</a>
                                                                                                </Link>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div id="some-div" className="expanded">
                                                                            <Link href="/category/prints" locale={locale}>
                                                                                <a><span>Prints</span></a>
                                                                            </Link>
                                                                            <div id="some-element" className="sub-menu">
                                                                                <ul>
                                                                                    <li>
                                                                                        <Link href="/category/prints/cotton-prints" locale={locale}>
                                                                                            <a className="menuLinkDesktop">Cotton</a>
                                                                                        </Link>
                                                                                    </li>
                                                                                    <li>
                                                                                        <Link href="/category/prints/silk-prints" locale={locale}>
                                                                                            <a className="menuLinkDesktop">Silk</a>
                                                                                        </Link>
                                                                                    </li>
                                                                                    <li>
                                                                                        <Link href="/category/prints/chiffon-prints" locale={locale}>
                                                                                            <a className="menuLinkDesktop">Chiffon</a>
                                                                                        </Link>
                                                                                    </li>
                                                                                    <li>
                                                                                        <Link href="/category/prints/linen-prints" locale={locale}>
                                                                                            <a className="menuLinkDesktop">Linen</a>
                                                                                        </Link>
                                                                                    </li>
                                                                                </ul>
                                                                                <div id="some-div" className="expanded chaild">
                                                                                    <Link href="/category/jacquards" locale={locale}>
                                                                                        <a><span>Jacquards</span></a>
                                                                                    </Link>
                                                                                    <div id="some-element" className="sub-menu">
                                                                                        <ul>
                                                                                            <li>
                                                                                                <Link href="/category/jacquards/cotton-jaq" locale={locale}>
                                                                                                    <a className="menuLinkDesktop">Cotton</a>
                                                                                                </Link>
                                                                                            </li>
                                                                                            <li>
                                                                                                <Link href="/category/jacquards/silk-jac" locale={locale}>
                                                                                                    <a className="menuLinkDesktop">Silk</a>
                                                                                                </Link>
                                                                                            </li>
                                                                                            <li>
                                                                                                <Link href="/category/jacquards/blends-jac" locale={locale}>
                                                                                                    <a className="menuLinkDesktop">Blends</a>
                                                                                                </Link>
                                                                                            </li>
                                                                                            <li>
                                                                                                <Link href="/category/jacquards/prints-jac" locale={locale}>
                                                                                                    <a className="menuLinkDesktop">Prints</a>
                                                                                                </Link>
                                                                                            </li>
                                                                                            <li>
                                                                                                <Link href="/category/jacquards/embroideries-jac" locale={locale}>
                                                                                                    <a className="menuLinkDesktop">Embroideries</a>
                                                                                                </Link>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                                <div id="some-div" className="expanded chaild">
                                                                                    <Link href="/category/suiting" locale={locale}>
                                                                                        <a><span>Suiting</span></a>
                                                                                    </Link>
                                                                                    <div id="some-element" className="sub-menu">
                                                                                        <ul>
                                                                                            <li>
                                                                                                <Link href="/category/suiting/cotton-suiting" locale={locale}>
                                                                                                    <a className="menuLinkDesktop">Cotton</a>
                                                                                                </Link>
                                                                                            </li>
                                                                                            <li>
                                                                                                <Link href="/category/suiting/blend-suiting" locale={locale}>
                                                                                                    <a className="menuLinkDesktop">Blend</a>
                                                                                                </Link>
                                                                                            </li>
                                                                                            <li>
                                                                                                <Link href="/category/suiting/wool-suiting" locale={locale}>
                                                                                                    <a className="menuLinkDesktop">Wool</a>
                                                                                                </Link>
                                                                                            </li>
                                                                                            <li>
                                                                                                <Link href="/category/suiting/linen-suiting" locale={locale}>
                                                                                                    <a className="menuLinkDesktop">Linen</a>
                                                                                                </Link>
                                                                                            </li>
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
                                                <div className="accordion acco_after over_flow" id="accordionExample">
                                                    <div className="card">
                                                        <div className="card-header" id="headingOne">
                                                            <h2 className="mb-0">
                                                                <Link href="/category/cotton" locale={locale}>
                                                                    <a>Cotton</a>
                                                                </Link>
                                                                <button type="button" className="btn btn-link" data-toggle="collapse" data-target="#collapseOne"><i className="fa fa-plus" /></button>
                                                            </h2>
                                                        </div>
                                                        <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                                            <div className="card-body">
                                                                <ul>
                                                                    <li>
                                                                        <Link href="/category/cotton/plain-cotton" locale={locale}>
                                                                            <a className="menuLinkDesktop">Plain Cotton</a>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="/category/cotton/printed-cotton" locale={locale}>
                                                                            <a className="menuLinkDesktop">Printed Cotton</a>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="/category/cotton/cotton-shirting" locale={locale}>
                                                                            <a className="menuLinkDesktop">Cotton Shirting</a>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="/category/cotton/cotton-blends" locale={locale}>
                                                                            <a className="menuLinkDesktop">Cotton Blends</a>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="/category/cotton/cotton-embroideries" locale={locale}>
                                                                            <a className="menuLinkDesktop">Cotton Embroideries</a>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="/category/cotton/cotton-twill" locale={locale}>
                                                                            <a className="menuLinkDesktop">Cotton Twill</a>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="/category/cotton/cotton-jacquard" locale={locale}>
                                                                            <a className="menuLinkDesktop">Cotton Jacquard</a>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="/category/cotton/cotton-lace" locale={locale}>
                                                                            <a className="menuLinkDesktop">Cotton Lace</a>
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card">
                                                        <div className="card-header" id="headingTwo">
                                                            <h2 className="mb-0">
                                                                <Link href="/category/satin" locale={locale}>
                                                                    <a>Satin</a>
                                                                </Link>
                                                                <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo"><i className="fa fa-plus" /></button>
                                                            </h2>
                                                        </div>
                                                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                                            <div className="card-body">
                                                                <ul>
                                                                    <li>
                                                                        <Link href="/category/satin/satin-blends" locale={locale}>
                                                                            <a className="menuLinkDesktop">Satin Blends</a>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="/category/satin/printed-satins" locale={locale}>
                                                                            <a className="menuLinkDesktop">Printed Satins</a>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="/category/satin/man-made-satins" locale={locale}>
                                                                            <a className="menuLinkDesktop">Man Made Satins</a>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="/category/satin/satin-silk" locale={locale}>
                                                                            <a className="menuLinkDesktop">Silk
                                                                                Satin</a>
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card">
                                                        <div className="card-header" id="headingThree">
                                                            <h2 className="mb-0">
                                                                <Link href="/category/lace" locale={locale}>
                                                                    <a>Lace</a>
                                                                </Link>
                                                                <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree"><i className="fa fa-plus" /></button>
                                                            </h2>
                                                        </div>
                                                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                                            <div className="card-body">
                                                                <ul>
                                                                    <li>
                                                                        <Link href="/category/lace/sequin-laces" locale={locale}>
                                                                            <a className="menuLinkDesktop">Sequin
                                                                                Laces</a>
                                                                        </Link></li>
                                                                    <li>
                                                                        <Link href="/category/lace/french-laces" locale={locale}>
                                                                            <a className="menuLinkDesktop">French
                                                                                Laces</a>
                                                                        </Link></li>
                                                                    <li>
                                                                        <Link href="/category/lace/3d-laces" locale={locale}>
                                                                            <a className="menuLinkDesktop">3D Laces</a>
                                                                        </Link></li>
                                                                    <li>
                                                                        <Link href="/category/lace/cotton-laces" locale={locale}>
                                                                            <a className="menuLinkDesktop">Cotton
                                                                                Laces</a>
                                                                        </Link></li>
                                                                    <li>
                                                                        <Link href="/category/lace/metallic-laces" locale={locale}>
                                                                            <a className="menuLinkDesktop">Metallic
                                                                                Laces</a>
                                                                        </Link></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card">
                                                        <div className="card-header" id="headingseventy">
                                                            <h2 className="mb-0">
                                                                <Link href="/category/suiting" locale={locale}>
                                                                    <a>Suiting</a>
                                                                </Link>
                                                                <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseseventy"><i className="fa fa-plus" /></button>
                                                            </h2>
                                                        </div>
                                                        <div id="collapseseventy" className="collapse" aria-labelledby="headingseventy" data-parent="#accordionExample">
                                                            <div className="card-body">
                                                                <ul>
                                                                    <li>
                                                                        <Link href="/category/suiting/cotton-suiting" locale={locale}>
                                                                            <a className="menuLinkDesktop">Cotton</a>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="/category/suiting/blend-suiting" locale={locale}>
                                                                            <a className="menuLinkDesktop">Blend</a>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="/category/suiting/wool-suiting" locale={locale}>
                                                                            <a className="menuLinkDesktop">Wool</a>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="/category/suiting/linen-suiting" locale={locale}>
                                                                            <a className="menuLinkDesktop">Linen</a>
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card">
                                                        <div className="card-header" id="headingfive">
                                                            <h2 className="mb-0">
                                                                <Link href="/category/linen" locale={locale}>
                                                                    <a>Linen</a>
                                                                </Link>
                                                                <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapsefive"><i className="fa fa-plus" /></button>
                                                            </h2>
                                                        </div>
                                                        <div id="collapsefive" className="collapse" aria-labelledby="headingfive" data-parent="#accordionExample">
                                                            <div className="card-body">
                                                                <ul>
                                                                    <li>
                                                                        <Link href="/category/linen/plain-linen" locale={locale}>
                                                                            <a className="menuLinkDesktop">Plain
                                                                                Linen</a>
                                                                        </Link></li>
                                                                    <li>
                                                                        <Link href="/category/linen/printed-linen" locale={locale}>
                                                                            <a className="menuLinkDesktop">Printed
                                                                                Linen</a>
                                                                        </Link></li>
                                                                    <li>
                                                                        <Link href="/category/linen/linen-wool" locale={locale}>
                                                                            <a className="menuLinkDesktop">Linen
                                                                                Wool</a>
                                                                        </Link></li>
                                                                    <li>
                                                                        <Link href="/category/linen/linen-viscose" locale={locale}>
                                                                            <a className="menuLinkDesktop">Linen
                                                                                Viscose</a>
                                                                        </Link></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card">
                                                        <div className="card-header" id="headingsix">
                                                            <h2 className="mb-0">
                                                                <Link href="/category/silk" locale={locale}>
                                                                    <a>Silk</a>
                                                                </Link>
                                                                <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapsesix"><i className="fa fa-plus" /></button>
                                                            </h2>
                                                        </div>
                                                        <div id="collapsesix" className="collapse" aria-labelledby="headingsix" data-parent="#accordionExample">
                                                            <div className="card-body">
                                                                <ul>
                                                                    <li>
                                                                        <Link href="/category/silk/plain-silk" locale={locale}>
                                                                            <a className="menuLinkDesktop">Plain Silk</a>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="/category/silk/printed-silk" locale={locale}>
                                                                            <a className="menuLinkDesktop">Printed
                                                                                Silk</a>
                                                                        </Link></li>
                                                                    <li>
                                                                        <Link href="/category/silk/silk-satin" locale={locale}>
                                                                            <a className="menuLinkDesktop">Silk Satin</a>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="/category/silk/silk-chiffon-and-tulle" locale={locale}>
                                                                            <a className="menuLinkDesktop">Silk
                                                                                Chiffon and Tulle</a>
                                                                        </Link></li>
                                                                    <li>
                                                                        <Link href="/category/silk/silk-blends" locale={locale}>
                                                                            <a className="menuLinkDesktop">Silk Blends</a>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="/category/silk/silk-brocade" locale={locale}>
                                                                            <a className="menuLinkDesktop">Silk
                                                                                Brocade</a>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="/category/silk/silk-jacquard" locale={locale}>
                                                                            <a className="menuLinkDesktop">Silk
                                                                                Jacquard</a>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="/category/silk/silk-lace" locale={locale}>
                                                                            <a className="menuLinkDesktop">Silk Lace</a>
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card">
                                                        <div className="card-header" id="headingseven">
                                                            <h2 className="mb-0">
                                                                <Link href="/category/shirting" locale={locale}>
                                                                    <a>Shirting</a>
                                                                </Link>
                                                                <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseseven"><i className="fa fa-plus" /></button>
                                                            </h2>
                                                        </div>
                                                        <div id="collapseseven" className="collapse" aria-labelledby="headingseven" data-parent="#accordionExample">
                                                            <div className="card-body">
                                                                <ul>
                                                                    <li>
                                                                        <Link href="/category/shirting/shirting-cotton" locale={locale}>
                                                                            <a className="menuLinkDesktop">Cotton</a>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="/category/shirting/shirting-blend" locale={locale}>
                                                                            <a className="menuLinkDesktop">Blend</a>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="/category/shirting/shirting-silk" locale={locale}>
                                                                            <a className="menuLinkDesktop">Silk</a>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="/category/shirting/shirting-linen" locale={locale}>
                                                                            <a className="menuLinkDesktop">Linen</a>
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card">
                                                        <div className="card-header" id="headingeight">
                                                            <h2 className="mb-0">
                                                                <Link href="/category/bestsellers" locale={locale}>
                                                                    <a>Bestsellers</a>
                                                                </Link>
                                                                <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseeight"><i className="fa fa-plus" /></button>
                                                            </h2>
                                                        </div>
                                                        <div id="collapseeight" className="collapse" aria-labelledby="headingeight" data-parent="#accordionExample">
                                                            <div className="card-body">
                                                                <ul>
                                                                    <li>
                                                                        <Link href="/category/bestsellers/lace-best" locale={locale}>
                                                                            <a className="menuLinkDesktop">Lace</a>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="/category/bestsellers/plain-dyed-best" locale={locale}>
                                                                            <a className="menuLinkDesktop">Plain Dyed</a>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="/category/bestsellers/prints-best" locale={locale}>
                                                                            <a className="menuLinkDesktop">Prints</a>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="/category/bestsellers/brocade-best" locale={locale}>
                                                                            <a className="menuLinkDesktop">Brocade</a>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="/category/bestsellers/satin-best" locale={locale}>
                                                                            <a className="menuLinkDesktop">Satin</a>
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card">
                                                        <div className="card-header" id="headingnine">
                                                            <h2 className="mb-0">
                                                                <Link href="/category/wool" locale={locale}>
                                                                    <a>Wool</a>
                                                                </Link>
                                                                <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapsenine"><i className="fa fa-plus" /></button>
                                                            </h2>
                                                        </div>
                                                        <div id="collapsenine" className="collapse" aria-labelledby="headingnine" data-parent="#accordionExample">
                                                            <div className="card-body">
                                                                <ul>
                                                                    <li>
                                                                        <Link href="/category/wool/pure-wool-fabrics" locale={locale}>
                                                                            <a className="menuLinkDesktop">Pure Wool Fabrics</a>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="/category/wool/wool-blends" locale={locale}>
                                                                            <a className="menuLinkDesktop">Wool
                                                                                Blends</a>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="/category/wool/wool-gauze" locale={locale}>
                                                                            <a className="menuLinkDesktop">Wool Gauze</a>
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card">
                                                        <div className="card-header" id="headingten">
                                                            <h2 className="mb-0">
                                                                <Link href="/category/trends" locale={locale}>
                                                                    <a>Trends</a>
                                                                </Link>
                                                                <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseten"><i className="fa fa-plus" /></button>
                                                            </h2>
                                                        </div>
                                                        <div id="collapseten" className="collapse" aria-labelledby="headingten" data-parent="#accordionExample">
                                                            <div className="card-body">
                                                                <ul>
                                                                    <li>
                                                                        <Link href="/category/trends/prints-trends" locale={locale}>
                                                                            <a className="menuLinkDesktop">Prints</a>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="/category/trends/satin-trends" locale={locale}>
                                                                            <a className="menuLinkDesktop">Satin</a>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="/category/trends/lace-trends" locale={locale}>
                                                                            <a className="menuLinkDesktop">Lace</a>
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card">
                                                        <div className="card-header" id="headingeleven">
                                                            <h2 className="mb-0">
                                                                <Link href="/category/traditional/" locale={locale}>
                                                                    <a>Traditional</a>
                                                                </Link>
                                                                <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseeleven"><i className="fa fa-plus" /></button>
                                                            </h2>
                                                        </div>
                                                        <div id="collapseeleven" className="collapse" aria-labelledby="headingeleven" data-parent="#accordionExample">
                                                            <div className="card-body">
                                                                <ul>
                                                                    <li>
                                                                        <Link href="/category/traditional/silk-traditional" locale={locale}>
                                                                            <a className="menuLinkDesktop">Silk</a>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="/category/traditional/brocades-traditional" locale={locale}>
                                                                            <a className="menuLinkDesktop">Brocades</a>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="/category/traditional/prints-traditional" locale={locale}>
                                                                            <a className="menuLinkDesktop">Prints</a>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="/category/traditional/jacquard-traditional" locale={locale}>
                                                                            <a className="menuLinkDesktop">Jacquard</a>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="/category/traditional/satin-traditional" locale={locale}>
                                                                            <a className="menuLinkDesktop">Satin</a>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="/category/traditional/cotton-traditional" locale={locale}>
                                                                            <a className="menuLinkDesktop">Cotton</a>
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card">
                                                        <div className="card-header" id="headingtwel">
                                                            <h2 className="mb-0">
                                                                <Link href="/category/natural" locale={locale}>
                                                                    <a>Natural</a>
                                                                </Link>
                                                                <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapsetwel"><i className="fa fa-plus" /></button>
                                                            </h2>
                                                        </div>
                                                        <div id="collapsetwel" className="collapse" aria-labelledby="headingtwel" data-parent="#accordionExample">
                                                            <div className="card-body">
                                                                <ul>
                                                                    <li>
                                                                        <Link href="/category/natural/cotton-natural" locale={locale}>
                                                                            <a className="menuLinkDesktop">Cotton</a>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="/category/natural/silk-natural" locale={locale}>
                                                                            <a className="menuLinkDesktop">Silk</a>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="/category/natural/viscose-natural" locale={locale}>
                                                                            <a className="menuLinkDesktop">Viscose</a>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="/category/natural/linen-natural" locale={locale}>
                                                                            <a className="menuLinkDesktop">Linen</a>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="/category/natural/wool-natural" locale={locale}>
                                                                            <a className="menuLinkDesktop">Wool</a>
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card">
                                                        <div className="card-header" id="headingtherty">
                                                            <h2 className="mb-0">
                                                                <Link href="/category/man-made" locale={locale}>
                                                                    <a>Man Made</a>
                                                                </Link>
                                                                <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapsetherty"><i className="fa fa-plus" /></button>
                                                            </h2>
                                                        </div>
                                                        <div id="collapsetherty" className="collapse" aria-labelledby="headingtherty" data-parent="#accordionExample">
                                                            <div className="card-body">
                                                                <ul>
                                                                    <li>
                                                                        <Link href="/category/man-made/polyester-man-made" locale={locale}>
                                                                            <a className="menuLinkDesktop">Polyester</a>
                                                                        </Link></li>
                                                                    <li>
                                                                        <Link href="/category/man-made/nylon-man-made" locale={locale}>
                                                                            <a className="menuLinkDesktop">Nylon</a>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="/category/man-made/acetates-man-made" locale={locale}>
                                                                            <a className="menuLinkDesktop">Acetates</a>
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card">
                                                        <div className="card-header" id="headingtherty">
                                                            <h2 className="mb-0">
                                                                <Link href="/category/embroideries" locale={locale}>
                                                                    <a>Embroideries</a>
                                                                </Link>
                                                                <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapsetherty"><i className="fa fa-plus" /></button>
                                                            </h2>
                                                        </div>
                                                        <div id="collapsetherty" className="collapse" aria-labelledby="headingtherty" data-parent="#accordionExample">
                                                            <div className="card-body">
                                                                <ul>
                                                                    <li>
                                                                        <Link href="/category/embroideries/cotton-em" locale={locale}>
                                                                            <a className="menuLinkDesktop">Cotton</a>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="/category/embroideries/silk-em" locale={locale}>
                                                                            <a className="menuLinkDesktop">Silk</a>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="/category/embroideries/sequins-em" locale={locale}>
                                                                            <a className="menuLinkDesktop">Sequins</a>
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card">
                                                        <div className="card-header" id="headingfifty">
                                                            <h2 className="mb-0">
                                                                <Link href="/category/prints" locale={locale}>
                                                                    <a>Prints</a>
                                                                </Link>
                                                                <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapsefifty"><i className="fa fa-plus" /></button>
                                                            </h2>
                                                        </div>
                                                        <div id="collapsefifty" className="collapse" aria-labelledby="headingfifty" data-parent="#accordionExample">
                                                            <div className="card-body">
                                                                <ul>
                                                                    <li>
                                                                        <Link href="/category/prints/cotton-prints" locale={locale}>
                                                                            <a className="menuLinkDesktop">Cotton</a>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="/category/prints/silk-prints" locale={locale}>
                                                                            <a className="menuLinkDesktop">Silk</a>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="/category/prints/chiffon-prints" locale={locale}>
                                                                            <a className="menuLinkDesktop">Chiffon</a>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="/category/prints/linen-prints" locale={locale}>
                                                                            <a className="menuLinkDesktop">Linen</a>
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card">
                                                        <div className="card-header" id="headingsixty">
                                                            <h2 className="mb-0">
                                                                <Link href="/category/jacquards" locale={locale}>
                                                                    <a>Jacquards</a>
                                                                </Link>
                                                                <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapsesixty"><i className="fa fa-plus" /></button>
                                                            </h2>
                                                        </div>
                                                        <div id="collapsesixty" className="collapse" aria-labelledby="headingsixty" data-parent="#accordionExample">
                                                            <div className="card-body">
                                                                <ul>
                                                                    <li>
                                                                        <Link href="/category/jacquards/cotton-jaq" locale={locale}>
                                                                            <a className="menuLinkDesktop">Cotton</a>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="/category/jacquards/silk-jac" locale={locale}>
                                                                            <a className="menuLinkDesktop">Silk</a>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="/category/jacquards/blends-jac" locale={locale}>
                                                                            <a className="menuLinkDesktop">Blends</a>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="/category/jacquards/prints-jac" locale={locale}>
                                                                            <a className="menuLinkDesktop">Prints</a>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="/category/jacquards/embroideries-jac" locale={locale}>
                                                                            <a className="menuLinkDesktop">Embroideries</a>
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li><Link href="/sale" locale={locale}><a>{t("common:on_sale")}</a></Link></li>
                                <li className="d-block d-sm-none" style={{ padding: 20 }}>
                                    <select defaultValue={locale} id="language" onChange={(e) => {
                                        router.push({ pathname, query }, asPath, { locale: e.target.value })
                                    }}>
                                        <option value="en">English</option>
                                        <option value="th">Thai</option>
                                        <option value="vi">Vietnamese</option>
                                    </select>

                                    {data &&
                                        <select id="luggage" defaultValue={selectedCurrency} onChange={setCurrency}>
                                            {
                                                data.map(d => {
                                                    return (<option value={d.id} key={d.id}>{d.code}</option>)
                                                })
                                            }
                                        </select>
                                    }
                                </li>
                                <li className="d-none"><Link locale={locale} href="/contact"><a>{t("common:enquire")}</a></Link></li>
                                <li className="d-none"><Link locale={locale} href="/browsing"><a>{t("common:live_browsing")}</a></Link></li>
                                <div className="nav-search tabs_veiw_s">
                                    <div className="example">
                                        <form action={`/${locale}/search`} autoComplete="off">
                                            <input required type="text" placeholder={t("common:search_placeholder")} name="query" defaultValue={router.query.query ? router.query.query : ""} />
                                            <button type="submit">
                                                <img src="/images/address_icon/search.svg" alt="search-icon" />
                                            </button>
                                        </form>
                                    </div>
                                    <li className="desk_view">
                                        <div className="currencySwitch" style={{ paddingRight: 1 }}>{
                                            <select defaultValue={locale} id="language" onChange={(e) => {
                                                router.push({ pathname, query }, asPath, { locale: e.target.value })
                                            }}>
                                                <option value="en">English</option>
                                                <option value="th">Thai</option>
                                                <option value="vi">Vietnamese</option>
                                            </select>
                                        }</div>
                                    </li>
                                    <li className="desk_view">
                                        <div className="currencySwitch" style={{ paddingLeft: 1 }}>{
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
                                    <Link locale={locale} href="/account?tab=5">
                                        <a>
                                            <img src="/images/address_icon/heart.svg" alt="cart" />
                                        </a>
                                    </Link>
                                    <Link locale={locale} href="/account">
                                        <a>
                                            <img src="/images/address_icon/user.svg" alt="account" />
                                        </a>
                                    </Link>
                                    <Link locale={locale} href="/cart">
                                        <a>
                                            <img src="/images/address_icon/card.svg" alt="cart" />
                                            <span className="badge">{cartItemCount}</span>
                                        </a>
                                    </Link>
                                </div>
                            </ul>
                        </div>
                    </nav>
                    <form className="example mob_view" action={`/${locale}/search`} autoComplete="off">
                        <input type="text" placeholder="Search for product, code, or collection." name="query" defaultValue={router.query.query ? router.query.query : ""} />
                        <button type="submit"><img src="/images/address_icon/search.svg" alt="search-icon" /></button>
                    </form>
                </div >
            </div >
        </header >
    );
}