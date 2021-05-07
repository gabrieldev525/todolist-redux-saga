// third party imports
import { all } from 'redux-saga/effects'

// local imports
import current_user_saga from './current_user/sagas'
import todo from './todo/sagas'

export default function* rootSaga() {
  return yield all([
    current_user_saga,
    todo
  ])
}