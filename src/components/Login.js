import { loginWithEmail, loginWithGoogle } from '../lib/services.js';
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
  const buttonGoogle = document.createElement('button');
  const iconGoogle = document.createElement('img');

  inputEmail.type = 'email';
  inputPass.type = 'password';
  inputEmail.placeholder = 'email';
  inputPass.placeholder = 'contraseña';
  title.textContent = 'Inicia Sesión';
  button.textContent = 'Iniciar Sesión';
  buttonGoogle.textContent = ' Continuar con  ';
  buttonGoogle.appendChild(iconGoogle);

  newDiv.classList.add('container-signup');
  containerInputs.classList.add('container-inputs');
  divHeader.classList.add('visible-header');
  title.classList.add('title');
  inputEmail.classList.add('input');
  inputPass.classList.add('input');
  button.classList.add('button-primary');
  buttonGoogle.classList.add('button-primary');
  iconGoogle.setAttribute('src', '../assets/google.png');
  iconGoogle.classList.add('google');

  button.addEventListener('click', (e) => {
    e.preventDefault();
    loginWithEmail(inputEmail.value, inputPass.value, onNavigate);
  });
  buttonGoogle.addEventListener('click', (e) => {
    e.preventDefault();
    loginWithGoogle();
  });

  divHeader.appendChild(NavBar());
  divHeader.appendChild(title);
  containerInputs.appendChild(inputEmail);
  containerInputs.appendChild(inputPass);
  containerInputs.appendChild(button);
  containerInputs.appendChild(buttonGoogle);
  newDiv.appendChild(divHeader);
  newDiv.appendChild(containerInputs);

  return newDiv;
};
