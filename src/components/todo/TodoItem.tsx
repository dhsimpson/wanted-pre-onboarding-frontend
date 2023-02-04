import { ITodoData } from 'interfaces/ITodoData'

export default function TodoItem(todoItem: ITodoData) {
  return (
    <li>
      <label>
        <input type="checkbox" checked={todoItem.isCompleted} />
        <span>{todoItem.todo}</span>
      </label>
      <button data-testid="modify-button">수정</button>
      <button data-testid="delete-button">삭제</button>
    </li>
  )
}
