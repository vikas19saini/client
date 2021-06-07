import Axios from "axios";
import { Fragment, useEffect, useState } from "react"
import AddressForm from "./addressForm"
import axios from "axios";
import { formatAddress } from "../helpers"

export default function Addresses() {
    const [addNew, setAddNew] = useState(false);
    const [addresses, setAddresses] = useState([]);
    const [reload, setReload] = useState(1);

    useEffect(() => {
        axios.get(`${process.env.API_URL}address`).then(res => {
            setAddresses(res.data.rows)
        })
    }, [addNew, reload])

    const deleteAddress = (id) => {
        if (!confirm("Are you sure?"))
            return;

        axios.delete(`${process.env.API_URL}address/${id}`).then(res => {
            setReload(reload + 1)
        })
    }

    return (
        <div className="tabcontent" style={{ display: 'block', left: '0px' }}>
            <div className="row">
                <div className="col-md-6 col-6">
                    <h3>My Addresses</h3>
                </div>
                {
                    !addNew && (
                        <Fragment>
                            <div className="col-md-6 col-6">
                                <div className="new_add">
                                    <button className="checkoutBtn pull-right" onClick={() => setAddNew(true)}>Add New Address</button>
                                </div>
                            </div>
                            {
                                addresses.length > 0 ? addresses.map(address => {
                                    return (
                                        <div className="col-md-6 cartProduct" key={address.id}>
                                            <div className="add_bx check_add_3" style={{ border: "1px solid #cf9f44" }}>
                                                <p><span>{address.name}</span> {formatAddress(address)}</p>
                                                <p><span>Phone: {address.phone}</span></p>
                                                <div className="addressOption">
                                                    {/* <button className="pull-left addressEdit" onClick={() => editAddress(address.id)}>Edit</button> */}
                                                    <button className="pull-right addressDelete" onClick={() => deleteAddress(address.id)}>Delete</button>
                                                    <div className="clearfix" />
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                                    : (
                                        <div className="col-md-12">
                                            <div className="check_add_2 wow fadeInUp">
                                                <p>You don’t have a delivery address</p>
                                                <button type="button" onClick={() => setAddNew(true)}>Add an address</button>
                                            </div>
                                        </div>
                                    )

                            }
                        </Fragment>
                    )
                }

                {
                    addNew && (<AddressForm setAddNew={setAddNew} />)
                }
            </div>
        </div>
    )
}