import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import firebase from '../firebase'
import Error from '../components/Error'
import { NewUser, ExistUser } from '../utils/types'
import { validate, writeUserData } from '../utils/helpers'

const Login = () => {
  const router = useRouter()
  const [page, setPage] = useState('login')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({ name: '', email: '', password: '' })

  // Capture form submit
  const submitRegister = (e: any) => {
    e.preventDefault()

    let newUser: NewUser = {
      name,
      email,
      password
    }

    // Validate user object
    const validationResult = validate(newUser)

    // If no errors, add new user to auth database
    if (validationResult.noErrors) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(newUser.email, newUser.password)
        .then((userCredential) => {
          let newAuthUser = userCredential.user

          // Create new user object in realtime database
          writeUserData(newAuthUser.uid, newUser.name, newAuthUser.email)

          // Redirect to dashboard
          router.push('/home')
        })
        .catch((error) => {
          console.log(error)
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

  const submitLogin = (e: any) => {
    e.preventDefault()

    let existUser: ExistUser = {
      email,
      password
    }

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        let existAuthUser = userCredential.user

        router.push('/home')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <form onSubmit={page === 'register' ? submitRegister : submitLogin}>
      {page === 'register' && (
        <>
          <input placeholder='Name' onChange={(e) => setName(e.target.value)} />
          <Error>{errors.name}</Error>
        </>
      )}
      <input placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
      <Error>{errors.email}</Error>
      <input
        placeholder='Password'
        type='password'
        onChange={(e) => setPassword(e.target.value)}
      />
      <Error>{errors.password}</Error>
      <button type='submit'>
        {page === 'register' ? 'Register' : 'Login'}
      </button>
      <Link href={page === 'register' ? '/login' : '/register'}>
        {page === 'register' ? 'Login' : 'Register'}
      </Link>
    </form>
  )
}
export default Login
