import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: 'todoist-app-da2f7.firebaseapp.com',
  projectId: 'todoist-app-da2f7',
  storageBucket: 'todoist-app-da2f7.appspot.com',
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID,
})

export { firebaseConfig as firebase }
