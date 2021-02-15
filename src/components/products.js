import axios from "axios"
import { useEffect, useState } from "react"
import Link from "next/link"
import { GetPriceHtml } from "../pages/helpers"
import { useRouter } from 'next/router'

export default function Products(props) {
    const router = useRouter()
    let category = props.category
    const [products, setProducts] = useState([])
    const [filters, setFilters] = useState([])
    const [total, setTotal] = useState()
    const [totalPages, setTotalPages] = useState(0)
    const [openFilter, setOpenFilter] = useState(-1)
    const params = router.query
    delete params.slug
    const limit = 10
    const [reload, setReload] = useState(1);
    let page = params.page ? parseInt(params.page) : 1

    useEffect(() => {
        window.scroll(0, 0)
        let queryParams = params;
        let offset = (page - 1) * limit

        queryParams = { ...queryParams, ...{ limit: limit, offset: offset } }
        queryParams = new URLSearchParams(queryParams)

        axios.get(`${process.env.API_URL}category/products/${category.slug}?${queryParams}`).then((response) => {
            console.log(response)
            setProducts(response.data.rows)
            setTotal(response.data.count)
            setTotalPages(Math.ceil(response.data.count / limit))

        })
    }, [reload])

    useEffect(() => {
        axios.get(`${process.env.API_URL}static/filters`).then((res) => {
            setFilters(res.data)
        })
    }, [])

    const applyFilter = (filter, filterValue) => {
        let key = filter.replace(/ /g, '').toLowerCase()
        let appliedFiltersTemp = params
        appliedFiltersTemp[key] = filterValue

        let queryParams = new URLSearchParams(appliedFiltersTemp)
        router.push(`/category/${category.slug}?${queryParams}`)
        setReload(reload + 1)
    }

    const setPage = (pageNo) => {
        let appliedFiltersTemp = params
        appliedFiltersTemp.page = pageNo

        let queryParams = new URLSearchParams(appliedFiltersTemp)
        router.push(`/category/${category.slug}?${queryParams}`)
        setReload(reload + 1)
    }

    return (
        <section className="inner_listing">
            <div className="inner_sec_tp">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="left_fittr wow fadeInUp">
                                <h4>Filter</h4>
                                <div className="inner_boxs">
                                    <div>
                                        <form action="#">
                                            <div className="price_bx">
                                                <label className="check_cus">Rs. 334 to Rs. 13447 <span>(37412)</span>
                                                    <input type="checkbox" checked="checked" />
                                                    <span className="checkmark"></span>
                                                </label>
                                                <label className="check_cus">Rs. 334 to Rs. 13447 <span>(37412)</span>
                                                    <input type="checkbox" id="check7" />
                                                    <span className="checkmark"></span>
                                                </label>
                                                <label className="check_cus">Rs. 334 to Rs. 13447 <span>(37412)</span>
                                                    <input type="checkbox" id="check8" />
                                                    <span className="checkmark"></span>
                                                </label>
                                                <label className="check_cus">Rs. 334 to Rs. 13447 <span>(37412)</span>
                                                    <input type="checkbox" />
                                                    <span className="checkmark"></span>
                                                </label>
                                                <label className="check_cus">Rs. 334 to Rs. 13447 <span>(37412)</span>
                                                    <input type="checkbox" id="check9" />
                                                    <span className="checkmark"></span>
                                                </label>
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
                                                                                <label className="check_cus" key={fv.id}>{fv.name}
                                                                                    <input type="checkbox" value={fv.id} checked="checked" />
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
                            <div className="inner_right_prodct wow fadeInUp">
                                <div className="mob_view filter_cs">
                                    <div className="col_6">
                                        <h6><img src="/images/sort.jpg" alt="" /><span>Sort</span></h6>
                                    </div>
                                    <div className="col_6">
                                        <h6 data-toggle="modal" data-target="#myModal"><img src="/images/filter.png"
                                            alt="" /><span>Filter</span></h6>
                                    </div>
                                </div>
                                <div className="inner_right_prodct wow fadeInUp">
                                    <p>{category.name} - {total}</p>
                                    <div className="row custom_col">
                                        {
                                            products.map(p => {
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
                                    <ul className="pagination pagination-md justify-content-end">
                                        <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        <li className="page-item"><a className="page-link" href="#">Next</a></li>
                                    </ul>
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
                                    {
                                        filters.map(filter => {
                                            return (
                                                <div className={filter.id === openFilter ? "tab-pane fade show active" : "tab-pane fade show"} key={filter.id}>
                                                    <div className="main_tag">
                                                        <ul>
                                                            {
                                                                filter.filterValues.map(fv => {
                                                                    return (
                                                                        <li className="normalValueContainer selectedOption" key={fv.id}>
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
                            <button type="button" className="btn btn-danger frst clse_bttn" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-danger clse_bttn" data-dismiss="modal">Apply</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}