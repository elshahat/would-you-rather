import { showLoading, hideLoading } from 'react-redux-loading';
import { getInitialData } from '../../utils/api';
import { getUsers } from './users';
import { receiveQuestions } from './questions';

export const handleInitialData = () => (dispatch) => {
    dispatch(showLoading());

    getInitialData().then(({ users, questions }) => {
        dispatch(getUsers(users));
        dispatch(receiveQuestions(questions));
    }).finally(() => {
        dispatch(hideLoading());
    });
}
