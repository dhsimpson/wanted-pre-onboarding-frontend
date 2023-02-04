import { Navigate, useNavigate } from 'react-router-dom'
import { isTokenExist } from 'utils/token'
import { useEffect, useState } from 'react'
import { getTodoList } from 'api/todo'
import AddTodo from 'components/todo/AddTodo'
import TodoList from 'components/todo/TodoList'

export default function Todo() {
  if (!isTokenExist()) {
    return <Navigate to="/signin" replace />
  }
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
  //   console.log(todoList)
  return (
    <>
      <AddTodo />
      <TodoList />
    </>
  )
}
