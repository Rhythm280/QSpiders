import React, { createContext, useState, useEffect } from 'react';
import data from '../data.json';

export const GlobalVar = createContext(); // naming convention fix: capitalize context

const GlobalContext = ({ children }) => {
    const [cartData, setCartData] = useState(() => JSON.parse(localStorage.getItem('cart')) || []);
    const [cardData, setCardData] = useState(data);
    const [cartPanel, setCartPanel] = useState(false);
    const [isLogin, setLogin] = useState(false);
    const [isSignup, setSignup] = useState(false);
    const [isBuyNowCard, setBuyNowCard] = useState(false);
    const [isBuyNowCart, setBuyNowCart] = useState(false);
    const [paymentPage, setPaymentPage] = useState(false);
    const { Provider } = GlobalVar
    return (
        <Provider
            value={{
                cardData,
                setCardData,
                cartData,
                setCartData,
                cartPanel,
                setCartPanel,
                isLogin,
                setLogin,
                isSignup,
                setSignup,
                isBuyNowCard,
                setBuyNowCard,
                isBuyNowCart,
                setBuyNowCart,
                paymentPage,
                setPaymentPage
            }}
        >
            {children}
        </Provider>
    );
};

export default GlobalContext;
