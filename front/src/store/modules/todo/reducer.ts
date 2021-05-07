// Third party
import { findIndex, omit, omitBy } from 'lodash'

// Project
import { state_default } from '../utils'

// Local
import { ITodo, TodoTypes } from './types'

export default (state = state_default, action) => {
  switch(action.type) {
    case TodoTypes.FETCH_TODO_LIST_SUCCESS:
      return {
        ...state,
        ...action.payload
      }
    case TodoTypes.CREATE_TODO_ITEM_SUCCESS:
      return {
        ...state,
        results: [
          ...state.results,
          action.payload
        ]
      }
    case TodoTypes.DELETE_TODO_ITEM_SUCCESS:
      let newState = [...state.results]
      let todoItemIdx = findIndex(newState, (o: ITodo) => o.id == action.payload)

      if(todoItemIdx != -1)
        newState.splice(todoItemIdx, 1)

      return {
        ...state,
        results: newState
      }
    default:
      return state
  }
}