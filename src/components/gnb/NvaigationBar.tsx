import { Link } from 'react-router-dom'
import { deleteToken } from 'utils/token'

export default function NvaigationBar() {
  return (
    <>
      <Link to="/signup">회원가입</Link>
      <Link to="/signin">로그인</Link>
      <Link to="/todo">TODO</Link>
      <button onClick={() => deleteToken()}>로그아웃</button>
    </>
  )
}
