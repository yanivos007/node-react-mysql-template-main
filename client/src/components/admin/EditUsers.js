import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAllUsers, deleteUser } from '../../bussiness/usersActions'

 class EditUsers extends Component {
    
     componentDidMount(){
         this.props.showAllUsers()
     }
     render() {
       const {users}= this.props
        return (
            <div >
                <h2>edit users</h2>
                {this.props.users.map(u=>
                    <div key={u.id} className='editUserBox'>
                        <form  >
                            <div className='editUserUnit' key={u.id} u={users}>
                            <div> ----userName: {u.userName} ----</div>  
                                <button onClick={(e)=>this.onDeleteUser(e)}>delete user</button>
                            </div>
                        </form>
                    </div>)}
            </div>
        )
    }
    onDeleteUser(e){
this.props.deleteUser()
    }
}

const mapStateToProps = state => {
    return{
        users: state.users.usersList
    }
}

const mapDispatchToProps = dispatch=>{
    return{
        showAllUsers: () => dispatch(fetchAllUsers()),
        deleteUser: ()=> dispatch(deleteUser())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditUsers)
