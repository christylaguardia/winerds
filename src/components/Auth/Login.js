import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { auth } from '../../services/firebase';

const Login = () => (
  <div>
    <StyledFirebaseAuth uiConfig={auth.uiConfig} firebaseAuth={auth.auth} />
  </div>
);

export default Login;
