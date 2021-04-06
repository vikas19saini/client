import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { toast, ToastContainer } from 'react-nextjs-toast'

export default function AddressForm(props) {
    const [countries, setCountries] = useState([]);
    const [zones, setZones] = useState([]);
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        axios.get(`${process.env.API_URL}static/countries`).then(res => {
            setCountries(res.data);
            let zones = []

            res.data.forEach(country => {
                country.zones.forEach(zone => {
                    zones.push({ id: zone.id, name: zone.name })
                })
            })
            setZones(zones)
        })
    }, [])

    const fetchZones = (e) => {
        let countryData = countries.filter(c => c.id == e.target.value);
        let zones = []
        countryData.forEach(country => {
            country.zones.forEach(zone => {
                zones.push({ id: zone.id, name: zone.name })
            })
        })

        setZones(zones)
    }

    const saveAddress = (e) => {
        e.preventDefault()
        let request = {
            name: e.target.name.value,
            phone: e.target.phone.value,
            address: e.target.address.value,
            city: e.target.city.value,
            postcode: e.target.postcode.value,
            countryId: e.target.countryId.value,
            zoneId: e.target.zoneId.value,
            type: e.target.type.value,
            isDefault: e.target.isDefault.value,
        }

        setIsSaving(true)
        axios.post(`${process.env.API_URL}address`, request).then(res => {
            toast.notify("New address created", {
                type: "success",
                title: "Success!"
            })
            props.setAddNew(false)
            setIsSaving(false)
        }).catch(err => {
            let message = err.response.data.errors ? err.response.data.errors[0].message : "Oops! something went wrong!"
            toast.notify(message, {
                type: "error",
                title: "Error!"
            })
            setIsSaving(false)
        })
    }

    return (
        <Fragment>
            <ToastContainer />
            <div className="form_aria_p">
                <form onSubmit={saveAddress}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="control-group">
                                <input className="control" placeholder="Full Name" name="name" type="text" required="required" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="control-group">
                                <input className="control" name="phone" placeholder="Contact Number" type="text" required="required" />
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="control-group">
                                <input className="control" placeholder="Complete address" name="address" type="text" required="required" />
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="control-group">
                                <input className="control" placeholder="City Name" name="city" type="text" required="required" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="control-group">
                                <input className="control" placeholder="Postal code" name="postcode" type="text" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="control-group">
                                <select className="control" onChange={fetchZones} name="countryId" defaultValue={1}>
                                    <option value="">-Select Country-</option>
                                    {
                                        countries.map(c => {
                                            return (<option value={c.id} key={c.id}>{c.name}</option>)
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="control-group">
                                <select className="control" name="zoneId" defaultValue={1}>
                                    <option value="">Select State</option>
                                    {
                                        zones.map(z => {
                                            return (<option value={z.id} key={z.id}>{z.name}</option>)
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="control-group">
                                <select className="control" name="type" defaultValue="home">
                                    <option>Select Address Type</option>
                                    <option value="home">Home</option>
                                    <option value="office">Office</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="control-group">
                                <select className="control" name="isDefault" defaultValue="0">
                                    <option value="">Is Default Address</option>
                                    <option value="0">No</option>
                                    <option value="1">Yes</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="btn-group btn-group-lg">
                                <button type="submit" className="bag_bttn">{isSaving ? (<div className="loader"></div>) : "Save"}</button>
                                <button type="button" className="bag_bttn" onClick={() => props.setAddNew(false)} style={{ marginLeft: 2 }}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </Fragment>
    );
}