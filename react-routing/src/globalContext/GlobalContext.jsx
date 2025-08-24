import React, { createContext, useState, useEffect } from "react";

export const GlobalVar = createContext(); // ✅ EXPORT this

function GlobalContext({ children }) {
    const [cartData, setCartData] = useState(() => {
        const localCart = localStorage.getItem("cart");
        return localCart ? JSON.parse(localCart) : [];
    });

    const [product, setProduct] = useState([]);
    const [userLogin, setUserLogin] = useState(null);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartData));
    }, [cartData]);

    return (
        <GlobalVar.Provider value={{ cartData, setCartData, product, setProduct, userLogin, setUserLogin }}>
            {children}
        </GlobalVar.Provider>
    );
}

export default GlobalContext;
