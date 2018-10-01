import firebase from 'firebase';
import store from '../../store';

const db = firebase.database();

// TODO: getDefaultTastingProfile

const saveCategory = (name, descriptors) => {
  firebase.database().ref('categories/').set({
    name: name,
    descriptors: descriptors
  });
}