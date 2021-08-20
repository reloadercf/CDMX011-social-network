import { Welcome } from './components/Welcome.js';
import { Signup } from './components/Signup.js';
import { Login } from './components/Login.js';

const rootDiv = document.getElementById('root');

const routes = {
  '/': Welcome,
  '/signup': Signup,
  '/login': Login,
};
const target = routes[window.location.pathname];

export function onNavigate(pathname) {
  console.log('recibi', pathname);
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }

  rootDiv.appendChild(routes[pathname]());
}

rootDiv.appendChild(target());

window.onpopstate = () => {
  rootDiv.appendChild(target(onNavigate));
};
