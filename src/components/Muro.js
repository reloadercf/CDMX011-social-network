/* eslint-disable import/named */
/* eslint-disable import/no-unresolved */
import { obtenerPublicaciones, publicarPost, eliminarPost } from '../lib/publicacion.js';

export const Muro = () => {
  const muroDiv = document.createElement('div');
  muroDiv.className = 'muroDiv';

  const publicacion = document.createElement('input');
  publicacion.setAttribute('placeholder', '¿Qué estás pensado?');
  publicacion.className = 'publicacion';

  const btnPublicar = document.createElement('button');
  btnPublicar.className = 'btnPublicar';
  btnPublicar.textContent = 'publicar';
  btnPublicar.addEventListener('click', () => {
    publicarPost(publicacion.value);
  });

  const contenedorPublicacion = document.createElement('div');
  contenedorPublicacion.className = 'contenedorPublicacion';

  muroDiv.append(publicacion, btnPublicar, contenedorPublicacion);

  // Función firebase //
  const mostrarPublicaciones = () => {
    obtenerPublicaciones().onSnapshot((querySnapshot) => {
      contenedorPublicacion.innerHTML = '';
      querySnapshot.forEach((doc) => {
        const divPost = document.createElement('div');
        divPost.className = 'divPost';

        const btnsPub = document.createElement('div');
        btnsPub.className = 'btnsPub';
        const btnEliminar = document.createElement('button');
        btnEliminar.className = 'btnEliminar';
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.addEventListener('click', () => {
          eliminarPost(doc.id);
          console.log(doc.id);
        });
        const btnEditar = document.createElement('button');
        btnEditar.className = 'btnEditar';
        btnEditar.textContent = 'Editar';
        btnEditar.addEventListener('click', () => {
          // editarPost(doc.id);
          console.log(doc.id);
        });

        const post = `
        <p>${doc.data().texto}</p>`;

        divPost.innerHTML = post;
        btnsPub.append(btnEditar, btnEliminar);
        divPost.appendChild(btnsPub);
        contenedorPublicacion.append(divPost, btnsPub);
      });
    });
  };
  mostrarPublicaciones();

  return muroDiv;
};
