import useLogout from 'hooks/useLogout'

export default function LogoutButton() {
  const handleClick = useLogout()

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
