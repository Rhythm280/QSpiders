import React, { useContext, useEffect, useState } from 'react'
import NavBar from '../component/NavBar'
import { Outlet, Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    )
}

export default Home

