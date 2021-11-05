export const Muro = () => {
  const muroDiv = document.createElement('div');
  muroDiv.className = 'textoMuro';
  //   muroDiv.id = 'idMuroDiv';
  muroDiv.textContent = '¡Publica algo!';

  const publicacion = document.createElement('input');
  publicacion.setAttribute('placeholder', '¿Qué estás pensado?');
  //   publicacion.id = 'idPublicacion';
  publicacion.className = 'publicacion';

  const btnPublicar = document.createElement('button');
  btnPublicar.className = 'btnPublicar';
  btnPublicar.id = 'idBtnPublicar';
  btnPublicar.textContent = 'publicar';

  const btnCerrarSesion = document.createElement('button');
  btnCerrarSesion.className = 'btnCerrarSesion';
  btnCerrarSesion.textContent = 'Cerrar sesión';

  muroDiv.append(publicacion, btnPublicar, btnCerrarSesion);

  return muroDiv;
};
