import Head from "next/head";
import Link from "next/link";
import { Fragment, useState } from "react";
import axios from "axios"
import { toast, ToastContainer } from 'react-nextjs-toast'
import { useDispatch, useSelector } from "react-redux"
import { useRouter } from 'next/router'

export default function Login() {
    const dispatch = useDispatch()
    const [isLoggingIn, setIsLoggingIn] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [otpSent, setOtpSent] = useState(false)
    const [verifyingOtp, setVerifyingOtp] = useState(false)
    const [email, setEmail] = useState(null)
    const [showLoginPage, setShowLoginPage] = useState(true)
    const router = useRouter()
    const redirect = router.query.redirect || null;
    let cart = useSelector(state => state.config.cart ? state.config.cart : []);

    const login = (e) => {
        e.preventDefault()
        setIsLoggingIn(true)

        axios.post(`${process.env.API_URL}user/login`, { email: e.target.email.value, password: e.target.password.value }).then(res => {
            setIsLoggingIn(false)
            dispatch({ type: "USER_LOGIN", payload: res.data });
            axios.post(`${process.env.API_URL}cart/sync`, { cartItems: cart }).then((response) => {
                console.log(response.data);
                dispatch({ type: "ADD_TO_CART", payload: response.data });
            })
            redirect && router.push(redirect)
        }).catch(err => {
            setIsLoggingIn(false)
            toast.notify(err.response.data.message, {
                type: "error",
                title: "OTP Error!"
            })
        })
    }

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
            toast.notify("OTP Verified! Please login", {
                type: "success",
                title: "OTP!"
            })
            setShowLoginPage(true)
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
                <title>Login - Gandhi</title>
            </Head>
            <ToastContainer />
            {
                showLoginPage ?
                    (
                        <div className="container-fluid ld_bg">
                            <div className="row">
                                <div className="inner_main_ld">
                                    <img src="/images/logo.png" alt="" />
                                    <h4>Personalize your style from the fabric</h4>
                                    <h6>Welcome to Gandhi Fabric</h6>
                                    <form onSubmit={login}>
                                        <div className="form_login">
                                            <input type="email" name="email" placeholder="Email Address" required={true} />
                                            <input type="password" name="password" placeholder="Password" required={true} />
                                            {/* <div className="reset_pass"><a href="#">Forgot Password?</a></div> */}
                                        </div>
                                        <button type="submit" className="login_bttn go_bttn" disabled={isLoggingIn}>
                                            {isLoggingIn ? (<div className="loader"></div>) : "LOGIN"}
                                        </button>
                                        <p className="mass_tx">
                                            <a href="#registartion" onClick={() => setShowLoginPage(false)}>Doesn’t have an account? Signup</a>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    ) : (
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
                                                    <a href="#login" onClick={() => setShowLoginPage(true)}>Already have an account? Login</a>
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
                                                        <a href="#login" onClick={() => setShowLoginPage(true)}>Already have an account? Login</a>
                                                    </p>
                                                </form>
                                            )
                                    }

                                </div>
                            </div>
                        </div>
                    )
            }

        </Fragment>
    )
}