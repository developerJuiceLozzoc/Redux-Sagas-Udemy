import React from "react"
import {ListGroup,ListGroupItem,Button} from "reactstrap"
import {connect} from "react-redux"
import {deleteUserRequest} from "../actions/users"

function UsersList({users,deleteUserRequest}){
  return (
    <ListGroup>
      {users.map(function(user){
        return (
          <ListGroupItem key={user.id}>
            <section style={{display: "flex"}}>
              <div style={{flexGrow: 1}}>
                {user.firstName}   {user.lastName}
              </div>
              <div>
                <Button outline color="danger"
                  onClick={function(){
                    deleteUserRequest(user.id)
                  }}>
                  Delete
                </Button>
              </div>
            </section>
          </ListGroupItem>
        )
      })}
    </ListGroup>
  )
}

export default connect(null,{deleteUserRequest})(UsersList)
