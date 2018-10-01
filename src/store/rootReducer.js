import { combineReducers } from 'redux';
import { loading, errors } from '../components/App/reducers';
import { user, RESET_STORE } from '../components/Auth/reducers';
import { profileNames, profiles } from '../components/Tasting/reducers';

const appReducer = combineReducers({
  loading,
  errors,
  user,
  profileNames,
  profiles
});

const rootReducer = (state, action) => {
  if (action.type === RESET_STORE) state = undefined;
  return appReducer(state, action);
};

export default rootReducer;
