import React, { Component } from 'react';
import {connect} from "react-redux";
import {login} from "../../bussiness/usersActions";


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
           const user = {userName, password}
           this.props.onLogin(user)
           
            // const onLogin =  {
            //         method: "POST" , 
            //         headers: {
            //             "content-Type": "application/json"
            //         },
            //         body: JSON.stringify(user)
            //     };
            //     if(onLogin){
            //         fetch('/api/users/login', onLogin)
            //         .then(res => res.json())
            //         .then(res => this.state({res}))
            //         console.log(user)        
            //     }else{
            //         alert("error")
            //     }
             }           
            
     
     componentDidMount() {
		this.userName.current.focus();
	}
    render() {
        return (
            <div className="loginPage">
                <h1>login here </h1>

                <form onSubmit={(event)=>this.onSubmitHandler(event)}>
                <div classsName="loginContainer" >
                    <label name="userName"/> 
                <input  type="text" placeholder="user name" ref={this.userName}/>
                <br />
                    <label name="password"/> 
                <input  type="text" placeholder="password" ref={this.password}/>
            <input type="submit"/>
            <br />
            <a className="btn btn-outline-primary" href="/register" role="button">haven't register yet? do it here!</a>
                </div>
                </form>
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
