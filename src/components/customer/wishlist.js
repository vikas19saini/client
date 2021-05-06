import { useEffect, useState } from "react";
import axios from "axios";
import ProductCrousel from "../productCrousel"
import { toast, ToastContainer } from 'react-nextjs-toast';
import OwlCarousel from 'react-owl-carousel2';

export default function Wishlist() {
    const [wishlist, setWislist] = useState([]);
    const [reload, setReload] = useState(1);

    useEffect(() => {
        axios.get(`${process.env.API_URL}wishlist`).then(res => {
            setWislist(res.data.rows.map(wl => wl.product));
        })
    }, [reload])

    const removeFromWishliat = (productId) => {
        axios.post(`${process.env.API_URL}wishlist`, { productId: productId }).then(res => {
            toast.notify(`${res.data.message}`, {
                type: "success",
                title: "Wishlist!"
            })
            setReload(reload + 1)
        }).catch(err => {
            toast.notify(`Something went wrong!`, {
                type: "error",
                title: "Wishlist!"
            })
            setReload(reload + 1)
        })
    }

    return (
        <div className="tabcontent" style={{ display: 'block', left: '0px' }}>
            <ToastContainer />
            <h3>Wishlist</h3>
            <div className="row">
                <div className="col-md-12 wishlistC">
                    <OwlCarousel options={{
                        responsive: {
                            0: {
                                items: 1,
                                nav: false
                            },
                            568: {
                                items: 1,
                            },
                            667: {
                                items: 2,
                            },
                            1170: {
                                items: 3
                            }
                        },                        
                        margin: 10,
                        nav: true,
                        navText: ['<span aria-label="Previous">‹</span>', '<span aria-label="Next">›</span>'],
                    }} className="owl-carousel" id="may_like">
                        <ProductCrousel wishlist products={wishlist} removeFromWishliat={removeFromWishliat} />
                    </OwlCarousel>
                </div>
            </div>
        </div>
    )
}