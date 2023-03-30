import {body} from './modal.js';
import {pristine, hashtagInput, descriptionInput} from './validation.js';

export const imgUploadForm = document.querySelector('.img-upload__form');
const imgUploadInput = imgUploadForm.querySelector('#upload-file');
const imgEditing = imgUploadForm.querySelector('.img-upload__overlay');
const imgUploadCancel = imgUploadForm.querySelector('#upload-cancel');

const isTextInputActive = () =>
  document.activeElement === hashtagInput ||
  document.activeElement === descriptionInput;

const onImgEditingEscKeydown = (evt) => {
  if(evt.key === 'Escape' && !isTextInputActive()) {
    evt.preventDefault();
    imgEditing.classList.add('hidden');
    body.classList.remove('modal-open');
    imgUploadInput.value = '';
  }
};

export const closeImgEditing = () => {
  imgUploadCancel.addEventListener('click', () => {
    imgEditing.classList.add('hidden');
    body.classList.remove('modal-open');
    imgUploadForm.reset();
    pristine.reset();
    document.removeEventListener('keydown', onImgEditingEscKeydown);
  });
};

export const openImgEditing = () => {
  imgUploadInput.addEventListener('change', () => {
    imgEditing.classList.remove('hidden');
    body.classList.add('modal-open');
  });
  document.addEventListener('keydown', onImgEditingEscKeydown);
};

export const submitForm = () => {
  imgUploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    pristine.validate();
  });
};
