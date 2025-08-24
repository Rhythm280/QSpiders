import React, { useRef } from 'react';
import { FaCartShopping } from "react-icons/fa6";

function NavBar({  data, login, signup }) {
    const { isSignup, setSignup } = signup;
    const { cartPannel, setCartPannel } = data;
    const { isLoggedIn, setLogin } = login;

    const navRef = useRef();

    const list = ["Home", "products", "Categorys", "About", "Contact us"];

    return (
        <nav className='NavBar' ref={navRef}>
            <h1 className="logo">QSpiders</h1>
            <ul>
                {list.map((ele) => {
                    return <li key={ele}>{ele}</li>
                })}
            </ul>
            <div className="btn">
                <button onClick={() => setCartPannel(!cartPannel)}>
                    <FaCartShopping />
                </button>
                <button onClick={() => { setLogin(!isLoggedIn); setSignup(false); }}>
                    LogIn
                </button>
                <button onClick={() => {setSignup(true); setLogin(false);}}>SignUp</button>
            </div>
        </nav>
    );
}

export default NavBar;