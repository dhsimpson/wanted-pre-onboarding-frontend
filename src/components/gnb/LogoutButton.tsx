import useLogout from 'hooks/useLogout'

export default function LogoutButton() {
  const { isLogin, handleClick } = useLogout()

  if (!isLogin) return <></>
  return (
    <button
      onClick={() => {
        handleClick()
      }}
      style={buttonStyle}>
      ๋ก๊ทธ์์
    </button>
  )
}

const buttonStyle = {
  height: 'fit-content',
  lineHeight: '1.5'
}
