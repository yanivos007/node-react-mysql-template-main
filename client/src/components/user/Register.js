import React, { Component } from 'react'

 class Register extends Component {
     constructor(){
         super()
         this.firstName = React.createRef();
         this.lastName = React.createRef();
         this.userName = React.createRef();
         this.password = React.createRef();
         this.state={
            user:[]
         }
     }

     onSubmitHandler(event){
        event.preventDefault()
        const firstName = this.userName.current.value;
        const lastName = this.password.current.value;
        const userName = this.password.current.value;
        const password = this.password.current.value;
        this.setState=({
            newUser: [...this.state.user, userName, password,firstName, lastName]
        })
     }


    render() {
        return (
            <div className="loginPage">
                <form onSubmit={(event)=>this.onSubmitHandler(event)}>
                <div classsName="loginContainer" >
                    <label name="firstName"/> 
                <input  type="text" placeholder="first name" ref={this.firstName}/>
                <br />
                    <label name="lastName"/> 
                <input  type="text" placeholder="last name" ref={this.lastName}/>
            <input type="submit"/>
            <br />
                    <label name="userName"/> 
                <input  type="text" placeholder="user name" ref={this.password}/>
            <input type="submit"/>
            <br />
                    <label name="password"/> 
                <input  type="text" placeholder="password" ref={this.password}/>
            <input type="submit"/>
            <br />
            <a className="btn btn-outline-primary" href="/register" role="button">already have a user? press here!</a>
                </div>
                </form>
            </div>
        )
    }
}

export default Register
