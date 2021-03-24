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
    const [reload, setReload] = useState(props.reload ? props.reload : 1);
    let page = category.page;
    let limit = category.limit;
    const currency = useSelector(state => state.config.currency);

    useEffect(() => {
        let queryParams = router.query;
        let offset = (page - 1) * limit

        queryParams = { ...queryParams, ...{ limit: limit, offset: offset } }
        queryParams = new URLSearchParams(queryParams)

        axios.get(`${process.env.API_URL}category/products/${category.isSearch ? "search" : category.slug}?${queryParams}`).then((response) => {
            setProducts(response.data.rows)
            setTotal(response.data.count)
            setTotalPages(Math.ceil(response.data.count / limit));
        });
    }, [router])

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
        router.push(`/category/${category.slug}?${queryParams}`)
    }

    const setPage = (pageNo) => {
        let appliedFiltersTemp = router.query;
        appliedFiltersTemp.page = pageNo;

        let queryParams = new URLSearchParams(appliedFiltersTemp)
        router.push(`/category/${category.slug}?${queryParams}`)
        setReload(reload + 1)
    }

    const setPrice = (start, end) => {
        let appliedFiltersTemp = router.query;
        appliedFiltersTemp['start'] = start;
        appliedFiltersTemp['end'] = end;
        delete appliedFiltersTemp.page;
        let queryParams = new URLSearchParams(appliedFiltersTemp);
        router.push(`/category/${category.slug}?${queryParams}`);
    }

    return (
        <section className="inner_listing">
            <div className="inner_sec_tp">
                <div className="container">
                    <div className="row">
                        {
                            products && products.length === 0 ?
                                <div className="emptyCart">
                                    <img src="/images/emptyCart.svg" alt="emptyCart" />
                                    <h1>No product found!</h1>
                                    <Link href="/">
                                        <a>Shop Now!</a>
                                    </Link>
                                </div>
                                :
                                <>
                                    <div className="col-md-4">
                                        <div className="left_fittr">
                                            <h4>Filter</h4>
                                            <div className="inner_boxs">
                                                <div>
                                                    <form>
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

                                                        {
                                                            filters.map(filter => {
                                                                if (filter.filterValues.length > 0) {
                                                                    return (
                                                                        <div className="categories_bx" key={filter.id}>
                                                                            <div className="cate_tx">
                                                                                <h3>{filter.name}</h3>
                                                                            </div>
                                                                            <div className="searchbar search_t_1 collapsed">
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
                                                                    )
                                                                }
                                                            })
                                                        }
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="inner_right_prodct">
                                            <div className="mob_view filter_cs">
                                                <div className="col_6">
                                                    <h6><img src="/images/sort.jpg" alt="" /><span>Sort</span></h6>
                                                </div>
                                                <div className="col_6">
                                                    <h6 data-toggle="modal" data-target="#myModal"><img src="/images/filter.png"
                                                        alt="" /><span>Filter</span></h6>
                                                </div>
                                            </div>
                                            <div className="inner_right_prodct">
                                                <p>{category.name} - {total}</p>
                                                <div className="row custom_col">
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
                                                                        <h5>{p.name}</h5>
                                                                        <p><GetPriceHtml product={p} /></p>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                            <div className="center wow fadeInUp">
                                                {/* <ul className="pagination pagination-md justify-content-end">
                                                    <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                                                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                                                </ul> */}
                                                <ul className="pagination">
                                                    {
                                                        page > 1 &&
                                                        <li>
                                                            <a onClick={() => setPage(page - 1)}>
                                                                <img src="/images/left.png" alt="prev" />
                                                            </a>
                                                        </li>
                                                    }
                                                    {
                                                        page < totalPages &&
                                                        <li>
                                                            <a onClick={() => setPage(page + 1)}>
                                                                <img src="/images/right.png" alt="arrow" />
                                                            </a>
                                                        </li>
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </>
                        }
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}