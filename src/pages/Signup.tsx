import IAuthFormData from 'interfaces/IAuthFormData'
import useAuthForm from '../hooks/useAuthForm'
import axiosClient from 'customClients/axiosClient'

export default function Signup() {
  const { handleSubmit, handleChange, setEmail, setPassword, isValid } =
    useAuthForm(async (target: IAuthFormData) => {
      // axios
      try {
        const res = await axiosClient.post('auth/signup', {
          email: target.email.value,
          password: target.password.value
        })

        if (res.status === 201) {
          alert('회원가입 성공!')
        }
      } catch (error: any) {
        if (error.response.status === 400) {
          //error.response.message
          alert('이미 있는 이메일 입니다.')
          return
        }
        if (error.response.status === 401) {
          alert('이메일 혹은 패스워드를 잘못 입력했습니다.')
          return
        }
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
