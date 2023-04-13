import { initializeApp } from "firebase/app"
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
 
const firebaseConfig = {
  apiKey: "AIzaSyAVlAoZewH2EBvJ3ehUTpEiTG15ALNrZQo",
  authDomain: "teamone-5525e.firebaseapp.com",
  projectId: "teamone-5525e",
  storageBucket: "teamone-5525e.appspot.com",
  messagingSenderId: "556132521015",
  appId: "1:556132521015:web:524d7fa0b4bcc9b4099bb2"
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }