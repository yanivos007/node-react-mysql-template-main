import React, { Component } from 'react'
import {connect} from "react-redux";
import {register} from '../../bussiness/usersActions'

// import axios from 'axios'

 class Register extends Component {
     constructor(props){
         super(props)
         this.firstName = React.createRef();
         this.lastName = React.createRef();
         this.userName = React.createRef();
         this.password = React.createRef();
     }

    async componentDidMount(){
this.userName.current.focus();
     }

     onSubmitHandler(event){
        event.preventDefault()
        const firstName = this.firstName.current.value;
        const lastName = this.lastName.current.value;
        const userName = this.userName.current.value;
        const password = this.password.current.value;
        const newUser ={firstName,lastName,userName, password};
        this.props.onRegister(newUser) ;
     }       
    //     const insertUser = {
    //         method: "POST" , 
    //         headers: {
    //             "content-Type": "application/json"
    //         },
    //         body: JSON.stringify(newUser)
    //     };
    //     if(insertUser){
    //         fetch('/api/users/register', insertUser)
    //         .then(res => res.json())
    //         .then(res => this.state({res}))
    //     }else{
    //         alert("error")
    //     }
    //  }


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
const mapDispatchToProps = dispatch => {
return{
    onRegister: (firstName , lastName , userName, password) => dispatch = (register(firstName , lastName ,userName, password))
}
}

export default connect(null, mapDispatchToProps)(Register);
