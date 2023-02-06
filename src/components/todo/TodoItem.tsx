import { ITodoData } from 'interfaces/ITodo'
import { memo, useMemo, useState } from 'react'
import ShowTodoMode from './ShowTodoMode'
import UpdateTodoMode from './UpdateTodoMode'

const TodoItem = (todoItem: ITodoData) => {
  const [isUpdateMode, setIsUpdateMode] = useState(false)
  const _todoItem = useMemo(() => todoItem, [todoItem])
  return (
    <li>
      {isUpdateMode ? (
        <UpdateTodoMode
          todoItem={_todoItem}
          setIsUpdateMode={setIsUpdateMode}
        />
      ) : (
        <ShowTodoMode todoItem={_todoItem} setIsUpdateMode={setIsUpdateMode} />
      )}
    </li>
  )
}

export default memo(TodoItem)
