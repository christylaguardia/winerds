import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCXW9a_5K4f5y1nTg1FU72QqHcJFQdH6DI',
  authDomain: 'todo-6d87a.firebaseapp.com',
  databaseURL: 'https://todo-6d87a.firebaseio.com',
  projectId: 'todo-6d87a',
  storageBucket: 'todo-6d87a.appspot.com',
  messagingSenderId: '521590260262'
};

firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;