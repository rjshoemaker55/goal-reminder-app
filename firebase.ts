import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyBOp3iVvlRq-BYhB49BoV66Aa6dbOTLexE',
  authDomain: 'goal-tracker-67393.firebaseapp.com',
  projectId: 'goal-tracker-67393',
  storageBucket: 'goal-tracker-67393.appspot.com',
  messagingSenderId: '177978554355',
  appId: '1:177978554355:web:2ee245dfe6d639fcdfc486',
  measurementId: 'G-NZ9LQC0FFZ'
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
} else {
  firebase.app()
}

export default firebase
