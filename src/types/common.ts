export interface IApiResponse<T> {
  statusCode: number
  message: string
  data?: T
}

export interface IBase {
  __v: number
  _destroy: boolean
  createdAt: Date
  updatedAt: Date
}
