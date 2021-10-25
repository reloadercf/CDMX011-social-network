// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

export const Home = () => {
  const HomeDiv = document.createElement('div');
  HomeDiv.textContent = 'CicloVida';
  HomeDiv.className = 'Home';

  const buttonIniciar = document.createElement('button');
  buttonIniciar.className = 'btnIniciar';
  buttonIniciar.textContent = 'Inicia Sesión';

  const buttonRegister = document.createElement('button');
  buttonRegister.textContent = 'Registrate';
  buttonRegister.className = 'btnRegistro';

  const div1 = document.createElement('div');
  div1.className = 'line1';
  const welcomDiv = document.createElement('div');
  welcomDiv.className = 'welcomDiv';
  welcomDiv.textContent = 'Bienvenidx a la comunidad de ciclismo más grande de latinoamerica';
  const div2 = document.createElement('div');
  div2.className = 'line2';
  const divO = document.createElement('div');
  divO.className = 'divO';
  divO.textContent = 'o';
  const div3 = document.createElement('div');
  div3.className = 'line3';
  const div4 = document.createElement('div');
  div4.className = 'line4';

  buttonRegister.addEventListener('click', () => onNavigate('/register'));
  buttonIniciar.addEventListener('click', () => onNavigate('/login'));

  HomeDiv.append(buttonRegister, buttonIniciar, div1, div2, div3, div4, divO, welcomDiv);

  return HomeDiv;
};
