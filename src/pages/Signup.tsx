import IAuthFormData from 'interfaces/IAuthFormData'
import useAuthForm from '../hooks/useAuthForm'
import axiosClient from 'customClients/axiosClient'

export default function Signup() {
  const { handleSubmit, handleChange, setEmail, setPassword, isValid } =
    useAuthForm(async (target: IAuthFormData) => {
      // axios
      const res = await axiosClient.post('auth/signup', {
        email: target.email.value,
        password: target.password.value
      })
      console.log(res)
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
