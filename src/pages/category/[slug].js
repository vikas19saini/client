import Header from "../header"
import Footer from "../footer"
import { Fragment, useEffect, useState } from "react"
import { wrapper } from "../../redux/store"
import axios from "axios"
import Head from "next/head"
import SubCategory from "../../components/subCategory"
import Products from "../../components/products"

export default function Category(category) {
    const [haveSubCategories, setHaveSubCategories] = useState(true)

    useEffect(() => {
        setHaveSubCategories(category.descendents.length > 0 ? true : false)
    }, [category])

    return (
        <Fragment>
            <Head>
                <title>{category.metaTitle ? category.metaTitle : category.name}</title>
                <meta name="description" content={category.metaDescription ? category.metaDescription : category.description} />
            </Head>
            <Header shadow />
            {
                haveSubCategories ? (<SubCategory category={category} />) : (<Products category={category} />)
            }
            <Footer />
        </Fragment >
    );
}

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
    const limit = 30;
    const page = parseInt(context.query.page || 1);
    try {
        let category = await axios.get(`${process.env.API_URL}category/${context.params.slug}`)
        category = category.data;

        if (category.descendents.length === 0) {
            let queryParams = context.query;
            let offset = (page - 1) * limit

            queryParams = { ...queryParams, ...{ limit: limit, offset: offset } }
            queryParams = new URLSearchParams(queryParams)
            let products = await axios.get(`${process.env.API_URL}category/products/${category.slug}?${queryParams}`);
            category.products = products.data.rows;
            category.totalCount = products.data.count;
            category.limit = limit;
            category.page = page;
            category.totalPages = Math.ceil(products.data.count / limit);
        }

        return {
            props: category
        }
    } catch (error) {
        return {
            notFound: true,
        }
    }
})