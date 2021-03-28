import React, {Component} from "react"
import {connect} from "react-redux"
import {getUsersRequest,createUserRequest} from "../actions/users"
import NewUserForm from "./NewUserForm"

import UsersList from "./UsersList"
class App extends Component{
  componentDidMount(){
    this.props.getUsers()
  }
  handleSubmit({firstName,lastName}){
    console.log(firstName,lastName);
    this.props.dispatchCreateUser(firstName,lastName)
  }


  render(){
    return (
      <div style={{margin: "0 autor", padding: "20px", maxWidth: "600px"}}>
        <NewUserForm onSubmit={this.handleSubmit.bind(this)} />
        {this.props.error && <p>{this.props.error}</p>}
        <UsersList users={this.props.items} />
      </div>
    );
  }
}
function mapStateToProps(state){
  return {
    items: state.users.users,
    error: state.users.error
  }
}
function mapDispatchToProps(dispatch){
  return {
    getUsers: function(){
      dispatch(getUsersRequest())
    },
    dispatchCreateUser: function(f,l){
      dispatch(createUserRequest(f,l))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
