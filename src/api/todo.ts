import axiosClient from 'customClients/axiosClient'
import { deleteToken } from 'utils/token'

export const getTodoList = async () => {
  try {
    const response = await axiosClient.get('todos')
    return response.data
  } catch (error: any) {
    const errorStatus = error.response?.status
    if (errorStatus === 401) {
      alert('다시 로그인 해주세요!')
      deleteToken()
    }
    console.error(error)
    return errorStatus
  }
}

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
  }
}
