import UsersSagas from "./users"
import {all} from "redux-saga/effects"


/*
all resolves all promises all at the same time
in order to act upon each one.

allow all the forked processes to bre created in parallel.
*/
export default function* rootSaga(){
  yield all([
    ...UsersSagas
  ])
}
