import { useNavigate } from 'react-router-dom'
import { deleteToken } from 'utils/token'

export default function LogoutButton() {
  const navigate = useNavigate()

  const handleClick = () => {
    const willLogouot = confirm('로그아웃 하시겠습니까?')
    if (willLogouot) {
      deleteToken()
      alert('로그아웃 되었습니다!')
      navigate('/signin')
    }
  }

  return (
    <button
      onClick={() => {
        handleClick()
      }}
      style={buttonStyle}>
      로그아웃
    </button>
  )
}

const buttonStyle = {
  height: 'fit-content',
  lineHeight: '1.5'
}
