import axiosClient from 'customClients/axiosClient'
import { FormEvent } from 'react'
import { canSubmit } from 'utils/validateTodo'

interface ITodoFormData extends EventTarget {
  todo: { value: string }
}

export default function AddTodo() {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const target = event.target as ITodoFormData

    try {
      //TODO : validation 함수로 빼기
      if (!canSubmit(target.todo.value)) {
        alert('todo 가 입력되지 않았습니다!')
        return
      }

      const response = await axiosClient.post('todos', {
        todo: target.todo.value
      })

      if (response.status === 201) {
        alert('todo 가 추가되었습니다!')
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
  return (
    <form onSubmit={handleSubmit}>
      <input data-testid="new-todo-input" name="todo" />
      <button data-testid="new-todo-add-button" type="submit">
        추가
      </button>
    </form>
  )
}
