import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const ResultCard = ({ authedUser, users, question, id }) => {
    const totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length;
    const optionOneTotalVotes = question.optionOne.votes.length;
    const optionTwoTotalVotes = question.optionTwo.votes.length;

    return (
        <div className="question-card">
            <div className="question-card__head p-4">{authedUser === question.author ? 'You asked:' : `${users[question.author].name} asks:`}</div>
            <div className="question-card__content p-4">
                <div className="avatar">
                    <img src={users[question.author].avatarURL} alt={users[question.author].name}/>
                </div>
                <div className="question-results">
                    <div className="title">Would you rather...</div>
                    <div className="options">
                        <div className="options__option">
                            <div className="title">{question.optionOne.text} {question.optionOne.votes.includes(authedUser) && <span>Your choice</span>}</div>
                            <div className="progress-bar">
                                <span>{`${((optionOneTotalVotes / totalVotes) * 100).toFixed(0)}%`}</span>
                                <div className="progress-bar__percent" style={{ width: `${(optionOneTotalVotes / totalVotes) * 100}%` }}/>
                            </div>
                            <div className="total-votes"><span>Total Votes:</span> {optionOneTotalVotes} out of {totalVotes} votes</div>
                        </div>
                        <div className="options__option">
                            <div className="title">{question.optionTwo.text} {question.optionTwo.votes.includes(authedUser) && <span>Your choice</span>}</div>
                            <div className="progress-bar">
                                <span>{`${((optionTwoTotalVotes / totalVotes) * 100).toFixed(0)}%`}</span>
                                <div className="progress-bar__percent" style={{ width: `${(optionTwoTotalVotes / totalVotes) * 100}%` }}/>
                            </div>
                            <div className="total-votes"><span>Total Votes:</span> {optionTwoTotalVotes} out of {totalVotes} votes</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
    const question = questions[id];

    return { authedUser, question, users };
}

export default connect(mapStateToProps)(ResultCard);
