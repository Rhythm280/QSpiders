import React from 'react'

function NavBar({signup, login, product, user}) {

    const { isSignup, setSignup } = signup;
    const { isLogin, setLogin  } = login;
    const {isUpdateUser, setUpdateUser} = user
    const {isUpdateProduct, setUpdateProduct} = product

    const navMenus = ["Home", "Products", "About us", "Contact us"];

    return (
        <nav>
            <h1>Fashion</h1>
            <ul>
                {navMenus.map((ele) => <li>{ele}</li>)}
            </ul>
            <input type="search" name="Search" id="Search" placeholder='Search....' />
            <button className="btn" onClick={() => { setLogin(!isLogin); setSignup(false); }}>LogIn</button>
            <button className="btn" onClick={() => { setSignup(true); setLogin(false); }} >SignUp</button>
            <button className="btn" onClick={() => { setUpdateUser(true); setLogin(false); setSignup(false) }} >UpdateUser</button>
            <button className="btn" onClick={() => { setUpdateProduct(true); setLogin(false); setLogin(false) }} >UpdateProduct</button>
        </nav>
    )
}

export default NavBar
