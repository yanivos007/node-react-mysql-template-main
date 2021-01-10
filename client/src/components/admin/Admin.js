import React, { Component } from 'react'
// import Vacation from './Vacation';


class Admin extends Component {
    constructor() {
        super()
        this.description = React.createRef();
        this.destination = React.createRef();
        this.cost = React.createRef();
        this.dates = React.createRef();
        this.state = {
            vacation: [
               
            ]
        }
    }
    
  async  onSubmitHandler(event) {
        event.preventDefault();
        const description = this.description.current.value;
        const destination = this.destination.current.value;
        const cost = this.cost.current.value;
        const dates = this.dates.current.value;
        const newVacation = {description,destination, cost, dates }
        this.setState({
            newVacation:[...this.state.vacation , newVacation  ]
        });

        const insertVacation ={
            method: "POST" , 
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify(newVacation)
        };
        if(insertVacation){
            fetch('/api/vacations/post', insertVacation)
            .then(res => res.json())
            .then(res => this.state({res}))
            console.log("vacation added seccesfully")
            
        }else{
            alert("error")
        }
    }


    render() {
        // const allVacations = this.state.vacation;
        // console.log(allVacations)
        return (
            <div>
                <h1>Admin's Page</h1>
                <h3>add new vacation</h3>
                <form onSubmit={(event) => this.onSubmitHandler(event)}>
                    <label>description</label>
                    <input type="text" ref={this.description} placeholder="description" />
                    <br />
                    <label>destination</label>
                    <input type="text" ref={this.destination} placeholder="destination" />
                    <br />
                    <label>cost</label>
                    <input type="number" ref={this.cost} placeholder="cost" />
                    <br />
                    <label>dates</label>
                    <input type="date" ref={this.dates} placeholder="dates" />
                    <br />
                    <label>picture</label>
                    <input type="file" id="img" />
                    <input  type="submit"/>
                </form>
                <div>
                    
                  {/* {allVacations.map(v => 
                  <div>
                       <Vacation key={v.description} item={v} />
                 </div>)} */}
                </div>
            </div>
        )
    }
}

export default Admin
