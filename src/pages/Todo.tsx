import { Navigate } from 'react-router-dom'
import { isTokenExist } from 'utils/token'
import AddTodo from 'components/todo/AddTodo'
import TodoList from 'components/todo/TodoList'

export default function Todo() {
  if (!isTokenExist()) {
    return <Navigate to="/signin" replace />
  }

  return (
    <>
      <AddTodo />
      <TodoList />
    </>
  )
}
