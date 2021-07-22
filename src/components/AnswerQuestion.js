import React, { useState } from 'react';
import { handleAddQuestionAnswer } from "../redux/actions/questions";
import { connect } from "react-redux";
import ResultCard from "./ResultCard";

const AnswerQuestion = ({ question, users, authedUser, addQuestionAnswer, dispatch }) => {
    const [selectedOption, setSelectedOption] = useState('');
    const [showResults, setShowResults] = useState(false);

    const submitAnswer = () => {

        console.log({
            authedUser,
            qid: question.id,
            answer: selectedOption
        })

        if (selectedOption === '') {
            alert('You have to select an option to continue!')
        } else {
            dispatch(handleAddQuestionAnswer({
                authedUser,
                qid: question.id,
                answer: selectedOption
            }));

            setShowResults(true);
        }
    }

    if (showResults === true) {
        return <ResultCard id={question.id}/>
    }

    return (
        <div className="question-card">
            <div className="question-card__head p-4">{authedUser === question.author ? 'You asked:' : `${users[question.author].name} asks:`}</div>
            <div className="question-card__content p-4">
                <div className="avatar">
                    <img src={users[question.author].avatarURL} alt={users[question.author].name}/>
                </div>
                <div className="question-options">
                    <div className="title">Would you rather...</div>
                    <div className="options options--answer">
                        <ul>
                            <li
                                className={selectedOption === 'optionOne' ? 'active' : ''}
                                onClick={() => setSelectedOption('optionOne')}>{question.optionOne.text}</li>
                            <li
                                className={selectedOption === 'optionTwo' ? 'active' : ''}
                                onClick={() => setSelectedOption('optionTwo')}>{question.optionTwo.text}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="question-card__action pb-4">
                <button disabled={!selectedOption} onClick={() => submitAnswer()}>Submit Answer</button>
            </div>
        </div>
    )
}

const mapStateToProps = ({ authedUser, questions, users }, { id }) => {
    const question = questions[id];
    return { question, users, authedUser };
}

export default connect(mapStateToProps)(AnswerQuestion);
