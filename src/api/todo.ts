import { UNAUTHORIZED } from 'consts/api'
import axiosClient from 'customClients/axiosClient'
import { ITodoData } from 'interfaces/ITodo'
import { deleteToken } from 'utils/token'

//CREATE
export const addTodoList = async (todo: string) => {
  try {
    const response = await axiosClient.post('todos', {
      todo
    })
    return response
  } catch (error: any) {
    const errorStatus = error.response?.status
    alert(errorStatus + '!!')
    console.error(error)
    return errorStatus
  }
}
//READ
export const getTodoList = async () => {
  try {
    const response = await axiosClient.get('todos')
    return response.data
  } catch (error: any) {
    const errorStatus = error.response?.status
    if (errorStatus === UNAUTHORIZED) {
      alert('다시 로그인 해주세요!')
      deleteToken()
    }
    console.error(error)
    return errorStatus
  }
}
//UPDATE
export const updateTodoList = async (
  todoItem: ITodoData,
  updateTodo: (todoItem: ITodoData) => ITodoData
) => {
  try {
    const updatedTodo = updateTodo?.(todoItem)

    const response = await axiosClient.put(`todos/${todoItem.id}`, updatedTodo)
    return response
  } catch (error: any) {
    const errorStatus = error.response?.status
    alert(errorStatus + '!!')
    console.error(error)
    return errorStatus
  }
}

//DELETE
export const deleteTodoList = async (todoItem: ITodoData) => {
  try {
    const response = await axiosClient.delete(`todos/${todoItem.id}`)
    return response
  } catch (error: any) {
    const errorStatus = error.response?.status
    alert(errorStatus + '!!')
    console.error(error)
    return errorStatus
  }
}
