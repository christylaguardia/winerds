import {
  FETCHED_USER,
  UPDATED_DISPLAY_NAME,
  UPDATED_EMAIL
} from "../../containers/App/reducers";
import firebaseAuthApi from "../../services/firebase/auth";

export const getCurrentUser = () => ({
  type: FETCHED_USER,
  payload: firebaseAuthApi.getCurrentUser()
});

export const updateDisplayName = displayName => ({
  type: UPDATED_DISPLAY_NAME,
  payload: firebaseAuthApi.updateDisplayName(displayName)
});

export const updateEmail = email => ({
  type: UPDATED_EMAIL,
  payload: firebaseAuthApi.updateEmail(email)
});
