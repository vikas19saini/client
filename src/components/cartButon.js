import { Fragment, useEffect, useState } from "react";
import { toast, ToastContainer } from 'react-nextjs-toast';
import { useSelector, useDispatch } from "react-redux";
import { GetPriceHtml, stockStatus } from "../pages/helpers";
import axios from "axios";

export default function CartButton(props) {
    const product = props.product;
    const cartId = useSelector(state => state.config.cartId ? state.config.cartId : null);
    const dispatch = useDispatch();
    const [qty, setQty] = useState();
    const [minQty] = useState(product.minOrderQuantity ? product.minOrderQuantity : 1);
    const [maxQty] = useState(product.maxOrderQuantity ? product.maxOrderQuantity : 200);
    const [step] = useState(/* product.step ? product.step : 0.1 */ 0.1);

    useEffect(() => {
        setQty(props.product.cartProducts ? props.product.cartProducts.quantity : props.product.minOrderQuantity);
    }, [props.product]);

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

    const addProductToCart = async (quantity) => {
        let pqty = quantity;
        if (pqty < minQty) {
            toast.notify(`Invalid quantity, min order quantity is : ${minQty}`, {
                type: "error",
                title: "Error!!!"
            })
        } else if (pqty > maxQty) {
            toast.notify(`Invalid quantity, max order quantity is : ${maxQty}`, {
                type: "error",
                title: "Error!!!"
            })
        } else {
            if (cartId) {
                await axios.patch(`${process.env.API_URL}cart`, { productId: parseInt(product.id), quantity: pqty, cartId: cartId }).then((res) => {
                    toast.notify("Cart updated", {
                        type: "success",
                        title: "Success!!!",
                    });
                    setCartItems(cartId);
                }).catch(e => {
                    console.log(e)
                    toast.notify("Couldn't be Updated", {
                        type: "error",
                        title: "Error!!!",
                    })
                });
            } else {
                await axios.post(`${process.env.API_URL}cart`, { productId: parseInt(product.id), quantity: pqty }).then((res) => {
                    toast.notify(`${props.iscartpage ? "Cart updated" : "Added to cart"}`, {
                        type: "success",
                        title: "Success!!!",
                    });
                    setCartItems(res.data.id);
                    dispatch({ type: "ADD_TO_CART", payload: res.data.id });
                }).catch(e => {
                    toast.notify("Couldn't be added", {
                        type: "error",
                        title: "Error!!!",
                    })
                });
            }
        }

        props.iscartpage && props.setReload(props.reload + 1);
    }

    const setCartItems = (cartId) => {
        !props.iscartpage &&
            axios.get(`${process.env.API_URL}cart/${cartId}`).then((res) => {
                console.log(res.data);
                dispatch({ type: "SET_CART_ITEMS", payload: res.data.products.length });
            });
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
                                            <div className="dlx_main">
                                                <button className="minus" onClick={() => addProductToCart(qty - step)}></button>
                                                <input className="quantity" value={qty} onChange={(e) => setQuantity(e.target.value)} type="number" />
                                                <button className="plus" onClick={() => addProductToCart(qty + step)}></button>
                                            </div>
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
                                    <div className="dlx_main">
                                        <button className="minus" onClick={() => setQuantity(qty - step)}></button>
                                        <input className="quantity" value={qty} onChange={(e) => setQuantity(e.target.value)} type="number" />
                                        <button className="plus" onClick={() => setQuantity(qty + step)}></button>
                                    </div>
                                </div>) : (
                                    <div className="number-input md-number-input">
                                        <h2>Out of Stock</h2>
                                    </div>
                                )
                            }
                            {
                                product.stockStatus !== 0 &&
                                <Fragment>
                                    <button type="button" className="bag_bttn" onClick={() => addProductToCart(qty)}>Add to Bag</button>
                                    <button className="hard_icon" onClick={addToWishlist}><img src="/images/address_icon/heart.svg" alt="heart" /></button>
                                </Fragment>
                            }
                        </Fragment>
                    )
            }
        </Fragment>
    )
}