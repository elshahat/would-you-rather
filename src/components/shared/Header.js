import React from 'react';
import './Header.css';
import Nav from "./Nav";
import User from "./User";
import { connect } from "react-redux";

const Header = ({ authedUser, users }) => {
    return (
        <div className="header p-4">
            <Nav/>
            {authedUser !== null && <User userData={users[authedUser]}/>}
        </div>
    )
}

const mapStateToProps = ({ authedUser, users }) => ({ authedUser, users });

export default connect(mapStateToProps)(Header);
