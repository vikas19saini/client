import Header from "../pages/header";
import Footer from "../pages/footer";
import { Fragment, useEffect, useState } from "react";
import { wrapper } from "../redux/store";
import axios from "axios";
import Head from "next/head";
import Products from "../components/products";

export default function Search(category) {
    return (
        <Fragment>
            <Head>
                <title>{category.metaTitle ? category.metaTitle : category.name}</title>
                <meta name="description" content={category.metaDescription ? category.metaDescription : category.description} />
            </Head>
            <Header shadow />
            <Products category={category} />
            <Footer />
        </Fragment >
    );
}

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
    const limit = 30;
    const page = parseInt(context.query.page || 1);

    try {
        let queryParams = context.query;
        let offset = (page - 1) * limit

        queryParams = { ...queryParams, ...{ limit: limit, offset: offset } }
        queryParams = new URLSearchParams(queryParams)
        let products = await axios.get(`${process.env.API_URL}category/products/search?${queryParams}`)
        
        let category = {
            name: context.query.query,
            description: context.query.query
        }

        category.products = products.data.rows;
        category.totalCount = products.data.count;
        category.limit = limit;
        category.page = page;
        category.totalPages = Math.ceil(products.data.count / limit);
        category.isSearch = true;

        return {
            props: category
        }
    } catch (error) {
        return {
            notFound: true,
        }
    }
})