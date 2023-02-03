import firebase from 'firebase/compat/app'

import 'firebase/compat/auth'
import 'firebase/compat/database'

const firebaseConfig = {
  apiKey: 'AIzaSyDw6xFIRZpqstKHfmlZ4zViPii7vshMbIw',
  authDomain: 'letmeask---new.firebaseapp.com',
  databaseURL: 'https://letmeask---new-default-rtdb.firebaseio.com',
  projectId: 'letmeask---new',
  storageBucket: 'letmeask---new.appspot.com',
  messagingSenderId: '440494229897',
  appId: '1:440494229897:web:12c77e93eb169efaa63958',
}

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const database = firebase.database()

export { firebase, auth, database }
