import { LOGIN } from '../Auth/reducers';
import { auth } from '../../services/firebase';

export const loginFromLocalStorage = () => dispatch => {
  auth.getCredentialFromToken()
    .then(credential => {
      console.log('credential', credential);
      dispatch({ type: LOGIN, payload: credential });
    })
    .catch(err => {
      console.log("getCredentialFromToken error", err);
      localStorage.clear();
    });
}