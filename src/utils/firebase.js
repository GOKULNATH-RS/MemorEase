import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyAFUaqwA8cNcxyNBM85mvC3Cgr738uZXMA',
  authDomain: 'photo-management-app-17909.firebaseapp.com',
  projectId: 'photo-management-app-17909',
  storageBucket: 'photo-management-app-17909.appspot.com',
  messagingSenderId: '143692364823',
  appId: '1:143692364823:web:8748e29e1418473b207052',
  measurementId: 'G-8DVKDJ7XRG'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)
