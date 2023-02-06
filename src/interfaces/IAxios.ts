import { ITodoData } from './ITodo'

export interface IDefaultResponse {
  status: number
}

//Auth
export interface IAuthRequest {
  email: string
  password: string
}

export interface ITokenResponse extends IDefaultResponse {
  data: { access_token: string }
}

// TodoList
export interface ITodoAddRequest {
  todo: string
}

export interface ITodoListResponse extends IDefaultResponse {
  data: ITodoData[]
}

export interface ITodoDataResponse extends IDefaultResponse {
  data: ITodoData
}
