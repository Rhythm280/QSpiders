import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalVar } from '../globalContext/GlobalContext'

function NavBar() {
    const { isAuthenticated, logoutUser, setCartPanel, cartPanel } = useContext(GlobalVar);
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src="https://qspiders.com/_nuxt/adminqspiders.CaRbyeaD.svg" alt="QSpiders Logo" />
            </div>
            <ul className="navbar-links">
                <li><Link to="/home/allcourses">All Courses</Link></li>
                <li><Link to="/home/offlinecourses">Offline Centers</Link></li>
                <li><Link to="/home/onlinecourses">Online Courses</Link></li>
                <li><Link to="/home/corporatetraining">Corporate Training</Link></li>
                <li><Link to="/home/hirefromus">Hire From Us</Link></li>
                <li><Link to="/home/placement">Placements</Link></li>
                <li><Link to="/home/contact">Contact Us</Link></li>
            </ul>
            <div className="btn">
                {isAuthenticated && (
                    <div>
                        <Link to="/cart">Cart</Link>
                        <button onClick={logoutUser}>Logout</button>
                    </div>
                )}
                {!isAuthenticated && (
                    <>
                        <Link to="/login">Log in</Link>
                        <Link to="/signup">Sign up</Link>
                    </>
                )}
            </div>
        </nav>
    )
}

export default NavBar
