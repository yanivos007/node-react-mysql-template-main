import React, { Component } from 'react'

 class Vacation extends Component {
     constructor(props){
         super(props)
         this.state={
         }
     }
    render() {
        const {item} =this.props;
        return (
            <div className="vacationBox">
                <div> description: {item.description}</div>
                <div> destination: {item.destination}</div>
                <div> cost: {item.cost}</div>
                <div> dates: {item.description}</div>
                <div> followers: {item.description}</div>
            </div>
        )
    }
}

export default Vacation
