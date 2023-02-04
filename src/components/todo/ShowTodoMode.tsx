import { ITodoData } from 'interfaces/ITodoData'

export default function ShowTodoMode({
  todoItem,
  setIsUpdateMode
}: {
  todoItem: ITodoData
  setIsUpdateMode: React.Dispatch<React.SetStateAction<boolean>>
}) {
  return (
    <>
      <label>
        <input type="checkbox" checked={todoItem.isCompleted} />
        <span>{todoItem.todo}</span>
      </label>
      <button data-testid="modify-button" onClick={() => setIsUpdateMode(true)}>
        수정
      </button>
      <button data-testid="delete-button">삭제</button>
    </>
  )
}
