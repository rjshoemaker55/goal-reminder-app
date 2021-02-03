export interface User {
  name: string
  email: string
  password: string
}

export interface UserErrors {
  name: string
  email: string
  password: string
  noErrors: boolean
}
