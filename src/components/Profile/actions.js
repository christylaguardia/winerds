import { SAVED_USER, FETCHED_USER } from '../Auth/reducers';
import usersApi from '../../services/winerdsApi/users';

export const getUser = () => ({ type: FETCHED_USER, payload: usersApi.getUser() });
export const saveUser = user => ({ type: SAVED_USER, payload: usersApi.saveUser(user) });