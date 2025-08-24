import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './../pages/LandingPage';
import Home from '../pages/Home';
import Login from './../pages/Login';
import SignUp from './../pages/SignUp';
import Cart from '../component/Cart';
import Product from '../component/Product';
import Category from '../component/Category';
import ViewMore from '../component/ViewMore';

function GlobalRouting() {
    return (
        <BrowserRouter>
            {/* it is used to wrap all teh route components */}
            <Routes>
                {/* this is for every navigation component */}
                <Route path='/' element={<LandingPage />} />
                <Route path='/home' element={<Home />} >
                    <Route path='/home' element={<Product />} />
                    <Route path='/home/category' element={<Category />} />
                    <Route path='/home/cart' element={<Cart />} />
                </Route>
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/viewmore/:id' element={<ViewMore />} />
            </Routes>
        </BrowserRouter>
    )
}

export default GlobalRouting
