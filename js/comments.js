
const COMMENTS_COUNT_AT_ONCE = 5;
const bigPhoto = document.querySelector('.big-picture');
const commentsList = document.querySelector('.social__comments');
const commentTemplate = document.querySelector('#new-comment').content;
const commentsFragment = document.createDocumentFragment();
const commentsCountSpan = bigPhoto.querySelector('.social__comment-count');
const commentsLoadButton = bigPhoto.querySelector('.comments-loader');

let loadedCommentsCount = 0;
let comments = [];
let loadedCommentsAtOnce = [];
const createComment = ({avatar, name, message}) => {
  const commentTemplateClone = commentTemplate.cloneNode(true);
  commentTemplateClone.querySelector('.social__picture').src = avatar;
  commentTemplateClone.querySelector('.social__picture').alt = name;
  commentTemplateClone.querySelector('.social__text').textContent = message;
  return commentTemplateClone;
};

const loadMoreComments = () => {
  loadedCommentsCount += COMMENTS_COUNT_AT_ONCE;

  if (loadedCommentsCount >= comments.length) {
    loadedCommentsCount = comments.length;
    commentsLoadButton.classList.add('hidden');
    loadedCommentsAtOnce = comments;
  } else {
    commentsLoadButton.classList.remove('hidden');
    loadedCommentsAtOnce = comments.slice(0, loadedCommentsCount);
  }

  loadedCommentsAtOnce.forEach((comment) =>
    commentsFragment.appendChild(createComment(comment)));
  commentsList.innerHTML = '';
  commentsList.appendChild(commentsFragment);
  commentsCountSpan.innerHTML = `${loadedCommentsCount} из <span class="comments-count">${comments.length} комментариев</span>`;
};

export const createCommentsList = (photoComments) => {
  comments = photoComments;
  loadMoreComments();
};

commentsLoadButton.addEventListener('click', loadMoreComments);

export const clearCommentsList = () => {
  loadedCommentsCount = 0;
};
