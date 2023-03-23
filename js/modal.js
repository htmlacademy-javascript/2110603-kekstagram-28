
const bigPicture = document.querySelector('.big-picture');

const bigPictureCancelButton = bigPicture.querySelector('#picture-cancel');

const onModalEscKeydown = (evt) => {
  if(evt.key === 'Escape') {
    evt.preventDefault();
    bigPicture.classList.add('hidden');
  }
};

export const openModal = () => {
  bigPicture.classList.remove('hidden');
  //bigPicture.querySelector('.social__comment-count').classList.add('hidden');
  bigPicture.querySelector('.comments-loader').classList.add('hidden');
  document.querySelector('body').classList.add('modal-open');
  document.addEventListener('keydown', onModalEscKeydown);
};

const closeModal = () => {
  bigPicture.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  document.removeEventListener('keydown', onModalEscKeydown);
};

bigPictureCancelButton.addEventListener('click', closeModal);
