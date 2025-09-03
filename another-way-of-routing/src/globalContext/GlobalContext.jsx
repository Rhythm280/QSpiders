import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

export const GlobalVar = createContext();

function GlobalContext({ children }) {
    const [cartPanel, setCartPanel] = useState(false);
    const [courses, setCourses] = useState([]);
    const [cart, setCart] = useState([]);
    const [credentials, setCredentials] = useState([]);
    const [userId, setUserId] = useState(null);
    const [token, setToken] = useState(() => {
        try {
            return localStorage.getItem('token') || '';
        } catch {
            return '';
        }
    });

    useEffect(() => {
        if(token) {
            const decriptToken = jwtDecode(token);
            setUserId(decriptToken.id);
        }
    })
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const coursesPromise = axios.get("https://backend-8b0tk9i1w-deepak-kumars-projects-e6b882e9.vercel.app/api/courses");
                const cartPromise = token
                    ? axios.get(
                        `https://backend-nzyc96caw-deepak-kumars-projects-e6b882e9.vercel.app/api/cart/${userId}`
                    )
                    : Promise.resolve({ data: [] });

                const [courseRes, cartRes] = await Promise.all([coursesPromise, cartPromise]);

                setCourses(courseRes?.data || []);
                setCart(cartRes?.data || []);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [token]);

    const loginUser = (newToken) => {
        try {
            localStorage.setItem('token', newToken);
        } catch {}
        setToken(newToken);
    };

    const logoutUser = () => {
        try {
            localStorage.removeItem('token');
        } catch {}
        setToken('');
        setCart([]);
    };

    const isAuthenticated = Boolean(token);

    return (
        <GlobalVar.Provider value={{ courses, cart, credentials, loading, setCart, token, isAuthenticated, loginUser, logoutUser, setCartPanel, cartPanel }}>
            {children}
        </GlobalVar.Provider>
    )
}

export default GlobalContext
