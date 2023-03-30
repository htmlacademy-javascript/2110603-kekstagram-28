const commentsList = document.querySelector('.social__comments');
const commentTemplate = document.querySelector('#new-comment').content;
const commentsFragment = document.createDocumentFragment();
export const createComments = (array) => {
  commentsList.innerHTML = '';
  array.forEach(({avatar, name, message}) => {
    const commentTemplateClone = commentTemplate.cloneNode(true);
    commentTemplateClone.querySelector('.social__picture').src = avatar;
    commentTemplateClone.querySelector('.social__picture').alt = name;
    commentTemplateClone.querySelector('.social__text').textContent = message;
    commentsFragment.appendChild(commentTemplateClone);
  });
  commentsList.appendChild(commentsFragment);
};
