import { getTodoList } from 'api/todo'
import { UNAUTHORIZED } from 'consts/api'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useTodoContext from './useTodoContext'
import { OK } from 'consts/api'

export default function useGetTodoList() {
  const { contextTodoList, setContextTodoList } = useTodoContext()
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [retryCount, setRetryCount] = useState(0)

  const navigate = useNavigate()

  const retry = () => {
    setRetryCount(retryCount + 1)
  }

  useEffect(() => {
    setIsLoading(true)
    setIsError(false)
    getTodoList().then((response) => {
      if (response.status === UNAUTHORIZED) {
        navigate('/signin', { replace: true })
        return
      }
      if (response.status !== OK) {
        setIsError(true)
      } else {
        setContextTodoList?.(response.data ?? [])
        setIsError(false)
      }
      setIsLoading(false)
    })
  }, [retryCount])

  return {
    contextTodoList,
    isLoading,
    setIsLoading,
    isError,
    retry
  }
}
