import { useRouter } from "next/router";
import { useDispatch } from "react-redux"

export default function Tabs(props) {
    const dispatch = useDispatch();
    const router = useRouter();

    const logout = () => {
        /* dispatch({ type: "CLEART_CART" }); */
        dispatch({ type: "SIGN_OUT" });
    }

    return (
        <div className="tab accountTabs">
            <button className={props.activeTab === 1 ? "tablinks active" : "tablinks"} onClick={() => router.push("/account?tab=1")}>
                <img src="/images/address_icon/profile.svg" alt="profile" />My Profile</button>

            <button className={props.activeTab === 2 ? "tablinks active" : "tablinks"} onClick={() => router.push("/account?tab=2")}>
                <img src="/images/address_icon/my_order.svg" alt="orders" />My Orders</button>

            {/* <button className={props.activeTab === 3 ? "tablinks active" : "tablinks"} onClick={() => router.push("/account?tab=3")}>
                <img src="/images/address_icon/notifacation.svg" alt="notification" />Notifications</button> */}

            <button className={props.activeTab === 4 ? "tablinks active" : "tablinks"} onClick={() => router.push("/account?tab=4")}>
                <img src="/images/address_icon/address.svg" alt="address" />My Address</button>

            <button className={props.activeTab === 5 ? "tablinks active" : "tablinks"} onClick={() => router.push("/account?tab=5")}>
                <img src="/images/address_icon/wishlist.svg" alt="wishlist" />Wishlists</button>

            {/* <button className={props.activeTab === 6 ? "tablinks active" : "tablinks"} onClick={() => router.push("/account?tab=6")}>
                <img src="/images/address_icon/help.svg" alt="help" />Help</button> */}

            <button className="tablinks" onClick={logout}>
                <img src="/images/address_icon/log_out.svg" alt="logout" />Log Out</button>
        </div>
    )
}