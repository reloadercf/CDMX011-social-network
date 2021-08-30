import { realTimePost } from '../../lib/post.js';
import { getProcfileId } from '../../lib/procfile.js';

export const AllPost = () => {
  const postNode = document.createElement('div');
  postNode.classList.add('all-poststes');
  realTimePost().onSnapshot((posts) => {
    const getPostNode = document.querySelector('.all-poststes');
    while (getPostNode.firstChild) {
      getPostNode.removeChild(getPostNode.firstChild);
    }

    const docs = [];
    posts.forEach((doc) => { docs.push({ element: doc.data(), id: doc.id }); });
    console.log(docs);
    docs.forEach((doc) => {
      const divChildPost = document.createElement('div');

      const divArticle = document.createElement('div');
      const divText = document.createElement('div');
      const imageUser = document.createElement('img');
      const infoPost = document.createElement('div');
      const datePost = document.createElement('div');
      const namePost = document.createElement('div');
      const divLikesPost = document.createElement('div');
      const imgLikePost = document.createElement('img');
      const spanNlikes = document.createElement('span');
      const divitionHr = document.createElement('hr');

      divChildPost.classList.add('child-post');

      divArticle.classList.add('article-post');
      imageUser.classList.add('img-profile');
      divText.classList.add('div-text');
      divLikesPost.classList.add('div-likes-post');
      imgLikePost.classList.add('img-like');
      spanNlikes.classList.add('span-nlikes');
      infoPost.classList.add('info-post');
      datePost.classList.add('date-post');
      namePost.classList.add('name-post');

      imgLikePost.setAttribute('src', 'https://www.pikpng.com/pngl/b/328-3283462_love-heart-reaction-facebook-stiker-red-instagram-asana.png');
      divText.textContent = doc.element.text;
      spanNlikes.textContent = doc.element.likes.length;
      datePost.textContent = doc.element.date_public;

      getProcfileId(doc.element.uid)
        .then((user) => {
          if (user.exists) {
            const { displayName, email, photoURL } = user.data();
            imageUser.setAttribute('src', `${photoURL !== 'null' ? photoURL : 'https://w7.pngwing.com/pngs/601/312/png-transparent-social-media-avatar-graphy-digital-media-profile-blue-text-logo.png'}`);
            namePost.textContent = `${displayName !== 'null' ? displayName : email}`;
          } else {
            imageUser.setAttribute('src', 'https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-symbol-image-default-avatar-profile-icon-vector-social-media-user-symbol-209498286.jpg');
            namePost.textContent = 'usuarix';
          }
        }).catch((error) => {
          console.log('Error getting document:', error);
        });

      divArticle.appendChild(divText);
      divArticle.appendChild(imageUser);
      divChildPost.appendChild(divArticle);
      divChildPost.appendChild(infoPost);
      divLikesPost.appendChild(imgLikePost);
      divLikesPost.appendChild(spanNlikes);
      infoPost.appendChild(divLikesPost);
      infoPost.appendChild(datePost);
      infoPost.appendChild(namePost);
      divChildPost.appendChild(infoPost);
      divChildPost.appendChild(divitionHr);

      postNode.appendChild(divChildPost);
    });
  });
  return postNode;
};
