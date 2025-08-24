import { useContext } from 'react';
import { GlobalVar } from './globalContext/GlobalContext';
import Home from './components/Home';
import Cart from './components/Cart';
import NavBar from './components/NavBar';
import SignIn from './components/SignIn';
import LogIn from './components/LogIn';

function App() {
  const { cartPanel, isLogin, isSignup } = useContext(GlobalVar);

  return (
    <>
      {isLogin && <LogIn />}
      {isSignup && <SignIn />}
      {cartPanel && <Cart />}
      <NavBar />
      <Home />
    </>
  );
}

export default App;
