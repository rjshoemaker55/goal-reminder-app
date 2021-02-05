export interface NewUser {
  name: string
  email: string
  password: string
}

export interface ExistUser {
  email: string
  password: string
}

export interface UserErrors {
  name: string
  email: string
  password: string
  noErrors: boolean
}
