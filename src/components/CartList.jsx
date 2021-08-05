import CartListItem from "./CartListItem";

import {useContext} from "react";
import {ShopContext} from "../context"


const CartList = (props) => {
    const { order = [], handleBasketShow,} = useContext(ShopContext);

    const totalPrice = order.reduce(
        (sum, curr) => sum + curr.price * curr.quantity,
        0
    );

    return (
        <div className='cartlist'>
            <div className='cartlist__wrapper'>
                <h3 className='cartlist__title'> MY BAG</h3>

                <div className='cartlist__items'>
                    {order.length ? (
                        order.map((item) => (
                            <CartListItem
                                key={item.id}
                                {...item}
                            />
                        ))
                    ) : (
                        <li>YOUR BASKET IS EMPTY</li>
                    )}
                </div>

                <div className='cartlist__total-price'>
                    TOTAL PRICE:
                    <span>
                        {order.length ? totalPrice : null}$
                    </span>
                </div>

                <button className='btn-close' onClick={handleBasketShow}>
                    X
                </button>
            </div>
        </div>
    );
};

export default CartList;
