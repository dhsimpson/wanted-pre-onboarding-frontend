import { ITodoData } from 'interfaces/ITodo'
import TodoItem from './TodoItem'
import useGetTodoList from 'hooks/useGetTodoList'

export default function TodoList() {
  const { contextTodoList, isLoading, setIsLoading, isError, retry } =
    useGetTodoList()

  if (isLoading) {
    return <div>로딩중!</div>
  }

  if (isError) {
    return (
      <button
        onClick={() => {
          setIsLoading(false)
          retry()
        }}>
        다시 시도!
      </button>
    )
  }

  return (
    <>
      {contextTodoList?.map((todoItem: ITodoData) => {
        return <TodoItem {...todoItem} key={todoItem.id} />
      })}
    </>
  )
}
