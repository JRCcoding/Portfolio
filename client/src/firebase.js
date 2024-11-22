import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDGCTbnxm0nYMYsW1l2uotYNfVurpB_5m4',
  authDomain: 'claxton-chat-app.firebaseapp.com',
  projectId: 'claxton-chat-app',
  storageBucket: 'claxton-chat-app.firebasestorage.app',
  messagingSenderId: '204913829902',
  appId: '1:204913829902:web:0c2febd9d0ae143694f45f',
  measurementId: 'G-DR8Z0NW0LS',
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export { auth, firebaseConfig }
