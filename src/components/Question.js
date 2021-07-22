import React from 'react';
import { connect } from 'react-redux';
import PageNotFound from './PageNotFound';
import AnswerQuestion from "./AnswerQuestion";

const Question = ({ id, questions }) => {
    const question = questions[id];

    if (question === undefined) {
        return <PageNotFound/>
    }

    return <AnswerQuestion id={id}/>
}

const mapStateToProps = ({ authedUser, questions }, props) => {
    const { id } = props.match.params;
    return { id, questions }
}

export default connect(mapStateToProps)(Question);
