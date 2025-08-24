import React, { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function Layout() {
    return (
        <>
            <Outlet />
        </>
    );
}

export default Layout;
