/* eslint-disable import/no-cycle */
// eslint-disable-next-line import/no-cycle
// import { onNavigate } from '../main.js';
import { loginEmailPass, sesionGoogle } from '../lib/sesion.js';
import { onNavigate } from '../main.js';

export const Login = () => {
  const loginDiv = document.createElement('div');
  loginDiv.className = 'welcomLogin';

  const textoLogin = document.createElement('h1');
  textoLogin.className = 'textoLogin';
  textoLogin.textContent = 'Bienvenido al inicio de sesión';

  const inputsLogin = document.createElement('div');
  inputsLogin.className = 'inputsLogin';

  const inputCorreo = document.createElement('input');
  inputCorreo.setAttribute('placeholder', 'corero electronico');
  inputCorreo.className = 'inputCorreo';

  const inputContraseña = document.createElement('input');
  inputContraseña.setAttribute('placeholder', 'constraseña');
  inputContraseña.className = 'inputContraseña';
  inputsLogin.append(inputCorreo, inputContraseña);

  const btnIniciarLogin = document.createElement('button');
  btnIniciarLogin.textContent = 'Iniciar Sesión';
  btnIniciarLogin.className = 'btnIniciarLogin';
  btnIniciarLogin.addEventListener('click', () => loginEmailPass(inputCorreo.value, inputContraseña.value));

  const iconsLogin = document.createElement('div');
  iconsLogin.className = 'iconsLogin';
  const registerGoogle = document.createElement('img');
  registerGoogle.className = 'registerGoogle';
  registerGoogle.src = './imagenes/google.jpg';
  registerGoogle.addEventListener('click', () => sesionGoogle());

  const registerFb = document.createElement('img');
  registerFb.className = 'registerFb';
  registerFb.src = './imagenes/facebook.png';
  registerFb.addEventListener('click', () => {
    console.log('si funciona fb');
  });
  iconsLogin.append(registerGoogle, registerFb);

  const btnHomeLogin = document.createElement('img');
  btnHomeLogin.className = 'btnHomeLogin';
  btnHomeLogin.src = './imagenes/home.png';
  btnHomeLogin.addEventListener('click', () => onNavigate('/'));

  loginDiv.append(textoLogin, inputsLogin, btnIniciarLogin, iconsLogin, btnHomeLogin);

  return loginDiv;
};
