import { Publish } from './Publish.js';
import { NavBar } from './NavBar.js';
import { AllPost } from './AllPost.js';

export const Home = () => {
  const newDiv = document.createElement('div');
  const primaryContainer = document.createElement('div');
  const articlesContainer = document.createElement('div');
  const containerPost = document.createElement('div');

  primaryContainer.classList.add('primary-container');
  containerPost.classList.add('primary-container');

  primaryContainer.appendChild(Publish());
  primaryContainer.appendChild(articlesContainer);
  newDiv.appendChild(NavBar());
  newDiv.appendChild(primaryContainer);
  containerPost.appendChild(AllPost());
  newDiv.appendChild(containerPost);

  return newDiv;
};
