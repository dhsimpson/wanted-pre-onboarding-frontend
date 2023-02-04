import axiosClient from 'customClients/axiosClient'
import { ITodoFormData } from 'interfaces/ITodo'
import { FormEvent } from 'react'
import { canSubmit } from 'utils/validateTodo'
import useTodoContext from './useTodoContext'

export default function useAddTodoList() {
  const { contextTodoList, setContextTodoList } = useTodoContext()

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const target = event.target as ITodoFormData

    try {
      if (!canSubmit(target.todo.value)) {
        alert('todo 가 입력되지 않았습니다!')
        return
      }

      const response = await axiosClient.post('todos', {
        todo: target.todo.value
      })

      if (response.status === 201) {
        alert('todo 가 추가되었습니다!')
        console.log(response)
        setContextTodoList?.([...(contextTodoList ?? []), response.data])
      }
    } catch (error: any) {
      const errorStatus = error.response?.status
      alert(errorStatus + '!!')
      console.error(error)
    }
  }
  return handleSubmit
}