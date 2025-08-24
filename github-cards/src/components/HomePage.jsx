import React from 'react'
import data from '../data.json'

function HomePage () {
    return (
        <section>
            {data.map((user) => {
                return (
                    <div className="card">
                        <img className="avatar" src={user.avatar_url} alt={`${user.login}'s avatar`} />
                        <a className="username" href={user.html_url} target="_blank" rel="noopener noreferrer">
                            {user.login}
                        </a>
                        <div className="info">ID: {user.id}</div>
                        <div className="info">Type: {user.type}</div>
                        <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                            <button>View Profile</button>
                        </a>
                    </div>
                )
            })}
        </section>
    )
}

export default HomePage
