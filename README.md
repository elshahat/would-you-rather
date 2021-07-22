# Would You Rather Game

This project created for the Udacity React Nanodegree Program.

## Table of Contents

* [Project Summary](#project-summary)
* [Installation](#installation)
* [App Structure](#app-structure)
* [Backend Server](#backend-server)

## Project Summary

In the **Would You Rather** Project, students had to build a web app that lets a user play the “Would You Rather?” game. The game goes like this: A user is asked a question in the form: “Would you rather [option A] or [option B] ?”. Answering "neither" or "both" is against the rules.

For the **Would You Rather** App, we were given [a starter code](https://github.com/udacity/reactnd-project-would-you-rather-starter) - which consists only of **The _DATA.js** file, which represents a fake database and methods that let us access the app data.

The app is using React and Redux with react-redux, react-redux-loading, react-router-dom, redux-thunk packages. The complete list of dependencies can be found in the **package.json** file.

## Installation
1. Clone repository using:

   `git clone https://github.com/elshahat/would-you-rather`

2.  Install all dependencies:

    `npm install`

3. Run application:

   `npm start`

4. After running npm start, the React App should open automatically in your browser. If it doesn't, open `localhost:3000` in your browser.

## App Structure
```bash
├── package.json
├── package-lock.json
├── README.md
├── yarn.lock
├── public
│   ├── favicon.png
│   ├── index.html
│   └── robots.txt
└── src
    ├── assets
    │   │── css
    │   │   │── dashboard.css
    │   │   │── layout.css
    │   │   │── leader-board.css
    │   │   │── login.css
    │   │   │── new-question.css
    │   │   └── question-card.css
    │   └── images
    │       │── john.jpg
    │       │── sarah.jpg
    │       │── tyler.jpg
    │       └── would-you-rather.png
    ├── components
    │   ├── AnswerQuestion.js
    │   ├── Dashboard.js
    │   ├── LeaderBoard.js
    │   ├── Login.js
    │   ├── NewQuestion.js
    │   ├── PageNotFound.js
    │   ├── Question.js
    │   ├── QuestionCard.js
    │   │── ResultCard.js
    │   └── shared
    │       │── Header.css
    │       │── Header.js
    │       │── Nav.js
    │       └── User.js
    ├── redux
    │   │── actions
    │   │   │── authedUser.js
    │   │   │── questions.js
    │   │   │── shared.js
    │   │   └── users.js
    │   │── middlewares
    │   │   │── index.js
    │   │   └── logger.js
    │   │── reducers
    │   │   │── authedUser.js
    │   │   │── index.js
    │   │   │── questions.js
    │   │   └── users.js
    │   └── store.js
    ├── utils
    │   ├── _DATA.js
    │   └── api.js
    ├── App.js
    └── index.js
```

## Backend Server

This file is provided by Udacity [`_DATA.js`](src/utils/_DATA.js) contains the methods needed to perform necessary operations on the backend:

* `_getUsers()`
* `_getQuestions()`
* `_saveQuestion(question)`
* `_saveQuestionAnswer(object)`

**_getUsers() Method**
Description: Get all of the existing users from the database.
Return Value: Object where the key is the user’s id and the value is the user object.

**_getQuestions() Method**
Description: Get all of the existing questions from the database.
Return Value: Object where the key is the question’s id and the value is the question object.

**_saveQuestion(question) Method**
Description: Save the polling question in the database.
Parameters: Object that includes the following properties: author, optionOneText, and optionTwoText. More details about these properties:

* author - String - The id of the user who posted the question
* optionOneText - String- The text of the first option
* optionTwoText - String- The text of the second option

Return Value: An object that has the following properties: id, author, optionOne, optionTwo, timestamp. More details about these properties:

* id - String - The id of the question that was posted
* author - String - The id of the user who posted the question
* optionOne - Object - The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option
* optionTwo - Object - The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option
* timestamp - String - The time when the question was created

**_saveQuestionAnswer(object) Method**
Description: Save the answer to a particular polling question in the database. Parameters: Object that contains the following properties: authedUser, qid, and answer. More details about these properties:

* authedUser - String - The id of the user who answered the question
* qid - String - The id of the question that was answered
* answer - String - The option the user selected. The value should be either "optionOne" or "optionTwo"
