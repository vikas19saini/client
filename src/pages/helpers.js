import { Fragment } from "react";
import { useSelector } from "react-redux";

export function getProductPrice(product) {
    if (product.salePrice !== 0) {
        return parseFloat(product.salePrice.toFixed(2))
    }

    return parseFloat(product.ragularPrice.toFixed(2))
}

export function formatPrice(price) {
    const storeConfig = useSelector(state => state.config);
    price = parseFloat((price * storeConfig.currency.value).toFixed(2))
    return new Intl.NumberFormat('en-IN', { style: "currency", currency: storeConfig.currency.code }).format(price).replace("THB", "฿").replace("$", "USD");
}

export function formatCurrency(val, currency) {
    val = parseFloat((val * currency.value).toFixed(2));
    return new Intl.NumberFormat('en-IN', { style: "currency", currency: currency.code }).format(val).replace("THB", "฿").replace("$", "USD");
}

export function GetPriceHtml(props) {
    let quantity = props.quantity ? props.quantity : props.product.minOrderQuantity

    if (props.product.salePrice === 0) {
        formatPrice(1) // dummy call
        return (formatPrice(props.product.ragularPrice * quantity))
    }
    return (
        <Fragment>
            {formatPrice(props.product.salePrice * quantity) /* + "/Mtr " */} <span><del>{formatPrice(props.product.ragularPrice * quantity)}{/* /Mtr */}</del></span>
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

export default function ABC() {
    return ("");
}