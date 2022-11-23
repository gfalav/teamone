import { initializeApp } from "firebase/app"
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCIZcE7UC_GjEPZxSxBmLq0mLN2NdVrsmQ",
  authDomain: "teamone-3192a.firebaseapp.com",
  projectId: "teamone-3192a",
  storageBucket: "teamone-3192a.appspot.com",
  messagingSenderId: "447332973381",
  appId: "1:447332973381:web:fa999915a6f3f7952b5c2c"
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)