import React, {useContext} from "react";
import {ShopContext} from "../context"


const CartListItem = (props) => {
    const {
        id, name, price,
        quantity, full_background,
    } = props;

    const { removeItem, incrementQty, decrementQty } = useContext(ShopContext)
    

    return (
        <div className='cartlist__item item-classlist'>
            <div>
                <img src={full_background} alt="" />
            </div>
            <div className='item-classlist__descr-top'>
                <span className='item-classlist__price'> ${price * quantity} </span>
                <span className='item-classlist__name'> {name} </span>
                <span
                    onClick={() => removeItem(id)}
                    className='item-classlist__remove'> X </span>
            </div>
            <div className='item-classlist__descr-bot'>
                <div className='item-classlist__qty'>
                    qty:
                    <span
                        onClick={() => incrementQty(id)}
                        className='item-classlist__qty-btn'> + </span>
                    {quantity}
                    <span
                        onClick={() => decrementQty(id)}
                        className='item-classlist__qty-btn'> - </span>
                </div>
            </div>
        </div>
    );
};

export default CartListItem;
