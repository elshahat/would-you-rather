import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from "react-redux";
import { setAuthedUser } from "../../redux/actions/authedUser";

const User = ({ userData, dispatch }) => {
    let history = useHistory();

    const handleLogout = () => {
        dispatch(setAuthedUser(null));
        history.push('/');
    }

    return (
        <div className="header__user">
            <div className="user-data">
                {userData.avatarURL && <div className="user-data__avatar">
                    <img src={userData.avatarURL} alt={userData.name}/>
                </div>}
                <div className="user-data__name">Hi {userData.name}!</div>
            </div>
            <div className="logout" onClick={() => handleLogout()}>Logout</div>
        </div>
    )
}

export default connect()(User);
