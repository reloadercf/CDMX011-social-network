/* eslint-disable eqeqeq */
/* eslint-disable no-undef */
import { getUser, createPost } from '../../lib/post.js';

export const Publish = () => {
  const user = getUser();

  const publishContainer = document.createElement('div');
  const nameProfile = document.createElement('p');
  const shareContainer = document.createElement('div');
  const imgProfile = document.createElement('img');
  const textArea = document.createElement('textarea');
  const imgAddFile = document.createElement('img');
  const containerNumbers = document.createElement('div');
  const numbers = document.createElement('div');
  const button = document.createElement('button');

  publishContainer.classList.add('publish-container');
  nameProfile.classList.add('name-profile');
  shareContainer.classList.add('share-container');
  imgProfile.classList.add('img-profile');
  textArea.classList.add('text-area');
  imgAddFile.classList.add('img-add-file');
  button.classList.add('button-primary');
  numbers.classList.add('characters-numbers');
  containerNumbers.classList.add('container-numbers');

  textArea.placeholder = 'Comparte algo';
  nameProfile.textContent = `${user ? user.displayName ? user.displayName : user.email : ''}`;
  imgProfile.setAttribute('src', `${user ? user.photoURL ? user.photoURL : 'https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-symbol-image-default-avatar-profile-icon-vector-social-media-user-symbol-209498286.jpg' : 'https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-symbol-image-default-avatar-profile-icon-vector-social-media-user-symbol-209498286.jpg'}`);
  imgAddFile.setAttribute('src', 'https://img2.freepng.es/20180711/kl/kisspng-computer-icons-email-attachment-attach-5b46c98c486db2.9918158215313657722967.jpg');
  button.textContent = 'Publicar';

  imgAddFile.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Cargar imagen');
  });

  button.addEventListener('click', (e) => {
    e.preventDefault();
    if (textArea.value.length == 0) {
      Swal.fire({
        title: 'Texto vacío',
        text: 'Debes ingresar texto',
        icon: 'error',
        timer: 3000,
      });
    } else if (textArea.value.length > 150) {
      Swal.fire({
        title: 'Texto muy grande',
        text: 'Solo se permiten 150 caracteres',
        icon: 'warning',
        timer: 3000,
      });
    } else {
      createPost(user.uid, textArea.value);
      textArea.value = '';
      const elementNumber = document.querySelector('.container-numbers');
      if (elementNumber.firstChild) {
        elementNumber.removeChild(elementNumber.firstChild);
      }
    }
  });

  shareContainer.appendChild(imgProfile);
  shareContainer.appendChild(textArea);
  shareContainer.appendChild(imgAddFile);
  publishContainer.appendChild(nameProfile);
  publishContainer.appendChild(shareContainer);
  containerNumbers.appendChild(numbers);
  publishContainer.appendChild(containerNumbers);
  publishContainer.appendChild(button);

  textArea.addEventListener('keyup', () => {
    const elementNumber = document.querySelector('.container-numbers');
    if (elementNumber.firstChild) {
      elementNumber.removeChild(elementNumber.firstChild);
    }
    const specific = 150 - textArea.value.length;
    const newNumber = document.createElement('div');
    newNumber.textContent = specific;
    if (specific > 0) {
      newNumber.classList.add('green-number');
      elementNumber.appendChild(newNumber);
    } else if (specific < 0) {
      newNumber.classList.add('red-number');
      elementNumber.appendChild(newNumber);
    }
  });

  return publishContainer;
};
