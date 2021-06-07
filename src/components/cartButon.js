import { Fragment, useEffect, useState } from "react";
import { toast, ToastContainer } from 'react-nextjs-toast';
import { useSelector } from "react-redux";
import { GetPriceHtml, stockStatus, useCart } from "../components/helpers";

export default function CartButton(props) {
    const product = props.product;
    const [qty, setQty] = useState(1);
    const [minQty] = useState(product.minOrderQuantity ? product.minOrderQuantity : 1);
    const [maxQty] = useState(product.maxOrderQuantity ? product.maxOrderQuantity : 200);
    const [step] = useState(/* product.step ? product.step : 0.1 */ 0.1);
    const { addToCart, isAdding, addtoWishList, isAddingToWishlist } = useCart();
    const cartData = useSelector(state => state.config.cartData);

    /* useEffect(() => {
        if (cartData && cartData.products.length > 0) {
            let product = cartData.products.filter((cp) => cp.id === props.product.id);
            setQty(product[0].cartProducts.quantity);
        }
        setQty(props.product.cartProducts ? props.product.cartProducts.quantity : props.product.minOrderQuantity);
    }, [props.product]); */

    useEffect(() => {
        if (cartData && cartData.products && cartData.products.length > 0) {
            let product = cartData.products.filter((cp) => cp.id === props.product.id);
            if (product.length > 0)
                setQty(product[0].cartProducts.quantity);
            else
                setQty(props.product.minOrderQuantity);
        } else {
            setQty(props.product.minOrderQuantity);
        }
    }, [cartData, props.product]);

    const setQuantity = (val) => {
        if (val < minQty) {
            toast.notify(`Invalid quantity, min order quantity is : ${minQty}`, {
                type: "error",
                title: "Error!!!"
            });
            return;
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
            let response = await addToCart(product.id, pqty);
            toast.notify(response.message, {
                type: response.type,
                title: response.title,
            });
        }
    }

    const addToWishlist = async () => {
        let response = await addtoWishList(product.id);
        toast.notify(`${response.message}`, {
            type: response.type,
            title: response.title
        });
    }

    return (
        <Fragment>
            <ToastContainer />
            {
                props.iscartpage ?
                    (
                        <div className="check_qu_1">
                            <div className="number-input md-number-input">
                                {
                                    stockStatus(product) ?
                                        <Fragment>
                                            <p>Quantity</p>
                                            <div className="dlx_main" style={{ display: "flex", alignItems: "center" }}>
                                                {isAdding ? <div className="loader" style={{ margin: "0px" }} /> : <button className="minus" disabled={isAdding} onClick={() => addProductToCart(qty - step)}></button>}
                                                <input className="quantity" value={qty} onChange={(e) => setQuantity(e.target.value)} type="number" />
                                                {isAdding ? <div className="loader" style={{ margin: "0px" }} /> : <button className="plus" disabled={isAdding} onClick={() => addProductToCart(qty + step)}></button>}
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
                    )
                    : (
                        <Fragment>
                            <div className="dis_detail">
                                <h5>{product.name} - {product.sku}</h5>
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
                                <div className="cartButtonProduct">
                                    <button type="button" className="bag_bttn" disabled={isAdding} onClick={() => addProductToCart(qty)}>{
                                        isAdding ? <div className="loader" /> : "Add to Bag"
                                    }</button>
                                    <button className="hard_icon" disabled={isAddingToWishlist} onClick={addToWishlist}>
                                        {
                                            isAddingToWishlist ? <div className="loader" /> : <img src="/images/address_icon/heart.svg" alt="heart" />
                                        }</button>
                                </div>
                            }
                        </Fragment>
                    )
            }
        </Fragment>
    )
}