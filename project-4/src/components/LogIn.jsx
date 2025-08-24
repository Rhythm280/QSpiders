import React, { useState } from 'react'

function LogIn({login, signup}) {
    const [fromData, setFromData] = useState({
        username: "",
        password: ""
    })

    const handleClick = (e) => {
        const {name, value} = e.target
        setFromData({...fromData, [name]: value})
    }
    console.log(fromData)

    const { isLogin, setLogin } = login;
    const { isSignup, setSignup } = signup;
    return (
        <form className='LogIn' onClick={(e) => { e.stopPropagation(); setLogin(false); }}>
            <article className="login-section" onClick={(e) => { e.stopPropagation(); }}>
                <h1>LogIn</h1>
                <div>
                    <label htmlFor="uname">username</label>
                    <input type="text" name="username" id="uname" onChange={handleClick} />
                </div>
                <div>
                    <label htmlFor="password">password</label>
                    <input type="password" name="password" id="password" onChange={handleClick} />
                </div>
                <button className='btn'>LogIn</button>
                <p>Don't have an account? <button onClick={() => { setSignup(true); setLogin(false) }}>Sign-Up</button></p>
            </article>
        </form>
    )
}

export default LogIn
