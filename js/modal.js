import {clearCommentsList} from './comments.js';
export const body = document.querySelector('body');
export const bigPhoto = document.querySelector('.big-picture');
const bigPhotoCancelButton = bigPhoto.querySelector('.big-picture__cancel');

const onModalEscKeydown = (evt) => {
  if(evt.key === 'Escape' && bigPhoto.className !== 'hidden') {
    evt.preventDefault();
    bigPhoto.classList.add('hidden');
    body.classList.remove('modal-open');
    clearCommentsList();
  }
};

const closeModal = () => {
  bigPhoto.classList.add('hidden');
  body.classList.remove('modal-open');
  clearCommentsList();
  document.removeEventListener('keydown', onModalEscKeydown);
};

export const openModal = () => {
  bigPhoto.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onModalEscKeydown);
};


bigPhotoCancelButton.addEventListener('click', closeModal);
