import { Publish } from './Publish.js';
import { NavBar } from './NavBar.js';

export const Home = () => {
  const newDiv = document.createElement('div');
  const primaryContainer = document.createElement('div');
  const articlesContainer = document.createElement('div');

  primaryContainer.classList.add('primary-container');

  primaryContainer.appendChild(Publish());
  primaryContainer.appendChild(articlesContainer);
  newDiv.appendChild(NavBar());
  newDiv.appendChild(primaryContainer);

  return newDiv;
};
