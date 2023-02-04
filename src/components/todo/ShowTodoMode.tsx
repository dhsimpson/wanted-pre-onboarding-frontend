import axiosClient from 'customClients/axiosClient'
import { ITodoData } from 'interfaces/ITodo'
import { ChangeEvent, useState } from 'react'

export default function ShowTodoMode({
  todoItem,
  setIsUpdateMode
}: {
  todoItem: ITodoData
  setIsUpdateMode: React.Dispatch<React.SetStateAction<boolean>>
}) {
  async function handleDelete() {
    const willDelete = confirm('정말 삭제하시겠습니까?')
    if (willDelete) {
      try {
        const response = await axiosClient.delete(`todos/${todoItem.id}`)
        if (response.status === 204) {
          alert('삭제 완료되었습니다!')
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
  }

  const [isChecked, setIsChecked] = useState(todoItem.isCompleted)
  const handleCheckBox = async (event: ChangeEvent<HTMLInputElement>) => {
    try {
      const response = await axiosClient.put(`todos/${todoItem.id}`, {
        todo: todoItem.todo,
        isCompleted: !isChecked
      })

      if (response.status === 200) {
        setIsChecked(response.data.isCompleted)
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
    <>
      <label>
        <input type="checkbox" checked={isChecked} onChange={handleCheckBox} />
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
