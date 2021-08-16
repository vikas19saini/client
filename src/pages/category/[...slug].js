import Header from "../header"
import Footer from "../footer"
import { Fragment } from "react"
import { wrapper } from "../../redux/store"
import axios from "axios"
import Head from "next/head"
import SubCategory from "../../components/subCategory"
import Products from "../../components/products"

export default function Category(category) {
    return (
        <Fragment>
            <Head>
                <title>{category.metaTitle ? category.metaTitle : category.name}</title>
                <meta name="description" content={category.metaDescription ? category.metaDescription : category.description} />
            </Head>
            <Header shadow />
            {
                category.layout === "subcategory" ? (<SubCategory category={category} />) : (<Products category={category} />)
            }
            <Footer />
        </Fragment >
    );
}

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
    const limit = 30;
    const page = parseInt(context.query.page || 1);
    try {
        let contextParams = context.params.slug;
        let category = null;

        if (contextParams && contextParams.length > 0) {
            category = await axios.get(`${process.env.API_URL}category/${contextParams[0]}`);
            category = category.data;
            category.layout = "subcategory";
        }

        if (contextParams.length === 2) {
            let queryParams = context.query;
            let offset = (page - 1) * limit

            queryParams = { ...queryParams, ...{ limit: limit, offset: offset } }
            queryParams = new URLSearchParams(queryParams)
            let responseData = await axios.get(`${process.env.API_URL}category/products/${contextParams[1]}?${queryParams}`);

            let data = responseData.data.category;
            data.products = responseData.data.rows;
            data.totalCount = responseData.data.count;
            data.limit = limit;
            data.page = page;
            data.totalPages = Math.ceil(responseData.data.count / limit);
            data.layout = "product";
            data.parentCat = category;

            return {
                props: data,
            }
        }

        return {
            props: category,
        }

    } catch (error) {
        return {
            notFound: true,
        }
    }
})