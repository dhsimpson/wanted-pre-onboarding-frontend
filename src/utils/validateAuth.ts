import { EMAIL_REQUIRED, MIN_PASSWORD_LENGTH } from 'consts/validate'

export function canSubmit(email: string, password: string): boolean {
  return isValidEmail(email) && isValidPassword(password)
}

export function isValidEmail(email: string): boolean {
  return email.includes(EMAIL_REQUIRED)
}

export function isValidPassword(password: string): boolean {
  return password.length >= MIN_PASSWORD_LENGTH
}
