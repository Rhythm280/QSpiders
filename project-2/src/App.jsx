import { useState } from 'react';
import NavBar from './component/NavBar';
import HomePage from './component/HomePage';
import Cart from './component/Cart';
import LogIn from './component/LogIn';
import SignUp from './component/SignUp';
import PaymentPage from './component/PaymentPage';
import BuyNowFromCard from './component/BuyNowFromCard';
import BuyNowFromCart from './component/BuyNowFromCart';
import { Toaster } from 'react-hot-toast';

function App() {
    const [Data, setCardData] = useState(() => JSON.parse(localStorage.getItem('cart')) || []);
    const [cartPannel, setCartPannel] = useState(false);
    const [isLogin, setLogin] = useState(false);
    const [isSignup, setSignup] = useState(false);
    const [cartBuyNow, setCartBuyNow] = useState(false);
    const [cardBuyNow, setCardBuyNow] = useState(false);
    const [paymentPage, setPaymentPage] = useState(false);

    return (
        <>
            <Toaster position="bottom-center" reverseOrder={false} />
            {paymentPage && (<PaymentPage />)}
            {cardBuyNow && (<BuyNowFromCard />)}
            {cartBuyNow && (<BuyNowFromCart />)}
            {isSignup && (<SignUp signup={{ isSignup, setSignup }} login={{ isLogin, setLogin }} />)}
            {isLogin && (<LogIn login={{ isLogin, setLogin }} signup={{ isSignup, setSignup }} />)}
            {cartPannel && (<Cart data={{ cartPannel, setCartPannel }} cart={{ Data, setCardData }} payment={{paymentPage, setPaymentPage}} buynow = {{cartBuyNow, setCartBuyNow}} />)}
            <NavBar data={{ cartPannel, setCartPannel }} login={{ isLogin, setLogin }} signup={{ isSignup, setSignup }} />
            <HomePage cardData={{ Data, setCardData }} card={{cardBuyNow, setCardBuyNow}} payment={{paymentPage, setPaymentPage}} cart = {{cartBuyNow, setCartBuyNow}} />
        </>
    );
}

export default App;
