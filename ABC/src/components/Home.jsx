import React, { useContext, useEffect } from 'react';
import { GlobalVar } from '../globalContext/GlobalContext';
import data from '../data.json';

function Home() {
    const { cartData, setCartData } = useContext(GlobalVar);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartData));
    }, [cartData]);

    const handleCart = (product) => {
        const alreadyExist = cartData.find((ele) => ele.id === product.id);
        if (alreadyExist) {
            const updatedCart = cartData.map((item) =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
            setCartData(updatedCart);
        } else {
            setCartData([...cartData, { ...product, quantity: 1 }]);
        }
    };

    console.log(cartData)

    return (
        <section className='home'>
            {data.map((ele) => (
                <section className="card" key={ele.id}>
                    <img src={ele.image} alt="image" className="image" />
                    <h1>{ele.title}</h1>
                    <p><b>Category:</b> {ele.category}</p>
                    <p><b>Rating:</b> {ele.rating.rate} ⭐ ({ele.rating.count})</p>
                    <div className="btn">
                        <button disabled>Buy Now</button>
                        <button onClick={() => handleCart(ele)}>Add To Cart</button>
                    </div>
                </section>
            ))}
        </section>
    );
}

export default Home;
