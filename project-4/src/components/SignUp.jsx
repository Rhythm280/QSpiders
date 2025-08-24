import React, { useState } from 'react'

function SignUp({signup, login}) {
    const [formData, setFormData] = useState({
        email: "",
        username: "",
        password: ""
    })

    const handleChange = (e) => {
        // console.log(e) // this will return us an cross browser object.
        // e.target is an object in which we have many more keys but we want only 2: name, value
        const {name, value} = e.target
        // console.log(name, value)
        setFormData({...formData, [name]: value});
    }
        console.log(formData);


    const { isSignup, setSignup } = signup;
    const { isLogin, setLogin } = login;
    return (
        <form className='SignUp' onClick={(e) => { e.stopPropagation(); setSignup(false); }}>
            <article className="signup-section" onClick={(e) => { e.stopPropagation(); }}>
                <h1>Sign-up</h1>
                <div>
                    <label htmlFor="email">E-Mail</label>
                    {/* onchange event is used to fetch the data from the input field because this event will get trigger when ever the value inside the inpur field is getting changeg */}
                    <input type="email" name="email" id="email" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="uname">Username</label>
                    <input typ e="text" name="username" id="uname" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" onChange={handleChange} />
                </div>
                <button className='btn'>Sign-Up</button>
                <p>Already have an account? <button onClick={() => { setLogin(true); setSignup(false) }}>Log-In</button></p>
            </article>
        </form>
    )
}

export default SignUp
