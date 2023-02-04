import axiosClient from 'customClients/axiosClient'
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
    try {
      if (validateUpdate && !validateUpdate(event)) {
        return
      }

      const updatedTodo = updateTodo?.(todoItem)

      const response = await axiosClient.put(
        `todos/${todoItem.id}`,
        updatedTodo
      )

      if (response.status === 200) {
        const updatedContextTodoList = contextTodoList?.map((todo) => {
          if (todo.id === response.data.id) {
            return response.data
          }
          return todo
        })
        setContextTodoList?.(updatedContextTodoList ?? ([] as ITodoData[]))

        updateCompleteCallback?.()
      }
    } catch (error: any) {
      const errorStatus = error.response?.status
      alert(errorStatus + '!!')
      console.error(error)
    }
  }
  return handleEvent
}
