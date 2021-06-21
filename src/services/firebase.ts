import firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/database'

var firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: "925347825164",
  appId: "1:925347825164:web:885bdc04e1863bc0699029"
};

firebase.initializeApp(firebaseConfig)

// export to avoid the useless call of these terms
export const auth  = firebase.auth()
export const database = firebase.database()