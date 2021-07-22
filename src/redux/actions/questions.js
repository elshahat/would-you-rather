import { saveQuestionAnswer, saveQuestion } from '../../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading';

export const GET_QUESTIONS = 'GET_QUESTIONS';
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER';
export const ADD_QUESTION = 'ADD_QUESTION';

export const receiveQuestions = (questions) => ({
    type: GET_QUESTIONS,
    questions
});

export const addQuestion = (question) => ({
    type: ADD_QUESTION,
    question
});

export const addQuestionAnswer = ({ authedUser, qid, answer }) => ({
    type: SAVE_QUESTION_ANSWER,
    authedUser,
    qid,
    answer
});

export const handleAddQuestion = (optionOneText, optionTwoText) => (dispatch, getState) => {
    const { authedUser: author } = getState();
    dispatch(showLoading());

    return saveQuestion({ optionOneText, optionTwoText, author }).then((question) => {
        dispatch(addQuestion(question));
    }).finally(() => {
        dispatch(hideLoading());
    });
}

export const handleAddQuestionAnswer = (info) => (dispatch) => {
    console.log(info);
    dispatch(showLoading());

    console.log(info);

    return saveQuestionAnswer(info).then(() => {
        dispatch(addQuestionAnswer(info));
    }).finally(() => {
        dispatch(hideLoading());
    });
}
