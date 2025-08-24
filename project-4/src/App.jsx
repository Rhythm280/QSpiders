import { useState } from 'react'
import SignUp from './components/SignUp'
import LogIn from './components/LogIn'
import NavBar from './components/NavBar'
import UpdateProduct from './components/UpdateProduct';
import UpdateUser from './components/UpdateUser';
import Home from './components/Home';
import FormPage from './components/FormPage';

function App() {
  const [isLogin, setLogin] = useState(false);
  const [isSignup, setSignup] = useState(false);
  const [isUpdateUser, setUpdateUser] =  useState(false);
  const [isUpdateProduct, setUpdateProduct] =  useState(false);

  return (
    <>
      {/* <NavBar login={{ isLogin, setLogin }} signup={{ isSignup, setSignup }} product = {{isUpdateProduct, setUpdateProduct}} user = {{isUpdateUser, setUpdateUser}} />
      {isSignup && (<SignUp signup={{ isSignup, setSignup }} login={{ isLogin, setLogin }} />)}
      {isLogin && (<LogIn login={{ isLogin, setLogin }} signup={{ isSignup, setSignup }} />)}
      {isUpdateProduct && (<UpdateProduct login={{ isLogin, setLogin }} signup={{ isSignup, setSignup }} product = {{isUpdateProduct, setUpdateProduct}} />)}
      {isUpdateUser && (<UpdateUser user = {{isUpdateUser, setUpdateUser}} login={{ isLogin, setLogin }} signup={{ isSignup, setSignup }} />)} */}
      {/* <Home /> */}
      <FormPage />
    </>
  )
}

export default App