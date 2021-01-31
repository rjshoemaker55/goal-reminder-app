import { useState } from 'react'
import firebase from '../firebase'
import Error from '../components/Error'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({ name: '', email: '', password: '' })

  const submitRegister = async (e) => {
    e.preventDefault()
    const usersRef = firebase.database().ref('users')
    let user = {
      name,
      email,
      password
    }

    // check if each field was entered
    if (name === '') {
      setErrors({ ...errors, name: 'A name must be provided.' })
    } else if (email === '') {
      setErrors({ ...errors, email: 'An email must be provided.' })
    } else if (password === '') {
      setErrors({ ...errors, password: 'A password must be provided.' })
    } else {
      setErrors({ name: '', email: '', password: '' })
    }
    // usersRef.push(user)
  }
  return (
    <form onSubmit={submitRegister}>
      <input placeholder='Name' onChange={(e) => setName(e.target.value)} />
      <Error text={errors.name} />
      <input placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
      <Error text={errors.email} />
      <input
        placeholder='Password'
        type='password'
        onChange={(e) => setPassword(e.target.value)}
      />
      <Error text={errors.password} />
      <button type='submit'>Submit</button>
    </form>
  )
}

export default Register
