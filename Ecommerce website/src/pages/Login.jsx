import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    console.log(formData)
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { data } = await axios.get("http://localhost:8000/user");
        const found = data.find((ele) => ele.email === formData.email && ele.password == formData.password);
        if (found) {
            navigate("/home");
        } else {
            alert("Invalid email or password");
        }
    };
    return (
        <section>
            <form onSubmit={handleSubmit}>
                <div className="user">
                    <label htmlFor="email">email: </label>
                    <input type="email" name='email' placeholder='email' value={formData.email} onChange={handleChange} required />
                </div>
                <div className="password">
                    <label htmlFor="pass">password: </label>
                    <input type="password" name='password' value={formData.password} placeholder='password' onChange={handleChange} required />
                </div>
                <button type="submit">login up</button>
            </form>
        </section>
    )
}

export default Login
