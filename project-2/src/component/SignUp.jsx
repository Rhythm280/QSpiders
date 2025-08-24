import React from 'react'
import { useState } from 'react';

function SignUp({ signup, login }) {

    const { isSignup, setSignup } = signup;
    const { isLogin, setLogin } = login;

    const [ signUpData,setSigupData]=useState({
        "email":"",
        "username":"",
        "password":""
    })

const onDataChnage=(e)=>{
    const {name,value}=e.target

    setSigupData({...signUpData,[name]:value});

    
}
console.log(signUpData)
    return (
        <section className='SignUp' onClick={(e) => { e.stopPropagation(); setSignup(false); }}>
            <article className="signup-section" onClick={(e) => { e.stopPropagation(); }}>
                <h1>Sign-up</h1>
                <div>
                    <label htmlFor="email">E-Mail</label>
                    <input type="email" name="email" id="email"  onChange={onDataChnage}/>
                </div>
                <div>
                    <label htmlFor="uname">Username</label>
                    <input type="text" name="username" id="uname" onChange={onDataChnage} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" onChange={onDataChnage} />
                </div>
                <button className='btn'>Sign-Up</button>
                <p>Already have an account? <button onClick={() => { setLogin(true); setSignup(false) }}>Log-In</button></p>
            </article>
        </section>
    )
}

export default SignUp
