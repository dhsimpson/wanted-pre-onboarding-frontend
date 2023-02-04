import { ITodoData, ITodoFormData } from 'interfaces/ITodo'
import { FormEvent, useState } from 'react'
import { canSubmit } from 'utils/validateTodo'
import useUpdateTodo from 'hooks/useUpdateTodo'

export default function UpdateTodoMode({
  todoItem,
  setIsUpdateMode
}: {
  todoItem: ITodoData
  setIsUpdateMode: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const [todoData, setTodoData] = useState(todoItem.todo)
  const handleSubmit = useUpdateTodo(
    todoItem,
    (todoItem) => {
      return Object.assign({}, todoItem, {
        todo: todoData
      })
    },
    () => {
      alert('todo 수정을 완료 하였습니다!')
      setIsUpdateMode(false)
    },
    (event) => {
      event.preventDefault()
      const target = event.target as ITodoFormData
      if (!canSubmit(target.todo.value)) {
        alert('todo 가 입력되지 않았습니다!')
        return false
      }
      return true
    }
  )

  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    setTodoData(event.currentTarget.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        data-testid="modify-input"
        value={todoData}
        name="todo"
        onChange={handleChange}
      />
      <button data-testid="submit-button" type="submit">
        제출
      </button>
      <button
        data-testid="cancel-button"
        onClick={() => setIsUpdateMode(false)}>
        취소
      </button>
    </form>
  )
}
