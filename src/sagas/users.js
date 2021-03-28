import {takeEvery,call,take,fork,put,takeLatest} from "redux-saga/effects"
import * as actions from "../actions/users"
import {callGetUsers,createUser,apiDeleteUser} from "../api/Users"
/*
This is the worker saga
we use fork,call and put in this funciton

call is used for api request
put is used for dispatching an action, even thought we done neeed t connect it.


the reason we fork is in order to to seperate logic
in each individual processes

for some reason i coldnt make the promise directly,
i had to put a refernce to a function that would then
return the promise object.
*/
function* getUsers(){
  try{
    const response = yield call(callGetUsers)
    yield put(actions.getUsersSuccess(response.data))
  }
  catch(e){
    yield put(actions.usersError("Error occured when fetching the list of users"))

  }
}

function* createUserSaga(action){
  try{
    var load = {
      firstName: action.payload.firstName,
      lastName: action.payload.lastName
    }
    yield call(createUser,load)
    yield call(getUsers)
  }
  catch(e){
    yield put(actions.usersError("Error occured when creating"))

  }
}

function* deleteUserSaga(id){
  try{
    yield call(apiDeleteUser,{userId: id})
    yield call(getUsers)

  }
  catch(e){
    yield put(actions.usersError("Error occured when deleteing"))
  }
}

/*
whle true loop with take, very low level,
and return action that was dispatched

we need to wait for the call and the take to resolve,
before we are able to come back in and take another delete request
*/
function* watchDeleteUserRequest(){
  while(true){
    const action = yield take(actions.Types.DELETE_USER_REQUEST)
    yield call(deleteUserSaga,action.payload)
  }
}



/*
watcher sagas watch for reduce action to get dispatch

so i guess they get connected just like reducers, and
watch when particular actions get dispatched.

that is what the takeEvery does, it runs in a while true
loop, but since yield and function* dont pause the ui,
we are able to put yield statements in while true loop.
*/


function* watchGetUsersRequest(){
  yield takeEvery(actions.Types.GET_USERS_REQUEST,
                  getUsers)
}

/* take takeLatest

works similar to take every. every time action specified take
latest is dispatched however if another action is dispatched
while resolving, the call is canceld and only the latest is running
at a given time.
*/
function* watchCreateUserRequest(){
  yield takeLatest(actions.Types.CREATE_USER_REQUEST,createUserSaga)
}


const usersSagas = [
  fork(watchGetUsersRequest),
  fork(watchCreateUserRequest),
  fork(watchDeleteUserRequest),
]

export default usersSagas
