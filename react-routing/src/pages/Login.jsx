import axios from 'axios';
import React, { useState } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalVar } from '../globalContext/GlobalContext';
import toast from 'react-hot-toast';

function Login() {
    const navigate = useNavigate();
    const { userLogin, setUserLogin } = useContext(GlobalVar);
    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleLogin = async () => {
        const { data } = await axios.get("http://localhost:8000/user");
        const foundUser = data.find(
            (ele) => ele.email === formData.email && ele.password === formData.password
        );
        setUserLogin(foundUser);

        if (foundUser) {
            localStorage.setItem("user", JSON.stringify(foundUser));
            navigate("/home");
            console.log(foundUser)
            toast.success("Login Successfull");
        } else {
            alert("Invalid email or password");
        }
    };
    console.log(userLogin)

    return (
        <section className='form'>
            <div className='login'>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <button onClick={handleLogin}>Login</button>
            </div>
        </section>
    );
}

export default Login;
