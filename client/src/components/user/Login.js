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
           const user = {userName, password}
           this.setState=({
               currentUser: [...this.state.currentUser, user]
           })
            const onLogin =  {
                    method: "POST" , 
                    headers: {
                        "content-Type": "application/json"
                    },
                    body: JSON.stringify(user)
                };
                if(onLogin){
                    fetch('/api/users/login', onLogin)
                    .then(res => res.json())
                    .then(res => this.state({res}))
                    console.log(user)        
                }else{
                    alert("error")
                }
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

export default Login
