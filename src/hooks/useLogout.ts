import { useNavigate } from 'react-router-dom'
import { deleteToken } from 'utils/token'
import { getToken } from 'utils/token'

export default function useLogout() {
  const navigate = useNavigate()
  const isLogin = getToken()

  const handleClick = () => {
    const willLogouot = confirm('로그아웃 하시겠습니까?')
    if (willLogouot) {
      deleteToken()
      alert('로그아웃 되었습니다!')
      navigate('/signin')
    }
  }

  return { isLogin, handleClick }
}
