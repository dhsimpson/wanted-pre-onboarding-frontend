import { UNAUTHORIZED } from 'consts/api'
import axiosClient from 'customClients/axiosClient'
import {
  IDefaultResponse,
  ITodoAddRequest,
  ITodoDataResponse,
  ITodoListResponse
} from 'interfaces/IAxios'
import { ITodoData } from 'interfaces/ITodo'
import { deleteToken } from 'utils/token'

//CREATE
export const addTodoList = async (todo: string) => {
  try {
    const response = await axiosClient.post<ITodoAddRequest, ITodoDataResponse>(
      'todos',
      {
        todo
      }
    )
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
    const response = await axiosClient.get<null, ITodoListResponse>('todos', {
      timeout: 750
    })
    return response
  } catch (error: any) {
    const errorStatus = error.response?.status
    console.log('error.response')
    console.log(error.response)
    if (errorStatus === UNAUTHORIZED) {
      alert('다시 로그인 해주세요!')
      deleteToken()
    }
    console.error(error)
    return { status: errorStatus, data: null }
  }
}
//UPDATE
export const updateTodoList = async (
  todoItem: ITodoData,
  updateTodo: (todoItem: ITodoData) => ITodoData
) => {
  try {
    const updatedTodo = updateTodo?.(todoItem)

    const response = await axiosClient.put<ITodoData, ITodoDataResponse>(
      `todos/${todoItem.id}`,
      updatedTodo
    )
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
    const response = await axiosClient.delete<null, IDefaultResponse>(
      `todos/${todoItem.id}`
    )
    return response
  } catch (error: any) {
    const errorStatus = error.response?.status
    alert(errorStatus + '!!')
    console.error(error)
    return errorStatus
  }
}
