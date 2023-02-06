export interface ITodoData {
  id: number
  todo: string
  isCompleted: boolean
  userId: number
}

export interface ITodoFormData extends EventTarget {
  todo: { value: string }
}

// axios 에서 사용하는 타입
export interface ITodoAddRequest {
  todo: string
}

export interface ITodoListResponse extends IDefaultResponse {
  data: ITodoData[]
}

export interface ITodoDataResponse extends IDefaultResponse {
  data: ITodoData
}

export interface IDefaultResponse {
  status: number
}
