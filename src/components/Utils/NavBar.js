import { onNavigate } from '../../main.js';

export const NavBar = () => {
  const navBar = document.createElement('div');
  const logo = document.createElement('div');

  logo.textContent = 'RS';

  navBar.classList.add('navbar');
  logo.classList.add('logo');

  logo.addEventListener('click', (e) => {
    e.preventDefault();
    onNavigate('/');
  });

  navBar.appendChild(logo);

  return navBar;
};
