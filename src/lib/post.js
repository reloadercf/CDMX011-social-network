/* eslint-disable no-undef */
import firebase from './secret.js';
import today from './today.js';

export const db = firebase.firestore();

export const getUser = () => firebase.auth().currentUser;

export const createPost = (uid, text) => {
  db.collection('publications').add({
    date_public: today(),
    timer_server: firebase.firestore.FieldValue.serverTimestamp(),
    uid,
    img: '',
    text,
    likes: [],
  })
    .then(() => {
      Swal.fire({
        title: 'Publicación exitosa',
        icon: 'success',
        timer: 1500,
      });
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

export const getPost = () => {
  const docRef = db.collection('publications').orderBy('timer_server');
  docRef.get().then((doc) => {
    console.log(doc.docs);
  }).catch((error) => {
    console.log('Error getting document:', error);
  });
};
export const realTimePost = () => db.collection('publications').orderBy('timer_server', 'desc');
