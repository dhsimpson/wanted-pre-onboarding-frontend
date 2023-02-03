import IAuthFormData from '../interfaces/IAuthFormData'
import axiosClient from 'customClients/axiosClient'

export const signUp = async (data: IAuthFormData) => {
  try {
    const res = await axiosClient.post('auth/signup', {
      email: data.email.value,
      password: data.password.value
    })

    if (res.status === 201) {
      alert('회원가입 성공!')
      return res.status
    }
  } catch (error: any) {
    const errorStatus = error.response?.status
    if (errorStatus === 400) {
      alert('이미 있는 이메일 입니다.')
    }
    if (errorStatus === 401) {
      alert('이메일 혹은 패스워드를 잘못 입력했습니다.')
    }
    return errorStatus
  }
}

export const signIn = async (data: IAuthFormData) => {
  try {
    const res = await axiosClient.post('auth/signIn', {
      email: data.email.value,
      password: data.password.value
    })

    if (res.status === 200) {
      alert('로그인 되었습니다.')
      return res.status
    }
  } catch (error: any) {
    const errorStatus = error.response?.status
    if (errorStatus === 401) {
      alert('이메일 혹은 패스워드를 잘못 입력했습니다.')
    }
    return errorStatus
  }
}
