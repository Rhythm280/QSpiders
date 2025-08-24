import React from 'react'
import { Link } from 'react-router-dom';

function NavBar() {

    const navComponent = ["Home", "Products", "About", "Contact"];
    return (
        <nav>
            <h1>Fashion</h1>
            <ul>
                {navComponent.map((ele, idx) => (
                    <li key={idx}>{ele}</li>
                ))}
            </ul>
            <input type="search" name="searrch" id="search" placeholder='search....' />
            <div className="btn">
                <Link className='button' to={"/home/cart"}>Cart</Link>
                <Link className='button' to={"/signup"}>Sign up</Link>
                <Link className='button' to={"/login"}>Login</Link>
            </div>
        </nav>
    )
}

export default NavBar
