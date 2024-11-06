import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const db = getFirestore()
const testCollection = collection(db, 'test')

console.log(testCollection)
