import React, { Component } from 'react'
import { connect } from "react-redux";
import { addVacation, fetchAll } from '../../bussiness/vacationsActions'

class newVacation extends Component {
    constructor() {
        super()
        this.description = React.createRef();
        this.destination = React.createRef();
        this.price = React.createRef();
        this.dates = React.createRef();

    }

    componentDidMount() {
        this.props.onFetchVacations();
    }

    render() {
        return (
            <div className="newVacationContainer">

                <h3>add new vacation</h3>
                <form onSubmit={(event) => this.onSubmitHandler(event)}>
                    <label>description</label>
                    <input type="text" ref={this.description} placeholder="description" />
                    <br />
                    <label>destination</label>
                    <input type="text" ref={this.destination} placeholder="destination" />
                    <br />
                    <label>price</label>
                    <input type="number" ref={this.price} placeholder="price" />
                    <br />
                    <label>dates</label>
                    <input type="date" ref={this.dates} placeholder="dates" />
                    <br />
                    <label>picture</label>
                    <input type="file" id="img" />
                    <input type="submit" />
                </form>
                <div>
                   
                </div>
            </div>
        )
    }
   
    async onSubmitHandler(event) {
        event.preventDefault();
        const description = this.description.current.value;
        const destination = this.destination.current.value;
        const price = this.price.current.value;
        const dates = this.dates.current.value;
        const followers = 10;
        const newVacation = { description, destination, price, dates, followers }
        this.props.onAddVacation(newVacation);

    }
}

const mapStateToProps = state => {
    return {
        vacations: state.vacations.vacationsList
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onFetchVacations: () => dispatch(fetchAll()),

        onAddVacation: (description, destination, price, dates, followers) =>
            dispatch(addVacation(description, destination, price, dates, followers))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(newVacation);
