export const Publish = () => {
  const publishContainer = document.createElement('div');
  const nameProfile = document.createElement('p');
  const shareContainer = document.createElement('div');
  const imgProfile = document.createElement('img');
  const textArea = document.createElement('textarea');
  const imgAddFile = document.createElement('img');
  const button = document.createElement('button');

  publishContainer.classList.add('publish-container');
  nameProfile.classList.add('name-profile');
  shareContainer.classList.add('share-container');
  imgProfile.classList.add('img-profile');
  textArea.classList.add('text-area');
  imgAddFile.classList.add('img-add-file');
  button.classList.add('button-primary');

  textArea.placeholder = 'Comparte algo';
  nameProfile.textContent = 'Hola Carlos Fernando';
  imgProfile.setAttribute('src', 'https://m.vanguardia.com/cursos/assets/images/profile/logodefault.jpg');
  imgAddFile.setAttribute('src', 'https://img2.freepng.es/20180711/kl/kisspng-computer-icons-email-attachment-attach-5b46c98c486db2.9918158215313657722967.jpg');
  button.textContent = 'Publicar';

  imgAddFile.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Cargar imagen');
  });

  button.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(textArea.value);
  });

  shareContainer.appendChild(imgProfile);
  shareContainer.appendChild(textArea);
  shareContainer.appendChild(imgAddFile);
  publishContainer.appendChild(nameProfile);
  publishContainer.appendChild(shareContainer);
  publishContainer.appendChild(button);

  return publishContainer;
};
