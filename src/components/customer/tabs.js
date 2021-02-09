import { useDispatch } from "react-redux"

export default function Tabs(props) {
    const dispatch = useDispatch();

    return (
        <div className="tab">
            <button className={props.activeTab === 1 ? "tablinks active" : "tablinks"} onClick={() => props.switchTab(1)}>
                <img src="/images/icons/profile.png" alt="profile" />My Profile</button>

            <button className={props.activeTab === 2 ? "tablinks active" : "tablinks"} onClick={() => props.switchTab(2)}>
                <img src="/images/icons/order.png" alt="orders" />My Orders</button>

            {/* <button className={props.activeTab === 3 ? "tablinks active" : "tablinks"} onClick={() => props.switchTab(3)}>
                <img src="/images/icons/bell.png" alt="notification" />Notifications</button> */}

            <button className={props.activeTab === 4 ? "tablinks active" : "tablinks"} onClick={() => props.switchTab(4)}>
                <img src="/images/icons/map-pin.png" alt="address" />My Address</button>

            <button className={props.activeTab === 5 ? "tablinks active" : "tablinks"} onClick={() => props.switchTab(5)}>
                <img src="/images/icons/heart.png" alt="wishlist" />Wishlists</button>

            {/* <button className={props.activeTab === 6 ? "tablinks active" : "tablinks"} onClick={() => props.switchTab(6)}>
                <img src="/images/icons/user.png" alt="help" />Help</button> */}

            <button className="tablinks" onClick={() => dispatch({ type: "SIGN_OUT" })}>
                <img src="/images/icons/log-out.png" alt="logout" />Log Out</button>
        </div>
    )
}