import IAuthFormData from 'interfaces/IAuthFormData'
import useAuthForm from 'hooks/useAuthForm'
import { signUp } from 'api/auth'
import { isTokenExist } from 'utils/token'
import { Navigate } from 'react-router-dom'
import { CREATED } from 'consts/api'
import InputPassword from 'components/common/InputPassword'
import InputEmail from 'components/common/InputEmail'
import SubmitButton from 'components/common/SubmitButton'

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
    if (responsStatus === CREATED) {
      navigate('/signin')
    }
  })

  return (
    <form onSubmit={handleSubmit}>
      <InputEmail handleChange={handleChange} setAccountData={setEmail} />
      <InputPassword handleChange={handleChange} setAccountData={setPassword} />
      <SubmitButton
        isValid={isValid}
        testId="signup-button"
        name={'회원가입'}
      />
    </form>
  )
}
