import { body } from './big-photo-modal.js';
import { pristine, hashtagInput, descriptionInput } from './validation.js';
import { setScale } from './scale.js';
import { resetEffects, sliderContainer } from './effects.js';
import { isEscapeKey } from './util.js';

const FILE_TYPES = ['jpg', 'jpeg', 'png'];

export const imgUploadForm = document.querySelector('.img-upload__form');
const imgUploadInput = imgUploadForm.querySelector('.img-upload__input');
const imgUploadModal = imgUploadForm.querySelector('.img-upload__overlay');
const imgUploadCancel = imgUploadForm.querySelector('#upload-cancel');
const submitButton = imgUploadForm.querySelector('.img-upload__submit');
const imgUploadPreview = imgUploadForm.querySelector('.img-upload__preview img');

const isTextInputActive = () =>
  document.activeElement === hashtagInput ||
  document.activeElement === descriptionInput;

const setImgPreview = () => {
  const file = imgUploadInput.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((element) => fileName.endsWith(element));
  if(matches) {
    imgUploadPreview.src = URL.createObjectURL(file);
  }
};

export const onDocumentKeydown = (evt) => {
  if(isEscapeKey(evt) && !isTextInputActive()) {
    evt.preventDefault();
    closeImgModal();
  }
};

export function closeImgModal () {
  imgUploadModal.classList.add('hidden');
  body.classList.remove('modal-open');
  imgUploadForm.reset();
  hashtagInput.value = '';
  descriptionInput.value = '';
  pristine.reset();
  resetEffects();
}

export const openImgModal = () => {
  imgUploadModal.classList.remove('hidden');
  body.classList.add('modal-open');
  setScale();
  setImgPreview();
  sliderContainer.classList.add('visually-hidden');
  document.addEventListener('keydown', onDocumentKeydown);
};

export const blockSubmitButton = () => submitButton.disabled === true;

export const unblockSubmitButton = () => submitButton.disabled === false;

export const submitForm = (cb) => {
  imgUploadForm.addEventListener('submit', async (evt) => {
    evt.preventDefault();
    if (pristine.validate()) {
      blockSubmitButton();
      const formData = new FormData(evt.target);
      await cb(formData);
      unblockSubmitButton();
    }
  });
};

imgUploadCancel.addEventListener('click', closeImgModal);
imgUploadInput.addEventListener('change', openImgModal);
