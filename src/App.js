import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading';
import './assets/css/layout.css';
import Header from "./components/shared/Header";
import Dashboard from "./components/Dashboard";
import NewQuestion from "./components/NewQuestion";
import LeaderBoard from "./components/LeaderBoard";
import Login from "./components/Login";
import Question from "./components/Question";
import PageNotFound from "./components/PageNotFound";
import { handleInitialData } from "./redux/actions/shared";

const App = ({ isLoggedIn, handleInitialData }) => {
    useEffect(() => {
        handleInitialData();
    }, []);

    return (
        <div className="container">
            <div className="row">
                <Router>
                    <LoadingBar style={{backgroundColor: 'brown'}} />
                    <div className="col-12">
                        <div className="app-name">Would you rather</div>
                    </div>
                    <div className="col-12">
                        <Header/>
                    </div>
                    <div className="col-12">
                        <div className="mt-5 p-4">
                            {!isLoggedIn ?
                                <Login/> :
                                <Switch>
                                    <Route exact path="/" component={Dashboard}/>
                                    <Route path="/leader-board" component={LeaderBoard}/>
                                    <Route path="/new-question" component={NewQuestion}/>
                                    <Route path="/question/:id" component={Question}/>
                                    <Route component={PageNotFound}/>
                                </Switch>
                            }
                        </div>
                    </div>
                </Router>
            </div>
        </div>
    );
}

const mapStateToProps = ({ authedUser }) => ({
    isLoggedIn: authedUser !== null
});

const mapDispatchToProps = (dispatch) => ({
    handleInitialData: () => dispatch(handleInitialData())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
