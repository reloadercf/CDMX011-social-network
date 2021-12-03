/* eslint-disable no-sequences */
/* eslint-disable import/no-cycle */
// Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';
// eslint-disable-next-line import/no-cycle
import { Home } from './components/Home.js';
// eslint-disable-next-line import/no-cycle
import { Register } from './components/Register.js';
// eslint-disable-next-line import/named
// eslint-disable-next-line import/no-cycle
// eslint-disable-next-line import/named
import { Login } from './components/Login.js';
import { Muro } from './components/Muro.js';

const rootDiv = document.getElementById('root');
// aquí estan mis rutas //
const routes = {
  '/': Home,
  '/register': Register,
  '/login': Login,
  '/Muro': Muro,
};

export const onNavigate = (pathname) => {
  window.history.pushState( // aquí anexamos un registro en la sesión de nuestro navegador
    {}, // es el objeto asociado al nuevo registo en el historial //
    pathname, // contiene la ruta del url para la ubicacion //
    window.location.origin + pathname, // aquí va la url del nuevo registro en el historial //
  );
  //  aquí movemos nuestro primer elemento creando un bucle //
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild); // aquí eliminamos el primer nodo hijo del DOM
  }
  //  aquí insertamos el nuevo elemento
  rootDiv.appendChild(routes[pathname]());
};

const component = routes[window.location.pathname];

// el evento popstate contendrá una copia del objeto de estado de la entrada de la historia //
window.onpopstate = () => {
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(routes[window.location.pathname]());
};

rootDiv.appendChild(component());
// myFunction();
