import React, { createContext, useEffect, useState } from 'react'
import axios from './../../node_modules/axios/lib/axios';

export const GlobalVar = createContext();

function GlobalContext({ children }) {
    const [courses, setCourses] = useState([]);
    const [cart, setCart] = useState([]);
    const [credentials, setCredentials] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [courseRes] = await Promise.all([
                    axios.get("https://backend-8b0tk9i1w-deepak-kumars-projects-e6b882e9.vercel.app/api/courses")
                ]);

                setCourses(courseRes.data || []);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <GlobalVar.Provider value={{ courses, cart, credentials, loading, setCart }}>
            {children}
        </GlobalVar.Provider>
    )
}

export default GlobalContext
