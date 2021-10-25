// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

export const Register = () => {
  const HomeDiv = document.createElement('div');
  HomeDiv.className = 'welcomRegistro';
  HomeDiv.textContent = 'Bienvenido al registro';

  const inputCorreoRegister = document.createElement('input');
  inputCorreoRegister.setAttribute('placeholder', 'Nombre');
  inputCorreoRegister.className = 'inputCorreoRegister';

  const inputContraseña = document.createElement('input');
  inputContraseña.setAttribute('placeholder', 'Apellido');
  inputContraseña.className = 'inputContraseñaRegister';

  const buttonRegisterHome = document.createElement('button');
  buttonRegisterHome.className = 'btnRegisterHome';
  buttonRegisterHome.textContent = 'Regresar al Home';

  buttonRegisterHome.addEventListener('click', () => onNavigate('/'));

  HomeDiv.append(buttonRegisterHome, inputCorreoRegister, inputContraseña);

  return HomeDiv;
};
