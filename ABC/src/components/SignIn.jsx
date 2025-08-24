import React, { useContext } from 'react'
import { GlobalVar } from '../globalContext/GlobalContext';

function SignIn() {
    const { setLogin, setSignup } = useContext(GlobalVar);
    return (
        <section className='SignUp' onClick={(e) => { e.stopPropagation(); setSignup(false); }}>
            <article className="signup-section" onClick={(e) => { e.stopPropagation(); setSignup(true); }}>
                <h1>Sign-up</h1>
                <div>
                    <label htmlFor="email">E-Mail</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div>
                    <label htmlFor="uname">Username</label>
                    <input type="text" name="username" id="uname" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                </div>
                <button className='btn'>Sign-Up</button>
                <p>Already have an account? <button onClick={(e) => { e.stopPropagation(); setLogin(true); setSignup(false); }}>Log-In</button></p>
            </article>
        </section>
    )
}

export default SignIn
