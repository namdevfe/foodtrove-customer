import {
  IApiResponse,
  IUser,
  LoginPayload,
  LoginResTypes,
  RegisterPayload
} from '@/types'
import { http } from '@/utils'

const authService = {
  register(payload: RegisterPayload) {
    return http.post<IApiResponse<IUser>>('/auth/register', payload)
  },
  login(payload: LoginPayload) {
    return http.post<IApiResponse<LoginResTypes>>('/auth/login', payload)
  },
  auth(payload: LoginResTypes) {
    return http.post<any>('/api/auth', payload, {
      baseURL: ''
    })
  }
}

export default authService
