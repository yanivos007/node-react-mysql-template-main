import React, { Component } from 'react'
// import axios from 'axios'

 class Register extends Component {
     constructor(){
         super()
         this.firstName = React.createRef();
         this.lastName = React.createRef();
         this.userName = React.createRef();
         this.password = React.createRef();
         this.state={
            users:[]
         }
     }

    async componentDidMount(){
         await fetch('http://localhost:8080/api/users')
         .then(res => res.json())
         .then(user => this.setState({user}))
     }

     onSubmitHandler(event){
        event.preventDefault()
        const firstName = this.firstName.current.value;
        const lastName = this.lastName.current.value;
        const userName = this.userName.current.value;
        const password = this.password.current.value;
        const newUser ={firstName,lastName,userName, password  }
        this.setState=({ newUser: [...this.state.users, newUser ]})
        
        const insertUser = {
            method: "POST" , 
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        };
        if(insertUser){
            fetch('/api/users/post', insertUser)
            .then(res => res.json())
            .then(res => this.state({res}))
            console.log(insertUser)        
        }else{
            alert("error")
        }
     }


    render() {
        return (
            <div className="loginPage">
                <h1>register here </h1>
                <form onSubmit={(event)=>this.onSubmitHandler(event)}>
                <div classsName="loginContainer" >
                    <label name="firstName"/> 
                <input  type="text" placeholder="first name" ref={this.firstName}/>
                <br />
                    <label name="lastName"/> 
                <input  type="text" placeholder="last name" ref={this.lastName}/>
            <br />
                    <label name="userName"/> 
                <input  type="text" placeholder="user name" ref={this.userName}/>
            <br />
                    <label name="password"/> 
                <input  type="password" placeholder="password" ref={this.password}/>
                <br />
            <input type="submit"/>
            <br />
            <a className="btn btn-outline-primary" href="/login" role="button">already have a user? press here!</a>
                </div>
                </form>
            </div>
        )
    }
}

export default Register
