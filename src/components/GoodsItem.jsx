import { useContext } from "react";
import { ShopContext } from "../context";

const GoodsItem = (props) => {
    const { id, name, description, price, full_background } = props;

    const { addToCart } = useContext(ShopContext);

    return (
        <div className='goods__item'>
            <div className='goods__item-img'>
                <img src={full_background ? full_background : 'https://tl.rulate.ru/i/book/19/10/18925.jpg'} alt={name} />
            </div>
            <div className='goods__item-description'>{description}</div>
            <button
                className='goods__item-btn btn btn--price-high'
                onClick={() => addToCart({id, name, price,})}
            >
                {price} $
            </button>
        </div>
    );
};

export default GoodsItem;
