// TODO: Replace the following with your app's Firebase project configuration
// Hacer configuración SDK
const firebaseConfig = {
  apiKey: 'AIzaSyB56bmK1WFO-B8JOXMcubnWP86RILtWdgY',
  authDomain: 'redsocial-laboratoria.firebaseapp.com',
  projectId: 'redsocial-laboratoria',
  storageBucket: 'redsocial-laboratoria.appspot.com',
  messagingSenderId: '104639156942',
  appId: '1:104639156942:web:b7141b43f39e8aeb23f69f',
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

// console.log(firebase.app().name); // "[DEFAULT]"

// // Usa la notación abreviada para acceder a los servicios de Firebase del proyecto predeterminado
const defaultStorage = firebase.storage();
console.log(defaultStorage);
const defaultFirestore = firebase.firestore();
console.log(defaultFirestore);

// Base de datos
export const loginB = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
    // Registrado
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      console.log(errorCode);
      // ..
    });
};
