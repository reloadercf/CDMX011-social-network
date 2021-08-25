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
