import { onNavigate } from '../main.js';
import { NavBar } from './Utils/NavBar.js';

export const Welcome = () => {
  const divWelcome = document.createElement('div');
  const divHeader = document.createElement('div');
  const titleH1 = document.createElement('h1');
  const divContent = document.createElement('div');
  const buttonLogin = document.createElement('button');
  const buttonSignUp = document.createElement('button');

  divHeader.setAttribute('id', 'header');
  divContent.setAttribute('id', 'content');
  buttonLogin.setAttribute('id', 'into');

  buttonLogin.classList.add('button-welcome');
  buttonSignUp.classList.add('button-welcome');

  buttonLogin.textContent = 'Iniciar sesión';
  buttonSignUp.textContent = 'Registrate';
  titleH1.textContent = 'Negocios Remotos';

  buttonSignUp.addEventListener('click', (e) => {
    e.preventDefault();
    onNavigate('/signup');
  });
  buttonLogin.addEventListener('click', (e) => {
    e.preventDefault();
    onNavigate('/login');
  });

  divHeader.appendChild(NavBar());
  divContent.appendChild(buttonLogin);
  divContent.appendChild(buttonSignUp);
  divHeader.appendChild(titleH1);
  divWelcome.appendChild(divHeader);
  divWelcome.appendChild(divContent);

  return divWelcome;
};
