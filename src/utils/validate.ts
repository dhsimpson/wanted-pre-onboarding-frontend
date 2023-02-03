export function canSubmit(email: string, password: string): boolean {
  return isValidEmail(email) && isValidPassword(password)
}

export function isValidEmail(email: string): boolean {
  return email.includes('@')
}

export function isValidPassword(password: string): boolean {
  return password.length >= 8
}
