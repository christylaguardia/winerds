import firebase from 'firebase';

// const config = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: `${process.env.REACT_APP_PROJECT_ID}.firebaseapp.com`,
//   databaseURL: `https://${process.env.REACT_APP_DATABASE_NAME}.firebaseio.com`,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: `${process.env.REACT_APP_BUCKET}.appspot.com`,
//   messagingSenderId: process.env.REACT_APP_SENDER_ID
// };
import config from './firebaseConfig';

firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export const tastingGuide = firebase.database().ref('tasting-guide');
export const tastingProfiles = firebase.database().ref('tasting-profiles');
export const tastingNotes = firebase.database().ref('tasting-notes');

export default firebase;