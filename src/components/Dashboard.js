import React, { useState } from 'react';
import { connect } from 'react-redux';
import '../assets/css/dashboard.css';
import QuestionCard from "./QuestionCard";
import ResultCard from "./ResultCard";

const Dashboard = ({ answeredQuestions, unansweredQuestions }) => {
    const [visibleQuestions, setVisibleQuestions] = useState("UnansweredQuestions");
    return (
        <div className="dashboard">
            <div className="dashboard__sorting">
                <ul>
                    <li
                        className={visibleQuestions === 'UnansweredQuestions' ? 'active' : ''}
                        onClick={() => setVisibleQuestions('UnansweredQuestions')}>Unanswered Questions
                    </li>
                    <li
                        className={visibleQuestions === 'AnsweredQuestions' ? 'active' : ''}
                        onClick={() => setVisibleQuestions('AnsweredQuestions')}>Answered Questions
                    </li>
                </ul>
            </div>

            <div className="dashboard__questions">
                <div className='questions-list'>
                    {visibleQuestions === 'UnansweredQuestions' && unansweredQuestions.length > 0 && unansweredQuestions.map((id) => (
                        <QuestionCard key={id} id={id}/>
                    ))}

                    {(visibleQuestions === 'UnansweredQuestions' && unansweredQuestions.length === 0) &&
                    <div className="no-questions">No more unanswered questions!</div>}

                    {(visibleQuestions === 'AnsweredQuestions') && answeredQuestions.length > 0 && answeredQuestions.map((id) => (
                        <ResultCard key={id} id={id}/>
                    ))}

                    {(visibleQuestions === 'AnsweredQuestions' && answeredQuestions.length === 0) &&
                    <div className="no-questions">No answered questions to show!</div>}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({ authedUser, questions }) => {
    const unansweredQuestions = Object.values(questions).filter((q) =>
        !q.optionOne.votes.includes(authedUser) &&
        !q.optionTwo.votes.includes(authedUser));

    const answeredQuestions = Object.values(questions).filter((q) =>
        q.optionOne.votes.includes(authedUser) ||
        q.optionTwo.votes.includes(authedUser));

    const sortQuestions = (questions) => {
        return Object.values(questions).sort((a, b) => b.timestamp - a.timestamp).map((q) => q.id);
    }

    return {
        authedUser,
        answeredQuestions: sortQuestions(answeredQuestions),
        unansweredQuestions: sortQuestions(unansweredQuestions)
    }
}

export default connect(mapStateToProps)(Dashboard);
