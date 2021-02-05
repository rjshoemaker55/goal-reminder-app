import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import firebase from '../firebase'

const Home = () => {
  const [user, setUser] = useState({ email: '', username: '' })
  const [loggedIn, setLoggedIn] = useState(false)
  const router = useRouter()

  useEffect(async (): any => {
    let userId

    if (firebase.auth().currentUser === null) {
      return router.push('/login')
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
      {loggedIn ? (
        <>
          <h1>Dashboard</h1>
          <h2>Welcome, {user.username}</h2>
        </>
      ) : (
        <>
          <h2>Please wait...</h2>
        </>
      )}
    </>
  )
}

export default Home
