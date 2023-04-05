import {body} from './modal.js';
import {pristine, hashtagInput, descriptionInput} from './validation.js';
import {setScale} from './scale.js';
import {resetEffects} from './effects.js';

export const imgUploadForm = document.querySelector('.img-upload__form');
const imgUploadInput = imgUploadForm.querySelector('#upload-file');
const imgEditing = imgUploadForm.querySelector('.img-upload__overlay');
const imgUploadCancel = imgUploadForm.querySelector('#upload-cancel');
const submitButton = imgUploadForm.querySelector('.img-upload__submit');


const isTextInputActive = () =>
  document.activeElement === hashtagInput ||
  document.activeElement === descriptionInput;

// const isImgEditingActive = () =>
//   document.activeElement === imgEditing;

export const onImgEditingEscKeydown = (evt) => {
  if(evt.key === 'Escape' && !isTextInputActive()) {
    evt.preventDefault();
    imgEditing.classList.add('hidden');
    body.classList.remove('modal-open');
    imgUploadInput.value = '';
  }
};

export const closeImgEditing = () => {
  imgEditing.classList.add('hidden');
  body.classList.remove('modal-open');
  imgUploadForm.reset();
  pristine.reset();
  resetEffects();
  document.removeEventListener('keydown', onImgEditingEscKeydown);
};

export const openImgEditing = () => {
  imgEditing.classList.remove('hidden');
  body.classList.add('modal-open');
  setScale();
  imgUploadForm.querySelector('.img-upload__effect-level').classList.add('visually-hidden');
  document.addEventListener('keydown', onImgEditingEscKeydown);
};

const blockSubmitButton = () => {
  submitButton.disabled = true;
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
};

export const submitForm = (cb) => {
  imgUploadForm.addEventListener('submit', async (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      const formData = new FormData(evt.target);
      await cb(formData);
      unblockSubmitButton();
    }
  });
};

imgUploadInput.addEventListener('change', openImgEditing);

imgUploadCancel.addEventListener('click', closeImgEditing);

// const setUserFormSubmit = (onSuccess) => {
//   wizardForm.addEventListener('submit', (evt) => {
//     evt.preventDefault();

//     const isValid = pristine.validate();
//     if (isValid) {
//       blockSubmitButton();
//       sendData(new FormData(evt.target))
//         .then(onSuccess)
//         .catch(
//           (err) => {
//             showAlert(err.message);
//           }
//         )
//         .finally(unblockSubmitButton);
//     }
//   });
// };


//setUserFormSubmit(closeUserModal);


// function closeUserModal () {
//   userModalElement.classList.add('hidden');
//   document.removeEventListener('keydown', onDocumentKeydown);
// }
