import useAuthForm from 'hooks/useAuthForm'
import IAuthFormData from 'interfaces/IAuthFormData'
import { Navigate } from 'react-router-dom'
import { isTokenExist } from 'utils/token'
import { signIn } from '../api/auth'

export default function Signin() {
  if (isTokenExist()) {
    return <Navigate to="/todo" replace />
  }

  const {
    handleSubmit,
    handleChange,
    setEmail,
    setPassword,
    isValid,
    navigate
  } = useAuthForm(async (target: IAuthFormData) => {
    // axios
    const responsStatus = await signIn(target)
    if (responsStatus === 200) {
      navigate('/todo')
    }
  })
  return (
    <form onSubmit={handleSubmit}>
      <input
        data-testid="email-input"
        name="email"
        onChange={(e) => handleChange(e, setEmail)}
      />
      <input
        data-testid="password-input"
        name="password"
        onChange={(e) => handleChange(e, setPassword)}
      />
      <button data-testid="signin-button" type="submit" disabled={!isValid()}>
        로그인
      </button>
    </form>
  )
}
