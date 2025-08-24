import React, { useContext } from 'react';
import { GlobalVar } from '../Context/GlobalContext';

function Cart() {
    const { cartData, setCartData } = useContext(GlobalVar);
    function increaseQuantity(id) {
        const updatedCart = cartData.map((item) => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity + 1 };
            } else {
                return item;
            }
        })
        setCartData(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    }

    function decreaseQuantity(id) {
        const updatedCart = cartData.map((item) => {
            if (id === item.id) {
                return { ...item, quantity: item.quantity - 1 };
            } else {
                return item;
            }
        }).filter((item) => item.quantity > 0);
        setCartData(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
    return (
        <section className='cart-container' >
            <article className='cart'>
                {/* {cartData.map((item, i) => { */}
                {Array.isArray(cartData) && cartData.map((item, i) => {
                    return (
                        <div key={i} className="cart-item">
                            <img src={item.images?.[0] || 'fallback.jpg'} alt={item.title || 'Product'} />
                            {/* <img src={item.images[0]} alt="" /> */}
                            <div className="cartItemDetails">
                                <h3>{item.title}</h3>
                                <p>Price: ${(item.price * (100 - item.discountPercentage) / 100) * item.quantity}</p>
                                <div className="quantity">
                                    <button onClick={() => { increaseQuantity(item.id); }}>+</button>
                                    <p>{item.quantity}</p>
                                    <button onClick={() => { decreaseQuantity(item.id); }}> - </button>
                                </div>

                                <button className='remove' onClick={() => {
                                    const updateCart = cartData.filter((ele) => ele.id !== item.id);
                                    setCartData(updateCart);
                                    localStorage.setItem("cart", JSON.stringify(updateCart));
                                }}>Remove</button>
                            </div>
                            <div className="description">{item.description}</div>
                        </div>
                    )
                })}
                <button className='buy-btn'>BuyNow</button>
            </article>
        </section>
    );
}

export default Cart;
