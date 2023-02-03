const isProduction = process.env.NODE_ENV === 'production'

export const baseUrl = isProduction
  ? 'https://pre-onboarding-selection-task.shop/'
  : 'http://localhost:8000/'
