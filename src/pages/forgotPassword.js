import Head from "next/head";
import { Fragment, useState } from "react";
import axios from "axios"
import { toast, ToastContainer } from 'react-nextjs-toast'
import { useRouter } from 'next/router'
import Header from "./header";
import Footer from "./footer";

export default function ForgotPassword() {
    const [isLoggingIn, setIsLoggingIn] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [showResetWindow, setShowResetWindow] = useState(false);
    const router = useRouter();
    const [emailAddress, setEmailAddress] = useState("");

    const sendOtp = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setEmailAddress(e.target.email.value);

        axios.post(`${process.env.API_URL}customer/resendOtp`, { email: e.target.email.value }).then((response) => {
            setIsLoading(false);
            setShowResetWindow(true);
            toast.notify("OTP Sent at you email address.", {
                type: "success",
                title: "OTP!"
            });
        }).catch((err) => {
            setIsLoading(false);
        });
    }

    const resetPassword = (e) => {
        e.preventDefault();
        setIsLoading(true);

        axios.post(`${process.env.API_URL}customer/resetPassword`, {
            email: emailAddress,
            password: e.target.password.value,
            otp: e.target.otp.value,
        }).then(() => {
            router.push("/account");
            toast.notify("Password Successfully Changed!!", {
                type: "success",
                title: "Password Reset!"
            });
        }).catch((err) => {
            setIsLoading(false);
            toast.notify("Invalid email or OTP!!", {
                type: "error",
                title: "Password Reset!"
            });
        });
    }

    return (
        <Fragment>
            <Head>
                <title>Forgot Password - Gandhi</title>
            </Head>
            <Header />
            <ToastContainer />
            <div className="container-fluid ld_bg">
                <div className="row">
                    {
                        showResetWindow ?
                            (<div className="inner_main_ld">
                                <h4>Reset Password</h4>
                                <form className="loginForm" onSubmit={resetPassword}>
                                    <div className="form_login">
                                        <div>
                                            <input type="text" name="otp" defaultValue="" placeholder="Enter OTP" required={true} />
                                        </div>
                                    </div>
                                    <div className="form_login">
                                        <input type="password" name="password" placeholder="New Password" required={true} />
                                    </div>
                                    <button type="submit" className="login_bttn go_bttn" disabled={isLoading}>
                                        {isLoading ? (<div className="loader"></div>) : "RESET"}
                                    </button>
                                    <p className="mass_tx" style={{ textAlign: "center" }}>
                                        <button type="button" className="textBtn" onClick={() => setShowResetWindow(false)}>Go Back</button>
                                        <button type="button" className="textBtn" onClick={() => router.push("/account")}>Don't have an account? Sign up</button>
                                    </p>
                                </form>
                            </div>)
                            :
                            (<div className="inner_main_ld">
                                <h4>Forgot Password</h4>
                                <form className="loginForm" onSubmit={sendOtp}>
                                    <div className="form_login">
                                        <input type="email" name="email" placeholder="Email Address" required={true} />
                                    </div>
                                    <button type="submit" className="login_bttn go_bttn" disabled={isLoading}>
                                        {isLoading ? (<div className="loader"></div>) : "SEND OTP"}
                                    </button>
                                    <p className="mass_tx" style={{ textAlign: "center" }}>
                                        <button type="button" className="textBtn" onClick={() => router.push("/account")}>Don't have an account? Sign up</button>
                                    </p>
                                </form>
                            </div>)
                    }

                </div>
            </div>
            <Footer />
        </Fragment>
    )
}