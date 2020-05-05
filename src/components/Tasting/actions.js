import {
  CREATE_TASTING_REQUEST,
  CREATE_TASTING_SUCCESS,
  CREATE_TASTING_FAILURE,
  GET_TASTINGS_REQUEST,
  GET_TASTINGS_SUCCESS,
  GET_TASTINGS_FAILURE,
} from "./reducers";
import firebaseDatabaseApi from "../../services/firebase/database";

export const createTasting = ({ style, label, selectedTags }) => dispatch => {
  dispatch({ type: CREATE_TASTING_REQUEST });
  return firebaseDatabaseApi
    .createTasting({ style, label, selectedTags })
    .then(tasting => dispatch({
      type: CREATE_TASTING_SUCCESS,
      payload: tasting
    }))
    .catch(error => dispatch({
      type: CREATE_TASTING_FAILURE,
      payload: error
    }));
};

export const getTastings = () => dispatch => {
  dispatch({ type: GET_TASTINGS_REQUEST });
  return firebaseDatabaseApi
    .getTastings()
    .then(tastings => dispatch({
      type: GET_TASTINGS_SUCCESS,
      payload: tastings
    }))
    .catch(error => dispatch({
      type: GET_TASTINGS_FAILURE,
      payload: error
    }));
};
