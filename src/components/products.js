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
                                    {
                                        filters.map(filter => {
                                            if (filter.filterValues.length > 0) {
                                                return (
                                                    <select className="option_bx" key={filter.id} onChange={(e) => applyFilter(filter.name, e.target.value)}>
                                                        <option disabled>Select {filter.name}</option>
                                                        {
                                                            filter.filterValues.map(fv => {
                                                                return (<option value={fv.id} key={fv.id}>{fv.name}</option>)
                                                            })
                                                        }
                                                    </select>
                                                )
                                            }
                                        })
                                    }

                                    <div className="price_sec">
                                        <p>Price</p>

                                    </div>
                                    <button type="button" className="reset_button">Reset Filter</button>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="inner_right_prodct wow fadeInUp">
                                <p>{category.name} - {total}</p>
                                <h6 className="mob_view"><span className="down_1">Filter</span></h6>

                                <div className="row">
                                    {
                                        products.map(p => {
                                            return (
                                                <div className="col-md-6" key={p.id}>
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
        </section >
    )
}