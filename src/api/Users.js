import api from "../actions/api"

export const callGetUsers = () => {
  return api.get("/users")
}

export function createUser({firstName,lastName}){
  return api.post("/users",{
    firstName,
    lastName
  })
}


export function apiDeleteUser({userId}){
  return api.delete(`/users/${userId}`)
}
