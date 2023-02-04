import { ITodoData } from 'interfaces/ITodo'
import { createContext } from 'react'

interface IContextTodoList {
  contextTodoList: ITodoData[]
  setContextTodoList: React.Dispatch<React.SetStateAction<ITodoData[]>>
}

const TodoContext = createContext<IContextTodoList | null>(null)
export default TodoContext
