import { MIN_TODO_LENGTH } from 'consts/validate'

export function canSubmit(todo: string) {
  return todo.length > MIN_TODO_LENGTH
}
