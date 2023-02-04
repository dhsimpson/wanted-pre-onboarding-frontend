import { ITodoData } from 'interfaces/ITodo'
import useDeleteTodo from 'hooks/useDeleteTodo'
import useUpdateTodo from 'hooks/useUpdateTodo'

export default function ShowTodoMode({
  todoItem,
  setIsUpdateMode
}: {
  todoItem: ITodoData
  setIsUpdateMode: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const handleDelete = useDeleteTodo(todoItem)
  const handleCheckBox = useUpdateTodo(todoItem, (todoItem) => {
    return Object.assign({}, todoItem, {
      isCompleted: !todoItem.isCompleted
    })
  })

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={todoItem.isCompleted}
          onChange={handleCheckBox}
        />
        <span>{todoItem.todo}</span>
      </label>
      <button data-testid="modify-button" onClick={() => setIsUpdateMode(true)}>
        수정
      </button>
      <button data-testid="delete-button" onClick={handleDelete}>
        삭제
      </button>
    </>
  )
}
