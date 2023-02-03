import useAuthForm from 'hooks/useAuthForm'
import IAuthFormData from 'interfaces/IAuthFormData'
import { signIn } from '../api/auth'

export default function Signin() {
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
      <button data-testid="signup-button" type="submit" disabled={!isValid()}>
        로그인
      </button>
    </form>
  )
}
