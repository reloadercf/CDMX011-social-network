/* eslint-disable max-len */
/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js';

export const Register = () => {
  const HomeDiv = document.createElement('div');
  HomeDiv.className = 'welcomRegistro';
  HomeDiv.textContent = 'Bienvenido al registro';

  const inputNombreUser = document.createElement('input');
  inputNombreUser.setAttribute('placeholder', 'Nombre Usuario');
  inputNombreUser.className = 'inputNombreUser';

  const inputCorreoRegister = document.createElement('input');
  inputCorreoRegister.setAttribute('placeholder', 'Correo Electronico');
  inputCorreoRegister.className = ' inputCorreoRegister';

  const inputContraseñaRegister = document.createElement('input');
  inputContraseñaRegister.setAttribute('placeholder', 'Contraseña');
  inputContraseñaRegister.className = 'inputContraseñaRegister';

  const btnIniciarLoginRegister = document.createElement('button');
  btnIniciarLoginRegister.textContent = 'Completa Registro';
  btnIniciarLoginRegister.className = 'btnIniciarLoginRegister';

  const buttonRegisterHome = document.createElement('button');
  buttonRegisterHome.className = 'btnRegisterHome';
  buttonRegisterHome.textContent = 'Regresar al Home';

  buttonRegisterHome.addEventListener('click', () => onNavigate('/'));

  HomeDiv.append(inputNombreUser, inputCorreoRegister, inputContraseñaRegister, btnIniciarLoginRegister, buttonRegisterHome);

  return HomeDiv;
};
