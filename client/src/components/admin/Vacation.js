import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchAll } from '../../bussiness/vacationsActions'

 class Vacation extends Component {
     
componentDidMount(){
        this.props.onFetchVacations()
     }
    render() {
        const {item} =this.props;
        let i = 0
        return (
            <div className="vacationBox">
                <div>id: {item.id} </div>
                <div> description: {item[i].description}</div>
                <div> destination: {item[i].destination}</div>
                <div> price: {item[i].price}</div>
                <div> dates: {item[i].dates}</div>
                <div> followers: {item[i].followers}</div>
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
