import { onNavigate } from '../../main.js';
import { signOutApp } from '../../lib/services.js';

export const NavBar = () => {
  const navBar = document.createElement('div');
  const logo = document.createElement('div');
  const logout = document.createElement('div');

  logout.classList.add('logout');
  navBar.classList.add('navbar');
  logo.classList.add('logo');

  logo.textContent = 'RS';
  logout.textContent = 'Cerrar sesión';

  logo.addEventListener('click', (e) => {
    e.preventDefault();
    onNavigate('/home');
  });

  logout.addEventListener('click', (e) => {
    e.preventDefault();
    signOutApp(onNavigate);
  });

  navBar.appendChild(logo);
  navBar.appendChild(logout);
  return navBar;
};
