/* eslint-disable no-undef */
import firebase from './secret.js';

export const createAccountEmail = (email, pass, functionRedirect) => {
  firebase.auth().createUserWithEmailAndPassword(email, pass)
    .then((userCredential) => {
    // Signed in
      const user = userCredential.user;
      Swal.fire({
        title: 'Éxito',
        text: `Se registró ${user.email}`,
        icon: 'success',
        confirmButtonText: 'Continuar',
      });
      functionRedirect('/login');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      Swal.fire({
        title: `Error ${errorCode}`,
        text: errorMessage,
        icon: 'error',
        confirmButtonText: 'Continuar',
      });
    // ..
    });
};

export const loginWithEmail = (email, pass, functionRedirect) => {
  firebase.auth().signInWithEmailAndPassword(email, pass)
    .then((userCredential) => {
    // Signed in
      const user = userCredential.user;
      Swal.fire({
        title: 'Éxito',
        text: `Bienvenida ${user.email}`,
        icon: 'success',
        confirmButtonText: 'Continuar',
      });
      functionRedirect('/home');
      console.log(user);
    // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      Swal.fire({
        title: `Error ${errorCode}`,
        text: errorMessage,
        icon: 'error',
        confirmButtonText: 'Continuar',
      });
    });
};

export const loginWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithRedirect(provider);
  firebase.auth()
    .getRedirectResult()
    .then((result) => {
      if (result.credential) {
      /** @type {firebase.auth.OAuthCredential} */
      }
    })
    .catch((error) => {
    // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      Swal.fire({
        title: `Error ${errorCode}`,
        text: errorMessage,
        icon: 'error',
        confirmButtonText: 'Continuar',
      });
    // ...
    });
};
