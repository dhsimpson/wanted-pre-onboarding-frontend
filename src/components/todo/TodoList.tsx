import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getTodoList } from 'api/todo'
import { ITodoData } from 'interfaces/ITodo'
import TodoItem from './TodoItem'

export default function TodoList() {
  const [todoList, setTodoList] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    getTodoList().then((data) => {
      if (data === 401) {
        navigate('/signin', { replace: true })
        return
      }
      setTodoList(data)
    })
  }, [])
  return (
    <>
      {todoList.map((todoItem: ITodoData) => {
        return <TodoItem {...todoItem} key={todoItem.id} />
      })}
    </>
  )
}
