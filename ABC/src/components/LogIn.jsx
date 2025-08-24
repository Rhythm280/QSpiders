import React, { useContext } from 'react'
import { GlobalVar } from './../globalContext/GlobalContext';

function LogIn() {
    const { setLogin, setSignup } = useContext(GlobalVar);

    return (
        <section className='LogIn' onClick={(e) => { e.stopPropagation(); setLogin(false); }}>
            <article className="login-section" onClick={(e) => { e.stopPropagation(); setLogin(true) }}>
                <h1>LogIn</h1>
                <div>
                    <label htmlFor="uname">username</label>
                    <input type="text" name="username" id="uname" />
                </div>
                <div>
                    <label htmlFor="password">password</label>
                    <input type="text" name="password" id="password" />
                </div>
                <button className='btn'>LogIn</button>
                <p>Don't have an account? <button onClick={(e) => { e.stopPropagation(); setSignup(true); setLogin(false) }}>Sign-Up</button></p>
            </article>
        </section>
    )
}

export default LogIn
