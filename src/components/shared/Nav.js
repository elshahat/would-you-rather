import React from 'react';
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <div className="header__nav">
            <ul>
                <li>
                    <NavLink exact to="/" activeClassName="active">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/new-question" activeClassName="active">New Question</NavLink>
                </li>
                <li>
                    <NavLink to="/leader-board" activeClassName="active">Leader Board</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Nav;
