import { addTodoList } from 'api/todo'
import { ITodoFormData } from 'interfaces/ITodo'
import { FormEvent } from 'react'
import { canSubmit } from 'utils/validateTodo'
import useTodoContext from './useTodoContext'

export default function useAddTodoList() {
  const { contextTodoList, setContextTodoList } = useTodoContext()

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const target = event.target as ITodoFormData
    if (!canSubmit(target.todo.value)) {
      alert('todo 가 입력되지 않았습니다!')
      return
    }

    addTodoList(target.todo.value).then((response) => {
      if (response?.status === 201) {
        alert('todo 가 추가되었습니다!')
        setContextTodoList?.([...(contextTodoList ?? []), response.data])
      }
    })
  }
  return handleSubmit
}
