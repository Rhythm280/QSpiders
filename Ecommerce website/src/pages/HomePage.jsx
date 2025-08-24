import { useContext, useEffect } from 'react'
import { GlobalVar } from '../Context/GlobalContext';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import axios from 'axios';

function HomePage() {
    const { cartData, setCartData, product, setProduct } = useContext(GlobalVar);

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
            const filterData = cartData.filter((ele, i) => ele.id !== product.id)
            setCartData([...filterData, { ...alreadyExist, quantity: alreadyExist.quantity + 1 }]);
            localStorage.setItem("cart", JSON.stringify(cartData));
        } else {
            localStorage.setItem("cart", JSON.stringify([...cartData, { ...product, quantity: 1 }]));
            setCartData([...cartData, { ...product, quantity: 1 }]);
        }
        toast.success('Successfully Added');
    }

    return (
        <main>
            <NavBar />
            <Outlet />
            <section className='cards'>
                {product.map((ele) => {
                    return (
                        <div className="card" key={ele.id}>
                            <img src={ele.images[0]} alt={ele.title} />
                            <h1>{ele.title}</h1>
                            <p><b>Brand:</b> {ele.brand}</p>
                            <p><b>Category:</b> {ele.category}</p>
                            <p><b>Price:</b> ${ele.price}</p>
                            <p><b>Rating:</b> {ele.rating}⭐</p>
                            <div className="btn">
                                <button onClick={() => { handleCart(ele) }}>Add to cart</button>
                                <button>Buy Now</button>
                            </div>
                        </div>
                    );
                })}
            </section>
        </main>
    )
}

export default HomePage
