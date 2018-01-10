import firebase from 'firebase';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: `${process.env.REACT_APP_PROJECT_ID}.firebaseapp.com`,
  databaseURL: `https://${process.env.REACT_APP_DATABASE_NAME}.firebaseio.com`,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: `${process.env.REACT_APP_BUCKET}.appspot.com`,
  messagingSenderId: process.env.REACT_APP_SENDER_ID
};

firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

// export let wineConfig;
// const wineConfigRef = firebase.database().ref('configuration')
// wineConfigRef.on('value', snapshot => wineConfig = snapshot.val());

// export let wineProfiles;
// const wineProfilesRef = firebase.database().ref('profiles')
// wineProfilesRef.on('value', snapshot => wineProfiles = snapshot.val());

export const wineNotesRef = firebase.database().ref('notes');

export default firebase;