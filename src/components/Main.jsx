import { useEffect, useContext } from "react";
import { API_URL, API_KEY } from "../config";

import { ShopContext } from "../context";

import Preloader from "./Preloader";
import GoodsList from "./GoodsList";
import Basket from "./Basket";
import CartList from "./CartList";
import Alert from "./Alert";

const Main = () => {
    const { loading, order, setGoods, alertName, isBasketShow } =
        useContext(ShopContext);

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setGoods(data.featured);
            });
    }, []);

    return (
        <div className='wrapper'>
            <div className='main'>
                <Basket order={order} />
                {loading ? <Preloader /> : <GoodsList />}
                {isBasketShow && <CartList />}
                {alertName && <Alert />}
            </div>
        </div>
    );
};

export default Main;
