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
    try {
        let category = await axios.get(`${process.env.API_URL}category/${context.params.slug}`)
        category = category.data;

        return {
            props: category
        }
    } catch (error) {
        return {
            notFound: true,
        }
    }
})