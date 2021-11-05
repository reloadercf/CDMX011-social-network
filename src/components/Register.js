/* eslint-disable max-len */
/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js';
import { newRegister } from '../lib/sesion.js';

export const Register = () => {
  const HomeDiv = document.createElement('div');
  HomeDiv.className = 'welcomRegistro';
  HomeDiv.textContent = 'Bienvenido al registro';

  // const inputNombreUser = document.createElement('input');
  // inputNombreUser.setAttribute('placeholder', 'Nombre Usuario');
  // inputNombreUser.className = 'inputNombreUser';

  const inputCorreoRegister = document.createElement('input');
  inputCorreoRegister.setAttribute('placeholder', 'Correo Electronico');
  inputCorreoRegister.className = ' inputCorreoRegister';

  const inputContraseñaRegister = document.createElement('input');
  inputContraseñaRegister.setAttribute('placeholder', 'Contraseña');
  inputContraseñaRegister.className = 'inputContraseñaRegister';

  const btnIniciarLoginRegister = document.createElement('button');
  btnIniciarLoginRegister.textContent = 'Registrate';
  btnIniciarLoginRegister.className = 'btnIniciarLoginRegister';

  const buttonRegisterHome = document.createElement('button');
  buttonRegisterHome.className = 'btnRegisterHome';
  buttonRegisterHome.textContent = 'Regresar al Home';

  btnIniciarLoginRegister.addEventListener('click', () => newRegister(inputCorreoRegister.value, inputContraseñaRegister.value));
  buttonRegisterHome.addEventListener('click', () => onNavigate('/'));

  HomeDiv.append(inputCorreoRegister, inputContraseñaRegister, btnIniciarLoginRegister, buttonRegisterHome);

  return HomeDiv;
};
