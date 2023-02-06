export const saveToken = (token: string) => {
  localStorage.setItem('auth_token', token)
}
export const deleteToken = () => {
  localStorage.removeItem('auth_token')
}
export const getToken = () => {
  return localStorage.getItem('auth_token')
}
export const isTokenExist = () => {
  return localStorage.getItem('auth_token') ? true : false
}
