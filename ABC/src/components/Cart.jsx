import React, { useContext } from 'react';
import { GlobalVar } from '../globalContext/GlobalContext';

function Cart() {
    const { cartData, setCartData, cartPanel, setCartPanel } = useContext(GlobalVar);

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
        <section className='cart-container' onClick={(e) => { e.stopPropagation(); setCartPanel(false); }}>
            <article className='cart' onClick={(e) => { e.stopPropagation(); setCartPanel(true); }}>
                {Array.isArray(cartData) && cartData.map((item, i) => {
                    return (
                        <div key={i} className="cart-item">
                            <img src={item.image} alt={item.title || 'Product'} />
                            <div className="cartItemDetails">
                                <h3>{item.title}</h3>
                                <p>Price: ${item.price * item.quantity}</p>
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
                <button className='buy-btn' onClick={(e) => { e.stopPropagation(); setCartPanel(false); setPaymentPage(true); setBuyNowCart(true); }}>BuyNow</button>
            </article>
        </section>
    );
}

export default Cart;
