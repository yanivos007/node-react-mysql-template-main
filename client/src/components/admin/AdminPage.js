import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewVacation from './NewVacation';
import Vacation from './Vacation';
import EditVacations from './EditVacations';
import EditUsers from './EditUsers';

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
        this.setState({ showVacationComponent: true })
    }
    onEditVacationHandler() {
        this.setState({ editVacationComponent: true })
    }
    onEditUsersComponent() {
        this.setState({ editusersComponent: true })
    }
    render() {
        const { vacations } = this.props;
        return (
            <div>
                <h1> admin's page</h1>
                <ul className="admiNav">
                    <li className="adminLink"><button type="button" onClick={() => this.onShowNewVacationHandler()}> add new vacation</button></li>
                    <li className="adminLink"><button type="button" onClick={() => this.onEditVacationHandler()}> edit vacations</button></li>
                    <li className="adminLink"> <button type="button" onClick={() => this.onEditUsersComponent()}> edit users</button></li>
                </ul>
                {/* <div> {this.showVacationComponent = true &&
                        <div> <NewVacation /> </div> }</div> */}
                <div> {this.editVacationComponent = true &&
                        <div> <EditVacations /> </div> }</div>
                <div> {this.editusersComponent = true &&
                        <div> <EditUsers /> </div> }</div>

                <div className="container">
                    {this.props.vacations.map(v =>
                        <div key={v.id} >
                            <Vacation v={vacations} />
                        </div>)}
                </div>

            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        vacations: state.vacations.vacationsList
    }
}

export default connect(mapStateToProps, null)(AdminPage)
