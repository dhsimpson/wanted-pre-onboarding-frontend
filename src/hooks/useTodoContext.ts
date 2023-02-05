import TodoContext from 'context/TodoContext'
import { useContext } from 'react'

export default function useTodoContext() {
  const todoContext = useContext(TodoContext)

  const { contextTodoList, setContextTodoList } = todoContext ?? {
    contextTodoList: undefined,
    setContextTodoList: undefined
  }
  return { contextTodoList, setContextTodoList }
}
