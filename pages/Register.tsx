import { useState } from 'react'
import firebase from '../firebase'
import Error from '../components/Error'
import { User } from '../utils/types'
import { validate } from '../utils/helpers'

const Register = () => {
  const usersRef = firebase.database().ref('users')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({ name: '', email: '', password: '' })

  // Capture form submit
  const submitRegister = async (e: any) => {
    e.preventDefault()

    let user: User = {
      name,
      email,
      password
    }

    // Validate user object
    const validationResult = validate(user)

    // If no errors, add new user to database
    if (validationResult.noErrors) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then((userCredential) => {
          // Signed in
          let loggedInUser = userCredential.user
          console.log(loggedInUser)
        })
        .catch((error) => {
          let errorCode = error.code
          let errorMessage = error.message
        })
    }

    // Set errrors state to match errors returned from validate
    return setErrors({
      name: validationResult.name === '' ? '' : validationResult.name,
      email: validationResult.email === '' ? '' : validationResult.email,
      password:
        validationResult.password === '' ? '' : validationResult.password
    })
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
