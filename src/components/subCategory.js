import { Fragment, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

export default function SubCategory(props) {
    let category = props.category
    let firstSection = [], secondSection = [], thirdSection = [], restAll = []

    for (let i = 0; i < category.descendents.length; i++) {
        if (i < 2) {
            firstSection.push(category.descendents[i])
        } else if (i === 2) {
            secondSection.push(category.descendents[i])
        } else if (i > 2 && i < 5) {
            thirdSection.push(category.descendents[i])
        } else {
            restAll.push(category.descendents[i])
        }
    }

    useEffect(() => {
        subCategory()
    })

    return (
        <Fragment>
            <div className="container-fluid subcategory_desk desk_view" style={{ background: `url(${category.media ? category.media.fullUrl : "/images/placeholder.png"}) no-repeat center` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="inner_sub_txt inner_txt wow fadeInUp">
                                <h1>{category.name}</h1>
                                <p>{category.description}</p>
                                <button type="button" className="view_slide_bttn learn_bttn cttn_coll">View Collection</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid subcategory_mob mob_view" style={{ background: `url(${category.subCategory ? category.subCategory.fullUrl : "/images/placeholder.png"}) no-repeat center` }}>
                <div className="row">
                    <div className="col-md-12">
                        <div id="top_banner_1" className="owl-carousel wow fadeInUp">
                            <div className="item">
                                <div className="inner_sub_txt inner_txt">
                                    <h1>{category.name}</h1>
                                    <p>{category.description}</p>
                                    <button type="button" className="view_slide_bttn learn_bttn pro_124 cttn_coll">View Collection</button>
                                </div>
                            </div>
                            <div className="item">
                                <div className="inner_sub_txt inner_txt">
                                    <h1>{category.name}</h1>
                                    <p>{category.description}</p>
                                    <button type="button" className="view_slide_bttn learn_bttn pro_124 cttn_coll">View Collection</button>
                                </div>
                            </div>
                            <div className="item">
                                <div className="inner_sub_txt inner_txt">
                                    <h1>{category.name}</h1>
                                    <p>{category.description}</p>
                                    <button type="button" className="view_slide_bttn learn_bttn pro_124 cttn_coll">View Collection</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {
                firstSection.length > 0 &&
                <section className="sec_padd">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="inner_main_hadding wow fadeInUp">
                                    <h4>Explore in {category.name}</h4>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {
                                firstSection.map(c => {
                                    return (
                                        <div className="col-md-6" key={c.id}>
                                            <div className="cotton_fabric_sec tp_border wow fadeInUp">
                                                <Link href={"/category/" + c.slug}>
                                                    <a>
                                                        <Image src={c.subCategory ? c.subCategory.fullUrl : "/images/placeholder.png"} width={450} height={560} alt={c.name} className="img-fluid" placeolder="skeleton" unoptimized />
                                                    </a>
                                                </Link>
                                                <h5>{c.name}</h5>
                                                <p>{c.products.length} products</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>
            }

            {
                secondSection.length > 0 &&

                <section className="sec_padd wow fadeInUp">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 padd_right_0">
                                <div className="">
                                    <Link href={"/category/" + secondSection[0].slug}>
                                        <a>
                                            <img src={secondSection[0].subCategory ? secondSection[0].subCategory.fullUrl : "/images/placeholder.png"} alt={secondSection[0].name} className="img-fluid" />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-6 padd_left_0 brocade_bg">
                                <div className="dis_flex">
                                    <div className="inner_brocade">
                                        <h3>{secondSection[0].name}</h3>
                                        <p>{secondSection[0].description}</p>
                                        <Link href={"/category/" + secondSection[0].slug}>
                                            <a>
                                                <button type="button" className="view_slide_bttn learn_bttn pro_124">{secondSection[0].products.length} products</button>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            }

            {
                restAll.length > 0 &&
                <section className="sec_padd">
                    <div className="container custom_con">
                        <div id="mini_slide" className="owl-carousel wow fadeInUp">
                            {
                                restAll.map(ra => {
                                    return (
                                        <div className="item" key={ra.id}>
                                            <div className="cotton_fabric_sec tp_border">
                                                <Link href={"/category/" + ra.slug}>
                                                    <a>
                                                        <Image src={ra.subCategory ? ra.subCategory.thumbnailUrl : "/images/placeholder.png"} width={350} height={350} alt={ra.name} className="img-fluid" quality={90} />
                                                    </a>
                                                </Link>
                                                <h5>{ra.name} </h5>
                                                <p>{ra.products.length} products</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>
            }

            {
                thirdSection.length > 0 &&
                thirdSection.map((tc, index) => {
                    if (index % 2 === 0) {
                        return (
                            <section className="sec_padd wow fadeInUp" key={tc.id} style={{ paddingBottom: 20 }}>
                                <div className="container">
                                    <div className="row_revers">
                                        <div className="row">
                                            <div className="col-md-7">
                                                <div className="">
                                                    <img src={tc.subCategory ? tc.subCategory.fullUrl : "/images/placeholder.png"} alt={tc.name} className="img-fluid" />
                                                </div>
                                            </div>
                                            <div className="col-md-5">
                                                <div className="dis_flex">
                                                    <div className="inner_left">
                                                        <h3>{tc.name}</h3>
                                                        <p>{tc.description}</p>
                                                        <div className="dropdown">
                                                            <Link href={"/category/" + tc.slug}>
                                                                <a>
                                                                    <button className="view_bttn dropbtn lern_bttn">{tc.products.length} products</button>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        )
                    } else {
                        return (
                            <section className="sec_padd wow fadeInUp" key={tc.id} style={{ paddingBottom: 20 }}>
                                <div className="container">
                                    <div className="row flex_derection">
                                        <div className="col-md-5">
                                            <div className="dis_flex">
                                                <div className="inner_left">
                                                    <h3>{tc.name}</h3>
                                                    <p>{tc.description}</p>
                                                    <div className="dropdown">
                                                        <Link href={"/category/" + tc.slug}>
                                                            <a>
                                                                <button className="view_bttn dropbtn lern_bttn">{tc.products.length} products</button>
                                                            </a>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-7">
                                            <div>
                                                <img src={tc.subCategory ? tc.subCategory.fullUrl : "/images/placeholder.png"} alt={tc.name} className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        )
                    }
                })
            }
        </Fragment >
    );
}