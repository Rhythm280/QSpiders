import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalVar } from '../globalContext/GlobalContext'
import { forwardRef } from 'react';

const NavBar = forwardRef(({data}, ref) => {

    const {userLogin, setUserLogin} = useContext(GlobalVar);
    const navComponent = ["Home", "Products", "Category", "About us", "contact us"]
    console.log(ref)
    return (
        <nav ref = {ref}>
            <h1>Fashion</h1>
            <ul>
                {navComponent.map((ele, idx) => (
                    <li key={idx}>{ele}</li>
                ))}
            </ul>
            {/* <input type="search" name="searrch" id="search" placeholder='search....' /> // passing the ref with the help of props */}
            {!userLogin && <div className="btn">
                <Link className='button' to={"/home/cart"}>Cart</Link>
                <Link className='button' to={"/signup"}>Sign up</Link>
                <Link className='button' to={"/login"}>Login</Link>
            </div>}
            {userLogin && <div className="btn">
                <Link className='button' to={"/home/cart"}>Cart</Link>
                <Link className='button' onClick={() => {setUserLogin(null)}}>Log Out</Link>
            </div>}
        <button onClick={data}>click me</button>
        </nav>
    )
})

export default NavBar
