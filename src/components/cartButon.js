import { Fragment, useEffect, useState } from "react";
import { toast, ToastContainer } from 'react-nextjs-toast';
import { useSelector, useDispatch } from "react-redux";
import { GetPriceHtml, stockStatus } from "../pages/helpers";
import axios from "axios";

export default function CartButton(props) {
    const product = props.product
    const cart = useSelector(state => state.config.cart ? state.config.cart : []);
    const auth = useSelector(state => state.config.auth ? state.config.auth : false);
    const dispatch = useDispatch()
    const [qty, setQty] = useState(props.product.cartQuantity ? props.product.cartQuantity : props.product.minOrderQuantity)
    const [minQty] = useState(product.minOrderQuantity ? product.minOrderQuantity : 1)
    const [maxQty] = useState(product.maxOrderQuantity ? product.maxOrderQuantity : 200)
    const [step] = useState(product.step ? product.step : 1)

    const setQuantity = (val) => {

        if (val < minQty) {
            toast.notify(`Invalid quantity, min order quantity is : ${minQty}`, {
                type: "error",
                title: "Error!!!"
            })

            return
        }

        if (val > maxQty) {
            toast.notify(`Invalid quantity, max order quantity is : ${maxQty}`, {
                type: "error",
                title: "Error!!!"
            })

            return
        }

        val = parseFloat(val.toFixed(2))
        setQty(val)
    }

    useEffect(() => {
        if (props.iscartpage) {
            addProductToCart()
        }
    }, [qty])

    const addProductToCart = async () => {
        if (qty < minQty) {
            toast.notify(`Invalid quantity, min order quantity is : ${minQty}`, {
                type: "error",
                title: "Error!!!"
            })
        } else if (qty > maxQty) {
            toast.notify(`Invalid quantity, max order quantity is : ${maxQty}`, {
                type: "error",
                title: "Error!!!"
            })
        } else {
            let item = { id: product.id, quantity: qty, slug: product.slug }
            let cartData = [...cart]

            let productsInCartIds = cartData.map(cid => cid.id)
            if (productsInCartIds.includes(item.id)) {
                let index = productsInCartIds.indexOf(item.id)
                cartData[index].quantity = item.quantity
            } else {
                cartData.push(item)
            }

            dispatch({ type: "ADD_TO_CART", payload: cartData })

            /* Saving cart to databas if user is logged in */
            if(auth){
                await axios.post(`${process.env.API_URL}cart/add`, {productId: parseInt(product.id), quantity: item.quantity});
            }

            toast.notify(`${props.iscartpage ? "Cart updated" : "Added to cart"}`, {
                type: "success",
                title: "Success!!!"
            })

            props.iscartpage && props.setReload(props.reload + 1)
        }
    }

    const addToWishlist = () => {
        axios.post(`${process.env.API_URL}wishlist`, { productId: product.id }).then(res => {
            toast.notify(`${res.data.message}`, {
                type: "success",
                title: "Wishlist!"
            })
        }).catch(err => {
            toast.notify(`Something went wrong!`, {
                type: "error",
                title: "Wishlist!"
            })
        })
    }

    return (
        <Fragment>
            <ToastContainer />
            {
                props.iscartpage ?
                    (<Fragment>
                        <div className="check_qu_1">
                            <div className="number-input md-number-input">
                                {
                                    stockStatus(product) ?
                                        <Fragment>
                                            <p>Quantity</p>
                                            <button className="minus" onClick={() => setQuantity(qty - step)}></button>
                                            <input className="quantity" value={qty} onChange={(e) => setQuantity(e.target.value)} type="number" />
                                            <button className="plus" onClick={() => setQuantity(qty + step)}></button>
                                        </Fragment>
                                        :
                                        <Fragment>
                                            <div className="number-input md-number-input">
                                                <h4>Out of Stock</h4>
                                            </div>
                                        </Fragment>
                                }
                            </div>
                        </div>
                    </Fragment>)
                    : (
                        <Fragment>
                            <div className="dis_detail">
                                <h5>{product.name}</h5>
                                <h2><GetPriceHtml product={product} quantity={qty} /></h2>
                            </div>
                            {
                                stockStatus(product) ? (<div className="number-input md-number-input" key={product.id}>
                                    <p>Quantity</p>
                                    <button className="minus" onClick={() => setQuantity(qty - step)}></button>
                                    <input className="quantity" value={qty} onChange={(e) => setQuantity(e.target.value)} type="number" />
                                    <button className="plus" onClick={() => setQuantity(qty + step)}></button>
                                </div>) : (
                                        <div className="number-input md-number-input">
                                            <h2>Out of Stock</h2>
                                        </div>
                                    )
                            }
                            {
                                product.stockStatus !== 0 &&
                                <Fragment>
                                    <button type="button" className="bag_bttn" onClick={addProductToCart}>Add to Bag</button>
                                    <button className="hard_icon" onClick={addToWishlist}><i className="fa fa-heart" aria-hidden="true"></i></button>
                                </Fragment>
                            }
                        </Fragment>
                    )
            }
        </Fragment>
    )
}