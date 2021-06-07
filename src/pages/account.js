import Head from "next/head"
import { Fragment } from "react"
import { useSelector } from "react-redux"
import Footer from "./footer"
import Header from "./header"
import MyAccount from "../components/customer/account"
import { withAuth } from "../components/helpers"

export function Account() {
    
    return (
        <Fragment>
            <Head>
                <title>My Account - Gandhi</title>
            </Head>
            <Header shadow />
            <MyAccount />
            <Footer />
        </Fragment>
    )
}

export default withAuth(Account);