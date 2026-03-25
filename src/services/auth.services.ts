import { ILogin } from '@/types/Auth'
import endpoint from './endpoint.constant'
import instance from '@/config/axios/instance'

const authServices = {
  login: (payload: ILogin) => instance.post(`${endpoint.AUTH}/login`, payload),

  getProfileWithToken: (token: string) =>
    instance.get(`${endpoint.AUTH}/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),

  getProfile: () => instance.get(`${endpoint.AUTH}/me`),
}

export default authServices
