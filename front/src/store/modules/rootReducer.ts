// third party
import { combineReducers } from 'redux'

import current_user from './current_user/reducer'
import todo from './todo/reducer'

export default combineReducers({
  current_user,
  todo
})