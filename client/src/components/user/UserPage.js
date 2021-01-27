import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchAll } from '../../bussiness/vacationsActions'

export class UserPage extends Component {
    componentDidMount(){
        this.props.onFetchVacations()
     }
    render() {
        const {vacations} = this.props
        console.log(vacations)
        return (
            <div>

            {vacations.map(v =>
            <div key={v.id} className="vacationBox">
                <div>id: {v.id} </div>
                <div> description: {v.description}</div>
                <div> destination: {v.destination}</div>
                <div> price: {v.price}</div>
                <div> dates: {v.dates}</div>
                {/* <div> followers: {vacation.followers}</div> */}
               <input className="followBtn" type="checkbox" value="follow"  />
            </div>
                )}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        vacations: state.vacations.vacationsList
    };
    }
    const mapDispatchToProps = dispatch => {
        return {
            onFetchVacations: () => dispatch(fetchAll()) ,
        };
    }
    
    export default connect(mapStateToProps, mapDispatchToProps)(UserPage)
