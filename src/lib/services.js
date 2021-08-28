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
        title: 'Hola',
        text: `Bienvenidx ${user.displayName ? user.displayName : user.email}`,
        icon: 'success',
        timer: 2000,
      });
      functionRedirect('/home');
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

export const signOutApp = (functionRedirect) => {
  firebase.auth().signOut().then(() => {
    Swal.fire({
      title: 'Nos vemos',
      text: 'Se ha cerrado tu sesión',
      icon: 'info',
      timer: 3000,
    });
    functionRedirect('/');
  }).catch((error) => {
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
