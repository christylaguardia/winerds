import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';

const uiConfig = {
  signInSuccessUrl: '/profile',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ]
};

const Login = () => <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />;

export default Login;
