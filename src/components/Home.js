// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

export const Home = () => {
  const HomeDiv = document.createElement('div');
  HomeDiv.className = 'Home';

  const header = document.createElement('header');
  header.className = 'header';

  const dosBotones = document.createElement('div');
  dosBotones.className = 'dosBotones';

  const buttonIniciar = document.createElement('button');
  buttonIniciar.className = 'btnIniciar';
  buttonIniciar.textContent = 'Inicia Sesión';

  const buttonRegister = document.createElement('button');
  buttonRegister.textContent = 'Registrate';
  buttonRegister.className = 'btnRegistro';
  dosBotones.append(buttonIniciar, buttonRegister);

  const linesO = document.createElement('div');
  linesO.className = 'linesO';
  const divO = document.createElement('div');
  divO.className = 'divO';
  divO.textContent = 'o';
  const div3 = document.createElement('div');
  div3.className = 'line3';
  const div4 = document.createElement('div');
  div4.className = 'line4';
  linesO.append(div3, div4, divO);

  buttonIniciar.addEventListener('click', () => onNavigate('/login'));
  buttonRegister.addEventListener('click', () => onNavigate('/register'));

  HomeDiv.append(header, dosBotones, linesO);

  return HomeDiv;
};
