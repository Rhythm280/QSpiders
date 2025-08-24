import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage() {
    return (
        <div>
            <h1>This is Landing page</h1>
            <Link to={"/home"}>Get Started</Link>
            {/* it is used to link one page to another in this there is to attrifute we will pass the address in string format */}
        </div>
    )
}

export default LandingPage
