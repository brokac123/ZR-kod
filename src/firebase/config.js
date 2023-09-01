import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAnZs-7vPgNP7K8xIOiVgT5xsyntfUA6WI",
    authDomain: "bakula-laminati-luka.firebaseapp.com",
    projectId: "bakula-laminati-luka",
    storageBucket: "bakula-laminati-luka.appspot.com",
    messagingSenderId: "888411802093",
    appId: "1:888411802093:web:ab0a2457b7166c5eb8bfe4"
  };

  initializeApp(firebaseConfig)

// init firebase auth
const auth = getAuth()

export { auth }