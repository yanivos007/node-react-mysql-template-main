import React, { Component } from 'react'
import { Route, BrowserRouter as Router, Switch, } from "react-router-dom";
import AdminPage from './admin/AdminPage';
import HomePage from './HomePage';
import NavBar from './NavBar';
import Login from './user/Login';
import Register from './user/Register';

class MainManu extends Component {
    render() {
        return (
            <div className="app">
                <Router>
                    <div>
                        <NavBar />
                        <Switch>
                            <Route path='/' exact component={HomePage} />
                            <Route path='/admin'  component={AdminPage} />
                            <Route path='/register'  component={Register} />
                            <Route path='/login'  component={Login} />
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}

export default MainManu
