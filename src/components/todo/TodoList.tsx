import { useNavigate } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { getTodoList } from 'api/todo'
import { ITodoData } from 'interfaces/ITodo'
import TodoItem from './TodoItem'
import TodoContext from 'context/TodoContext'

export default function TodoList() {
  const contextTodoList = useContext(TodoContext)
  const [todoList, setTodoList] = useState(contextTodoList?.contextTodoList)
  //   useEffect(() => {}, [contextTodoList])
  const navigate = useNavigate()

  useEffect(() => {
    console.log('hihihi')
    getTodoList().then((data) => {
      if (data === 401) {
        navigate('/signin', { replace: true })
        return
      }
      setTodoList(data)
    })
  }, [contextTodoList])
  return (
    <>
      {todoList?.map((todoItem: ITodoData) => {
        return <TodoItem {...todoItem} key={todoItem.id} />
      })}
    </>
  )
}
