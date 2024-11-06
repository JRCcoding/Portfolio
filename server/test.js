import firebase from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'

const db = getFirestore()
const testCollection = collection(db, 'test')

console.log(testCollection)
