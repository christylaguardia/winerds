import firebase from 'firebase';
import store from '../../store';
import { LOGIN, LOGOUT } from '../../components/Auth/reducers';
import { firebaseApp } from './firebase';

export const auth = firebaseApp.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const twitterProvider = new firebase.auth.TwitterAuthProvider();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();
export const uiConfig = {
  signInSuccessUrl: '/welcome',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
};

// Listen for changes to auth state
firebase.auth().onAuthStateChanged(user => {
  if (user) {
    firebase.auth().currentUser.getIdToken(true).then(idToken => {
      store.dispatch({ type: LOGIN, payload: idToken });
    });
  } else {
    localStorage.clear();
    store.dispatch({ type: LOGOUT });
  }
});

export const doSignOut = () => auth.signOut();
