import React from 'react'
import { useRef } from 'react'

function FormPage() {
    const userRef = useRef();
    const mailRef = useRef();
    const passRef = useRef();
    const handleFormData = (e) => {
        e.preventDefault();
        console.log(userRef.current.value)
        console.log(mailRef.current.value)
        console.log(passRef.current.value)
    }
    return (
        <section>
            <form onSubmit={handleFormData} className='form'>
                <h2>Form</h2>v 
                <div className="user">
                    <label htmlFor="user">Username: </label>
                    <input type="text" name='user' id='mail' ref={userRef} />
                </div>
                <div className="mail">
                    <label htmlFor="mail">E-Mail: </label>
                    <input type="email" name="mail" id="mail" ref={mailRef} />
                </div>
                <div className="password">
                    <label htmlFor="pass">Password: </label>
                    <input type="password" name="pass" id="pass" ref={passRef} />
                </div>
                <button>Submit</button>
            </form>
        </section>
    )
}

export default FormPage
