export default function Orders() {
    return (
        <div className="tabcontent" style={{ display: 'block', left: '0px' }}>
            <h3>My Orders</h3>
            <div className="row spacing_bttm">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mrg_12">
                                <div className="main_inner_check main_a_bdr">
                                    <div className="check_img"><img src="/images/icons/order_fb.png" alt="aba" /></div>
                                    <div className="check_dis">
                                        <p>Multi colour cotton knit - 7239995</p>
                                        <p><span>GA Style Code - 50415592</span></p>
                                        <p>₹ 4499.00</p>
                                        <p><span>Order ID:</span>#9876543 <strong><span>Aprx. delivery:</span> 16 Aug,
                                          19</strong></p>
                                        <p><span>Ordered On:</span>1 Sep, 19</p>
                                    </div>
                                    <div className="right_icon">
                                        <button type="button" className="confmed_bttn desk_view"><a href="#">Order Confirmed</a></button>
                                    </div>
                                    <div className="right_content_1 right_25 desk_view">
                                        <p>Cancel Order</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row spacing_bttm">
                <div className="col-md-12">
                    <div className="mrg_12">
                        <div className="main_inner_check main_a_bdr">
                            <div className="check_img"><img src="/images/icons/order_fb.png" alt="abc" /></div>
                            <div className="check_dis">
                                <p>Multi colour cotton knit - 7239995</p>
                                <p><span>GA Style Code - 50415592</span></p>
                                <p>₹ 4499.00</p>
                                <p><span>Order ID:</span>#9876543 <strong><span>Aprx. delivery:</span> 16 Aug, 19</strong>
                                </p>
                                <p><span>Ordered On:</span>1 Sep, 19</p>
                            </div>
                            <div className="right_icon desk_view">
                                <button type="button" className="confmed_bttn">Delivered</button>
                            </div>
                            <div className="right_content_1 right_25 desk_view">
                                <p>Return Order</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row spacing_bttm">
                <div className="col-md-12">
                    <div className="mrg_12">
                        <div className="main_inner_check main_a_bdr">
                            <div className="check_img"><img src="/images/icons/order_fb.png" alt="aabb" /></div>
                            <div className="check_dis">
                                <p>Multi colour cotton knit - 7239995</p>
                                <p><span>GA Style Code - 50415592</span></p>
                                <p>₹ 4499.00</p>
                                <p><span>Order ID:</span>#9876543 <strong><span>Aprx. delivery:</span> 16 Aug, 19</strong>
                                </p>
                                <p><span>Ordered On:</span>1 Sep, 19</p>
                            </div>
                            <div className="right_icon desk_view">
                                <button type="button" className="confmed_bttn cancelled_bttn">Cancelled</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}