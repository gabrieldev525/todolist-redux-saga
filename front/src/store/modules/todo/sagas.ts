// Third party
import { all, call, put, takeLatest } from 'redux-saga/effects'
import { has, includes } from 'lodash'
import { AxiosResponse } from 'axios'

// Project
import { api } from '../../../services/api'

// Local
import { ITodo, ITodoResults, TodoTypes } from './types'

function* fetchTodoList(action) {
  const { callback } = action

  try {
    const response: AxiosResponse<ITodoResults> = yield call(api.get, 'api-todo:todo-list')

    if(response.status == 200) {
      yield put({
        type: TodoTypes.FETCH_TODO_LIST_SUCCESS,
        payload: response.data
      })

      if(typeof(callback) == 'object' && has(callback, 'onfinish'))
        callback.onfinish(response)
    }
  } catch(error) {
    console.log('Aconteceu um erro ao tentar carregar a lista de todo')

    if(typeof(callback) == 'object' && has(callback, 'onerror'))
      callback.onerror(error)
  }

  if(typeof(callback) == 'function')
    callback()
}


function* createTodoItem(action) {
  const { payload, callback } = action

  try {
    const response: AxiosResponse<ITodo> = yield call(api.post, 'api-todo:todo-list', {}, payload)

    if(response.status == 201) {
      yield put({
        type: TodoTypes.CREATE_TODO_ITEM_SUCCESS,
        payload: response.data
      })

      if(typeof(callback) == 'object' && has(callback, 'onfinish'))
        callback.onfinish(response)
    }
  } catch(error) {
    console.log('Aconteceu um erro ao tentar criar uma tarefa')

    if(typeof(callback) == 'object' && has(callback, 'onerror'))
      callback.onerror(error)
  }

  if(typeof(callback) == 'function')
    callback()
}


function* removeTodoItem(action) {
  const { payload, callback } = action

  try {
    const response: AxiosResponse = yield call(api.delete, 'api-todo:todo-detail', { pk: payload })

    if(includes([200, 202, 204], response.status)) {
      yield put({
        type: TodoTypes.DELETE_TODO_ITEM_SUCCESS,
        payload: payload
      })

      if(typeof(callback) == 'object' && has(callback, 'onfinish'))
        callback.onfinish(response)
    }
  } catch(error) {
    console.log('Aconteceu um erro ao tentar deletar uma tarefa')

    if(typeof(callback) == 'object' && has(callback, 'onerror'))
      callback.onerror(error)
  }

  if(typeof(callback) == 'function')
    callback()
}

export default all([
  takeLatest(TodoTypes.FETCH_TODO_LIST, fetchTodoList),
  takeLatest(TodoTypes.CREATE_TODO_ITEM, createTodoItem),
  takeLatest(TodoTypes.DELETE_TODO_ITEM, removeTodoItem)
])