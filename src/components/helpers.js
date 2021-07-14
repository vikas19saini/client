import axios from "axios";
import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../pages/footer";
import Header from "../pages/header";
import Login from "./login";

export function getProductPrice(product) {
    if (product.salePrice !== 0) {
        return parseFloat(product.salePrice.toFixed(2))
    }

    return parseFloat(product.ragularPrice.toFixed(2))
}

export function formatPrice(price) {
    const storeConfig = useSelector(state => state.config);
    price = parseFloat((price * storeConfig.currency.value).toFixed(2))
    return new Intl.NumberFormat('en-IN', { style: "currency", currency: storeConfig.currency.code }).format(price).replace("THB", "฿").replace("$", "$");
}

export function formatCurrency(val, currency) {
    val = parseFloat((val * currency.value).toFixed(2));
    return new Intl.NumberFormat('en-IN', { style: "currency", currency: currency.code }).format(val).replace("THB", "฿").replace("$", "$");
}

export function GetPriceHtml(props) {
    let quantity = props.quantity ? props.quantity : props.product.minOrderQuantity

    if (props.product.salePrice === 0) {
        formatPrice(1) // dummy call
        return (formatPrice(props.product.ragularPrice * quantity)) + "/Metre"
    }

    let discountPer = 100 * ((props.product.ragularPrice * quantity) - (props.product.salePrice * quantity)) / (props.product.ragularPrice * quantity);

    return (
        <Fragment>
            {formatPrice(props.product.salePrice * quantity)} <del style={{ color: "#bfbfbf" }}>{formatPrice(props.product.ragularPrice * quantity)} </del>/ Metre <i className="disPer">({Math.round(discountPer)}% Off)</i>
        </Fragment>
    )
}

export function stockStatus(product) {
    /* if (product.stockStatus) {
        if (product.manageStock && product.quantity <= 0)
            product.stockStatus = 0
    } */

    return product.currentStockStatus
}

export function formatAddress(address, isOrder = false) {
    let addressArr = []
    if (isOrder) {
        address.address && addressArr.push(address.address)
        address.zone && addressArr.push(address.zone)
        address.country && addressArr.push(address.country)
        address.postcode && addressArr.push(address.postcode)
    } else {
        address.address && addressArr.push(address.address)
        address.zone.name && addressArr.push(address.zone.name)
        address.country.name && addressArr.push(address.country.name)
        address.postcode && addressArr.push(address.postcode)
    }

    return addressArr.join(", ");
}

export const withAuth = Component => {
    const Auth = (props) => {
        const isLoggedIn = useSelector(state => state.config.auth ? state.config.auth : false);

        if (!isLoggedIn) {
            return (
                <Fragment>
                    <Head>
                        <title>Login - Gandhi Fabrics</title>
                    </Head>
                    <Header shadow />
                    <Login />
                    <Footer />
                </Fragment>
            )
        }

        return (<Component {...props} />)
    }

    // Copy getInitial props so it will run as well
    if (Component.getInitialProps) {
        Auth.getInitialProps = Component.getInitialProps;
    }

    return Auth;
}

export function useCart() {
    const [isAdding, setIsAdding] = useState(false);
    const [isRemoving, setIsRemoving] = useState(false);
    const [isApplyingCoupon, setIsApplyingCoupon] = useState(false);
    const [reload, setReload] = useState(1);
    /* const [reload1, setReload1] = useState(1); */
    const cartId = useSelector(state => state.config.cartId ? state.config.cartId : null);
    const dispatch = useDispatch();
    const [isAddingToWishlist, setIsAddingToWishlist] = useState(false);
    const [disableCheckout, setDisableCheckout] = useState(false);

    useEffect(() => {
        cartId && axios.get(`${process.env.API_URL}cart/${cartId}`).then((res) => {
            if (res.data.status === 2) {
                setDisableCheckout(true);
            } else {
                setDisableCheckout(false);
            }

            dispatch({ type: "SET_CART_DATA", payload: res.data });
            dispatch({ type: "SET_CART_ITEMS", payload: res.data.products.length + "" });
        });
    }, [reload, cartId]);

    /* useEffect(() => {
        axios.get(`${process.env.API_URL}wishlist`).then((res) => {
            dispatch({ type: "SET_WISH_LIST", payload: res.data.rows });
        });
    }, [reload1]); */

    const addToCart = async (id, qty) => {
        try {
            setIsAdding(true);

            if (cartId) {
                await axios.patch(`${process.env.API_URL}cart`, { productId: parseInt(id), quantity: qty, cartId: cartId });
            } else {
                let response = await axios.post(`${process.env.API_URL}cart`, { productId: parseInt(id), quantity: qty });
                dispatch({ type: "ADD_TO_CART", payload: response.data.id });
            }

            setIsAdding(false);
            setReload(reload + 1);
            let message = cartId ? "Cart updated" : "Item added";
            return { type: "success", message: message, title: "Success" };
        } catch (err) {
            setIsAdding(false);
            let message = cartId ? "Couldn't be updated" : "Couldn't be added";
            return { type: "error", message: message, title: "Error" };
        }
    }

    const remove = async (id) => {
        try {
            setIsRemoving(true);
            await axios.post(`${process.env.API_URL}cart/remove`, {
                cartId: cartId,
                cartProductId: id
            });
            setIsRemoving(false);
            setReload(reload + 1);
            return { type: "success", message: "Item Removed", title: "Success" };
        } catch (err) {
            setIsRemoving(false);
            setReload(reload + 1);
            return { type: "error", message: "Not Removed", title: "Error" };
        }
    }

    const addtoWishList = async (id) => {
        try {
            setIsAddingToWishlist(true);
            let res = await axios.post(`${process.env.API_URL}wishlist`, { productId: id });
            setIsAddingToWishlist(false);
            /*  setReload1(reload1 + 1) */
            return { type: "success", message: res.data.message, title: "Success" };
        } catch (err) {
            setIsAddingToWishlist(false);
            return { type: "error", message: "Something went wrong!", title: "Error" };
        }
    }

    const applyCoupon = async (code) => {
        try {
            setIsApplyingCoupon(true);
            await axios.post(`${process.env.API_URL}cart/applyCoupon`, {
                cartId: cartId,
                couponCode: code
            });
            setReload(reload + 1);
            setIsApplyingCoupon(false);
            return { type: "success", message: "Coupon Applied", title: "Success" };
        } catch (err) {
            setIsApplyingCoupon(false);
            let message = err.response.data.message ? err.response.data.message : "Invalid Coupon"
            return { type: "error", message: message, title: "Error" };
        }
    }

    const removeCoupon = async () => {
        try {
            setIsApplyingCoupon(true);
            await axios.post(`${process.env.API_URL}cart/removeCoupon`, {
                cartId: cartId,
            });
            setReload(reload + 1);
            setIsApplyingCoupon(false);
            return { type: "success", message: "Coupon Removed", title: "Success" };
        } catch (err) {
            setIsApplyingCoupon(false);
            return { type: "error", message: "Something went wrong", title: "Error" };
        }
    }

    return {
        cartId, isAdding, isRemoving, addToCart, remove, addtoWishList,
        isAddingToWishlist, disableCheckout, applyCoupon, removeCoupon, isApplyingCoupon
    }
}