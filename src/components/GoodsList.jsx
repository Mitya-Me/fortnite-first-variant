import {useContext} from 'react';
import { ShopContext } from '../context'


import GoodsItem from "./GoodsItem";

const GoodsList = (props) => {
    const { goods = []} = useContext(ShopContext);

    if (!goods.length) {
        return <h1>Nothing here</h1>;
    }

    return (
        <div className='goods'>
            {goods.map((item) => (
                <GoodsItem
                    key={item.id}
                    {...item}
                />
            ))}
        </div>
    );
};

export default GoodsList;
