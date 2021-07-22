import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../assets/css/question-card.css';

const QuestionCard = ({ authedUser, question, users, id }) => {
    return (
        <div className="question-card">
            <div className="question-card__head p-4">{authedUser === question.author ? 'You asked:' : `${users[question.author].name} asks:`}</div>
            <div className="question-card__content p-4">
                <div className="avatar">
                    <img src={users[question.author].avatarURL} alt={users[question.author].name}/>
                </div>
                <div className="question-options">
                    <div className="title">Would you rather...</div>
                    <div className="options">
                        <ul>
                            <li>{question.optionOne.text}</li>
                            <li>{question.optionTwo.text}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="question-card__action pb-4">
                <Link to={`question/${id}`}>Vote for an option!</Link>
            </div>
        </div>
    )
}

const mapStateToProps = ({ authedUser, users, questions }, { id }) => {
    const question = questions[id];
    return { authedUser, question, users }
}

export default connect(mapStateToProps)(QuestionCard);
