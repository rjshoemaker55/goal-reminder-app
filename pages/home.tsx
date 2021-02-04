import { useEffect, useState } from 'react'
import firebase from '../firebase'

const Home = () => {
  const [user, setUser] = useState({ email: '', displayName: '' })

  useEffect(() => {
    const userId = firebase.auth().currentUser.uid

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
      <h2>Welcome, {user.displayName}</h2>
    </>
  )
}

export default Home
