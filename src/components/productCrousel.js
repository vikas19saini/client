import { GetPriceHtml } from "../pages/helpers"
import Link from "next/link"
import Image from "next/image"

export default function Products(props) {
    return (props.products.map(p => {
        return (
            <div className="item" key={p.id}>
                <Link href={`/product/${p.slug}`}>
                    <a>
                        <Image src={p.featuredImage.thumbnailUrl} height={350} width={350} alt={p.name} />
                    </a>
                </Link>
                <div className="arrivals">
                    <Link href={`/product/${p.slug}`}>
                        <a>
                            <p>{p.name} <strong>{<GetPriceHtml product={p} />}</strong></p>
                        </a>
                    </Link>
                </div>
                {
                    props.wishlist && (<div className="f_icon" onClick={() => props.removeFromWishliat(p.id)}><i className="fa fa-heart" aria-hidden="true"></i></div>)
                }
            </div>
        )
    }))
}