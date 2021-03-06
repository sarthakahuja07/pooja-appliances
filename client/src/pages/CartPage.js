import React from 'react'
import { useSelector } from 'react-redux';
import CartComponent from '../components/CartPage/CartComponent';
import EmptyCart from '../components/CartPage/EmptyCart';
import { useParams } from 'react-router-dom';

const CartPage = () => {
    const { app } = useParams()

    const cartState = useSelector(state => state.cartState);
    const count = cartState[app].count;

    return (
        <>

            {!count ? (
                <EmptyCart />
            ) :
                (
                    <CartComponent />
                )}
        </>
    )
}

export default CartPage
