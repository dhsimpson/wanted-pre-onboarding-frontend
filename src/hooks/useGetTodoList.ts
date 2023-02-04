import { getTodoList } from 'api/todo'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useTodoContext from './useTodoContext'

export default function useGetTodoList() {
  const { contextTodoList, setContextTodoList } = useTodoContext()

  const navigate = useNavigate()

  // 계속 리랜더링 되면서 실행 되는 것 같은데, useMemo 로 useEffect 없앨 수 있나?
  useEffect(() => {
    getTodoList().then((data) => {
      if (data === 401) {
        navigate('/signin', { replace: true })
        return
      }
      setContextTodoList?.(data)
    })
  }, [])
  return contextTodoList
}
