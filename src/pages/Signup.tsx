import IAuthFormData from 'interfaces/IAuthFormData'
import useAuthForm from 'hooks/useAuthForm'
import { signUp } from 'api/auth'
import { isTokenExist } from 'utils/token'
import { Navigate } from 'react-router-dom'
import { CREATED } from 'consts/api'
import InputPassword from 'components/common/InputPassword'
import InputEmail from 'components/common/InputEmail'

export default function Signup() {
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
    const responsStatus = await signUp(target)
    // TODO : e.target 말고 useAuthForm 이 {email, password} 객체를 반환하게 해서 사용할까?
    if (responsStatus === CREATED) {
      navigate('/signin')
    }
  })

  return (
    <form onSubmit={handleSubmit}>
      <InputEmail handleChange={handleChange} setAccountData={setEmail} />
      <InputPassword handleChange={handleChange} setAccountData={setPassword} />
      <button data-testid="signup-button" type="submit" disabled={!isValid()}>
        회원가입
      </button>
    </form>
  )
}
