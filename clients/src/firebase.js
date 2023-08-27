import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyBGk-mIBXJ5438DpT9YwK0exV6QJNKh0-k",
  authDomain: "internship-1-3.firebaseapp.com",
  databaseURL: "https://internship-1-3-default-rtdb.firebaseio.com",
  projectId: "internship-1-3",
  storageBucket: "internship-1-3.appspot.com",
  messagingSenderId: "151231924537",
  appId: "1:151231924537:web:70af0921c9b0c1fd8480e8",
  measurementId: "G-X72BJYLY84"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getDatabase(app);
export const auth = getAuth(app);
