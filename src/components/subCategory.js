import { Fragment, useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router";
import Products from "./productCrousel";
import OwlCarousel from 'react-owl-carousel2';

export default function SubCategory(props) {
    const [subCategories, setSubCategories] = useState([]);
    const [grid, setGrid] = useState([]);
    const history = useRouter();
    const category = props.category;

    useEffect(() => {
        setSubCategories(props.category.descendents);
    }, [props.category])

    useEffect(() => {
        if (subCategories.length > 0) {
            setGrid(subCategories); setGrid(subCategories);
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
                            <div className="col-md-12">
                                <div className="cotton_mainHead" style={{
                                    position: "absolute",
                                    top: "50%",
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    background: '#f8f8f894'
                                }}>
                                    <h3>{category.name}</h3>
                                    <p>{category.description}
                                    </p>
                                </div>
                                <div className="cotton_main_banner">
                                    <img src={category.media ? category.media.fullUrl : "/images/placeholder.png"} alt={category.name} className="img-fluid desk_view" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mob_view">
                        <div className="row">
                            <div className="col-12 mainCatMob">
                                <div className="cotton_main_banner">
                                    <img src={category.subCategory ? category.subCategory.fullUrl : "/images/placeholder.png"} alt={category.name} width="100%" className="img-fluid mob_view" />
                                </div>
                            </div>
                            <div className="col-12 cotton_mainHead" style={{ textAlign: "center" }}>
                                <h3>{category.name}</h3>
                                <p>{category.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {
                grid.length > 0 &&
                <section className="sub_cotton_sec">
                    <div className="container">
                        <div className="row wow fadeInUp">
                            {
                                grid.map((s) => {
                                    return (
                                        <div className="col-md-6" key={s.id}>
                                            <div className="cotton_feb">
                                                <img src={s.subCategory ? s.subCategory.fullUrl : "/images/placeholder.png"} alt={s.name} className="img-fluid subCategoryCrousel" />
                                                <div className="top_space">
                                                    <div className="sld_bttm_tx">
                                                        <Link href={`/category/${category.slug}/${s.slug}`}>
                                                            <a>
                                                                <h3>{s.name}</h3>
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

            {
                props.category.products.length > 0 &&
                <section className="sec_padd sec_arrivals">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="secound_hadd_pr inner_main_hadding wow fadeInUp">
                                    <h4>Exclusive {category.name}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row wow fadeInUp">
                            <div className="col-md-12 padd_0_all">
                                <OwlCarousel options={{
                                    responsive: {
                                        0: {
                                            items: 1.1,
                                            nav: false,
                                        },
                                        568: {
                                            items: 1.1,
                                        },
                                        667: {
                                            items: 3.1,
                                        },
                                        1170: {
                                            items: 3.1
                                        }
                                    },
                                    loop: true,
                                    autoplay: false,
                                    dots: false,
                                    nav: true,
                                    navText: ['<span aria-label="Previous">‹</span>', '<span aria-label="Next">›</span>'],
                                    margin: 10,
                                }} id="arrivals" className="owl-carousel relativeProducts" >
                                    <Products products={props.category.products} />
                                </OwlCarousel>
                            </div>
                        </div>
                    </div>
                </section>
            }
        </Fragment>
    )
}