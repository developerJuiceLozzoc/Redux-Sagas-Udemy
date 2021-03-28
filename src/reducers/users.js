import {Types} from "../actions/users"

const INITIAL_STATE = {
  error: null,
  users: []
}

function usersReducer(state = INITIAL_STATE, action){
  switch(action.type){
    case Types.GET_USERS_SUCCESS:
      return {
        users: action.payload,
        error: null,
      }
    case Types.USERS_ERROR:
     return {
       ...state,
       error: action.payload
     }
    default:
      return state
  }
}

export default usersReducer
