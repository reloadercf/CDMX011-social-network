import { realTimePost } from '../../lib/post.js';

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
    docs.forEach((doc) => {
      const divChildPost = document.createElement('div');
      divChildPost.classList.add('child-post');
      divChildPost.textContent = doc.element.text;
      postNode.appendChild(divChildPost);
    });
  });
  return postNode;
};
