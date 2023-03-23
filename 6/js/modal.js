
export const bigPhoto = document.querySelector('.big-picture');

const bigPhotoCancelButton = bigPhoto.querySelector('.big-picture__cancel');

const onModalEscKeydown = (evt) => {
  if(evt.key === 'Escape') {
    evt.preventDefault();
    bigPhoto.classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');
  }
};
const closeModal = () => {
  bigPhoto.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  document.removeEventListener('keydown', onModalEscKeydown);
};

export const openModal = () => {
  bigPhoto.classList.remove('hidden');
  bigPhoto.querySelector('.social__comment-count').classList.add('hidden');
  bigPhoto.querySelector('.comments-loader').classList.add('hidden');
  document.querySelector('body').classList.add('modal-open');
  document.addEventListener('keydown', onModalEscKeydown);
};

bigPhotoCancelButton.addEventListener('click', closeModal);
