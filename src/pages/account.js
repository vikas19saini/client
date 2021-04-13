import Head from "next/head"
import { Fragment } from "react"
import { useSelector } from "react-redux"
import Footer from "./footer"
import Header from "./header"
import Login from "../components/login"
import MyAccount from "../components/customer/account"

export default function Account() {
    const auth = useSelector(state => state.config.auth ? state.config.auth : false)

    return (
        <Fragment>
            <Head>
                <title>My Account - Gandhi</title>
            </Head>
            <Header shadow />
            {
                auth ? <MyAccount /> : <Login />
            }
            <Footer />
        </Fragment>
    )
}