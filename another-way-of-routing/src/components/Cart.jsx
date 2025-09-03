import React, { useContext } from 'react'
import { GlobalVar } from '../globalContext/GlobalContext';

function Cart() {
    const { cart, setCart } = useContext(GlobalVar);
    console.log(cart)
    return (
        <div>
            this is cart
        </div>
    )
}

export default Cart
