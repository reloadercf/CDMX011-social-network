import { createAccountEmail } from '../lib/services.js';

export const Signup = () => {
  const newDiv = document.createElement('div');
  const button = document.createElement('button');
  const inputEmail = document.createElement('input');
  const inputPass = document.createElement('input');

  inputEmail.type = 'email';
  inputPass.type = 'password';
  inputEmail.placeholder = 'email';
  inputPass.placeholder = '* * * * *';
  newDiv.textContent = 'Crea una cuenta';
  button.textContent = 'Guardar';

  button.addEventListener('click', (e) => {
    e.preventDefault();
    createAccountEmail(inputEmail.value, inputPass.value);
  });

  newDiv.appendChild(inputEmail);
  newDiv.appendChild(inputPass);
  newDiv.appendChild(button);

  return newDiv;
};
