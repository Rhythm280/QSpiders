import React from 'react'
import { useContext } from 'react';
import { GlobalVar } from '../globalContext/GlobalContext';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


function Product() {
    const navigate = useNavigate();
    const { cartData, setCartData, userLogin, setUserLogin } = useContext(GlobalVar);
    const [product, setProduct] = useState([]);

    const fetchData = async () => {
        const { data } = await axios.get("http://localhost:8000/products")
        // console.log(data); // it will return us an object
        setProduct(data);
    }

    useEffect(() => {
        fetchData();
    }, []) // it is used to handle the side effect of the hooks.


    const handleCart = (product) => {
        const alreadyExist = cartData.find((ele, i) => ele.id == product.id);
        if (alreadyExist) {
            const updatedCart = cartData.map((item) =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
            setCartData(updatedCart);
            localStorage.setItem("cart", JSON.stringify(updatedCart));
        } else {
            const newCart = [...cartData, { ...product, quantity: 1 }];
            setCartData(newCart);
            localStorage.setItem("cart", JSON.stringify(newCart));
        }

        toast.success('Successfully Added');
    }

    console.log(cartData)

    return (
        <section className="cards">
            {product.map((ele) => {
                return (
                    <div className="card" key={ele.id}>
                        <img src={ele.images[0]} alt={ele.title} />
                        <h1>{ele.title}</h1>
                        <p><b>Brand:</b> {ele.brand}</p>
                        <p><b>Category:</b> {ele.category}</p>
                        <p><b>Price:</b> ${ele.price}</p>
                        <p><b>Rating:</b> {ele.rating}⭐</p>
                        {userLogin?.role == "admin" ? <div className="btn">
                            <button onClick={() => { navigate(`/viewmore/${ele.id}`, { state: ele }) }}>View More</button>
                            <button>Update</button>
                        </div> : <div className="btn">
                            <button onClick={() => { handleCart(ele) }}>Add to cart</button>
                            <button>Buy Now</button>
                        </div>}
                    </div>
                );
            })}
        </section>
    )
}

export default Product
