export const Types = {
  GET_USERS_REQUEST: "users/get_users_request",
  GET_USERS_SUCCESS: "users/getusersucces",
  CREATE_USER_REQUEST: "users/create_a_use",
  DELETE_USER_REQUEST: "users/delete_a_user",
  USERS_ERROR: "error in the user flow",
}


export const getUsersRequest = () => {
  console.log("dispatch");
  return {
    type: Types.GET_USERS_REQUEST
  }
}

export const getUsersSuccess = (items) => ({
  type: Types.GET_USERS_SUCCESS,
  payload: items,
})

export const deleteUserRequest = (id) => ({
  type: Types.DELETE_USER_REQUEST,
  payload: id
})

export const createUserRequest = (firstName,lastName) =>{
  return {
    type: Types.CREATE_USER_REQUEST,
    payload: {
      firstName,
      lastName
    }
  }
}

export const usersError = (error)=> ({
  type: Types.USERS_ERROR,
  payload: error,
})
