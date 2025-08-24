import React, { useContext } from 'react';
import { FaCartShopping } from "react-icons/fa6";
import { GlobalVar } from '../globalContext/GlobalContext';

function NavBar() {
    const navMenus = ["Home", "Products", "About us", "Contact us"];

    const {
        cartPanel,
        setCartPanel,
        isLogin,
        setLogin,
        isSignup,
        setSignup
    } = useContext(GlobalVar);

    return (
        <nav>
            <h1>Fashion</h1>
            <ul>
                {navMenus.map((ele, index) => (
                    <li key={index}>{ele}</li>
                ))}
            </ul>
            <input type="search" name="Search" id="Search" placeholder='Search....' />
            <button className="btn" onClick={() => setCartPanel(!cartPanel)}>
                <FaCartShopping />
            </button>
            <button className="btn" onClick={() => { setLogin(!isLogin); setSignup(false); }}>
                LogIn
            </button>
            <button className="btn" onClick={() => { setSignup(true); setLogin(false); }}>
                SignUp
            </button>
        </nav>
    );
}

export default NavBar;
