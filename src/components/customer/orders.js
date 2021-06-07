import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react"
import { formatCurrency } from "../helpers";

export default function Orders() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.API_URL}orders`).then((res) => {
            setOrders(res.data);
        });
    }, [])

    return (
        <div className="tabcontent" style={{ display: 'block', left: '0px' }}>
            <h3>My Orders</h3>            {
                orders.map((order) => {
                    return (
                        <div className="row spacing_bttm" key={order.id}>
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="mrg_12">
                                            <div className="main_inner_check main_a_bdr">
                                                <div className="right_icon">
                                                    <button type="button" className="confmed_bttn desk_view">{order.statusName}</button>
                                                </div>
                                                <div className="check_dis">
                                                    <p><b>ORDER ID - #{order.id}</b></p>
                                                    <hr />
                                                    <p>Ordered On - {new Date(order.createdAt).toLocaleDateString('en-US', {
                                                        day: 'numeric',
                                                        month: 'short',
                                                        year: 'numeric',
                                                        hour: "numeric",
                                                        minute: "numeric"
                                                    })}</p>
                                                    <p>Delivery Address - {order.completeAddress}</p>
                                                    <p>Shipping Method - {order.shippingMethod}</p>
                                                    <p>Payment Method - {order.payments.length > 0 && order.payments[0].method}</p>
                                                    <hr />
                                                    <p>Order Value - {formatCurrency(order.orderValue, { code: order.currencyCode, value: order.currencyValue })}</p>
                                                    <p>Discount - {formatCurrency(order.discount, { code: order.currencyCode, value: order.currencyValue })}</p>
                                                    <p>Coupon Discount - {formatCurrency(order.couponDiscount, { code: order.currencyCode, value: order.currencyValue })}</p>
                                                    <p>Shipping Cost - {formatCurrency(order.shippingCharges, { code: order.currencyCode, value: order.currencyValue })}</p>
                                                    <p>Total Amount - {formatCurrency(order.total, { code: order.currencyCode, value: order.currencyValue })}</p>
                                                    <div className="orderProduct row">
                                                        {
                                                            order.products.map((op) => {
                                                                return (
                                                                    <div className="main_inner_check main_a_bdr col-md-6 col-sm-6" key={op.ordersProducts.id}>
                                                                        <div className="row">
                                                                            <div className="col-md-4 col-sm-6">
                                                                                <Link href={`/product/${op.slug}`}>
                                                                                    <img src={op.featuredImage ? op.featuredImage.miniThumbnailUrl : "/images/placeholder.png"} />
                                                                                </Link>
                                                                            </div>
                                                                            <div className="col-md-8 col-sm-6">
                                                                                <p>{op.ordersProducts.title}</p>
                                                                                <p>Quantity: {op.ordersProducts.quantity}</p>
                                                                                <p>Price: <ProductPrice product={op} order={order} /></p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                    <Tracking order={order} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    )
}

function ProductPrice(props) {
    if (props.product.salePrice) {
        return (
            <>
                {
                    formatCurrency(props.product.ordersProducts.salePrice * props.product.ordersProducts.quantity, { code: props.order.currencyCode, value: props.order.currencyValue })
                }
                <del>{
                    formatCurrency(props.product.ordersProducts.ragularPrice * props.product.ordersProducts.quantity, { code: props.order.currencyCode, value: props.order.currencyValue })
                }</del>
            </>
        )
    } else {
        return (formatCurrency(props.product.ordersProducts.ragularPrice * props.product.ordersProducts.quantity, { code: props.order.currencyCode, value: props.order.currencyValue }));
    }
}

function Tracking(props) {

    let currentStatus = props.order.status;

    if (currentStatus === 5 || currentStatus === 4) { // Cancelled or Refunded
        return (
            <div className="multisteps-form__progress" style={{ marginTop: "40px" }}>
                <button className="multisteps-form__progress-btn js-active" type="button"><p>Created <span>24 Jun, 19</span></p></button>
                <button className="multisteps-form__progress-btn js-active" type="button"><p>Confirm <span>24 Jun, 19</span></p></button>
                <button className="multisteps-form__progress-btn js-active" type="button"><p>Cancelled <span>25 Jun, 19</span></p></button>
                <button className="multisteps-form__progress-btn js-active" type="button"><p>Refunded <span>25 Jun, 19</span></p></button>
            </div>
        );
    }

    let confirm = props.order.histories.filter(oh => oh.status === 1);
    let shipped = props.order.histories.filter(oh => oh.status === 2);
    let delivered = props.order.histories.filter(oh => oh.status === 3);

    return (
        <div className="multisteps-form__progress" style={{ marginTop: "40px" }}>
            <button className={confirm.length > 0 ? "multisteps-form__progress-btn js-active" : "multisteps-form__progress-btn"} type="button">
                <p>
                    Created <span>{
                        confirm[0] && new Date(confirm[0].createdAt).toLocaleDateString('en-US', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                            hour: "numeric",
                            minute: "numeric"
                        })
                    }</span>
                </p>
            </button>
            <button className={confirm.length > 0 ? "multisteps-form__progress-btn js-active" : "multisteps-form__progress-btn"} type="button">
                <p>Confirm <span>{
                    confirm[0] && new Date(confirm[0].createdAt).toLocaleDateString('en-US', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                        hour: "numeric",
                        minute: "numeric"
                    })
                }</span></p>
            </button>
            <button className={shipped.length > 0 ? "multisteps-form__progress-btn js-active" : "multisteps-form__progress-btn"} type="button">
                <p>Shipped <span>{
                    shipped[0] && new Date(confirm[0].createdAt).toLocaleDateString('en-US', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                        hour: "numeric",
                        minute: "numeric"
                    })
                }</span></p>
            </button>
            <button className={delivered.length > 0 ? "multisteps-form__progress-btn js-active" : "multisteps-form__progress-btn"} type="button">
                <p>Delivered <span>{
                    delivered[0] && new Date(confirm[0].createdAt).toLocaleDateString('en-US', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                        hour: "numeric",
                        minute: "numeric"
                    })
                }</span></p>
            </button>
        </div>
    );
}