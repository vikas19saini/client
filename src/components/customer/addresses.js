import Axios from "axios";
import { Fragment, useEffect, useState } from "react"
import AddressForm from "./addressForm"
import axios from "axios";
import { formatAddress } from "../../pages/helpers"

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
        axios.delete(`${process.env.API_URL}address/${id}`).then(res => {
            setReload(reload + 1)
        })
    }

    return (
        <div className="tabcontent" style={{ display: 'block', left: '0px' }}>
            <div className="row">
                <div className="col-md-6 col-6 padd_0">
                    <h3>My Addresses</h3>
                </div>
                {
                    !addNew && (
                        <Fragment>
                            <div className="col-md-6 col-6 padd_0">
                                <div className="new_add">
                                    <button className="btn btn-primary pull-right" onClick={() => setAddNew(true)}>Add New Address</button>
                                </div>
                            </div>
                            <div className="inner_add">
                                <div className="row">
                                    <div className="col-md-12">
                                        {
                                            addresses.length > 0 ? addresses.map(address => {
                                                return (
                                                    <div className="add_bx check_add_3" key={address.id}>
                                                        <p><span>{address.name}</span> {formatAddress(address)}</p>
                                                        <p><span>Phone: {address.phone}</span></p>
                                                        <div className="mrg_adit">
                                                            <div className="check_main_3">
                                                                <div className="de_add md_1 inner_md">
                                                                    <p>Default Address</p>
                                                                </div>
                                                                <div className="md_2">
                                                                    <p>Edit</p>
                                                                </div>
                                                                <div className="md_2">
                                                                    <p onClick={() => deleteAddress(address.id)}>Delete</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                                : (
                                                    <div className="check_add_2 wow fadeInUp">
                                                        <p>You don’t have a delivery address</p>
                                                        <button type="button" onClick={() => setAddNew(true)}>Add an address</button>
                                                    </div>
                                                )

                                        }
                                    </div>
                                </div>
                            </div>
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