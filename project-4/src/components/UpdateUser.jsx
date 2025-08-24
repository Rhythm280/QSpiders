import React from 'react'

function UpdateUser({ user, login, signup }) {
    const { isUpdateUser, setUpdateUser } = user
    const { isLogin, setLogin } = login
    const { isSignup, setSignup } = signup

    // const [updateUser, setUpdateUser]
    return (
        <div className="update-user-container" onClick={(e) => {e.stopPropagation(); setUpdateUser(false)}}>
            <form onClick={(e) => {e.stopPropagation(); setUpdateUser(true)}}>
                <div>
                    <label>Name:</label>
                    <input name="name" type="text" required />
                </div>

                <div>
                    <label>Email:</label>
                    <input name="email" type="email" required />
                </div>note

                <div>
                    <label>Username:</label>
                    <input name="username" type="text" required />
                </div>

                <div>
                    <label>Password:</label>
                    <input name="password" type="password" required />
                </div>

                <button className='btn' type="submit">Save Changes</button>
            </form>
        </div>
    )
}

export default UpdateUser
