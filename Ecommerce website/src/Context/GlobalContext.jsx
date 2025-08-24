// src/Context/GlobalContext.jsx
import React, { createContext, useEffect, useState } from 'react';

export const GlobalVar = createContext();

function GlobalContext({ children }) {
    const [cartData, setCartData] = useState(() => {
        const storedData = localStorage.getItem('cart');
        return storedData ? JSON.parse(storedData) : [];
    });

    const [product, setProduct] = useState([]);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartData));
    }, [cartData]);

    return (
        <GlobalVar.Provider value={{ cartData, setCartData, product, setProduct }}>
            {children}
        </GlobalVar.Provider>
    );
}

export default GlobalContext;
