import { loginWithEmail, loginWithGoogle } from '../lib/services.js';
import { onNavigate } from '../main.js';

export const Login = () => {
  const newDiv = document.createElement('div');
  const containerInputs = document.createElement('div');
  const title = document.createElement('h3');
  const button = document.createElement('button');
  const inputEmail = document.createElement('input');
  const inputPass = document.createElement('input');
  const buttonGoogle = document.createElement('button');

  inputEmail.type = 'email';
  inputPass.type = 'password';
  inputEmail.placeholder = 'email';
  inputPass.placeholder = 'contraseña';
  title.textContent = 'Inicia Sesión';
  button.textContent = 'Iniciar Sesión';
  buttonGoogle.textContent = ' Continuar con google';

  newDiv.classList.add('container-signup');
  containerInputs.classList.add('container-inputs');
  title.classList.add('visible-header');
  title.classList.add('title');
  inputEmail.classList.add('input');
  inputPass.classList.add('input');
  button.classList.add('button-primary');
  buttonGoogle.classList.add('button-primary');

  button.addEventListener('click', (e) => {
    e.preventDefault();
    loginWithEmail(inputEmail.value, inputPass.value, onNavigate);
  });

  buttonGoogle.addEventListener('click', (e) => {
    e.preventDefault();
    loginWithGoogle();
  });

  newDiv.appendChild(title);
  containerInputs.appendChild(inputEmail);
  containerInputs.appendChild(inputPass);
  containerInputs.appendChild(button);
  containerInputs.appendChild(buttonGoogle);
  newDiv.appendChild(containerInputs);

  return newDiv;
};
