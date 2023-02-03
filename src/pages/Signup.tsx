import IAuthFormData from 'interfaces/IAuthFormData'
import useAuthForm from '../hooks/useAuthForm'
import { useNavigate } from 'react-router-dom'
import { signUp } from '../api/auth'

export default function Signup() {
  const navigate = useNavigate()

  const { handleSubmit, handleChange, setEmail, setPassword, isValid } =
    useAuthForm(async (target: IAuthFormData) => {
      // axios
      const responsStatus = await signUp(target)
      if (responsStatus === 201) {
        navigate('/signin')
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
      <button data-testid="signup-button" type="submit" disabled={!isValid()}>
        회원가입
      </button>
    </form>
  )
}
