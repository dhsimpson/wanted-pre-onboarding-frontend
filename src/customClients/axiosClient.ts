import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
  InternalAxiosRequestConfig
} from 'axios'
import { baseUrl } from '../consts/api'

const axiosClient = axios.create({ baseURL: baseUrl })

axiosClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const paths = config.url?.split('/') ?? []
    // signup, signin 은 토큰 필요없음
    if (paths[0] !== 'auth') {
      const authToken =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRvbmdkb25nQHdhbnRlZC5jb20iLCJzdWIiOjYwOCwiaWF0IjoxNjc1NDQwMDg5LCJleHAiOjE2NzYwNDQ4ODl9.HxKegDEgNNwMF4-LYpeuxeWmPpgLuei9UauAzVS2Xo8'
      //localStorage.getItem('authtoken');
      if (authToken) {
        config.headers.setAuthorization(`Bearer ${authToken}`)
        //   config.headers = {
        //     Authorization: `Bearer ${authToken}`,
        //   };
      }
    }
    return config
  },
  (error) => Promise.reject(error)
)

// 서버에서 헤더에 authorization 이 없는 경우 400 error를 반환한다. (401이어야 할 것 같은데, issue 등록해 놓자)
// const Unauthorized = 401; // 우선은 내 로컬에서 서버가 401 을 response 하도록 수정해 놓자

// axiosClient.interceptors.response.use(
//   (res: AxiosResponse) => res,
//   (error: AxiosError) => {
//     const status = error.response?.status;

//     if (status === Unauthorized) {
//       alert('로그인을 해주세요!');

//       customHistory.replace('/auth');
//     }

//     return Promise.reject(error);
//   },
// );

export default axiosClient
