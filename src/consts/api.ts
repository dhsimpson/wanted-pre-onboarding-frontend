const isProduction = process.env.NODE_ENV === 'production'

export const baseUrl = isProduction
  ? 'https://pre-onboarding-selection-task.shop/'
  : 'http://localhost:8000/'

export const OK = 200
export const CREATED = 201
export const NO_CONTENT = 204
export const BAD_REQUEST = 400
export const UNAUTHORIZED = 401
