import { combineReducers } from 'redux';
import { loading, errors } from './components/App/reducers';
import { user, RESET_STORE } from './components/Auth/reducers';

const appReducer = combineReducers({
  loading,
  errors,
  user,
});

const rootReducer = (state, action) => {
  if (action.type === RESET_STORE) state = undefined;
  return appReducer(state, action);
};

export default rootReducer;
