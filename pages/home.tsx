import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import firebase from '../firebase'

const Home = () => {
  const [user, setUser] = useState({ email: '', displayName: '' })
  const router = useRouter()

  useEffect(() => {
    let userId

    if (firebase.auth().currentUser === null) {
      router.push('/login')
    } else {
      userId = firebase.auth().currentUser.uid
    }

    firebase
      .database()
      .ref(`users/${userId}`)
      .once('value')
      .then((snapshot) => {
        setUser(snapshot.val())
      })
  }, [])

  return (
    <>
      <h1>Dashboard</h1>
      <h2>Welcome, {user.username}</h2>
    </>
  )
}

export default Home
