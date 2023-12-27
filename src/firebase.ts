import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyACvqyqD7T4E_wc9laiozItdgrUNRFg6bQ',
  authDomain: 'jaeun-twitter.firebaseapp.com',
  projectId: 'jaeun-twitter',
  storageBucket: 'jaeun-twitter.appspot.com',
  messagingSenderId: '451286342791',
  appId: '1:451286342791:web:75ea288230f58e97d76c22',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
