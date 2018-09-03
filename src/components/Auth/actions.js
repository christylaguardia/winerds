import { LOADING, LOADED, ERROR_ADD, ERROR_REMOVE } from '../App/reducers';
import { LOGIN, LOGOUT } from './reducers';
import { auth, firebase } from '../../services/firebase';

// export const userFromToken = token => dispatch => {
//   // return dispatch({ type: TOKEN_CHECK });

//   dispatch({ type: GOT_TOKEN, payload: token });

//   return authApi.verify(token).then(
//     () => dispatch(fetchUser()),
//     err => {
//       dispatch({ type: LOGOUT });
//     }
//   ).then(() => dispatch({ type: TOKEN_CHECK }));
// };

// export const signIn = credentials => dispatch =>
//   dispatch({
//     type: FETCHED_USER,
//     payload: authApi.signIn(credentials).then(token => {
//       dispatch({ type: GOT_TOKEN, payload: token });
//       return authApi.getUser();
//     })
//   });

export const login = (email, password) => dispatch => 
  dispatch({
    type: LOGIN,
    payload: auth.doSignInWithEmailAndPassword(email, password)
      .then(token => {
        console.log(token);
        localStorage.setItem('WINERDS_USER', JSON.stringify(token.credential));
        dispatch({ type: LOADED });
        return token;
      }).catch(err => {
        // If the user is not found then create a new user
        if (err.code === 'auth/user-not-found') {
          return auth.createUserWithEmailAndPassword(email, password)
            .then(user => {
              return user;
              // this.props.handleUser(user);
              // this.loginWithEmailAndPassword(email, password);
            })
            .catch(handleLoginError);
        } else {
          handleLoginError(err);
        }
      })
});
// export const login = (email, password) => dispatch => 
//   dispatch({
//     type: LOGIN,
//     payload: auth.signInWithEmailAndPassword(email, password)
//       .then(token => {
//         console.log(token);
//         localStorage.setItem('WINERDS_USER', JSON.stringify(token.credential));
//         dispatch({ type: LOADED });
//         return token;
//       }).catch(err => {
//         // If the user is not found then create a new user
//         if (err.code === 'auth/user-not-found') {
//           return auth.createUserWithEmailAndPassword(email, password)
//             .then(user => {
//               return user;
//               // this.props.handleUser(user);
//               // this.loginWithEmailAndPassword(email, password);
//             })
//             .catch(handleLoginError);
//         } else {
//           handleLoginError(err);
//         }
//       })
// });




// handleLogin = result => {
  //   // console.log('handleLogin result', result);
  //   if (result.credential) {
  //     localStorage.setItem("token", JSON.stringify(result.credential));
  //     this.props.handleUser(result.user);
  //     this.setState({ loading: false });
  //   }
  // };

  const handleLoginError = error => dispatch => {
    console.log(error);
    if (error.code === "auth/wrong-password") {
      dispatch({ type: ERROR_ADD, payload: error });
    }

    if (error.code === "auth/account-exists-with-different-credential") {
      const pendingCred = error.credential;
      const email = error.email;

      auth.fetchProvidersForEmail(email).then(providers => {
        if (providers[0] === "password") {
          const password = this.promptUserForPassword();
          auth
            .signInWithEmailAndPassword(email, password)
            .then(user => user.link(pendingCred))
            .then(user => this.props.handleUser(user));
          return;
        }

        const provider = this.getProviderForProviderId(providers[0]);

        auth.signInWithPopup(provider).then(result => {
          result.user
            .link(pendingCred)
            .then(user => this.props.handleUser(user));
        });
      });
    }
  };

  // loginFromRedirect = () => {
  //   auth
  //     .getRedirectResult()
  //     .then(result => {
  //       this.handleLogin(result);
  //     })
  //     .catch(this.handleLoginError);
  // };

  // loginWithProvider = provider => {
  //   this.setState({ loading: true });
  //   auth.signInWithRedirect(provider);
  // };

  // promptUserForPassword() {
  //   console.log("promptUserForPassword");
  //   // TODO
  // }

  // getProviderForProviderId() {
  //   console.log("getProviderForProviderId");
  //   // TODO
  // }