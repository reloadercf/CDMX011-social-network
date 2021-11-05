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
export default firebase;

export const db = firebase.firestore();
