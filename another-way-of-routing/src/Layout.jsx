import React, { useContext } from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Loader from './components/Loader';
import { GlobalVar } from './globalContext/GlobalContext';

function Layout() {
    const { loading } = useContext(GlobalVar);
    const navigation = useNavigation();
    const isRouting = navigation.state === 'loading';

    if (loading || isRouting) {
        return <Loader />
    }

    return (
        <>
            <Outlet />
        </>
    );
}

export default Layout;
