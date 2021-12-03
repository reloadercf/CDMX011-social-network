// Inicializar Cloud Firestore a traves de Firebase//
const db = firebase.firestore();
// Aquí voy a conetar mi texto con metodos de firebase//
export const publicarPost = (texto) => {
  console.log(texto);

  db.collection('posts').add({
    texto,
    date: firebase.firestore.FieldValue.serverTimestamp(),
  })
    .then((docRef) => {
      console.log(docRef.id);
    })
    .catch((error) => {
      console.log(error);
    });
};

// aquí tenemos nuestras publicaciones con firebase//
export const obtenerPublicaciones = () => db.collection('posts').orderBy('date', 'desc');

// Eliminamos Publicación //
export const eliminarPost = (id) => {
  db.collection('posts').doc(id).delete().then(() => {
    console.log('Document successfully deleted!');
  })
    .catch((error) => {
      console.error('Error removing document: ', error);
    });
};

// // Editar Publicación //
// export const editarPost = (text) => {

//   document.getElementsByClassName('publicacion').value = 'publicacion';
//   const btnActualizar = docuement.getElementsByClassName('btnPublicar');
//   btnActualizar.innerHTML = 'actualizar';

//   btnActualizar.addEventListener('click', () => {
//   const pubActualizada = db.collection('posts').doc(texto);
//   // Set the "capital" field of the city 'DC'
//   const texto = document.getElementsByClassName('publicacion').value;
//   return pubActualizada.update({
//     texto,
//     date: firebase.firestore.FieldValue.serverTimestamp(),
//   })
//     .then (function() {
//       console.log('Document successfully updated!');
//       btnActualizar.innerHTML = 'guardar';
//       document.getElementsByClassName('texto').value = '';
//     })
//     .catch((error) {
//       //The document probably doesn't exist.
//       console.error('Error updating document: ', error);
//     })
//   }
