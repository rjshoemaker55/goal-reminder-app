import { useState } from 'react'
import firebase from '../firebase'
import Error from '../components/Error'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({ name: '', email: '', password: '' })

  interface User {
    name: string
    email: string
    password: string
  }

  interface UserErrors {
    name: string
    email: string
    password: string
    noErrors: boolean
  }

  // Capture form submit, validate and submit new user
  const submitRegister = async (e: any) => {
    e.preventDefault()
    const usersRef = firebase.database().ref('users')
    let user: User = {
      name,
      email,
      password
    }

    // Check if each field was filled and set errors state accordingly
    const validationResult = validate(user)
    console.log(
      `inside validationResult before if statement - ${JSON.stringify(
        validationResult
      )}`
    )

    setErrors({
      name: validationResult.name === '' ? '' : validationResult.name,
      email: validationResult.email === '' ? '' : validationResult.email,
      password:
        validationResult.password === '' ? '' : validationResult.password
    })

    console.log(`errors outside functions: ${JSON.stringify(errors)}`)

    function validate(user: User): UserErrors {
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
  }
  return (
    <form onSubmit={submitRegister}>
      <input placeholder='Name' onChange={(e) => setName(e.target.value)} />
      <Error>{errors.name}</Error>
      <input placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
      <Error>{errors.email}</Error>
      <input
        placeholder='Password'
        type='password'
        onChange={(e) => setPassword(e.target.value)}
      />
      <Error>{errors.password}</Error>
      <button type='submit'>Submit</button>
    </form>
  )
}
export default Register
