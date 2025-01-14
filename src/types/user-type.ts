import { IBase } from '@/types'

export interface IUser extends IBase {
  _id: string
  firstName: string
  lastName: string
  email: string
  address?: []
}
