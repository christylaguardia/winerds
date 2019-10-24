import { SAVED_TASTING, FETCHED_TASTINGS } from "./reducers";
import firebaseDatabaseApi from "../../services/firebase/database";

export const saveTasting = ({ style, label, selectedTags }) => ({
  type: SAVED_TASTING,
  payload: firebaseDatabaseApi.saveTasting({ style, label, selectedTags })
});

export const fetchTastings = () => ({
  type: FETCHED_TASTINGS,
  payload: firebaseDatabaseApi.getTastings()
});
