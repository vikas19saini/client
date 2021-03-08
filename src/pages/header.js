import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

export default function Header(props) {
    const [cartItemCount, setCartItemCount] = useState(0)
    const config = useSelector(state => state.config)
    const [showSearchMenu, setShowSearchMenu] = useState(false);
    const [categories, setCategories] = useState([]);
    const [openCategory, setOpenCategory] = useState(-1);

    useEffect(() => {
        navigation() // written in script.js

        if (config.cart) {
            setCartItemCount(config.cart.length)
        }
    })

    useEffect(() => {
        axios.get(`${process.env.API_URL}category`).then(response => {
            setCategories(response.data.rows);
        })
    }, []);

    return (
        <header className={props.shadow ? "header_area head_shedow" : "header_area"}>
            <div className="main_header_area animated">
                <div className="container-fluid">
                    <nav id="navigation1" className="navigation_1 row">
                        <div className="nav-header">
                            <div className="icon_r_12 mob_view">
                                <div className="inner_po_right">
                                    <form className="searchbox">
                                        <input type="search" placeholder="Search......" name="search" className="searchbox-input" onKeyUp={buttonUp()} />
                                        <input type="submit" className="searchbox-submit" value="" />
                                        <span className="searchbox-icon" onClick={() => setShowSearchMenu(!showSearchMenu)}><img src="/images/address_icon/search.svg" alt="" /></span>
                                    </form>
                                    <div className="txt_op_0" style={{ display: showSearchMenu ? "block" : "none" }}>
                                        <h3><span>What do you wanna make</span></h3>
                                        {
                                            categories.map((cat) => {
                                                return (
                                                    <div className="category" key={cat.id}>
                                                        <Link href={`/category/${cat.slug}`}>
                                                            <a>
                                                                <img src={cat.icon ? cat.icon.fullUrl : "/images/placeholder.png"} alt={cat.name} />
                                                                <p>{cat.name}</p>
                                                            </a>
                                                        </Link>
                                                    </div>
                                                );
                                            })
                                        }

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
                        <div className="nav-menus-wrapper">
                            <ul className="nav-menu categoery_menu align-to-right wt_tx">
                                <li>
                                    <a className="show_sub desk_view" href="#">All Fabric</a>
                                    <div className="megamenu-panel" id="mobileMenu">
                                        <div className="nav_head">
                                            <div id="closeButton"><img src="/images/close.png" /></div>
                                            <div className="desk_view">
                                                <div className="row">
                                                    <div className="col-md-2 col-xs-12">
                                                        <Link href="/">
                                                            <a><img className="desk_view" src="/images/logo.png" alt="logo" /></a>
                                                        </Link>
                                                    </div>
                                                    <div className="col-md-10 col-xs-12">
                                                        <div className="megamenu-lists">
                                                            <ul className="megamenu-list list-col-4">
                                                                <div className="cus_nv ac-menu">
                                                                    <div className="row cus_nv_m ac-list">
                                                                        {
                                                                            categories.map((cat) => {
                                                                                return (
                                                                                    <div id="some-div" className="expanded" key={cat.id}>
                                                                                        <a onClick={() => setOpenCategory(cat.id)}>
                                                                                            <img className="catImage" src={cat.icon ? cat.icon.fullUrl : "/images/placeholder.png"} alt={cat.name} />
                                                                                            <span>{cat.name}</span>
                                                                                        </a>
                                                                                        {
                                                                                            cat.children && cat.children.length > 0 &&
                                                                                            <div id="some-element" className={(openCategory === cat.id) ? "sub-menu active" : "sub-menu"}>
                                                                                                <ul>
                                                                                                    {
                                                                                                        cat.children.map((subCat) => {
                                                                                                            return (
                                                                                                                <li key={subCat.id}>
                                                                                                                    <Link href={`/category/${subCat.slug}`}>
                                                                                                                        <a>{subCat.name}</a>
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
                                            <div className="bs-example mob_view">
                                                <div className="accordion acco_after" id="accordionExample">
                                                    <div className="card">
                                                        <div className="card-header" id="headingfor">
                                                            <h2 className="mb-0">
                                                                <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapsefor"><p>My Accounts</p> <i className="fa fa-plus"></i></button>
                                                            </h2>
                                                        </div>
                                                        <div id="collapsefor" className="collapse" aria-labelledby="headingfor" data-parent="#accordionExample">
                                                            <div className="card-body">
                                                                <ul>
                                                                    <li>
                                                                        <Link href="/account">
                                                                            <a>Login</a>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="/account">
                                                                            <a>Register</a>
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {
                                                        categories.map((cat) => {
                                                            return (
                                                                <div className="card" key={cat.id}>
                                                                    <div className="card-header" id="headingOne">
                                                                        <h2 className="mb-0">
                                                                            <Link href={`/category/${cat.slug}`}>
                                                                                <a>
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
                                                                                                    <a>{subCat.name}</a>
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
                                {/* <li><a href="#" target="_blank">Shop By Categories</a></li> */}
                                <div className="nav-search">
                                    <div className="nav-search-button"><img src="/images/address_icon/search.svg" /></div>
                                    <form>
                                        <div className="nav-search-inner">
                                            <input type="search" name="search" placeholder="Search..." />
                                        </div>
                                    </form>

                                    <Link href="/cart">
                                        <a>
                                            <img src="/images/address_icon/card.svg" alt="cart" />
                                            <span className="badge" id="cartItems">{cartItemCount}</span>
                                        </a>
                                    </Link>
                                    <Link href="/account">
                                        <a>
                                            <img src="/images/address_icon/user.svg" alt="account" />
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