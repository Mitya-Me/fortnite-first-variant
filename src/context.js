import { createContext, useReducer } from 'react'
import { reducer } from './reducer'


export const ShopContext = createContext();


const initialState = {
    goods: [],
    loading: true,
    order: [],
    isBasketShow: false,
    alertName: '',
}

export const ContextProvider = ({ children }) => {
    const [value, dispatch] = useReducer(reducer, initialState)

    value.closeAlert = () => {
        dispatch({type: 'CLOSE_ALERT'})
    }

    value.addToCart = (item) => {
        dispatch({ type: 'ADD_TO_CART', payload: item})
    }

    value.removeItem = (itemId) => {
        dispatch({ type: 'REMOVE_ITEM', payload: {id: itemId} })
    } 

    value.incrementQty = (itemId) => {
        dispatch({ type: 'INCREMENT_QTY', payload: {id: itemId}})
    }

    value.decrementQty = (itemId) => {
        dispatch({ type: 'DECREMENT_QTY', payload: {id: itemId}})
    }

    value.handleBasketShow = () => {
        dispatch({ type: 'TOGGLE_BASKET'})
    }

    value.setGoods = (data) => {
        dispatch({type: 'SET_GOODS', payload: data})
    }


    return <ShopContext.Provider value={value}>
        {children}
    </ShopContext.Provider>
}