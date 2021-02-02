import { useState } from 'react'
import firebase from '../firebase'
import Error from '../components/Error'

interface User {
  name: string;
  email: string;
  password: string;
}

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({ name: '', email: '', password: '' })

  // Capture form submit, validate and submit new user
  const submitRegister = async (e) => {
    e.preventDefault()
    const usersRef = firebase.database().ref('users')
    
    let user: User = {
      name,
      email,
      password
    }

    // Check if each field was filled and set errors state accordingly
    setErrors({
      name: user.name === '' ? 'You must enter your name.' : '',
      email: user.email === '' ? 'You must enter a valid email.' : '',
      password: user.password === '' ? 'You must enter a valid password.' : ''
    })

    if (errors.name != '' || errors.email != '' || errors.password != '') {
      return
    }

    console.log('passed')
    // usersRef.push(user)
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
