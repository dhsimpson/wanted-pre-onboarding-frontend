import axiosClient from 'customClients/axiosClient'
import IAuthFormData from 'interfaces/IAuthFormData'
import { ITodoData, ITodoFormData } from 'interfaces/ITodo'
import { FormEvent, useState } from 'react'
import { canSubmit } from 'utils/validateTodo'

export default function UpdateTodoMode({
  todoItem,
  setIsUpdateMode
}: {
  todoItem: ITodoData
  setIsUpdateMode: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const [todoData, setTodoData] = useState(todoItem.todo)
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const target = event.target as ITodoFormData
    try {
      //TODO : validation 함수로 빼기
      if (!canSubmit(target.todo.value)) {
        alert('todo 가 입력되지 않았습니다!')
        return
      }

      const response = await axiosClient.put(`todos/${todoItem.id}`, {
        todo: target.todo.value,
        isCompleted: todoItem.isCompleted
      })

      if (response.status === 200) {
        alert('todo 수정을 완료 하였습니다!')
      }
    } catch (error: any) {
      const errorStatus = error.response?.status
      // if (errorStatus === 401) {
      //   alert('다시 로그인 해주세요!')
      // }
      // return errorStatus
      alert(errorStatus + '!!')
      console.error(error)
    }
  }
  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    setTodoData(event.currentTarget.value)
    console.log(todoData)
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