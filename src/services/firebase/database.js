import { firebaseApp } from "./firebase";
import { getCurrentUser } from "./auth";

// Get a reference to the database service
const database = firebaseApp.database();

// Get a reference to the database collection
// const tastingsRef = database.ref("tastings/");

export const saveTasting = ({ style, label, selectedTags: tags }) => {
  const { uid } = getCurrentUser();
  const timestamp = new Date().getTime();

  database
    .ref(`${uid}/${timestamp}/`)
    .set({ style, label, tags }, function(error) {
      if (error) {
        // TODO:
        console.log("The write failed...");
      } else {
        // TODO:
        console.log("Data saved successfully!");
      }
    });
};

export const getTastings = () => {
  const { uid } = getCurrentUser();

  database
    .ref(`${uid}`)
    .once("value")
    .then(function(snapshot) {
      // TODO: handle error
      if (snapshot) {
        console.log("Data saved successfully!");
        return snapshot;
      }
    });
};

export default {
  saveTasting,
  getTastings
};
