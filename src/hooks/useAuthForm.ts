import IAuthFormData from 'interfaces/IAuthFormData'
import { FormEvent, Dispatch, SetStateAction, useState } from 'react'
import { canSubmit, isValidEmail, isValidPassword } from 'utils/validate'
import { useNavigate } from 'react-router-dom'

export default function useAuthForm(
  submitCallback: (target: IAuthFormData) => void
) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const target = event.target as IAuthFormData
    // 전달 받은 callback을 실행하는 부분
    submitCallback(target)
  }
  const handleChange = (
    event: FormEvent<HTMLInputElement>,
    set: Dispatch<SetStateAction<string>>
  ) => {
    set(event.currentTarget.value)
  }

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const isValid = () => {
    return canSubmit(email, password)
  }

  const navigate = useNavigate()

  return {
    handleSubmit,
    handleChange,
    setEmail,
    setPassword,
    isValid,
    navigate
  }
}
