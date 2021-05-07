// local imports
import { IUserState } from "./current_user/types"

export interface IState {
  current_user: IUserState
}

export interface IStateDefaultType {
  count: number,
  first: number,
  has_next: boolean,
  has_prev: boolean,
  last: string,
  next: number,
  num_pages: number,
  page_number: number,
  previous: number,
  results: Array<Object>
}