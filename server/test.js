import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const db = firebase.firestore()
const testCollection = db.collection(db, 'test')

console.log(testCollection)
