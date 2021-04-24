import axios from "axios"
import Link from "next/link"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import useSwr from "swr"

export default function Footer() {
    const storeDispatch = useDispatch()
    const storeConfig = useSelector(state => state.config);

    const [selectedCurrency, setSelectedCurrency] = useState(storeConfig.currency.id)

    const fetcher = async (url) => await axios.get(url).then(res => res.data)
    const { data } = useSwr(`${process.env.API_URL}static/config`, fetcher, { revalidateOnFocus: false })

    const setCurrency = (e) => {
        let c = data.filter(d => parseInt(e.target.value) === d.id);
        c = c[0];

        storeDispatch({ type: 'SET_CURRENCY', payload: c });
        setSelectedCurrency(c.id);
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <footer>
            <div className="container-fluid ftt_bg">
                <div className="container">
                    <div className="inner_top">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="inner_ftt">
                                    <a href="/">
                                        <img src="/images/logo.png" alt="gandhi logo" /></a>
                                    <p>The Finest Fabrics from all over the world</p>

                                    {
                                        data &&
                                        <select id="luggage" defaultValue={selectedCurrency} onChange={setCurrency}>
                                            {
                                                data.map(d => {
                                                    return (<option value={d.id} key={d.id}>{d.code}</option>)
                                                })
                                            }
                                        </select>
                                    }
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="ftt_menu">
                                    <ul>
                                        <li>
                                            <Link href="/contact">
                                                <a>Contact</a>
                                            </Link>
                                        </li>
                                        <li><Link href="/about"><a>About Us</a></Link></li>
                                        <li><Link href="/faq"><a>Faq</a></Link></li>
                                    </ul>
                                </div>
                                <div className="ftt_menu">
                                    <ul>
                                        <li><Link href="/toc"><a>Terms and conditions</a></Link></li>
                                        <li><Link href="/privacy"><a>Privacy Policy</a></Link></li>
                                    </ul>
                                </div>
                                <div className="ftt_menu flt_inhrit social_icon">
                                    <ul>
                                        <li><a href="https://www.facebook.com/gandhifabrics.th" target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                        <li><a href="https://www.instagram.com/gandhi_fabrics" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ftt_bttm">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="main_flx_f">
                                    <div className="copy_txt desk_view">
                                        <p>© {(new Date).getFullYear()} Gandhi Fabric. All Rights Reserved</p>
                                    </div>
                                    <div className="pay_icon">
                                        <a href="#logoPay"><img src="/images/paypallogo.svg" /></a>
                                        <a href="#logoPay"><img src="/images/visalogo.svg" /></a>
                                    </div>
                                    <div className="copy_txt mob_view">
                                        <p>© 2020 Gandhi Fabric. All Rights Reserved</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}