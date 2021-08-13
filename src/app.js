import { signUp, logIn } from './templates.js';

export const routes = {
  '/': logIn,
  '/registro': signUp,
};

export const onNavigate = (pathname) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  rootDiv.innerHTML = routes[pathname];
};

window.onpopstate = () => {
    rootDiv.innerHTML = routes[window.location.pathname]
}

document.getElementById('root').innerHTML = logIn;

