import React from 'react'
import { Link } from 'react-router-dom';

function LandingPage() {
    return (
        <section>
            <h1>Welcome to Our E-commerce Store</h1>
            <p>Discover the best products at unbeatable prices!</p>
            <Link to="/home">Home page</Link>
        </section>
    )
}

export default LandingPage
