import React, { Component } from 'react'

 class Login extends Component {
     constructor(){
         super()
         this.userName = React.createRef();
         this.password = React.createRef();
         this.state={
            currentUser: []
         }
        }
        onSubmitHandler(event){
            event.preventDefault()
           const userName = this.userName.current.value;
           const password = this.password.current.value;
           this.setState=({
               currentUser: [...this.state.currentUser, userName, password]
           })
     }
    render() {
        return (
            <div className="loginPage">
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

export default Login
