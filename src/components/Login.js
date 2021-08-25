import { loginWithEmail } from '../lib/services.js';
import { onNavigate } from '../main.js';
import { NavBar } from './Utils/NavBar.js';

export const Login = () => {
  const newDiv = document.createElement('div');
  const divHeader = document.createElement('div');
  const containerInputs = document.createElement('div');
  const title = document.createElement('h3');
  const button = document.createElement('button');
  const inputEmail = document.createElement('input');
  const inputPass = document.createElement('input');

  inputEmail.type = 'email';
  inputPass.type = 'password';
  inputEmail.placeholder = 'email';
  inputPass.placeholder = 'contraseña';
  title.textContent = 'Inicia Sesión';
  button.textContent = 'Iniciar Sesión';

  newDiv.classList.add('container-signup');
  containerInputs.classList.add('container-inputs');
  divHeader.classList.add('visible-header');
  title.classList.add('title');
  inputEmail.classList.add('input');
  inputPass.classList.add('input');
  button.classList.add('button-primary');

  button.addEventListener('click', (e) => {
    e.preventDefault();
    loginWithEmail(inputEmail.value, inputPass.value, onNavigate);
  });

  divHeader.appendChild(NavBar());
  divHeader.appendChild(title);
  containerInputs.appendChild(inputEmail);
  containerInputs.appendChild(inputPass);
  containerInputs.appendChild(button);
  newDiv.appendChild(divHeader);
  newDiv.appendChild(containerInputs);

  return newDiv;
};
