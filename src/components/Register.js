/* eslint-disable max-len */
/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js';
import { newRegister } from '../lib/sesion.js';

export const Register = () => {
  const HomeDiv = document.createElement('div');
  HomeDiv.className = 'welcomRegistro';

  const textoRegister = document.createElement('div');
  textoRegister.className = 'textoRegister';
  textoRegister.textContent = 'Bienvenido al registro';

  const inputsRegister = document.createElement('div');
  inputsRegister.className = 'inputsRegister';

  const inputCorreoRegister = document.createElement('input');
  inputCorreoRegister.setAttribute('placeholder', 'Correo Electronico');
  inputCorreoRegister.className = ' inputCorreoRegister';

  const inputContraseñaRegister = document.createElement('input');
  inputContraseñaRegister.setAttribute('placeholder', 'Contraseña');
  inputContraseñaRegister.className = 'inputContraseñaRegister';
  inputsRegister.append(inputCorreoRegister, inputContraseñaRegister);

  const btnIniciarLoginRegister = document.createElement('button');
  btnIniciarLoginRegister.textContent = 'Registrate';
  btnIniciarLoginRegister.className = 'btnIniciarLoginRegister';
  btnIniciarLoginRegister.addEventListener('click', () => newRegister(inputCorreoRegister.value, inputContraseñaRegister.value));

  const btnHomeRegister = document.createElement('img');
  btnHomeRegister.className = 'btnHomeRegister';
  btnHomeRegister.src = './imagenes/home.png';
  btnHomeRegister.addEventListener('click', () => onNavigate('/'));

  HomeDiv.append(textoRegister, inputsRegister, btnIniciarLoginRegister, btnHomeRegister);

  return HomeDiv;
};
