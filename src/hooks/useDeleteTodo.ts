import axiosClient from 'customClients/axiosClient'
import { ITodoData } from 'interfaces/ITodo'
import useTodoContext from './useTodoContext'

export default function useDeleteTodo(todoItem: ITodoData) {
  const { contextTodoList, setContextTodoList } = useTodoContext()

  async function handleDelete() {
    const willDelete = confirm('정말 삭제하시겠습니까?')
    if (willDelete) {
      try {
        const response = await axiosClient.delete(`todos/${todoItem.id}`)
        if (response.status === 204) {
          alert('삭제 완료되었습니다!')
          const deletedContextTodoList = contextTodoList?.filter(
            (todo) => todo.id != todoItem.id
          )
          console.log(contextTodoList)

          setContextTodoList?.(deletedContextTodoList ?? ([] as ITodoData[]))
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
  }
  return handleDelete
}
