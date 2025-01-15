export type RegisterPayload = {
  firstName: string
  lastName: string
  email: string
  password: string
}

export type LoginPayload = {
  email: string
  password: string
}

export type LoginResTypes = {
  accessToken: string
  refreshToken: string
}
