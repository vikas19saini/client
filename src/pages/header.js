import Link from "next/link"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

export default function Header(props) {
    const [cartItemCount, setCartItemCount] = useState(0)
    const config = useSelector(state => state.config)

    useEffect(() => {
        navigation() // written in script.js

        if (config.cart) {
            setCartItemCount(config.cart.length)
        }
    })

    return (
        <header className={props.shadow ? "header_area head_shedow" : "header_area"}>
            <div className="main_header_area animated">
                <div className="container-fluid">
                    <nav id="navigation1" className="navigation_1 row">
                        <div className="nav-header">
                            <div className="icon_r_12 mob_view">
                                <div className="inner_po_right">
                                    <form className="searchbox">
                                        <input type="search" placeholder="Search......" name="search" className="searchbox-input" onKeyUp={() => buttonUp()} required />
                                        <input type="submit" className="searchbox-submit" value="" />
                                        <span className="searchbox-icon"><img src="/images/search.png" alt="" /></span>
                                    </form>
                                    <div className="icon_up">
                                        <a href="#"><img src="/images/shopping-bag.png" alt="" /></a>
                                        <a href="#"><i className="fa fa-heart" aria-hidden="true"></i></a>
                                    </div>
                                </div>
                            </div>
                            <Link href="/">
                                <a className="nav-brand">
                                    <img src="/images/logo.png" alt="" />
                                </a>
                            </Link>
                            <div className="nav-toggle"></div>
                        </div>
                        <div className="nav-menus-wrapper">
                            <ul className={props.shadow ? "nav-menu categoery_menu align-to-right wt_tx" : "nav-menu categoery_menu align-to-right"}>
                                <li>
                                    <a className="show_sub" href="#">All Fabric</a>
                                    <div className="megamenu-panel" id="close_menu">
                                        <div className="container nav_head">
                                            <div id="closeButton"><img src="/images/close.png" /></div>
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
                                                                    <div id="some-div" className="expanded">
                                                                        <a href="#link"><img
                                                                            src="/images/icons/bestsellers-01.svg"
                                                                            alt="" /><span>Bestsellers</span></a>
                                                                        <div id="some-element" className="sub-menu">
                                                                            <ul>
                                                                                <li><a href="#">Lace</a></li>
                                                                                <li><a href="#">Plain Dyed</a></li>
                                                                                <li><a href="#">Prints</a></li>
                                                                                <li><a href="#">Brocade</a></li>
                                                                                <li><a href="#">Satin</a></li>
                                                                                <li><a href="#">French Lace</a></li>
                                                                                <li><a href="#">Chiffon</a></li>
                                                                                <li><a href="#">Crepe</a></li>
                                                                                <li><a href="#">Georgette</a></li>
                                                                                <li><a href="#">Glitter</a></li>
                                                                                <li><a href="#">Fur</a></li>
                                                                                <li><a href="#">Organza</a></li>
                                                                                <li><a href="#">Guipure Lace</a></li>
                                                                                <li><a href="#">Tweed</a></li>
                                                                                <li><a href="#">Jacquard</a></li>
                                                                                <li><a href="#">Tulle</a></li>
                                                                                <li><a href="#">Silk</a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div id="some-div" className="expanded">
                                                                        <a href="#link"><img src="/images/icons/trends-01.svg"
                                                                            alt="" /><span>Trends</span></a>
                                                                        <div id="some-element" className="sub-menu">
                                                                            <ul>
                                                                                <li><a href="#">Glitter</a></li>
                                                                                <li><a href="#">Lurex</a></li>
                                                                                <li><a href="#">Prints</a></li>
                                                                                <li><a href="#">Satin</a></li>
                                                                                <li><a href="#">Lace</a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div id="some-div" className="expanded">
                                                                        <a href="#link"><img
                                                                            src="/images/icons/traditional-01.svg"
                                                                            alt="" /><span>Traditional</span></a>
                                                                        <div id="some-element" className="sub-menu">
                                                                            <ul>
                                                                                <li><a href="#">Silk</a></li>
                                                                                <li><a href="#">Brocades</a></li>
                                                                                <li><a href="#">Prints</a></li>
                                                                                <li><a href="#">Jacquard</a></li>
                                                                                <li><a href="#">Satin</a></li>
                                                                                <li><a href="#">Cotton</a></li>
                                                                                <li><a href="#">Crepe</a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div id="some-div" className="expanded">
                                                                        <a href="#link"><img src="/images/icons/natural-01.svg"
                                                                            alt="" /><span>Natural</span></a>
                                                                        <div id="some-element" className=" sub-menu">
                                                                            <ul>
                                                                                <li><a href="#">Cotton</a></li>
                                                                                <li><a href="#">Silk</a></li>
                                                                                <li><a href="#">Viscose</a></li>
                                                                                <li><a href="#">Linen</a></li>
                                                                                <li><a href="#">Wool</a></li>
                                                                                <li><a href="#">Hemp</a></li>
                                                                                <li><a href="#">Flax</a></li>
                                                                                <li><a href="#">Cashmere</a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                    <div id="some-div" className="expanded">
                                                                        <a href="#link"><img src="/images/icons/manmade.svg"
                                                                            alt="" /><span>Man-Made</span></a>
                                                                        <div id="some-element" className=" sub-menu">
                                                                            <ul>
                                                                                <li><a href="#">Polyester</a></li>
                                                                                <li><a href="#">Nylon </a></li>
                                                                                <li><a href="#">Acetates</a></li>
                                                                                <li><a href="#">Velvet</a></li>
                                                                                <li><a href="#">Fur</a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                    <div id="some-div" className="expanded">
                                                                        <a href="#link"><img src="/images/icons/Specials-01.svg"
                                                                            alt="" /><span>Specials</span></a>
                                                                        <div id="some-element" className=" sub-menu">
                                                                            <ul>
                                                                                <li><a href="#">Cotton</a></li>
                                                                                <li><a href="#">Silk</a></li>
                                                                                <li><a href="#">Viscose</a></li>
                                                                                <li><a href="#">Linen</a></li>
                                                                                <li><a href="#">Wool</a></li>
                                                                                <li><a href="#">Hemp</a></li>
                                                                                <li><a href="#">Flax</a></li>
                                                                                <li><a href="#">Cashmere</a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                    <div id="some-div" className="expanded">
                                                                        <a href="#link"><img src="/images/icons/luxury-01.svg"
                                                                            alt="" /><span>Luxury</span></a>
                                                                        <div id="some-element" className=" sub-menu">
                                                                            <ul>
                                                                                <li><a href="#">Cotton</a></li>
                                                                                <li><a href="#">Silk</a></li>
                                                                                <li><a href="#">Viscose</a></li>
                                                                                <li><a href="#">Linen</a></li>
                                                                                <li><a href="#">Wool</a></li>
                                                                                <li><a href="#">Hemp</a></li>
                                                                                <li><a href="#">Flax</a></li>
                                                                                <li><a href="#">Cashmere</a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                    <div id="some-div" className="expanded">
                                                                        <a href="#link"><img src="/images/icons/lace-01.svg"
                                                                            alt="" /><span>Lace</span></a>
                                                                        <div id="some-element" className="sub-menu">
                                                                            <ul>
                                                                                <li><a href="#">Cotton</a></li>
                                                                                <li><a href="#">Polyester</a></li>
                                                                                <li><a href="#">Nylon</a></li>
                                                                                <li><a href="#">Embroidered</a></li>
                                                                                <li><a href="#">Sequins</a></li>
                                                                                <li><a href="#">3D</a></li>
                                                                                <li><a href="#">Guipure</a></li>
                                                                                <li><a href="#">French lace</a></li>
                                                                                <li><a href="#">Macrame</a></li>
                                                                                <li><a href="#">Net</a></li>
                                                                                <li><a href="#">Lurex</a></li>
                                                                                <li><a href="">Italian Lace</a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                    <div id="some-div" className="expanded">
                                                                        <a href="#link"><img
                                                                            src="/images/icons/embroideries-01.svg"
                                                                            alt="" /><span>Embroideries</span></a>
                                                                        <div id="some-element" className="sub-menu">
                                                                            <ul>
                                                                                <li><a href="#">Cotton</a></li>
                                                                                <li><a href="#">Silk</a></li>
                                                                                <li><a href="#">Polyester</a></li>
                                                                                <li><a href="#">Jersey</a></li>
                                                                                <li><a href="#">Lurex</a></li>
                                                                                <li><a href="#">Sequins</a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                    <div id="some-div" className="expanded">
                                                                        <a href="#link"><img src="/images/icons/prints-01.svg"
                                                                            alt="" /><span>Prints</span></a>
                                                                        <div id="some-element" className="sub-menu">
                                                                            <ul>
                                                                                <li><a href="#">Cotton</a></li>
                                                                                <li><a href="#">Silk</a></li>
                                                                                <li><a href="#">Chiffon</a></li>
                                                                                <li><a href="#">Linen</a></li>
                                                                                <li><a href="#">Polyester</a></li>
                                                                                <li><a href="#">Jersey</a></li>
                                                                                <li><a href="#">Crepe</a></li>
                                                                                <li><a href="#">Glitter</a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                    <div id="some-div" className="expanded">
                                                                        <a href="#link"><img
                                                                            src="/images/icons/jacquards-01.svg"
                                                                            alt="" /><span>Jacquard</span></a>
                                                                        <div id="some-element" className="sub-menu">
                                                                            <ul>
                                                                                <li><a href="#">Polyester</a></li>
                                                                                <li><a href="#">Nylon</a></li>
                                                                                <li><a href="#">Acetates</a></li>
                                                                                <li><a href="#">Velvet</a></li>
                                                                                <li><a href="#">Fur</a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>


                                                                    <div id="some-div" className="expanded">
                                                                        <a href="#link"><img src="/images/icons/suiting-01.svg"
                                                                            alt="" /><span>Suiting</span></a>
                                                                        <div id="some-element" className="sub-menu">
                                                                            <ul>
                                                                                <li><a href="#">Cotton</a></li>
                                                                                <li><a href="#">Blend</a></li>
                                                                                <li><a href="#">Wool</a></li>
                                                                                <li><a href="#">Linen</a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                    <div id="some-div" className="expanded">
                                                                        <a href="#link"><img src="/images/icons/shirting.svg"
                                                                            alt="" /><span>Shirting</span></a>
                                                                        <div id="some-element" className="sub-menu">
                                                                            <ul>
                                                                                <li><a href="#">Cotton</a></li>
                                                                                <li><a href="#">Blend</a></li>
                                                                                <li><a href="#">Silk</a></li>
                                                                                <li><a href="#">Linen</a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                    <div id="some-div" className="expanded">
                                                                        <a href="#link"><img src="/images/icons/silk.svg"
                                                                            alt="" /><span>Silk</span></a>
                                                                        <div id="some-element" className="sub-menu">
                                                                            <ul>
                                                                                <li><a href="#">Plain silk</a></li>
                                                                                <li><a href="#">Printed silk</a></li>
                                                                                <li><a href="#">Silk chiffon</a></li>
                                                                                <li><a href="#">Silk satin</a></li>
                                                                                <li><a href="#">Silk organza</a></li>
                                                                                <li><a href="#">Silk georgette</a></li>
                                                                                <li><a href="#">Silk brocade</a></li>
                                                                                <li><a href="#">Silk blend</a></li>
                                                                                <li><a href="#">Jersey</a></li>
                                                                                <li><a href="#">Crepe</a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                    <div id="some-div" className="expanded">
                                                                        <a href="#link"><img src="/images/icons/cotton.svg"
                                                                            alt="" /><span>Cotton</span></a>
                                                                        <div id="some-element" className="sub-menu">
                                                                            <ul>
                                                                                <li><a href="#">Plain cotton</a></li>
                                                                                <li><a href="#">Printed cotton</a></li>
                                                                                <li><a href="#">Cotton stretch</a></li>
                                                                                <li><a href="#">Cotton satin</a></li>
                                                                                <li><a href="#">Cotton twill</a></li>
                                                                                <li><a href="#">Cotton linen</a></li>
                                                                                <li><a href="#">Cotton blend</a></li>
                                                                                <li><a href="#">Cotton denim</a></li>
                                                                                <li><a href="#">Cotton canvas</a></li>
                                                                                <li><a href="#">Cotton dobby</a></li>
                                                                                <li><a href="#">Cotton jacquard</a></li>
                                                                                <li><a href="#">Lace</a></li>
                                                                                <li><a href="#">Jersery</a></li>
                                                                                <li><a href="#">Flat knit</a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                    <div id="some-div" className="expanded">
                                                                        <a href="#link"><img src="/images/icons/linen.svg"
                                                                            alt="" /><span>Linen</span></a>
                                                                        <div id="some-element" className="sub-menu">
                                                                            <ul>
                                                                                <li><a href="#">Pure linen</a></li>
                                                                                <li><a href="#">Linen blends</a></li>
                                                                                <li><a href="#">Printed linen</a></li>
                                                                                <li><a href="#">Jersey</a></li>
                                                                                <li><a href="#">Flatknit</a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                    <div id="some-div" className="expanded">
                                                                        <a href="#link"><img src="/images/icons/wool.svg"
                                                                            alt="" /><span>Wool</span></a>
                                                                        <div id="some-element" className="sub-menu">
                                                                            <ul>
                                                                                <li><a href="#">Pure wool</a></li>
                                                                                <li><a href="#">Wool blend</a></li>
                                                                                <li><a href="#">Jersey</a></li>
                                                                                <li><a href="#">Flatknit</a></li>
                                                                                <li><a href="#">Cashmere</a></li>
                                                                                <li><a href="#">Acrylic</a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                    <div id="some-div" className="expanded">
                                                                        <a href="#link"><img src="/images/icons/viscose.svg"
                                                                            alt="" /><span>Viscose</span></a>
                                                                        <div id="some-element" className="sub-menu">
                                                                            <ul>
                                                                                <li><a href="#">Plain dyed</a></li>
                                                                                <li><a href="#">Printed</a></li>
                                                                                <li><a href="#">Viscose blend</a></li>
                                                                                <li><a href="#">Jersey</a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                    <div id="some-div" className="expanded">
                                                                        <a href="#link"><img src="/images/icons/polyester.svg"
                                                                            alt="" /><span>Polyester</span></a>
                                                                        <div id="some-element" className="sub-menu">
                                                                            <ul>
                                                                                <li className=""><a href="#">Silk</a></li>
                                                                                <li className=""><a href="#">Printed Cotton</a></li>
                                                                                <li><a href="#">Cotton Stretch</a></li>
                                                                                <li><a href="#">Cotton Satin</a></li>
                                                                                <li><a href="#">Cotton Twill</a></li>
                                                                                <li><a href="#">Cotton Linen</a></li>
                                                                                <li><a href="#">Cotton Blend</a></li>
                                                                                <li><a href="#">Cotton Denim</a></li>
                                                                                <li><a href="#">Cotton Canvas</a></li>
                                                                                <li><a href="#">Cotton Brocade</a></li>
                                                                                <li><a href="#">Cotton Jacquard</a></li>
                                                                                <li><a href="#">Net</a></li>
                                                                                <li><a href="#">Lace</a></li>
                                                                                <li><a href="#">Jersey</a></li>
                                                                                <li><a href="#">Flat knit</a></li>
                                                                                <li><a href="#">Crepe</a></li>
                                                                                <li><a href="#">Velvet</a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li><a href="#" target="_blank">Shop By Categories</a></li>
                                <div className="nav-search">
                                    <div className="nav-search-button"><img src="/images/search.png" alt="" /></div>
                                    <form>
                                        <div className="nav-search-inner">
                                            <input type="search" name="search" placeholder="Search..." />
                                        </div>
                                    </form>
                                    <a href="#"><img src="/images/shopping-bag.png" alt="" /></a>
                                    <Link href="/cart">
                                        <a>
                                            <img src="/images/bell.png" alt="notification" />
                                            <span className="badge" id="cartItems">{cartItemCount}</span>
                                        </a>
                                    </Link>
                                    <Link href="/account">
                                        <a>
                                            <img src="/images/user.png" alt="account" />
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