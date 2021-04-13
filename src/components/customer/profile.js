import axios from "axios";
import { useEffect, useState } from "react"
import { ToastContainer, toast } from 'react-nextjs-toast';

export default function Profile() {
    const [profile, setProfile] = useState(null);
    const [reload, setReload] = useState(1);
    useEffect(async () => {
        await axios.get(`${process.env.API_URL}customer/details`).then((res) => {
            setProfile(res.data);
        });
    }, [reload]);

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.patch(`${process.env.API_URL}customer/details`, {
            name: e.target.name.value,
            phone: e.target.phone.value,
        }).then((res) => {
            toast.notify(`Profile Updated!`, {
                type: "success",
                title: "Profile!"
            });
            setReload(reload + 1);
        }).catch(err => {
            toast.notify(`Profile Updation Fail!`, {
                type: "error",
                title: "Profile!"
            });
            setReload(reload + 1);
        });
    }

    return (
        <div className="tabcontent" style={{ display: 'block', left: '0px' }}>
            <ToastContainer />
            <div className="form_aria_p">
                <form onSubmit={onSubmit}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="floating-label">
                                <input className="floating-input" name="name" type="text" placeholder=" " defaultValue={profile ? profile.name : ""} />
                                <span className="highlight"></span>
                                <label>First Name</label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="floating-label">
                                <input className="floating-input" name="email" readOnly={true} type="text" placeholder=" " defaultValue={profile ? profile.email : ""} />
                                <span className="highlight"></span>
                                <label>Email Address</label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="floating-label">
                                <span><img src="/images/icons/i_right.png" /></span>
                                <input className="floating-input" name="phone" type="text" placeholder=" " defaultValue={profile ? profile.phone : ""} />
                                <span className="highlight"></span>
                                <label>Mobile Number</label>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <button type="submit" className="bag_bttn">Update Profile</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}