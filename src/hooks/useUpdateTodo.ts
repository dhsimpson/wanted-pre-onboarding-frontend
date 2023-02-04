import axiosClient from 'customClients/axiosClient'
import { ITodoData } from 'interfaces/ITodo'
import { ChangeEvent } from 'react'
import useTodoContext from './useTodoContext'

// 이 친구는 checkbox 로직, todo 로직 주입할 수 있도록 변경 필요
export default function useUpdateTodo(todoItem: ITodoData) {
  const { contextTodoList, setContextTodoList } = useTodoContext()
  const handleCheckBox = async (event: ChangeEvent<HTMLInputElement>) => {
    try {
      const response = await axiosClient.put(`todos/${todoItem.id}`, {
        todo: todoItem.todo,
        isCompleted: !todoItem.isCompleted
      })

      if (response.status === 200) {
        const updatedContextTodoList = contextTodoList?.map((todo) => {
          if (todo.id === response.data.id) {
            return response.data
          }
          return todo
        })
        setContextTodoList?.(updatedContextTodoList ?? ([] as ITodoData[]))
      }
    } catch (error: any) {
      const errorStatus = error.response?.status
      // if (errorStatus === 401) {
      //   alert('다시 로그인 해주세요!')
      // }
      // return errorStatus
      alert(errorStatus + '!!')
      console.error(error)
    }
  }
  return handleCheckBox
}
