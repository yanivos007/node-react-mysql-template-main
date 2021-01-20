import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchAll } from '../../bussiness/vacationsActions'

 class Vacation extends Component {

componentDidMount(){
        this.props.onFetchVacations()
     }
    render() {
        const {item} =this.props;
        
        return (
            
            <div className="vacationBox">
                <div>id: {item.id} </div>
                <div> description: {item.description}</div>
                <div> destination: {item.destination}</div>
                <div> price: {item.price}</div>
                <div> dates: {item.dates}</div>
                <div> followers: {item.followers}</div>
               <input className="followBtn" type="checkbox" value="follow"  />
            </div>
        )
    }
}
const mapStateToProps = state => {
return {
    item: state.vacations.vacationsList
};
}
const mapDispatchToProps = dispatch => {
	return {
        onFetchVacations: () => dispatch(fetchAll()) ,
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Vacation)
