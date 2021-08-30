// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { collection, getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY as string,
    authDomain: 'concept-clone.firebaseapp.com',
    projectId: 'concept-clone',
    storageBucket: 'concept-clone.appspot.com',
    messagingSenderId: '166549718035',
    appId: '1:166549718035:web:674531f05925f37ed12be6'
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

export const games = collection(db, 'games')