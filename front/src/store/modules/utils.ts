// local
import { IStateDefaultType } from './types'
import { ITodoResults } from './todo/types'

export const state_default: IStateDefaultType = {
  count: 0,
  first: 1,
  has_next: null,
  has_prev: null,
  last: 'last',
  next: null,
  num_pages: 0,
  page_number: 1,
  previous: null,
  results: [],
}

export interface IState {
  todo: ITodoResults
}