import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Logo from '../assets/images/would-you-rather.png';
import '../assets/css/login.css';
import { setAuthedUser } from "../redux/actions/authedUser";
import { Redirect } from 'react-router-dom';

const Login = ({ users, location, dispatch }) => {
    const [isLogged, setIsLogged] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

    useEffect(() => {
        const { from } = location || { from: { pathname: '/' } }

        if (isLogged) {
            return <Redirect to={from}/>
        }
    }, [isLogged, location]);

    const handleLogin = (id) => {
        dispatch(setAuthedUser(id));
        setIsLogged(true);
    }

    return (
        <div className="login">
            <div className="login__header p-4">
                <h1>Welcome to "Would You Rather" App!</h1>
                <p>Please login to continue</p>
            </div>
            <div className="login__form p-4">
                <div className="logo">
                    <img src={Logo} alt="Would you rather"/>
                </div>
                <div className="select-user" onMouseOver={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
                    <div className="select-user__label">
                        {Object.keys(users).length === 0 ? 'Loading...' : 'Select a username to login...'}
                    </div>
                    <div className={`select-user__dropdown${showDropdown ? ' select-user__dropdown--visible' : ''}`}>
                        <ul>
                            {Object.keys(users).map((user) => (
                                <li key={users[user].id} onClick={() => handleLogin(users[user].id)}>
                                    {users[user].avatarURL && <div className="user-avatar">
                                        <img src={users[user].avatarURL} alt={users[user].name}/>
                                    </div>}
                                    <div className="username">{users[user].name}</div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({ users }) => ({ users });

export default connect(mapStateToProps)(Login)
