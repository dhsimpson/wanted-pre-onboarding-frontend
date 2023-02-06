export interface ITodoData {
  id: number
  todo: string
  isCompleted: boolean
  userId: number
}

export interface ITodoFormData extends EventTarget {
  todo: { value: string }
}
