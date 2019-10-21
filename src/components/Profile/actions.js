import { SAVED_USER, FETCHED_USER } from '../../containers/App/reducers';
import { FETCHED_TASTINGS } from '../Tasting/reducers';
import usersApi from '../../services/winerdsApi/users';
import tastingsApi from '../../services/winerdsApi/tastings';

export const getUser = () => ({
  type: FETCHED_USER,
  payload: usersApi.getUser()
});

export const saveUser = user => ({
  type: SAVED_USER,
  payload: usersApi.saveUser(user)
});

export const fetchTastings = () => ({
  type: FETCHED_TASTINGS,
  payload: tastingsApi.getTastings()
});
