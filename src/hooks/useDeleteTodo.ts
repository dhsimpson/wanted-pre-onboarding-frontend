import { deleteTodoList } from 'api/todo'
import { NO_CONTENT } from 'consts/api'
import { ITodoData } from 'interfaces/ITodo'
import useTodoContext from './useTodoContext'

export default function useDeleteTodo(todoItem: ITodoData) {
  const { contextTodoList, setContextTodoList } = useTodoContext()

  async function handleDelete() {
    const willDelete = confirm('정말 삭제하시겠습니까?')
    if (willDelete) {
      deleteTodoList(todoItem).then((response) => {
        if (response.status === NO_CONTENT) {
          alert('삭제 완료되었습니다!')
          const deletedContextTodoList = contextTodoList?.filter(
            (todo) => todo.id != todoItem.id
          )
          setContextTodoList?.(deletedContextTodoList ?? ([] as ITodoData[]))
        }
      })
    }
  }
  return handleDelete
}
