import { clearCommentsList } from './comments.js';
import { isEscapeKey } from './util.js';

export const body = document.querySelector('body');
export const bigPhoto = document.querySelector('.big-picture');
const bigPhotoCancelButton = bigPhoto.querySelector('.big-picture__cancel');

const onModalEscKeydown = (evt) => {
  if(isEscapeKey(evt) && bigPhoto.className !== 'hidden') {
    evt.preventDefault();
    closeModal();
  }
};

export function closeModal () {
  bigPhoto.classList.add('hidden');
  body.classList.remove('modal-open');
  clearCommentsList();
  document.removeEventListener('keydown', onModalEscKeydown);
}

export const openModal = () => {
  bigPhoto.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onModalEscKeydown);
};


bigPhotoCancelButton.addEventListener('click', closeModal);

