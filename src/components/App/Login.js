import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { auth } from '../../services/firebase';

const Login = () => <StyledFirebaseAuth uiConfig={auth.uiConfig} firebaseAuth={auth.auth} />;

export default Login;
