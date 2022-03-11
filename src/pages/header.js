import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useRouter } from "next/router";
import useSWR from "swr";
import useTranslation from 'next-translate/useTranslation'

export default function Header() {
    const [cartItemCount, setCartItemCount] = useState(0)
    const config = useSelector(state => state.config)
    const router = useRouter();
    const { pathname, asPath, query, locale } = router
    const dispatch = useDispatch();
    const { t } = useTranslation()
    const [categories, setCategories] = useState([])
    const [categoriesMobile, setCategoriesMobile] = useState([])
    const [expendedCategory, setExpendedCategory] = useState(-1)

    useEffect(() => {
        navigation() // written in script.js

        if (config.cartItems) {
            setCartItemCount(config.cartItems);
        }
    }, [pathname, config])

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

    useEffect(() => {
        async function fetchCategories() {
            const categoriesSlugs = [["cotton", "satin"], ["lace", "linen"], ["silk", "shirting"], ["bestsellers", "wool"], ["trends", "traditional"], ["natural", "man-made", "embroideries"], ["prints", "jacquards", "suiting"]];
            const headers = { headers: { lang: locale === "en" ? "" : locale } }
            let categories = [];
            let categoriesMobile = []

            for (const categoryP of categoriesSlugs) {
                let ongroup = []
                for (const category of categoryP) {
                    const res = await axios.get(`${process.env.API_URL}category/${category}?minimal=true`, headers);
                    ongroup.push(res.data)
                    categoriesMobile.push(res.data)
                }

                categories.push(ongroup)
            }

            setCategories(categories)
            setCategoriesMobile(categoriesMobile)
        }

        fetchCategories()
    }, [locale])

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

                                                                        {categories.length === 0 && <p className="text-center">Loading..</p>}

                                                                        {categories.map((category) => {
                                                                            return (
                                                                                <div key={category[0].id} id="some-div" className="expanded">
                                                                                    <Link href={`/category/${category[0].slug}`} locale={locale}>
                                                                                        <a><span>{category[0].name}</span></a>
                                                                                    </Link>
                                                                                    <div id="some-element" className="sub-menu">
                                                                                        <ul>
                                                                                            {category[0].descendents.map((c) => {
                                                                                                return (
                                                                                                    <li key={c.id}>
                                                                                                        <Link href={`/category/${category[0].slug}/${c.slug}`} locale={locale}>
                                                                                                            <a className="menuLinkDesktop">{c.name}</a>
                                                                                                        </Link>
                                                                                                    </li>
                                                                                                )
                                                                                            })}
                                                                                        </ul>
                                                                                        {category[1] &&
                                                                                            <div key={category[1].id} className="expanded mt-3">
                                                                                                <Link href={`/category/${category[1].slug}`} locale={locale}>
                                                                                                    <a><span>{category[1].name}</span></a>
                                                                                                </Link>
                                                                                                <div id="some-element" className="sub-menu">
                                                                                                    <ul>
                                                                                                        {category[1].descendents.map((c) => {
                                                                                                            return (
                                                                                                                <li key={c.id}>
                                                                                                                    <Link href={`/category/${category[1].slug}/${c.slug}`} locale={locale}>
                                                                                                                        <a className="menuLinkDesktop">{c.name}</a>
                                                                                                                    </Link>
                                                                                                                </li>
                                                                                                            )
                                                                                                        })}
                                                                                                    </ul>
                                                                                                </div>
                                                                                            </div>
                                                                                        }
                                                                                        {category[2] &&
                                                                                            <div key={category[2].id} className="expanded mt-3">
                                                                                                <Link href={`/category/${category[2].slug}`} locale={locale}>
                                                                                                    <a><span>{category[2].name}</span></a>
                                                                                                </Link>
                                                                                                <div id="some-element" className="sub-menu">
                                                                                                    <ul>
                                                                                                        {category[2].descendents.map((c) => {
                                                                                                            return (
                                                                                                                <li key={c.id}>
                                                                                                                    <Link href={`/category/${category[2].slug}/${c.slug}`} locale={locale}>
                                                                                                                        <a className="menuLinkDesktop">{c.name}</a>
                                                                                                                    </Link>
                                                                                                                </li>
                                                                                                            )
                                                                                                        })}
                                                                                                    </ul>
                                                                                                </div>
                                                                                            </div>
                                                                                        }
                                                                                    </div>
                                                                                </div>
                                                                            )
                                                                        })}
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
                                                        categoriesMobile.map((category) => {
                                                            return (
                                                                <div className="card" key={category.id}>
                                                                    <div className="card-header" id={`heading-${category.id}`}>
                                                                        <h2 className="mb-0">
                                                                            <Link href={"/category/" + category.slug} locale={locale}>
                                                                                <a>{category.name}</a>
                                                                            </Link>
                                                                            <button type="button" className="btn btn-link" onClick={() => setExpendedCategory(category.id)}><i className={`fa fa-${expendedCategory === category.id ? "minus" : "plus"}`} /></button>
                                                                        </h2>
                                                                    </div>
                                                                    <div className={expendedCategory === category.id ? "expended" : "collapse"}>
                                                                        <div className="card-body">
                                                                            <ul>
                                                                                {category.descendents.map((c) => {
                                                                                    return <li key={c.id}>
                                                                                        <Link href={`/category/${category.slug}/${c.slug}`} locale={locale}>
                                                                                            <a className="menuLinkDesktop">{c.name}</a>
                                                                                        </Link>
                                                                                    </li>
                                                                                })}
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li><Link href="/sale" locale={locale}><a>{t("common:on_sale")}</a></Link></li>
                                <li className="d-sm-none" style={{ padding: 20, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
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