import React from 'react';

function Cart({ data, cart, buynow, payment }) {
    const { cartBuyNow, setCartBuyNow } = buynow;
    const { paymentPage, setPaymentPage } = payment;
    const { cartPannel, setCartPannel } = data;
    const { Data, setCardData } = cart;

    function increaseQuantity(id) {
        const updatedCart = Data.map((item) => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity + 1 };
            } else {
                return item;
            }
        })
        setCardData(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    }

    function decreaseQuantity(id) {
        const updatedCart = Data.map((item) => {
            if (id === item.id) {
                return { ...item, quantity: item.quantity - 1 };
            } else {
                return item;
            }
        }).filter((item) => item.quantity > 0);
        setCardData(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    }

    return (
        <section className="cart" onClick={(e) => { e.stopPropagation(); setCartPannel(false); }}>
            <article className="cartContainer" onClick={(e) => { e.stopPropagation(); setCartPannel(true); }}>
                {Data.map((item, i) => {
                    return (
                        <div key={i} className="cartItem">
                            <img src={item.image} alt={item.name} />
                            <div className="cartItemDetails">
                                <h3>{item.name}</h3>
                                <p>Price: ${item.price * item.quantity}</p>
                                <div className="quantity">
                                    <button onClick={() => { increaseQuantity(item.id); }}>+</button>
                                    <p>{item.quantity}</p>
                                    <button onClick={() => { decreaseQuantity(item.id); }}> - </button>
                                </div>

                                <button className='remove' onClick={() => {
                                    const updatedCart = Data.filter((ele, index) => ele.id !== item.id);
                                    setCardData(updatedCart);
                                    localStorage.setItem('card', JSON.stringify(updatedCart));
                                }}>Remove</button>

                            </div>
                        </div>
                    )
                })}
                <button className='buy-btn' onClick={(e) => { e.stopPropagation(); setCartPannel(false); setPaymentPage(true); setCartBuyNow(true); }}>BuyNow</button>
            </article>
        </section>
    );
}

export default Cart;
