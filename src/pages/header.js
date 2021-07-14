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
                            <div className="icon_r_12 mob_view">
                                <div className="inner_po_right">
                                    <form className="searchbox" action="/search" autoComplete="off">
                                        <input type="search" placeholder="Search......" name="query" defaultValue={router.query.query ? router.query.query : ""} className="searchbox-input" />
                                        <input type="submit" className="searchbox-submit" value="" />
                                        <span className="searchbox-icon" onClick={() => setShowSearchMenu(!showSearchMenu)}><img src="/images/address_icon/search.svg" /></span>
                                    </form>
                                    <div className="txt_op_0" style={{ display: showSearchMenu ? "block" : "none" }}>
                                        <h3><span>What do you want to make?</span></h3>
                                        <div className="category">
                                            <Link href="/search?query=Dresses">
                                                <a>
                                                    <img src="/images/icon_menu/dresses.svg" />
                                                    <p>Dresses</p>
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="category">
                                            <Link href="/search?query=Blouses">
                                                <a>
                                                    <img src="/images/icon_menu/blouses.svg" />
                                                    <p>Blouses</p>
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="category">
                                            <Link href="/search?query=Skirts">
                                                <a>
                                                    <img src="/images/icon_menu/skirts.svg" />
                                                    <p>Skirts</p>
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="category">
                                            <Link href="/search?query=Jackets">
                                                <a>
                                                    <img src="/images/icon_menu/jackts.svg" />
                                                    <p>Jackets</p>
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="category">
                                            <Link href="/category/suiting">
                                                <a>
                                                    <img src="/images/icon_menu/suiting.svg" />
                                                    <p>Suitings</p>
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="category">
                                            <Link href="/search?query=Bridal">
                                                <a>
                                                    <img src="/images/icon_menu/bridal.svg" />
                                                    <p>Bridal</p>
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="category">
                                            <Link href="/search?query=Trousers">
                                                <a>
                                                    <img src="/images/icon_menu/trousers.svg" />
                                                    <p>Trousers</p>
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="category">
                                            <Link href="/category/shirting">
                                                <a>
                                                    <img src="/images/icon_menu/shirts.svg" />
                                                    <p>Shirts</p>
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="category">
                                            <Link href="/search?query=Scarves">
                                                <a>
                                                    <img src="/images/icon_menu/scarves.svg" />
                                                    <p>Scarves</p>
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="category">
                                            <Link href="/search?query=Kids">
                                                <a>
                                                    <img src="/images/icon_menu/kids.svg" />
                                                    <p>Kids</p>
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="category">
                                            <Link href="/search?query=Women">
                                                <a>
                                                    <img src="/images/icon_menu/women.svg" />
                                                    <p>Women</p>
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="category">
                                            <Link href="/category/man-made">
                                                <a>
                                                    <img src="/images/icon_menu/men.svg" />
                                                    <p>Men</p>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>

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
                            <Link href="/">
                                <a className="nav-brand">
                                    <img src="/images/logo.png" alt="gandhi logo" />
                                </a>
                            </Link>
                            <div className="nav-toggle"></div>
                        </div>
                        <div className="nav-menus-wrapper sideMenu">
                            <ul className="nav-menu categoery_menu align-to-right wt_tx">
                                <li>
                                    <div className="bs-example tabs_veiw">
                                        <div className="accordion acco_after" id="accordionExample_1">
                                            <div className="card">
                                                <div className="card-header" id="heading_1">
                                                    <h2 className="mb-0">
                                                        <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse_1">
                                                            <p>My Accounts</p>
                                                            <i className="fa fa-plus"></i>
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
                                    <a className="show_sub" href="#menu">All Fabric</a>
                                    <div className="megamenu-panel" id="close_menu" style={{ display: "none" }}>
                                        <div className="nav_head">
                                            <div id="closeButton" className="tabs_veiw_s"><img src="/images/close.png" /></div>
                                            <div className="tabs_veiw_s">
                                                <div className="row">
                                                    <div className="col-md-2 col-xs-12">
                                                        <a href="/"><img className="desk_view" src="/images/logo.png" /></a>
                                                    </div>
                                                    <div className="col-md-10 col-xs-12">
                                                        <div className="megamenu-lists">
                                                            <ul className="megamenu-list list-col-4">
                                                                <div className="cus_nv ac-menu">
                                                                    <div className="row cus_nv_m ac-list">
                                                                        {
                                                                            categories.map((cat) => {
                                                                                return (
                                                                                    <div id="some-div" className="expanded parentMenu" key={cat.id}>
                                                                                        <a className="showSubMenuDesktop">
                                                                                            <img className="catImage" src={cat.icon ? cat.icon.fullUrl : "/images/placeholder.png"} alt={cat.name} />
                                                                                            <span>{cat.name}</span>
                                                                                        </a>
                                                                                        {
                                                                                            cat.children && cat.children.length > 0 &&
                                                                                            <div id="some-element" className={"sub-menu submenuDesktop"}>
                                                                                                <ul>
                                                                                                    {
                                                                                                        cat.children.map((subCat) => {
                                                                                                            return (
                                                                                                                <li key={subCat.id}>
                                                                                                                    <Link href={`/category/${subCat.slug}`}>
                                                                                                                        <a className="menuLinkDesktop">{subCat.name}</a>
                                                                                                                    </Link>
                                                                                                                </li>
                                                                                                            );
                                                                                                        })
                                                                                                    }
                                                                                                </ul>
                                                                                            </div>

                                                                                        }

                                                                                    </div>
                                                                                );
                                                                            })
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bs-example tabs_veiw">
                                                <div className="accordion acco_after" id="accordionExample">
                                                    {
                                                        categories.map((cat) => {
                                                            return (
                                                                <div className="card" key={cat.id}>
                                                                    <div className="card-header" id="headingOne">
                                                                        <h2 className="mb-0">
                                                                            <Link href={`/category/${cat.slug}`}>
                                                                                <a className="mobileMenuIcon">
                                                                                    <img className="catImage" src={cat.icon ? cat.icon.fullUrl : "/images/placeholder.png"} alt={cat.name} />
                                                                                    {cat.name}
                                                                                </a>
                                                                            </Link>
                                                                            <button type="button" className="btn btn-link" data-toggle="collapse" data-target={`#collapse${cat.id}`}><i className="fa fa-plus"></i></button>
                                                                        </h2>
                                                                    </div>
                                                                    <div id={`collapse${cat.id}`} className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                                                        <div className="card-body">
                                                                            <ul>
                                                                                {
                                                                                    cat.children && cat.children.length > 0 &&
                                                                                    cat.children.map((subCat) => {
                                                                                        return (
                                                                                            <li key={subCat.id}>
                                                                                                <Link href={`/category/${subCat.slug}`}>
                                                                                                    <a className="mobileMenuIcon">{subCat.name}</a>
                                                                                                </Link>
                                                                                            </li>
                                                                                        );
                                                                                    })
                                                                                }
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            );
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li><Link href="/contact"><a>Enquire</a></Link></li>
                                <li><Link href="/browsing"><a>Live Browsing</a></Link></li>
                                <li>
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
                                <div className="nav-search tabs_veiw_s">
                                    <div className="nav-search-button"><img src="/images/address_icon/search.svg" /></div>
                                    <form action="/search" autoComplete="off">
                                        <div className="nav-search-inner">
                                            <input type="search" name="query" defaultValue={router.query.query ? router.query.query : ""} placeholder="Search..." />
                                        </div>
                                    </form>
                                    <Link href="/account?tab=5">
                                        <a>
                                            <img src="/images/address_icon/heart.svg" alt="cart" />
                                            <span className="badge" id="cartItems">{cartItemCount}</span>
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
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}