// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

export const Home = () => {
  const HomeDiv = document.createElement('div');
  HomeDiv.className = 'Home';
  const buttonRegister = document.createElement('button');
  buttonRegister.className = 'btnRegister';
  const buttonLogin = document.createElement('button');
  buttonRegister.className = 'btnLogin';

  HomeDiv.textContent = 'CicloVida';
  buttonRegister.textContent = 'Registrate';
  buttonLogin.textContent = 'Inicia Sesión';

  buttonRegister.addEventListener('click', () => onNavigate('/register'));
  buttonLogin.addEventListener('click', () => onNavigate('/login'));

  HomeDiv.appendChild(buttonRegister);
  HomeDiv.appendChild(buttonLogin);

  return HomeDiv;
};
