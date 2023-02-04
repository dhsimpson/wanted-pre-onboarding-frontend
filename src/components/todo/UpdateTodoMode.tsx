import { ITodoData } from 'interfaces/ITodoData'

export default function UpdateTodoMode({
  todoItem,
  setIsUpdateMode
}: {
  todoItem: ITodoData
  setIsUpdateMode: React.Dispatch<React.SetStateAction<boolean>>
}) {
  return (
    <>
      <input data-testid="modify-input" value={todoItem.todo} />
      <button data-testid="submit-button">제출</button>
      <button
        data-testid="cancel-button"
        onClick={() => setIsUpdateMode(false)}>
        취소
      </button>
    </>
  )
}
