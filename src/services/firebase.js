import firebase from 'firebase';

// const config = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: `${process.env.REACT_APP_PROJECT_ID}.firebaseapp.com`,
//   databaseURL: `https://${process.env.REACT_APP_DATABASE_NAME}.firebaseio.com`,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: `${process.env.REACT_APP_BUCKET}.appspot.com`,
//   messagingSenderId: process.env.REACT_APP_SENDER_ID
// };

// const firebaseApp = firebase.initializeApp(config);
// export const auth = firebaseApp.auth();
// export const googleProvider = new firebase.auth.GoogleAuthProvider();
// export const twitterProvider = new firebase.auth.TwitterAuthProvider();
// export const facebookProvider = new firebase.auth.FacebookAuthProvider();


// export default firebase;

// TODO: GET NEW KEYS

var config = {
  apiKey: "AIzaSyDentSyeuYzR9MBLwq030hUsRbiY25Nhmk",
  authDomain: "winerds-606c4.firebaseapp.com",
  databaseURL: "https://winerds-606c4.firebaseio.com",
  projectId: "winerds-606c4",
  storageBucket: "winerds-606c4.appspot.com",
  messagingSenderId: "290778657910"
};
const firebaseApp = firebase.initializeApp(config);
export const auth = firebaseApp.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const twitterProvider = new firebase.auth.TwitterAuthProvider();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();