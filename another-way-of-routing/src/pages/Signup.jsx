import axios from 'axios/unsafe/axios.js';
import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const signup = async (e) => {
        e.preventDefault();
        const response = await axios.post("https://backend-8b0tk9i1w-deepak-kumars-projects-e6b882e9.vercel.app/api/auth/signup", formData)
        console.log(response)
        if(response.status == 201) {
            toast.success("account created successfully")
            setTimeout(() => {
                navigate(-1)
            }, 1000)
        }
    }

    return (
        <section className="form">
            <div className="login">
                <form onSubmit={signup}>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                        required
                    />

                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        required
                    />

                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Password"
                        required
                    />

                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </section>
    );
}

export default Signup
