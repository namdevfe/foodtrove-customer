import { IApiResponse, IUser, RegisterPayload } from '@/types'
import { http } from '@/utils'

const authService = {
  register(payload: RegisterPayload) {
    return http.post<IApiResponse<IUser>>('/auth/register', payload)
  }
}

export default authService
