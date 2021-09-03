import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Addresses from "./addresses";
import Orders from "./orders";
import Profile from "./profile";
import Tabs from "./tabs";
import Wishlist from "./wishlist";

export default function MyAccount() {
    const router = useRouter();
    const [tabValue, setTabValue] = useState(router.query.tab ? parseInt(router.query.tab) : 1);

    useEffect(() => {
        setTabValue(router.query.tab ? parseInt(router.query.tab) : 1);
    }, [router])

    return (
        <section className="inner_product">
            <div className="container" style={{ width: "100%" }}>
                <div className="row m-0">
                    <Tabs activeTab={tabValue} />
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