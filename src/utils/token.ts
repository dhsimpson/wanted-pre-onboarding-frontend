export const saveToken = (token: string) => {
  localStorage.setItem('auth_token', token)
}
