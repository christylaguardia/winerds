import { LOGOUT } from '../App/reducers';
import { auth } from '../../services/firebase';

export const logout = () => dispatch => {
  return auth.doSignOut(() => dispatch({ type: LOGOUT }))
}