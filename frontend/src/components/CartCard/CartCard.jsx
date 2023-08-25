import trash from "../../assets/trash.png"
const CartCard = ({ product }) => {
    const { _id, coverImage, title, author, price, discountedPrice } = product;
    return (
        <div className="grid grid-cols-layout-cart grid-rows-1 gap-2 p-4 border-2 border-solid border-green-500">
            <div className="col-span-1 border-2 border-solid border-green-500">
                <a href="#" className="w-full rounded self-stretch bg-slate-50">
                    <div className="rounded relative shadow-product-image flex flex-1 product-image">
                        <img
                            src={coverImage}
                            alt=""
                            className=" h-auto block rounded bg-[#fff4]-200"
                        />
                    </div>
                </a>
            </div>
            <div className="border-2 border-solid border-green-500 pt-2 leading-5 ellipsis line-clamp-2">
                <div>
                    <a href="" className="font-bold text-xl">{title}</a>
                </div>
                <div className="text-sm border-2 border-solid border-green-500">{author}</div>
            </div>
            <div className="text-sm border-2 border-solid border-green-500">
                <input className="p-2 border-2 border-solid border-color-border rounded text-color-dark-text outline-none w-16 text-right" type="number" min={1} max={5} />
            </div>
            <div className="pb-4 text-sm flex flex-col items-center border-2 border-solid border-green-500">
                <span className="line-through mr-2 text-color-primary font-bold">&#8377;{price}</span>
                <span className="font-bold">&#8377;{discountedPrice}</span>
            </div>
            <div className="text-sm border-2 border-solid border-green-500">
                <img
                    src={trash}
                    alt=""
                    className="w-8 h-8 block"
                />
            </div>
        </div>
    )
}


export default CartCard