import { updateTodoList } from 'api/todo'
import { OK } from 'consts/api'
import { ITodoData } from 'interfaces/ITodo'
import { ChangeEvent, FormEvent } from 'react'
import useTodoContext from './useTodoContext'

// 이 친구는 checkbox 로직, todo 로직 주입할 수 있도록 변경 필요
export default function useUpdateTodo(
  todoItem: ITodoData,
  updateTodo: (todoItem: ITodoData) => ITodoData,
  updateCompleteCallback?: () => void,
  validateUpdate?: (
    event: FormEvent<HTMLFormElement> | ChangeEvent<HTMLInputElement>
  ) => boolean
) {
  const { contextTodoList, setContextTodoList } = useTodoContext()
  const handleEvent = async (
    event: FormEvent<HTMLFormElement> | ChangeEvent<HTMLInputElement>
  ) => {
    if (validateUpdate && !validateUpdate(event)) {
      return
    }
    updateTodoList(todoItem, updateTodo).then((response) => {
      if (response.status === OK) {
        const updatedContextTodoList = contextTodoList?.map((todo) => {
          if (todo.id === response.data.id) {
            return response.data
          }
          return todo
        })
        setContextTodoList?.(updatedContextTodoList ?? ([] as ITodoData[]))

        updateCompleteCallback?.()
      }
    })
  }
  return handleEvent
}
