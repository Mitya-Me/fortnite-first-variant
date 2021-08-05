import { useContext } from 'react'
import {ShopContext } from '../context'

const Basket = () => {
    const { order = [], handleBasketShow } = useContext(ShopContext);

    return (
        <div className='basket' onClick={handleBasketShow}>
            <div className='basket__img'>
                <span className='basket__count'>
                    {order.length === 0
                        ? null
                        : order.map((item) => item.quantity).reduce((sum, curr) => sum + curr)}
                </span>
            </div>
        </div>
    );
};

export default Basket;
