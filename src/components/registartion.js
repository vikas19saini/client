import { Fragment, useState } from "react"
import Head from "next/head"
import Link from "next/link"
import Header from "../header"
import Footer from "../footer"
import { toast, ToastContainer } from 'react-nextjs-toast'
import axios from "axios"
import { useRouter } from 'next/router'

export default function Registartion() {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const [otpSent, setOtpSent] = useState(false)
    const [verifyingOtp, setVerifyingOtp] = useState(false)
    const [email, setEmail] = useState(null)

    const onSubmit = (e) => {
        e.preventDefault()
        let name = e.target.name.value
        let email = e.target.email.value
        let password = e.target.password.value
        let confirmPassword = e.target.confirmPassword.value
        let phone = e.target.phone.value

        setEmail(email)

        if (confirmPassword !== password) {
            toast.notify("Password and confirm password does not match!", {
                type: "error",
                title: "Error!"
            })
            return false
        }

        setIsLoading(true)
        axios.post(`${process.env.API_URL}customer/registartion`, {
            name: name,
            email: email,
            password: password,
            phone: phone
        }).then((response) => {
            toast.notify("An OTP sent at your email address!", {
                type: "success",
                title: "OTP Sent!"
            })
            setOtpSent(true)
        }).catch(err => {
            let message = err.response.data.errors ? err.response.data.errors[0].message : "Oops! something went wrong!"
            toast.notify(message, {
                type: "error",
                title: "OTP Error!"
            })

            setIsLoading(false)
        })

    }

    const verifyOtp = (e) => {
        e.preventDefault()

        setVerifyingOtp(true)
        axios.post(`${process.env.API_URL}customer/verify`, { otp: e.target.otp.value, email: email }).then(res => {
            setVerifyingOtp(false)
            toast.notify("OTP Verified", {
                type: "success",
                title: "OTP!"
            })
            router.push("/customer/login")
        }).catch(err => {
            toast.notify(err.response.data.message, {
                type: "error",
                title: "OTP Error!"
            })
            setVerifyingOtp(false)
        })
    }

    return (
        <Fragment>
            <Head>
                <title>Registartion - Gandhi</title>
            </Head>
            <Header />
            <ToastContainer />
            <div className="container-fluid ld_bg">
                <div className="row">
                    <div className="inner_main_ld">
                        <img src="/images/logo.png" alt="" />
                        <h4>Personalize your style from the fabric</h4>
                        <h6>Welcome to Gandhi Fabric</h6>
                        {
                            !otpSent ? (
                                <form onSubmit={onSubmit} >
                                    <div className="form_login">
                                        <input type="text" name="name" placeholder="Name" required />
                                        <input type="text" name="phone" placeholder="Mobile number" required />
                                        <input name="email" placeholder="Email address" type="email" required />
                                        <input type="password" name="password" placeholder="Password" required />
                                        <input type="password" name="confirmPassword" placeholder="Confirm assword" required />
                                    </div>
                                    <button type="submit" className="login_bttn go_bttn" disabled={isLoading}>{
                                        isLoading ? (<div className="loader"></div>) : "SIGNUP"
                                    }</button>
                                    <p className="mass_tx">
                                        <Link href="/customer/login">
                                            <a>Already have an account? Login</a>
                                        </Link>
                                    </p>
                                </form>
                            ) : (
                                    <form onSubmit={verifyOtp}>
                                        <div className="form_login">
                                            <div>
                                                <input name="otp" aria-label="Otp" placeholder="OTP" type="text" required />
                                            </div>
                                        </div>
                                        <button type="submit" className="login_bttn go_bttn" disabled={verifyingOtp}>{
                                            verifyingOtp ? (<div className="loader"></div>) : "VERIFY"
                                        }</button>
                                        <p className="mass_tx">
                                            <Link href="/customer/login">
                                                <a>Already have an account? Login</a>
                                            </Link>
                                        </p>
                                    </form>
                                )
                        }

                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}