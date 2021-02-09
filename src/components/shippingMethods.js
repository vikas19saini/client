import { useSelector } from "react-redux";
import { formatCurrency } from "../pages/helpers";
export default function ShippingMethod(props) {
    let currency = useSelector(state => state.config.currency && state.config.currency || null);

    return (
        <div className="dis_detail blockBorder" id="shippingMethods">
            <div>
                <h4 className="p0">Shipping Method</h4>
            </div>
            <hr className="seperator" />
            <div className="center-block">
                <div className="row">
                    <div className="col-md-12 col-12">
                        {
                            props.shippingMethods.map((sm, index) => {
                                return (
                                    <div className="paymentMethod" key={index} onClick={() => props.setSelectShippingMethod(sm)}>
                                        <span className="radio-item">
                                            <input type="radio" name="shippingMethod" onChange={() => props.setSelectShippingMethod(sm)} value={sm.serviceName} checked={sm.serviceName === props.selectedShippingMethodName ? true : false} />
                                            <label>
                                                {sm.serviceName}
                                            </label>
                                            <span className="shipingCost">{formatCurrency(sm.cost, currency)}</span>
                                            <span className="eat">EAT: {(new Date(sm.eta)).toLocaleString()}</span>
                                        </span>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}