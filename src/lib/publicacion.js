/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
const postFormulario = document.getElementById('idBtnPublicar');
// eslint-disable-next-line no-undef
publicacion.addEventListener('submit', (e) => {
  e.preventDefault();
  const publicacionA = postFormulario.publicacion.value;

  console.log(publicacionA);
});
