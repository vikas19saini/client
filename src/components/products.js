import axios from "axios"
import { useEffect, useState } from "react"
import Link from "next/link"
import { formatCurrency, GetPriceHtml } from "../pages/helpers"
import { useRouter } from 'next/router'
import { useSelector } from "react-redux"
import { route } from "next/dist/next-server/server/router"

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
    let category = props.category;
    const [products, setProducts] = useState(props.category.products || null);
    const [filters, setFilters] = useState([]);
    const [total, setTotal] = useState(props.category.totalCount || 0);
    const [totalPages, setTotalPages] = useState(props.category.totalPages || 0);
    const [openFilter, setOpenFilter] = useState(-1);
    const [page, setPage] = useState(category.page || 1);
    let limit = category.limit;
    const currency = useSelector(state => state.config.currency);

    useEffect(() => {
        let queryParams = router.query;
        let offset = (page - 1) * limit

        queryParams = { ...queryParams, ...{ limit: limit, offset: offset } }
        queryParams = new URLSearchParams(queryParams)

        axios.get(`${process.env.API_URL}category/products/${category.isSearch ? "search" : category.slug}?${queryParams}`).then((response) => {
            if (page === 1) {
                setProducts(response.data.rows);
            } else {
                setProducts([...products, ...response.data.rows]);
            }
            setTotal(response.data.count);
            setTotalPages(Math.ceil(response.data.count / limit));
        });
    }, [router, page]);

    useEffect(() => {
        axios.get(`${process.env.API_URL}static/filters`).then((res) => {
            setFilters(res.data)
        });
    }, []);

    const applyFilter = (filterValue) => {
        let currentFilters = router.query.filters ? router.query.filters.split("|") : [];
        currentFilters = currentFilters.map(fv => parseInt(fv));

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
        } else {
            router.push(`/category/${category.slug}?${queryParams}`);
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
        } else {
            router.push(`/category/${category.slug}?${queryParams}`);
        }
    }

    const removeFilter = (type, val) => {
        let appliedFiltersTemp = { ...router.query };
        if (type === "price") {
            delete appliedFiltersTemp.start;
            delete appliedFiltersTemp.end;
        } else {
            let currentFilters = appliedFiltersTemp.filters.split("|");
            currentFilters = currentFilters.filter(f => parseInt(f) !== val);
            currentFilters.length > 0 ? appliedFiltersTemp.filters = currentFilters.join("|") : delete appliedFiltersTemp.filters
        }

        delete appliedFiltersTemp.page;
        let queryParams = new URLSearchParams(appliedFiltersTemp);
        if (router.pathname === "/search") {
            router.push(`/search?${queryParams}`);
        } else {
            router.push(`/category/${category.slug}?${queryParams}`);
        }
    }

    return (
        <section className="inner_listing">
            <div className="inner_sec_tp">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="left_fittr mrg_01">
                                <p>Home / {category.name} {total && `(${total})`}</p>
                                <div className="inner_boxs">
                                    <div>
                                        <form>
                                            <div className="bs-example">
                                                <div className="accordion main_aco acco_after" id="accordionExample">
                                                    <div className="card">
                                                        <div className="card-header" id="priceFilterCard">
                                                            <h2 className="mb-0 left_fittr">
                                                                <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#priceFilter">
                                                                    <p>Price</p>
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
                                                                                                <label className="check_cus" onClick={() => applyFilter(fv.id)} key={fv.id}>{fv.name}
                                                                                                    <input type="checkbox" defaultValue={fv.id} readOnly={true} checked={router.query.filters && router.query.filters.includes(fv.id) ? true : false} />
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
                                <div className="mob_view filter_cs">
                                    <div className="col_6">
                                        <h6><img src="/images/sort.jpg" alt="" /><span>Sort</span></h6>
                                    </div>
                                    <div className="col_6">
                                        <h6 data-toggle="modal" data-target="#myModal"><img src="/images/filter.png"
                                            alt="filterIcon" /><span>Filter</span></h6>
                                    </div>
                                </div>
                                <div className="appliedFilters">
                                    {
                                        (router.query.start && router.query.end) &&
                                        <div className="filter">
                                            <span>Price {formatCurrency(parseInt(router.query.start), currency)} - {formatCurrency(parseInt(router.query.end), currency)}</span>
                                            <button type="button" onClick={() => removeFilter("price")}>X</button>
                                        </div>
                                    }
                                    {
                                        router.query.filters && router.query.filters.split("|").map(appliedFilter => {
                                            return filters.map(filter => {
                                                let filterText = "";
                                                let appFilterValuefilter = filter.filterValues.filter(fv => parseInt(appliedFilter) === fv.id);
                                                if (appFilterValuefilter.length > 0) {
                                                    filterText += appFilterValuefilter[0].name;

                                                    return (
                                                        <div className="filter" key={appliedFilter}>
                                                            <span>{filterText}</span>
                                                            <button type="button" onClick={() => removeFilter("filter", appFilterValuefilter[0].id)}>X</button>
                                                        </div>)
                                                }
                                            })
                                        })
                                    }
                                </div>
                                <div className="inner_right_prodct">
                                    {
                                        products && products.length === 0 ?
                                            <div className="emptyCart">
                                                <img src="/images/emptyCart.svg" alt="emptyCart" />
                                                <h1>No product found!</h1>
                                                <button className="login_bttn go_bttn loadMore" onClick={() => router.back()}>Go Back</button>
                                            </div> : <><div className="row custom_col">
                                                {
                                                    products && products.map(p => {
                                                        return (
                                                            <div className="col-md-6 col-6" key={p.id}>
                                                                <div className="cotton_fabric_sec">
                                                                    <Link href={"/product/" + p.slug}>
                                                                        <a>
                                                                            <img src={p.featuredImage ? p.featuredImage.thumbnailUrl : "/images/placeholder.png"} alt={p.name} className="img-fluid" />
                                                                        </a>
                                                                    </Link>
                                                                    <h5>{p.name} - {p.sku}</h5>
                                                                    <p><strong><GetPriceHtml product={p} /></strong></p>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div></>
                                    }

                                </div>
                                {
                                    (total > products.length) && <button className="login_bttn go_bttn loadMore" onClick={() => setPage(page + 1)}>Load More Products</button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal md_bg_filter" id="myModal">
                <div className="modal-dialog filter_mrg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4>Filter</h4>
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
                                                            <div key={index} onClick={() => setPrice(pf.start, pf.end)}>
                                                                <input type="radio" defaultValue={pf.start} readOnly={true} checked={router.query.start && parseInt(router.query.start) === pf.start ? true : false} />
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
                                                        <ul>
                                                            {
                                                                filter.filterValues.map(fv => {
                                                                    return (
                                                                        <li className="normalValueContainer selectedOption" onClick={() => applyFilter(fv.id)} key={fv.id}>
                                                                            <label className="customCheckbox">
                                                                                <div className="filterValue">{fv.name}</div>
                                                                                <input type="checkbox" name="filterValues" />
                                                                                <div className="checkboxIndicator"></div>
                                                                            </label>
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
                            {/* <button type="button" className="btn btn-danger clse_bttn" data-dismiss="modal">Apply</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}