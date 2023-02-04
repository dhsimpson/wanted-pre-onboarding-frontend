import { useNavigate } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { getTodoList } from 'api/todo'
import { ITodoData } from 'interfaces/ITodo'
import TodoItem from './TodoItem'
import TodoContext from 'context/TodoContext'

export default function TodoList() {
  const todoContext = useContext(TodoContext)

  const { contextTodoList, setContextTodoList } = todoContext ?? {
    contextTodoList: undefined,
    setContextTodoList: undefined
  }

  const navigate = useNavigate()

  useEffect(() => {
    getTodoList().then((data) => {
      if (data === 401) {
        navigate('/signin', { replace: true })
        return
      }
      setContextTodoList?.(data)
    })
  }, [])

  return (
    <>
      {contextTodoList?.map((todoItem: ITodoData) => {
        return <TodoItem {...todoItem} key={todoItem.id} />
      })}
    </>
  )
}
