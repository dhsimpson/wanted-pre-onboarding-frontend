import { ITodoData } from 'interfaces/ITodo'
import { useState } from 'react'
import ShowTodoMode from './ShowTodoMode'
import UpdateTodoMode from './UpdateTodoMode'

export default function TodoItem(todoItem: ITodoData) {
  const [isUpdateMode, setIsUpdateMode] = useState(false)
  return (
    <li>
      {isUpdateMode ? (
        <UpdateTodoMode todoItem={todoItem} setIsUpdateMode={setIsUpdateMode} />
      ) : (
        <ShowTodoMode todoItem={todoItem} setIsUpdateMode={setIsUpdateMode} />
      )}
    </li>
  )
}
