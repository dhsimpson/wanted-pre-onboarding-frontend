import { Navigate } from 'react-router-dom'
import { isTokenExist } from 'utils/token'

export default function Todo() {
  if (!isTokenExist()) {
    return <Navigate to="/signin" replace />
  }
  return <>im Todo</>
}
