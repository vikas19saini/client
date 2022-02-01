import { Fragment, useEffect, useState } from "react";
import { toast, ToastContainer } from 'react-nextjs-toast';
import { useSelector } from "react-redux";
import { GetPriceHtml, stockStatus, useCart } from "../components/helpers";
import useTranslation from "next-translate/useTranslation";

export default function CartButton(props) {
    const [product, setProduct] = useState(null);
    const [qty, setQty] = useState(1);
    const [minQty, setMinOrderQty] = useState(1);
    const [maxQty, setMaxOrderQty] = useState(50);
    const [step, setStep] = useState(0.1);
    const { addToCart, isAdding, addtoWishList, isAddingToWishlist } = useCart();
    const cartData = useSelector(state => state.config.cartData);
    const [cartProductId, setCartProductId] = useState(null);

    const { t } = useTranslation()

    useEffect(() => {
        setProduct(props.product);
    }, [props.product]);

    useEffect(() => {
        if (product) {
            setMinOrderQty(product.minOrderQuantity ? product.minOrderQuantity : 1);
            setQty(product.minOrderQuantity ? product.minOrderQuantity : 1);
            setStep(product.step ? product.step : 0.1);
            if (product.manageStock && product.cartProducts && product.cartProducts.status === 1) {
                setMaxOrderQty(product.quantity + product.cartProducts.quantity);
            } else {
                setMaxOrderQty(product.manageStock ? product.quantity : 50);
            }

        }
    }, [product]);

    useEffect(() => {
        if (product) {
            if (cartData && cartData.products && cartData.products.length > 0) {
                let cartProduct = cartData.products.filter((cp) => cp.id === product.id);
                if (cartProduct.length > 0) {
                    setCartProductId(cartProduct[0].cartProducts.id);
                    setQty(cartProduct[0].cartProducts.quantity);
                    if (cartProduct[0].cartProducts.status === 1) {
                        setMaxOrderQty(product.quantity + cartProduct[0].cartProducts.quantity);
                    }
                } else {
                    setQty(product.minOrderQuantity);
                    setCartProductId(null);
                }
            } else {
                setQty(product.minOrderQuantity);
                setCartProductId(null);
            }
        }
    }, [cartData, product]);

    const setQuantity = (val) => {
        val = parseFloat(val.toFixed(2));
        if (val < minQty) {
            val = minQty;
        } else if (val > maxQty) {
            val = maxQty;
        }

        setQty(val)
    }

    const addProductToCart = async (quantity) => {
        let pqty = quantity;
        if (pqty < minQty) {
            pqty = minQty;
        } else if (pqty > maxQty) {
            pqty = maxQty;
        }

        let response = await addToCart(product.id, pqty, cartProductId);
        toast.notify(response.message, {
            type: response.type,
            title: response.title,
        });
    }

    const addToWishlist = async () => {
        let response = await addtoWishList(product.id);
        toast.notify(`${response.message}`, {
            type: response.type,
            title: response.title
        });
    }

    if (product) {
        return (
            <Fragment>
                <ToastContainer />
                {
                    props.iscartpage ?
                        (
                            <CartButtonOfCart product={product} isAdding={isAdding} iscartpage={props.iscartpage} addProductToCart={addProductToCart} qty={qty} step={step} />
                        )
                        : (
                            <Fragment>
                                <div className="dis_detail">
                                    <h5>{product.name} - {product.sku}</h5>
                                    <h2><GetPriceHtml product={product} quantity={qty} /></h2>
                                </div>
                                {
                                    stockStatus(product) ? (<div className="number-input md-number-input" key={product.id}>
                                        <p>{t("product:quantity")}</p>
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
                                            isAdding ? <div className="loader" /> : t("product:add_to_cart")
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

    return ("");
}

function CartButtonOfCart({
    product: product,
    iscartpage: iscartpage,
    isAdding: isAdding,
    addProductToCart: addProductToCart,
    qty: qty,
    step: step
}) {
    let productStockStatus = stockStatus(product, iscartpage);

    if (productStockStatus.status === 1) {
        return (
            <div className="check_qu_1">
                <div className="number-input md-number-input">
                    <div className="dlx_main" style={{ display: "flex", alignItems: "center" }}>
                        {isAdding ? <div className="loader" style={{ margin: "0px" }} /> : <button className="minus" disabled={isAdding} onClick={() => addProductToCart(qty - step)}></button>}
                        <input className="quantity" value={qty} onChange={(e) => setQuantity(e.target.value)} type="number" />
                        {isAdding ? <div className="loader" style={{ margin: "0px" }} /> : <button className="plus" disabled={isAdding} onClick={() => addProductToCart(qty + step)}></button>}
                    </div>
                </div>
            </div>
        );
    } else if (productStockStatus.status === 2) {
        return (
            <div className="check_qu_1">
                <div className="number-input md-number-input">
                    <div className="number-input md-number-input"><h4>{productStockStatus.message}</h4></div>
                </div>
            </div>
        );
    } else if (productStockStatus.status === 3) {
        return (
            <div className="check_qu_1">
                <div className="number-input md-number-input">
                    <div className="dlx_main" style={{ display: "flex", alignItems: "center" }}>
                        {isAdding ? <div className="loader" style={{ margin: "0px" }} /> : <button className="minus" disabled={isAdding} onClick={() => addProductToCart(qty - step)}></button>}
                        <input className="quantity" value={qty} onChange={(e) => setQuantity(e.target.value)} type="number" />
                        {isAdding ? <div className="loader" style={{ margin: "0px" }} /> : <button className="plus" disabled={isAdding} onClick={() => addProductToCart(qty + step)}></button>}
                    </div>
                    <div className="number-input md-number-input"><p className="lowstock">{productStockStatus.message}</p></div>
                </div>
            </div>
        );
    }
}