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
      const errorMessage = error.message;
      alert('usuario no registrado');
      console.log(errorMessage);
    });
};

// REGISTRO DE USUARIO //

// Aquí va registerEmail, va a coneter un registro y contraseña y pasarlo
// al evento igual que en login y console.log() en puntos claves de ¿que recibo?¿que hago?
export const newRegister = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
    // Signed in
      const user = userCredential.user;
      alert('bienvenido ususario');
      console.log(user);
    // ...
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
    // ..
    });
};
