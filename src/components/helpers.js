import axios from "axios";
import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../pages/footer";
import Header from "../pages/header";
import Login from "./login";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";

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
    const { t } = useTranslation()

    if (props.product.salePrice === 0) {
        formatPrice(1) // dummy call
        return (formatPrice(props.product.ragularPrice * quantity)) + "/" + t("common:meter")
    }

    let discountPer = 100 * ((props.product.ragularPrice * quantity) - (props.product.salePrice * quantity)) / (props.product.ragularPrice * quantity);

    return (
        <Fragment>
            {formatPrice(props.product.salePrice * quantity)} <del style={{ color: "#bfbfbf" }}>{formatPrice(props.product.ragularPrice * quantity)} </del>/ {t("common:meter")} <i className="disPer">({Math.round(discountPer)}% {t("common:off")})</i>
        </Fragment>
    )
}

export function stockStatus(product, isCart = false) {
    if (isCart) {

        if (product.cartProducts.status === 1) {
            return { status: 1 };
        }

        if (!product.currentStockStatus) {
            return { status: 2, message: "Out of Stock" };
        }

        if (product.cartProducts.status === 2) {
            return { status: 3, message: `Only ${product.quantity} In Stock` };
        }

        return { status: 1 };
    }

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
        address.zone && addressArr.push(address.zone.name)
        address.country && addressArr.push(address.country.name)
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
    const cartId = useSelector(state => state.config.cartId ? state.config.cartId : null);
    const dispatch = useDispatch();
    const [isAddingToWishlist, setIsAddingToWishlist] = useState(false);
    const [disableCheckout, setDisableCheckout] = useState(false);
    const [customerCartData, setCustomerCartData] = useState(null);
    const { locale } = useRouter()

    const headers = { headers: { lang: locale === "en" ? "" : locale } }

    useEffect(() => {
        cartId && axios.get(`${process.env.API_URL}cart/${cartId}`, headers).then((res) => {
            let disableCheckout = false;
            for (let cp of res.data.products) {
                if (cp.cartProducts.status === 2) {
                    disableCheckout = true;
                    break;
                }
            }
            setDisableCheckout(disableCheckout);
            setCustomerCartData(res.data);
            dispatch({ type: "SET_CART_DATA", payload: res.data });
            dispatch({ type: "SET_CART_ITEMS", payload: res.data.products.length + "" });
        }).catch((err) => {
            console.log(err);
        });
    }, [reload, cartId]);

    useEffect(() => {
        calculateCart();
    }, [cartId]);

    async function calculateCart() {
        if (cartId) return axios.post(`${process.env.API_URL}cart/calculateCart`, { cartId: cartId });
    }

    const calcShiping = async (addressId, storePickup) => {
        try {
            await axios.post(`${process.env.API_URL}cart/calculateShipping`, { cartId: cartId, addressId: addressId, storePickup });
            await axios.post(`${process.env.API_URL}cart/allocateStock`, { cartId: cartId });
            await calculateCart();
            setReload(reload + 1);
            return { message: "Shipping Calculated" };
        } catch (err) {
            throw new Error(err);
        }
    }

    const addToCart = async (id, qty, cartProductId = null) => {
        try {
            setIsAdding(true);
            if (cartId) {
                await axios.patch(`${process.env.API_URL}cart`, { productId: parseInt(id), quantity: qty, cartId: cartId, cartProductId: cartProductId });
            } else {
                let response = await axios.post(`${process.env.API_URL}cart`, { productId: parseInt(id), quantity: qty });
                dispatch({ type: "ADD_TO_CART", payload: response.data.id });
            }

            await calculateCart();
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

            await calculateCart();
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
            if (err.response.status === 401) {
                return { type: "error", message: "Please login to add!", title: "Error" };
            }
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

            await calculateCart();
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

            await calculateCart();
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
        isAddingToWishlist, disableCheckout, applyCoupon, removeCoupon, isApplyingCoupon, calcShiping, customerCartData
    }
}