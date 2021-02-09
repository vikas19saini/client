import { useState } from "react";
import Addresses from "./addresses";
import Orders from "./orders";
import Profile from "./profile";
import Tabs from "./tabs";
import Wishlist from "./wishlist";

export default function MyAccount() {
    const [tabValue, setTabValue] = useState(1)

    return (
        <section className="inner_product">
            <div className="container">
                <div className="row">
                    <Tabs switchTab={setTabValue} activeTab={tabValue} />
                    {
                        tabValue === 1 && <Profile />
                    }
                    {
                        tabValue === 2 && <Orders />
                    }
                    {
                        tabValue === 3 && <Addresses />
                    }
                    {
                        tabValue === 4 && <Addresses />
                    }
                    {
                        tabValue === 5 && <Wishlist />
                    }
                    {
                        tabValue === 6 && <Profile />
                    }
                </div>
            </div>
        </section>
    )
}