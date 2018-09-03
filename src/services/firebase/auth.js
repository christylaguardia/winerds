import { auth } from './firebase';

// Sign Up
export const doCreateUserWithEmailAndPassword = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

// Sign In
export const doSignInWithEmailAndPassword = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

// Sign out
export const doSignOut = () =>
  auth.signOut();

// Password Reset
export const doPasswordReset = (email) =>
  auth.sendPasswordResetEmail(email);

// Password Change
export const doPasswordUpdate = (password) =>
  auth.currentUser.updatePassword(password);

export const getCredentialFromToken = () => {
  const token = JSON.parse(localStorage.getItem('WINERDS_USER'));

  if (!token) return console.log('no token');
  console.log('found token', token);

  const { idToken, accessToken, secret } = token;

  switch (token.providerId) {
    case 'google.com':
      return auth.GoogleAuthProvider.credential(idToken, accessToken);
    case 'twitter.com':
      return auth.TwitterAuthProvider.credential(accessToken, secret);
    case 'facebook.com':
      return auth.FacebookAuthProvider.credential(accessToken);
    // case 'email':
    //   return auth.EmailAuthProvider.credential(email, password);
    default:
      return null
  }
}