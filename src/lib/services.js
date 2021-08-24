/* eslint-disable no-unused-vars */
import firebase from './secret.js';

export const createAccountEmail = (email, pass) => {
  firebase.auth().createUserWithEmailAndPassword(email, pass)
    .then((userCredential) => {
    // Signed in
      const user = userCredential.user;
      // ...
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error);
    // ..
    });
};
