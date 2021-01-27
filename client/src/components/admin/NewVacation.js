import React, { Component } from 'react'
import { connect } from "react-redux";
import { addVacation, fetchAll } from '../../bussiness/vacationsActions'
// const axios = require('axios')

class newVacation extends Component {
    constructor() {
        super()
        this.state ={
            file: null,
            followers: null
        }
        this.description = React.createRef();
        this.destination = React.createRef();
        this.price = React.createRef();
        this.date = React.createRef();
        this.toDate = React.createRef();
    }

    componentDidMount() {
        this.props.onFetchVacations();
    }

    async onSubmitHandler(event) {
        event.preventDefault();
        const description = this.description.current.value;
        const destination = this.destination.current.value;
        const price = this.price.current.value;
        const date = this.date.current.value;
        const toDate = this.toDate.current.value;
        // const formData = new FormData();
        this.props.onAddVacation(description, destination, price, date, toDate);

    }
    // onChange(e){
    //     const file = e.target.files[0]
    //     console.log(file)
    // this.setState({file})
    // }
    render() {
        return (
            <div className="newVacationContainer">

                <h3>add new vacation</h3>
                <form  onSubmit={(event) => this.onSubmitHandler(event)}>
                    <label>description</label>
                    <input type="text" ref={this.description} defaultValue="description" />
                    <br />
                    <label>destination</label>
                    <input type="text" ref={this.destination} defaultValue="destination" />
                    <br />
                    <label>price</label>
                    <input type="number" ref={this.price} defaultValue="500" />
                    <br />
                    <label>dates</label>
                    <input type="date" ref={this.date} defaultValue="2020-10-10" />
                    <input type="date" ref={this.toDate} defaultValue="2020-12-12" />
                    <br />
                    <label>picture</label>
                    <input type="file" name="myImage"  onChange={e => this.onChange(e)}/>
                    <input type="submit" value="send" />
                </form>
            </div>
        )
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

        onAddVacation: (description, destination, price, date, toDate) => dispatch(addVacation(description, destination, price, date, toDate ))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(newVacation);
