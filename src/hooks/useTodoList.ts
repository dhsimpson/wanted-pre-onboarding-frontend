import { getTodoList } from 'api/todo'
import { useState, useEffect } from 'react'
export default function useTodoList() {
  const [todoList, setTodoList] = useState([])
  //   useEffect(() => {
  //     getTodoList(setTodoList)
  //   }, [])
  return todoList
}
