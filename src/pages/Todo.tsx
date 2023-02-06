import { Navigate } from 'react-router-dom'
import { isTokenExist } from 'utils/token'
import AddTodo from 'components/todo/AddTodo'
import TodoList from 'components/todo/TodoList'
import { ITodoData } from 'interfaces/ITodo'
import TodoContext from 'context/TodoContext'
import { useState } from 'react'

export default function Todo() {
  if (!isTokenExist()) {
    alert('로그인 해주세요!')
    return <Navigate to="/signin" replace />
  }

  const [contextTodoList, setContextTodoList] = useState([] as ITodoData[])

  return (
    <TodoContext.Provider value={{ contextTodoList, setContextTodoList }}>
      <AddTodo />
      <TodoList />
    </TodoContext.Provider>
  )
}
