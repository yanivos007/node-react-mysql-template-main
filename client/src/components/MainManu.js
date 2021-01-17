import React, { Component } from 'react'
import { Route, BrowserRouter as Router, Switch, } from "react-router-dom";
import Admin from './admin/Admin';
import HomePage from './HomePage';
import NavBar from './NavBar';
import Login from './user/Login';
import Register from './user/Register';

class MainManu extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <NavBar />
                        <Switch>
                            <Route path='/' exact component={HomePage} />
                            <Route path='/admin'  component={Admin} />
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
