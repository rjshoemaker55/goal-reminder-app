import { User, UserErrors } from './types'

export function validate(user: User): UserErrors {
  let tempErrors: UserErrors = {
    name: '',
    email: '',
    password: '',
    noErrors: true
  }

  if (user.name === '') tempErrors.name = 'You must enter your name.'

  let emailPattern = new RegExp(
    /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/
  )
  if (!emailPattern.test(user.email))
    tempErrors.email = 'You must enter a valid email.'

  let passwordPattern = new RegExp(
    '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'
  )
  if (!passwordPattern.test(user.password))
    tempErrors.password =
      'Your password must contain at least 6 characters, one uppercase and one lowercase letter, a number, and a special character.'

  tempErrors.noErrors =
    tempErrors.name === '' &&
    tempErrors.email === '' &&
    tempErrors.password === ''

  return tempErrors
}
