import { IStateDefaultType } from "../types";

export enum TodoTypes {
  FETCH_TODO_LIST = 'FETCH_TODO_LIST',
  FETCH_TODO_LIST_SUCCESS = 'FETCH_TODO_LIST_SUCCESS',
  CREATE_TODO_ITEM = 'CREATE_TODO_ITEM',
  CREATE_TODO_ITEM_SUCCESS = 'CREATE_TODO_ITEM_SUCCESS',
  DELETE_TODO_ITEM = 'DELETE_TODO_ITEM',
  DELETE_TODO_ITEM_SUCCESS = 'DELETE_TODO_ITEM_SUCCESS'
}

export interface ITodo {
  title: string,
  id?: number
}

export interface ITodoResults extends IStateDefaultType {
  results: Array<ITodo>
}