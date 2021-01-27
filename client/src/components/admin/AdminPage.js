import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewVacation from './NewVacation';
import Vacation from './Vacation';
import EditVacations from './EditVacations';
import EditUsers from './EditUsers';
import {  fetchAll } from '../../bussiness/vacationsActions'



class AdminPage extends Component {
    constructor() {
        super()
        this.state = {
            showVacationComponent: false,
            editVacationComponent: false,
            editusersComponent: false
        }
    }
    

    onShowNewVacationHandler() {
        this.setState({ showVacationComponent: true,
            editVacationComponent: false,
            editusersComponent:false })
    }
    onEditVacationHandler() {
        this.setState({ editVacationComponent: true,
            showVacationComponent: false,
            editusersComponent:false })
    }
    onEditUsersComponent() {
        this.setState({ editusersComponent: true,
            editVacationComponent: false,
            showVacationComponent:false })
    }
    render() {
        
        return (
            <div>
                <h1> admin's page</h1>
                <ul className="admiNav">
                    <li><button type="button" onClick={() => this.onShowNewVacationHandler()}> add new vacation</button></li>
                    <li><button type="button" onClick={() => this.onEditVacationHandler()}> edit vacations</button></li>
                    <li> <button type="button" onClick={() => this.onEditUsersComponent()}> edit users</button></li>
                </ul>


                <Vacation />
                {/* <div className="container">
                    {this.props.vacations.map(v =>
                        <div key={v.id} >
                            <Vacation v={v} />
                        </div>)}
                </div> */}

                {this.state.showVacationComponent && <NewVacation />}
               {this.state.editVacationComponent && <EditVacations />}
                {this.state.editusersComponent && <EditUsers /> }

               
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        vacations: state.vacations.vacationsList,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onFetchVacations: () => dispatch(fetchAll()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage)
