import React from 'react';
import { connect } from 'react-redux';
import '../assets/css/leader-board.css';

const LeaderBoard = ({ users }) => {
    return (
        <div className="leader-board">
            <h1>Leader Board</h1>

            <div className="leader-board__data">
                {users.map((user) => (
                    <div className="leaderboard-item" key={user.id}>
                        <div className="leaderboard-item__avatar">
                            <img src={user.avatarURL} alt={user.name}/>
                        </div>
                        <div className="leaderboard-item__details">
                            <h4 className="name">{user.name}</h4>
                            <div className="questions">Answered questions: <span>{user.answersNo}</span></div>
                            <div className="questions">Added questions: <span>{user.questionsNo}</span></div>
                        </div>
                        <div className="leaderboard-item__score">
                            <div className="title">Total score</div>
                            <div className="score">{user.answersNo + user.questionsNo}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = ({ users }) => {
    const leaderBoardUsers = Object.values(users).map((user) => (
        Object.assign({}, user, {
            answersNo: Object.keys(user.answers).length,
            questionsNo: user.questions.length
        })
    ));

    return {
        users: leaderBoardUsers.sort((a, b) => (b.answersNo + b.questionsNo) - (a.answersNo + a.questionsNo))
    }
}

export default connect(mapStateToProps)(LeaderBoard);
