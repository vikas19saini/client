import axios from "axios"
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
        let c = data.filter(d => parseInt(e.target.value) === d.id)
        c = c[0]

        storeDispatch({ type: 'SET_CURRENCY', payload: c })
        setSelectedCurrency(c.id)
    }

    return (
        <footer>
            <div className="container-fluid ftt_bg wow fadeInUp">
                <div className="container">
                    <div className="inner_top">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="inner_ftt">
                                    <img src="/images/logo.png" alt="" />
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
                                        <li><a href="#">Contact</a></li>
                                        <li><a href="#">Our Stores</a></li>
                                        <li><a href="#">Careers</a></li>
                                        <li><a href="#">Faq</a></li>
                                    </ul>
                                </div>
                                <div className="ftt_menu">
                                    <ul>
                                        <li><a href="#">Partnership</a></li>
                                        <li><a href="#">Delivery</a></li>
                                        <li><a href="#">Payment</a></li>
                                        <li><a href="#">Sale</a></li>
                                    </ul>
                                </div>
                                <div className="ftt_menu flt_inhrit">
                                    <ul>
                                        <li><a href="#">Facebook</a></li>
                                        <li><a href="#">Instagram</a></li>
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
                                        <p>© 2020 Gandhi Fabric. All Rights Reserved</p>
                                    </div>

                                    <div className="pay_icon">
                                        <img src="/images/paypallogo.png" alt="paypallogo" />
                                        <img src="/images/visalogo.png" alt="visalogo" />
                                        <img src="/images/mastercardlogo.png" alt="mastercard" />
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