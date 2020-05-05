import { combineReducers } from "redux";
import { loading, errors, user, RESET_STORE } from "../containers/App/reducers";
import { tastings } from "../components/Tasting/reducers";

const appReducer = combineReducers({
  loading,
  errors,
  user,
  tastings
});

const rootReducer = (state, action) => {
  if (action.type === RESET_STORE) state = undefined;
  return appReducer(state, action);
};

export default rootReducer;
