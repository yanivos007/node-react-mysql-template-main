import React, { Component } from 'react';
import {connect} from "react-redux";
import {login} from "../../bussiness/usersActions";
import Vacation from '../admin/Vacation';
// import { UserPage } from './UserPage';
import {Redirect} from "react-router";


 class Login extends Component {
     constructor(){
         super()
         this.userName = React.createRef();
         this.password = React.createRef();
        
        }
        onSubmitHandler(event){
            event.preventDefault()
           const userName = this.userName.current.value;
           const password = this.password.current.value;
           this.props.onLogin(userName, password)
           
             }           
            
    render() {

        if(this.props.user){
            return <Redirect to="/vacations" />
        }

        return (
            <div className="loginPage">
                <h1>login here </h1>
                <form onSubmit={(event)=>this.onSubmitHandler(event)}>
                    <div className="loginContainer" >
                    <label> userName</label> 
                    <input  type="text" placeholder="user name" ref={this.userName}/>
                    <br />
                    <label> password</label> 
                    <label name="password"/> 
                    <input  type="text" placeholder="password" ref={this.password}/>
                    <input type="submit"/>
                    <br />
                    <a className="btn btn-primary" href="/register" role="button">haven't register yet? do it here!</a>
                    </div>
                 </form>
                    <div>
                        {this.props.user &&
                        <Vacation />
                            }
                    </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        user: state.users.currentUser
    }
}

const mapDispatchToProps = dispatch => {
	return {
		onLogin: (userName, password) => dispatch(login(userName, password)),
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
