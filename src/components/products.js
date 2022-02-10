import axios from "axios"
import { useEffect, useState } from "react"
import Link from "next/link"
import { formatCurrency, GetPriceHtml } from "./helpers"
import { useRouter } from 'next/router'
import { useSelector } from "react-redux"
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

const priceFilters = [
    {
        start: 50,
        end: 250
    },
    {
        start: 251,
        end: 500
    },
    {
        start: 501,
        end: 1000
    },
    {
        start: 1001,
        end: 2000
    },
    {
        start: 2001,
        end: 5000
    },
    {
        start: 5001,
        end: 10000
    }
];

export default function Products(props) {
    const router = useRouter();
    const { locale } = router
    let category = props.category;
    const [products, setProducts] = useState(props.category.products || null);
    const [filters, setFilters] = useState([]);
    const [total, setTotal] = useState(props.category.totalCount || 0);
    const [totalPages, setTotalPages] = useState(props.category.totalPages || 0);
    const [openFilter, setOpenFilter] = useState(-1);
    const [page, setPage] = useState(category.page || 1);
    let limit = category.limit;
    const currency = useSelector(state => state.config.currency);
    const [mobileFiltersSelected, setMobileFiltersSelected] = useState();
    const [mobileSelectedPriceFilter, setMobileSelectedPriceFilter] = useState();
    const [isLoadiingMore, setIsloadingMore] = useState(false);

    const { t } = useTranslation()

    useEffect(() => {

        setIsloadingMore(true);
        let queryParams = router.query;
        let offset = (page - 1) * limit

        queryParams = { ...queryParams, ...{ limit: limit, offset: offset } }
        queryParams = new URLSearchParams(queryParams)

        let queryText = '';
        if (category.isSearch) {
            queryText = 'search';
        } else if (category.isSale) {
            queryText = 'sale';
        } else {
            queryText = category.slug;
        }

        axios.get(`${process.env.API_URL}category/products/${queryText}?${queryParams}`, {
            headers: { lang: locale === "en" ? "" : locale }
        }).then((response) => {
            if (page === 1) {
                setProducts(response.data.rows);
            } else {
                setProducts([...products, ...response.data.rows]);
            }
            setTotal(response.data.count);
            setTotalPages(Math.ceil(response.data.count / limit));
            setIsloadingMore(false);
        });
    }, [router, page]);

    useEffect(() => {
        axios.get(`${process.env.API_URL}static/filters`, {
            headers: {
                lang: router.locale !== "en" ? router.locale : ""
            }
        }).then((res) => {
            setFilters(res.data)
        });
    }, [router]);

    const applyFilter = (filterValue) => {
        let currentFilters = router.query.filters ? router.query.filters.split("|") : [];
        currentFilters = currentFilters.map(fv => fv);

        if (currentFilters.includes(filterValue)) {
            currentFilters = currentFilters.filter(fv => fv !== filterValue);
        } else {
            currentFilters.push(filterValue);
        }

        let appliedFiltersTemp = { ...router.query, ...{ filters: currentFilters.join("|") } };
        delete appliedFiltersTemp.page;
        let queryParams = new URLSearchParams(appliedFiltersTemp);
        if (router.pathname === "/search") {
            router.push(`/search?${queryParams}`);
        } else if (router.pathname === "/sale") {
            router.push(`/sale?${queryParams}`);
        } else {
            router.push(`/category/${category.parentCat.slug}/${category.slug}?${queryParams}`);
        }
    }

    const setPrice = (start, end) => {
        let appliedFiltersTemp = router.query;
        appliedFiltersTemp['start'] = start;
        appliedFiltersTemp['end'] = end;
        delete appliedFiltersTemp.page;
        let queryParams = new URLSearchParams(appliedFiltersTemp);
        if (router.pathname === "/search") {
            router.push(`/search?${queryParams}`);
        } else if (router.pathname === "/sale") {
            router.push(`/sale?${queryParams}`);
        } else {
            router.push(`/category/${category.parentCat.slug}/${category.slug}?${queryParams}`);
        }
    }

    const removeFilter = (type, val) => {
        let appliedFiltersTemp = { ...router.query };
        let mpf = { ...mobileSelectedPriceFilter };
        if (type === "price") {
            delete appliedFiltersTemp.start;
            delete appliedFiltersTemp.end;
            delete mpf.start;
            delete mpf.end;
            setMobileSelectedPriceFilter(mpf);
        } else {
            let currentFilters = appliedFiltersTemp.filters.split("|");
            currentFilters = currentFilters.filter(f => f !== val);
            currentFilters.length > 0 ? appliedFiltersTemp.filters = currentFilters.join("|") : delete appliedFiltersTemp.filters
        }

        delete appliedFiltersTemp.page;
        let queryParams = new URLSearchParams(appliedFiltersTemp);
        if (router.pathname === "/search") {
            router.push(`/search?${queryParams}`);
        } else if (router.pathname === "/sale") {
            router.push(`/sale?${queryParams}`);
        } else {
            router.push(`/category/${category.parentCat.slug}/${category.slug}?${queryParams}`);
        }
    }

    useEffect(() => {
        let mfSelected = router.query.filters ? router.query.filters.split("|").map(f => f) : [];
        setMobileFiltersSelected(mfSelected);

        if (router.query.start && router.query.end) {
            let mspf = {
                start: parseInt(router.query.start),
                end: parseInt(router.query.end),
            }

            setMobileSelectedPriceFilter(mspf);
        }

    }, [router]);

    const applyFilterMobile = (filter) => {
        let mfSelected = [...mobileFiltersSelected];
        if (mfSelected.includes(filter)) {
            mfSelected = mfSelected.filter(f => f !== filter);
        } else {
            mfSelected.push(filter);
        }

        setMobileFiltersSelected(mfSelected);
    }

    const setMobilePriceFilterClick = (start, end) => {
        setMobileSelectedPriceFilter({
            start: parseInt(start),
            end: parseInt(end)
        });
    }

    const applyMobileFilter = () => {
        let filters = [...mobileFiltersSelected];
        let appliedFiltersTemp = { ...router.query, ...{ filters: filters.join("|") } };
        delete appliedFiltersTemp.page;

        let priceFilter = { ...mobileSelectedPriceFilter };
        if (priceFilter.start && priceFilter.end) {
            appliedFiltersTemp = { ...appliedFiltersTemp, ...{ start: priceFilter.start, end: priceFilter.end } };
        }

        let queryParams = new URLSearchParams(appliedFiltersTemp);
        if (router.pathname === "/search") {
            router.push(`/search?${queryParams}`);
        } else if (router.pathname === "/sale") {
            router.push(`/sale?${queryParams}`);
        } else {
            router.push(`/category/${category.parentCat.slug}/${category.slug}?${queryParams}`);
        }
    }


    const clearAllFilters = () => {
        setMobileSelectedPriceFilter({});
        if (router.pathname === "/search") {
            router.push(`/search/?query=${category.name}`);
        } else if (router.pathname === "/sale") {
            router.push(`/sale/?query=${category.name}`);
        } else {
            router.push(`/category/${category.parentCat.slug}/${category.slug}`);
        }
    }

    const sortBy = (sortBy) => {
        let appliedFiltersTemp = { ...router.query };

        if (sortBy === "clear") {
            delete appliedFiltersTemp.sort;
        } else {
            appliedFiltersTemp = { ...appliedFiltersTemp, ...{ sort: sortBy } };
        }

        delete appliedFiltersTemp.page;
        let queryParams = new URLSearchParams(appliedFiltersTemp);
        if (router.pathname === "/search") {
            router.push(`/search?${queryParams}`);
        } else if (router.pathname === "/sale") {
            router.push(`/sale?${queryParams}`);
        } else {
            router.push(`/category/${category.parentCat.slug}/${category.slug}?${queryParams}`);
        }
    }

    if (products && products.length === 0) {
        return (
            <section className="inner_listing">
                <div className="inner_sec_tp">
                    <div className="container">
                        <div className="emptyCart">
                            <img src="/images/noresults.png" alt="emptyCart" />
                            <h1>Sorry, no results found!</h1>
                            <p>Please check the spelling or try searching for something else</p>
                            <button className="login_bttn go_bttn loadMore" onClick={() => router.back()} style={{
                                background: "transparent",
                                color: "#000",
                                textTransform: "uppercase"
                            }}>Go Back</button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section className="inner_listing">
            <div className="inner_sec_tp">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="left_fittr mrg_01">
                                <p style={{ textTransform: "capitalize" }}>Home / {category.name} {total && `(${total})`}</p>
                                <div className="inner_boxs">
                                    <div>
                                        <form>
                                            <div className="bs-example">
                                                <div className="accordion main_aco acco_after" id="accordionExample">
                                                    <div className="card">
                                                        <div className="card-header" id="priceFilterCard">
                                                            <h2 className="mb-0 left_fittr">
                                                                <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#priceFilter">
                                                                    <p>{t("products:price")}</p>
                                                                    <i className="fa fa-plus"></i>
                                                                </button>
                                                            </h2>
                                                        </div>
                                                        <div id="priceFilter" className="collapse show" aria-labelledby="priceFilterCard" data-parent="#accordionExample">
                                                            <div className="card-body">
                                                                <div className="radio_cus">
                                                                    {
                                                                        priceFilters.map((pf, index) => {
                                                                            return (
                                                                                <div key={index} onClick={() => setPrice(pf.start, pf.end)}>
                                                                                    <input type="radio" defaultValue={pf.start} readOnly={true} checked={router.query.start && parseInt(router.query.start) === pf.start ? true : false} />
                                                                                    <label htmlFor="test1">{formatCurrency(pf.start, currency)} - {formatCurrency(pf.end, currency)}</label>
                                                                                </div>
                                                                            )
                                                                        })
                                                                    }
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {
                                                        filters.map(filter => {
                                                            if (filter.filterValues.length > 0) {
                                                                return (
                                                                    <div className="card" key={filter.id} id={`${filter.name}FilterCard_${filter.id}`}>
                                                                        <div className="card-header">
                                                                            <h2 className="mb-0 left_fittr">
                                                                                <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target={`#filter_${filter.name}_${filter.id}`}>
                                                                                    <p>{filter.name}</p>
                                                                                    <i className="fa fa-plus"></i>
                                                                                </button>
                                                                            </h2>
                                                                        </div>
                                                                        <div id={`filter_${filter.name}_${filter.id}`} className="collapse" aria-labelledby={`${filter.name}FilterCard_${filter.id}`} data-parent="#accordionExample">
                                                                            <div className="card-body">
                                                                                <div className="categories_bx">
                                                                                    {
                                                                                        filter.filterValues.map(fv => {
                                                                                            return (
                                                                                                <label className="check_cus" onClick={() => applyFilter(fv.name)} key={fv.id}>{fv.name}
                                                                                                    <input type="checkbox" defaultValue={fv.name} readOnly={true} checked={router.query.filters && router.query.filters.includes(fv.name) ? true : false} />
                                                                                                    <span className="checkmark"></span>
                                                                                                </label>
                                                                                            );
                                                                                        })
                                                                                    }
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            }
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="inner_right_prodct">
                                <div className="sortDesktop">
                                    <div className="btnCFilter">
                                        <button type="button" className="btnFilter" style={{ pointerEvents: "none" }}>{t("products:sort")}</button>
                                        <button type="button" className="btnFilter" onClick={() => sortBy("clear")}>{t("products:relevance")}</button>
                                        <button type="button" className="btnFilter" onClick={() => sortBy("ragularPriceAsc")} >{t("products:price_low_high")}</button>
                                        <button type="button" className="btnFilter" onClick={() => sortBy("ragularPriceDesc")}>{t("products:price_high_low")}</button>
                                        <button type="button" className="btnFilter" onClick={() => sortBy("createdAtDesc")}>{t("products:new_first")}</button>
                                    </div>
                                </div>
                                <div className="mob_view_filter filter_cs">

                                    <div className="col_6" style={{ width: "100%", float: "unset", textAlign: "center" }}>
                                        <h6 data-toggle="modal" data-target="#myModal"><img src="/images/filter.png"
                                            alt="filterIcon" style={{ float: "unset" }} /><span>Filter</span></h6>
                                    </div>
                                </div>
                                <div className="appliedFilters">
                                    {
                                        (router.query.start && router.query.end) &&
                                        <div className="filter">
                                            <span>{t("products:price")} {formatCurrency(parseInt(router.query.start), currency)} - {formatCurrency(parseInt(router.query.end), currency)}</span>
                                            <button type="button" onClick={() => removeFilter("price")}>X</button>
                                        </div>
                                    }
                                    {
                                        router.query.filters && router.query.filters.split("|").map(appliedFilter => {
                                            return filters.map(filter => {
                                                let filterText = "";
                                                let appFilterValuefilter = filter.filterValues.filter(fv => appliedFilter === fv.name);
                                                if (appFilterValuefilter.length > 0) {
                                                    filterText += appFilterValuefilter[0].name;

                                                    return (
                                                        <div className="filter" key={appliedFilter}>
                                                            <span>{filterText}</span>
                                                            <button type="button" onClick={() => removeFilter("filter", appFilterValuefilter[0].name)}>X</button>
                                                        </div>)
                                                }
                                            })
                                        })
                                    }
                                </div>
                                <div className="inner_right_prodct">
                                    <div className="row custom_col">
                                        {
                                            products && products.map(p => {
                                                return (
                                                    <div className="col-md-6 col-6" key={p.id}>
                                                        <div className="cotton_fabric_sec" style={{ padding: "0px" }}>
                                                            <Link href={"/product/" + p.slug}>
                                                                <a style={{ display: "block", textDecoration: "none" }}>
                                                                    <Image src={p.featuredImage ? p.featuredImage.thumbnailUrl : "/images/placeholder.png"} width={434} height={297} alt={p.name} className="img-fluid" quality={100} />


                                                                    <h5>{p.name} - {p.sku}</h5>
                                                                    <p><strong><GetPriceHtml product={p} /></strong></p>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                {
                                    (total > products.length) && <button className="login_bttn go_bttn loadMore" disabled={isLoadiingMore} onClick={() => setPage(page + 1)}>
                                        {
                                            isLoadiingMore ? <div className="loader" /> : t("products:load_more")
                                        }
                                    </button>
                                }
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal md_bg_filter" id="myModal">
                <div className="modal-dialog filter_mrg">
                    <div className="modal-content">
                        <div className="modal-header mfilterModal">
                            <h4>Filters</h4>
                            <button onClick={clearAllFilters} className="clearFilterMbtn" data-dismiss="modal">Clear</button>
                        </div>
                        <div className="modal-body main_filter_pop filtersMobile">
                            <div className="d-flex flex-row mt-2">
                                <ul className="nav nav-tabs nav-tabs--vertical nav-tabs--left" role="navigation">
                                    <li className="nav-item">
                                        <button className={openFilter === -1 ? "nav-link active" : "nav-link"} onClick={() => setOpenFilter(-1)}>Price</button>
                                    </li>
                                    {
                                        filters.map(filter => {
                                            return (
                                                <li className="nav-item" key={filter.id}>
                                                    <button className={filter.id === openFilter ? "nav-link active" : "nav-link"} onClick={() => setOpenFilter(filter.id)}>{filter.name}</button>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                                <div className="tab-content">
                                    <div className={openFilter === -1 ? "tab-pane fade show active" : "tab-pane fade show"}>
                                        <div className="main_tag priceFilterModal">
                                            <ul>
                                                {
                                                    priceFilters.map((pf, index) => {
                                                        return (
                                                            <div key={index} onClick={() => setMobilePriceFilterClick(pf.start, pf.end)}>
                                                                <input type="radio" defaultValue={pf.start} readOnly={true} checked={mobileSelectedPriceFilter && parseInt(mobileSelectedPriceFilter.start) === pf.start ? true : false} />
                                                                <label htmlFor="test1">{formatCurrency(pf.start, currency)} - {formatCurrency(pf.end, currency)}</label>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                    {
                                        filters.map(filter => {
                                            return (
                                                <div className={filter.id === openFilter ? "tab-pane fade show active" : "tab-pane fade show"} key={filter.id}>
                                                    <div className="main_tag">
                                                        <ul style={{ padding: "15px 10px" }}>
                                                            {
                                                                filter.filterValues.map(fv => {
                                                                    return (
                                                                        <li className="normalValueContainer selectedOption" onClick={() => applyFilterMobile(fv.name)} key={fv.id}>
                                                                            <div className="customCheckbox">
                                                                                <div className={mobileFiltersSelected.includes(fv.name) ? "filterValue selected" : "filterValue"}>{fv.name}</div>
                                                                                {
                                                                                    mobileFiltersSelected.includes(fv.name) && <img src="/images/checked.svg" width="20px" />
                                                                                }
                                                                            </div>
                                                                        </li>
                                                                    );
                                                                })
                                                            }
                                                        </ul>
                                                    </div>
                                                </div>
                                            );
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer ft_btn_lft">
                            <button type="button" className="btn btn-danger clse_bttn" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-danger clse_bttn" onClick={applyMobileFilter} data-dismiss="modal">Apply</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}