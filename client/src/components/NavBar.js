import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link, Redirect } from "react-router-dom";
import {logout} from '../bussiness/usersActions'

class NavBar extends Component {
    constructor(props) {
		super(props);
		this.state = {
			sendRedirect: null
		}
	}
    render() {
        const {user} = this.props;
        console.log(user)
		if (this.state.sendRedirect) {
			const redirect = <Redirect to={this.state.sendRedirect}/>
			this.setState({sendRedirect: null});
			return redirect;
		}
        return (
                <div className="navBar">
                        <nav>
                            <h1> My Vacations</h1>
                            <ul className="navLinks">
                                {user &&    
                                <Link to="/">
                                    <li> homePage </li>
                                </Link>}
                              
                                {user ==="admin" && 
                                 <Link to="/admin">
                                    <li> admin's page</li>
                                </Link>}
                                {user  && 
                                 <Link to="/users/logout">
                                    <button onClick={()=> this.handleLogout()}>LogOut</button>
                                </Link>}

                               { !user &&
                               <Link to="/login">
                               <li> login</li>
                           </Link>}
                                
                               
                            </ul>
                        </nav>
                </div>
        )
    }
    handleLogout() {
		this.props.onLogout();
		this.setState({sendRedirect: '/logout'});
	}
}
const mapStateToProps = state => {
	return {
		user: state.users.currentUser
    }
}
    const mapDispatchToProps = dispatch => {
        return {
            onLogout: () => dispatch(logout())
        }
    }

export default connect(mapStateToProps,mapDispatchToProps)(NavBar)
