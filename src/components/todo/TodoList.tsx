import { ITodoData } from 'interfaces/ITodo'
import TodoItem from './TodoItem'
import useGetTodoList from 'hooks/useGetTodoList'

export default function TodoList() {
  const contextTodoList = useGetTodoList()

  return (
    <>
      {contextTodoList?.map((todoItem: ITodoData) => {
        return <TodoItem {...todoItem} key={todoItem.id} />
      })}
    </>
  )
}
