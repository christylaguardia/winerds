import firebase from "firebase";
import store from "../../store";
import { LOGIN, LOGOUT } from "../../containers/App/reducers";
import { firebaseApp } from "./firebase";

export const auth = firebaseApp.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const twitterProvider = new firebase.auth.TwitterAuthProvider();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();
export const uiConfig = {
  signInSuccessUrl: "/profile",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ]
};

// Save the currently logged in user here
export let currentUser = auth.currentUser;

// Listen for changes to auth state
firebase.auth().onAuthStateChanged(user => {
  if (user) {
    firebase
      .auth()
      .currentUser.getIdToken(true)
      .then(idToken => {
        const providerData = user.providerData.map(profile => ({
          providerId: profile.providerId,
          uid: profile.uid,
          displayName: profile.displayName,
          email: profile.email,
          photoURL: profile.photoURL
        }));
        const payload = { idToken, uid: user.uid, providerData };
        store.dispatch({ type: LOGIN, payload });
      });

    if (!user.emailVerified) {
      user
        .sendEmailVerification()
        .then(() => {
          console.log("Email verification sent.");
        })
        .catch(error => {
          console.log("An error happened.");
        });
    }

    // user.providerData.forEach(function (profile) {
    //   console.log('Sign-in provider: ' + profile.providerId);
    //   console.log('  Provider-specific UID: ' + profile.uid);
    //   console.log('  Name: ' + profile.displayName);
    //   console.log('  Email: ' + profile.email);
    //   console.log('  Photo URL: ' + profile.photoURL);
    // });
  } else {
    localStorage.clear();
    store.dispatch({ type: LOGOUT });
  }
});

// Reset passoword
// auth.sendPasswordResetEmail(emailAddress).then(function () {
//   // Email sent.
// }).catch(function (error) {
//   // An error happened.
// });

// Prompt the user to re-provide their sign-in credentials
// user.reauthenticateAndRetrieveDataWithCredential(credential).then(function () {
//   // User re-authenticated.
// }).catch(function (error) {
//   // An error happened.
// });

export const doSignOut = () => auth.signOut();
