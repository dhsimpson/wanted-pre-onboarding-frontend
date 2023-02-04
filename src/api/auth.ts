import IAuthFormData from '../interfaces/IAuthFormData'
import axiosClient from 'customClients/axiosClient'
import { saveToken } from 'utils/token'
import { BAD_REQUEST, CREATED, OK, UNAUTHORIZED } from 'consts/api'

export const signUp = async (data: IAuthFormData) => {
  try {
    const res = await axiosClient.post('auth/signup', {
      email: data.email.value,
      password: data.password.value
    })

    if (res.status === CREATED) {
      alert('회원가입 성공!')
      return res.status
    }
  } catch (error: any) {
    const errorStatus = error.response?.status
    if (errorStatus === BAD_REQUEST) {
      alert('이미 있는 이메일 입니다.')
    }
    if (errorStatus === UNAUTHORIZED) {
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

    if (res.status === OK) {
      alert('로그인 되었습니다.')
      saveToken(res.data.access_token)
      return res.status
    }
  } catch (error: any) {
    const errorStatus = error.response?.status
    if (errorStatus === UNAUTHORIZED) {
      alert('이메일 혹은 패스워드를 잘못 입력했습니다.')
    }
    return errorStatus
  }
}
