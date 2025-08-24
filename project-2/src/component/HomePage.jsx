import React, { useRef } from 'react'
import data from '../data.json'
import toast from 'react-hot-toast'

function HomePage ({ cardData, payment,  card, cart}) {

    const cardRef = useRef() // it is used to create reference in react

    const {cartBuyNow, setCartBuyNow} = cart;
    const {paymentPage, setPaymentPage} = payment;
    const {cardBuyNow, setCardBuyNow} = card;
    const { Data, setCardData } = cardData;
    const handleCart = (data) => {
        const alreadyExist = Data.find((ele, i) => ele.id == data.id);
        if (alreadyExist) {
            const filterData = Data.filter((ele, i) => ele.id !== data.id);
            setCardData([...filterData, { ...alreadyExist, quantity: alreadyExist.quantity + 1 }]);
            localStorage.setItem("cart", JSON.stringify(Data));

        } else {
            localStorage.setItem("cart", JSON.stringify([...Data, { ...data, quantity: 1 }]));
            setCardData([...Data, { ...data, quantity: 1 }]);
        }
        toast.success('Successfully Added')
    }

    console.log(Data);

    return (
        <section className='HomePage'>
            {data.map((products, i) => {
                return (
                    <div className="card" key={i} ref={cardRef}>
                        <img src={products.image} alt="" />
                        <h4>{products.title}</h4>
                        <h4>Category: {products.category}</h4>
                        <p><b>Rating: </b> {products.rating.rate}⭐ ({products.rating.count})</p>
                        <p>Rs.{products.price}</p>
                        <div className="btn">
                            <button className='btn-1' onClick={() => {setPaymentPage(true); setCardBuyNow(true); setCartBuyNow(false)}}>But Now</button>
                            <button className='btn-2' onClick={() => handleCart(products)}>Add to Cart</button>
                        </div>
                    </div>
                );
            })}
        </section>
    )
}

export default HomePage;