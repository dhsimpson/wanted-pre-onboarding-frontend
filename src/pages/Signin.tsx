import InputPassword from 'components/common/InputPassword'
import useAuthForm from 'hooks/useAuthForm'
import IAuthFormData from 'interfaces/IAuthFormData'
import { Navigate } from 'react-router-dom'
import { isTokenExist } from 'utils/token'
import { signIn } from 'api/auth'
import InputEmail from 'components/common/InputEmail'

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
      <InputEmail handleChange={handleChange} setAccountData={setEmail} />
      <InputPassword handleChange={handleChange} setAccountData={setPassword} />
      <button data-testid="signin-button" type="submit" disabled={!isValid()}>
        로그인
      </button>
    </form>
  )
}
