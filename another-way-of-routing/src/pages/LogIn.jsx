import axios from 'axios/unsafe/axios.js';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function LonIn() {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const navigate = useNavigate();
    const login = async (e) => {
        e.preventDefault();
        const response = await axios.post("https://backend-8b0tk9i1w-deepak-kumars-projects-e6b882e9.vercel.app/api/auth/login", formData)
        console.log(response)
        if(response.status == 200) {
            toast.success("account created successfully")
            setTimeout(() => {
                navigate(-1)
            }, 1000)
        }
    }
    return (
        <section className="form">
            <div className="login">
                <form onSubmit={login}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email" 
                        id="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                    />

                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        required
                    />

                    <button type="submit">Login</button>
                </form>
            </div>
        </section>

    );
}

export default LonIn
