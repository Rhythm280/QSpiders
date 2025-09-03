import axios from 'axios';
import React, { useContext, useState } from 'react'
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { GlobalVar } from '../globalContext/GlobalContext';

function LogIn() {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const navigate = useNavigate();
    const { loginUser } = useContext(GlobalVar);
    const login = async (e) => {
        try {
            e.preventDefault();
            const response = await axios.post("https://backend-nzyc96caw-deepak-kumars-projects-e6b882e9.vercel.app/api/auth/login", formData)
            if (response.status === 200) {
                const token = response?.data?.token || response?.data?.data?.token || '';
                if (token) {
                    loginUser(token);
                }
                toast.success("Account logged in successfully")
                setTimeout(() => {
                    navigate(-1)
                }, 1000)
            }
            setFormData({ email: '', password: '' });
        } catch (error) {
            toast.error(error?.response?.data?.message || 'Login failed')
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

export default LogIn
