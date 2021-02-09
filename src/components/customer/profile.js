export default function Profile() {
    return (
        <div className="tabcontent" style={{ display: 'block', left: '0px' }}>
            <div className="row">
                <div className="col-md-12">
                    <div className="small-12 medium-2 large-2 columns">
                        <div className="circle">
                            <img className="profile-pic" src="/images/user_img.png" alt="" />
                        </div>
                        <div className="p-image">
                            <img className="upload-button" src="/images/cemara.png" alt="" />
                            <input className="file-upload" type="file" accept="image/*" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="form_aria_p">
                <div className="row">
                    <div className="col-md-6">
                        <div className="floating-label">
                            <input className="floating-input" type="text" placeholder=" " />
                            <span className="highlight"></span>
                            <label>First Name</label>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="floating-label">
                            <input className="floating-input" type="text" placeholder=" " />
                            <span className="highlight"></span>
                            <label>Last Name</label>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="floating-label">
                            <span><img src="/images/icons/i_right.png" /></span>
                            <input className="floating-input" type="text" placeholder=" " />
                            <span className="highlight"></span>
                            <label>Mobile Number</label>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="custom_date">
                            <label htmlFor="dateofbirth">Date Of Birth</label>
                            <input type="date" name="dateofbirth" id="dateofbirth" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="floating-label">
                            <select className="floating-select" defaultValue={1}>
                                <option value=""></option>
                                <option value="1">Alabama</option>
                                <option value="2">Boston</option>
                                <option value="3">Ohaio</option>
                                <option value="4">New York</option>
                                <option value="5">Washington</option>
                            </select>
                            <span className="highlight"></span>
                            <label>Country</label>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <button type="button" className="bag_bttn">Update Profile</button>
                    </div>
                </div>
            </div>
        </div>
    )
}