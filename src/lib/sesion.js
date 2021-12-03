/* eslint-disable import/no-cycle */
/* eslint-disable no-console */
/* eslint-disable no-use-before-define */
/* eslint-disable no-alert */
import { onNavigate } from '../main.js';
import firebase from './firebase.js';
// Aquí vamos a REGISTRAR, INICIAR SESION, CERRAR SESION

// INICIO DE SESION //
export const loginEmailPass = (email, password) => {
  console.log(email);
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
    // Signed in
      const user = userCredential.user;
      onNavigate('/Muro');
      console.log(user);
    // ...
    })
    .catch((error) => {
      alert('usuario no registrado');
      const errorMessage = error.message;
      console.log(errorMessage);
    });
};

// INICIO SESIÓN CON GOOGLE//
export const sesionGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  const authGoogle = firebase.auth();
  authGoogle
    .signInWithPopup(provider)
    .then(() => {
    // /** @type {firebase.auth.OAuthCredential} */
    //   const credential = result.credential;

      //   // This gives you a Google Access Token. You can use it to access the Google API.
      //   const token = credential.accessToken;
      //   // The signed-in user info.
      //   const user = result.user;
      // ...
      onNavigate('/Muro');
    }).catch((error) => {
      console.log(error.message);
    });
};

// REGISTRO DE USUARIO //
// al evento igual que en login y console.log() en puntos claves de ¿que recibo?¿que hago?
export const newRegister = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
    // Signed in
      const user = userCredential.user;
      alert('bienvenido ususario');
      console.log(user);
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
};
