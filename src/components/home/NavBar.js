import { onNavigate } from '../../main.js';

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
    onNavigate('/');
  });

  logout.addEventListener('click', (e) => {
    e.preventDefault();
    onNavigate('/');
  });

  navBar.appendChild(logo);
  navBar.appendChild(logout);
  return navBar;
};
