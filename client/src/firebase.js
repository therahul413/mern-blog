// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'mern-blog-b54ee.firebaseapp.com',
  projectId: 'mern-blog-b54ee',
  storageBucket: 'mern-blog-b54ee.appspot.com',
  messagingSenderId: '1024423673224',
  appId: '1:1024423673224:web:88364e5fda2921ee330e3d',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
