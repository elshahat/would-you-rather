import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleAddQuestion } from "../redux/actions/questions";
import { Redirect } from 'react-router-dom';
import "../assets/css/new-question.css";

class NewQuestion extends Component {
    state = {
        optionOne: '',
        optionTwo: '',
        toHome: false
    }

    handleOptionOne = (event) => {
        this.setState({
            optionOne: event.target.value
        });
    }

    handleOptionTwo = (event) => {
        this.setState({
            optionTwo: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const { optionOne, optionTwo } = this.state;
        const { dispatch } = this.props;

        if (optionOne === '' || optionTwo === '') {
            alert('The two options are required!')
        } else {
            dispatch(handleAddQuestion(optionOne, optionTwo));

            this.setState(() => ({
                optionOne: '',
                optionTwo: '',
                toHome: true
            }));
        }
    }

    render() {
        const { optionOne, optionTwo, toHome } = this.state;

        if (toHome === true) {
            return <Redirect to="/"/>
        }

        const checkInputs = () => {
            if (optionOne === '' || optionTwo === '') {
                return true;
            }
        }

        return (
            <div className="new-question">
                <div className="new-question__header p-4">
                    <h1>Create New Question</h1>
                </div>
                <div className="new-question__form p-4">
                    <div className="form-head">Would you rather...</div>
                    <div className="form-input">
                        <input type="text" onChange={this.handleOptionOne} placeholder="Type option one text here..."/>
                    </div>
                    <div className="form-input">
                        <input type="text" onChange={this.handleOptionTwo} placeholder="Type option two text here..."/>
                    </div>
                    <button className="submit-question" type="submit" onClick={this.handleSubmit} disabled={checkInputs()}>Add Question</button>
                </div>
            </div>
        )
    }
}

export default connect()(NewQuestion);
