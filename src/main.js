import { Welcome } from './components/Welcome.js';
import { Signup } from './components/Signup.js';
import { Login } from './components/Login.js';
import { Home } from './components/home/Home.js';
import { setUserProcfile } from './lib/procfile.js';

const rootDiv = document.getElementById('root');

const routes = {
  '/': Welcome,
  '/signup': Signup,
  '/login': Login,
  '/home': Home,
};

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }

  rootDiv.appendChild(routes[pathname]());
};

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    onNavigate('/home');
    setUserProcfile(user);
  } else {
    onNavigate('/');
  }
});

window.onpopstate = () => {
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(routes[window.location.pathname]());
};

const component = routes[window.location.pathname];
rootDiv.appendChild(component());
