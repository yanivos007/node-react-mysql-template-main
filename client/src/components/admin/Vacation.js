import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAll, follow } from "../../bussiness/vacationsActions";

class Vacation extends Component {
    componentDidMount(){
        this.props.onFetchVacations();
    }
    constructor(props){
        super(props)
        this.state ={
            isLoggedIn : false,
            user: null,
            follow: false
        }
    }
    onFollowHandler(){
        if(document.getElementById('follow').innerText ==="follow"){
            document.getElementById('follow').innerText = 'unfollow'
        }else{
            document.getElementById('follow').innerText = 'follow'
        }
        this.setState({
            follow: true
        })
    }
  render() {
    // const { user } = this.props;
    const { vacations } = this.props;
    if(vacations ){
    return (
        
      <div>
        {vacations.map(vacations => (
          <div key={vacations.id} className="vacationBox">
            <div> What: {vacations.description}</div>
            <div> Where: {vacations.destination}</div>
            <div> How Much: {vacations.price}$</div>
            <div> Depart: {vacations.date}</div>
            <div> Return: {vacations.toDate}</div>
            <div> Followers: {vacations.followers}</div>
            <button id='follow' onClick={()=>this.onFollowHandler()}> follow </button>
          </div>
        ))}
      </div>
    )}else{
        return(
            <div> no user logged in yet</div>
        )
    }
  }
}
const mapStateToProps = state => {
    return {
        vacations: state.vacations.vacationsList,
        user: state.users.currentUser

    }
}
const mapDispatchToProps = dispatch => {
  return {
    onFetchVacations: () => dispatch(fetchAll()),
    onFollow: () => dispatch(follow())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Vacation);
