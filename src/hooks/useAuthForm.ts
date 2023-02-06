import IAuthFormData from 'interfaces/IAuthFormData'
import { FormEvent, Dispatch, SetStateAction, useState } from 'react'
import { canSubmit } from 'utils/validateAuth'
import { useNavigate } from 'react-router-dom'

export default function useAuthForm(
  submitCallback: (target: IAuthFormData) => void
) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const target = event.target as IAuthFormData

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
