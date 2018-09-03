import firebase from 'firebase';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: `${process.env.REACT_APP_PROJECT_ID}.firebaseapp.com`,
  databaseURL: `https://${process.env.REACT_APP_PROJECT_ID}.firebaseio.com`,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: `${process.env.REACT_APP_PROJECT_ID}.appspot.com`,
  messagingSenderId: process.env.REACT_APP_SENDER_ID
};

const firebaseApp = firebase.initializeApp(config);

export const auth = firebaseApp.auth();

// Login with other services
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const twitterProvider = new firebase.auth.TwitterAuthProvider();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();

// Listen for changes to auth state
firebase.auth().onAuthStateChanged(user => {
  if (user) {
    console.log('User is signed in.', user);
    // localStorage.setItem('token', JSON.stringify(user));
  } else  {
    console.log('User is NOT signed in.');
    localStorage.clear();
  }
});