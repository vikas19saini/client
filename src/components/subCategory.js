import { Fragment, useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router";

export default function SubCategory(props) {
    const [subCategories, setSubCategories] = useState([]);
    const [slider, setSlider] = useState([]);
    const [grid, setGrid] = useState([]);
    const history = useRouter();
    const category = props.category;

    useEffect(() => {
        setSubCategories(props.category.descendents);
    }, [props.category])

    useEffect(() => {
        if (subCategories.length > 0) {
            if (subCategories.length >= 4) {
                setSlider(subCategories.splice(0, 3));
                setGrid(subCategories.splice(3, subCategories.length - 1));
            } else {
                setGrid(subCategories);
            }
        }
    }, [subCategories])

    useEffect(() => {
        subCategory()
    })

    return (
        <Fragment>
            <div className="container">
                <div className="inner_cotton_main wow fadeInUp">
                    <div className="desk_view">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="cotton_flx_row">
                                    <div className="cotton_mainHead">
                                        <h3>{category.name}</h3>
                                        <p>{category.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="cotton_main_banner">
                                    <img src={category.media ? category.media.fullUrl : "//images/placeholder.png"} alt={category.name} className="img-fluid desk_view" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mob_view">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="cotton_main_banner">
                                    <img src={category.subCategory ? category.subCategory.fullUrl : "//images/placeholder.png"} alt={category.name} className="img-fluid mob_view" />
                                </div>
                            </div>
                            <div className="col-md-4 mob_padd_0">
                                <div className="cotton_flx_row">
                                    <div className="cotton_mainHead">
                                        <h3>{category.name}</h3>
                                        <p>{category.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {
                slider.length > 0 &&
                <section className="sec_padd">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="inner_main_hadding wow fadeInUp">
                                    <h4>Exclusive {category.name}</h4>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 wow fadeInUp">
                                <div id="best_sellers" className="custom_icon subCategoryCrousel owl-carousel mrg_113 owl-theme wow fadeInUp">
                                    {slider.map((s) => {
                                        return (
                                            <div className="item">
                                                <img src={s.subCategory ? s.subCategory.fullUrl : "/images/placeholder.png"} alt={s.name} className="img-fluid subCategoryCrousel" />
                                                <div className="top_space">
                                                    <div className="sld_bttm_tx">
                                                        <Link href={`/category/${category.slug}/${s.slug}`}>
                                                            <a>
                                                                <h3>{s.name}</h3>
                                                                <p>{s.description}</p>
                                                                <p>{s.products.length} products</p>
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <button onClick={() => history.push(`/category/${category.slug}/${s.slug}`)} type="button" className="shop_bttn">Shop Now</button>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            }

            {
                grid.length > 0 &&
                <section className="sub_cotton_sec">
                    <div className="container">
                        <div className="row wow fadeInUp">
                            {
                                grid.map((s) => {
                                    return (
                                        <div className="col-md-6">
                                            <div className="cotton_feb">
                                                <img src={s.subCategory ? s.subCategory.fullUrl : "/images/placeholder.png"} alt={s.name} className="img-fluid subCategoryCrousel" />
                                                <div className="top_space">
                                                    <div className="sld_bttm_tx">
                                                        <Link href={`/category/${category.slug}/${s.slug}`}>
                                                            <a>
                                                                <h3>{s.name}</h3>
                                                                <p>{s.description}</p>
                                                                <p>{s.products.length} products</p>
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <button onClick={() => history.push(`/category/${category.slug}/${s.slug}`)} type="button" className="shop_bttn">Shop Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>
            }
        </Fragment>
    )
}