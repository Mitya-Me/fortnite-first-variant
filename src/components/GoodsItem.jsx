import { useContext } from 'react'
import {ShopContext} from '../context'

const GoodsItem = (props) => {
    const { id, name, description, price, full_background} = props;
    
    const { addToCart} = useContext(ShopContext)

    return (
        <div className='goods__item'>
            <div className='goods__item-img'>
                <img src={full_background} alt={name} />
            </div>
            <ul className='goods__item-info'>
                <li className='goods__item-description'>{description}</li>
            </ul>
            <div
                className='goods__item-btn btn btn--price-high'
                onClick={() =>
                    addToCart({
                        id,
                        name,
                        price,
                    })
                }
            >
                {price} $
            </div>
        </div>
    );
};

export default GoodsItem;