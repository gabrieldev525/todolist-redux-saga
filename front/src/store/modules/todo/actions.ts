// Local
import { ITodo, TodoTypes } from './types'


export const fetchTodoList = (callback?: () => void) => {
  return {
    type: TodoTypes.FETCH_TODO_LIST,
    callback
  }
}

export const createTodoItem = (data: ITodo, callback?: () => void) => {
  return {
    type: TodoTypes.CREATE_TODO_ITEM,
    payload: data,
    callback
  }
}

export const removeTodoItem = (pk: number, callback?: () => void) => {
  return {
    type: TodoTypes.DELETE_TODO_ITEM,
    payload: pk,
    callback
  }
}