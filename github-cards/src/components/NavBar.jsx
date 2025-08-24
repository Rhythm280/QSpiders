import React from 'react'

export default function NavBar() {
    const list = ["Pll request", "Issues", "Marketplace", "Export"]
    return (
        <nav className='NavBar'>
            <div class="logo">GitHub</div>
            <ul>
                {list.map((item, index) => (<li key={index}>{item}</li>))}
            </ul>

            <div class="search">
                <input type="text" placeholder="Search or jump to..." />
            </div>

            <div class="actions">
                <button>Sign in</button>
                <button>Sign up</button>
            </div>
        </nav>
    )
}
