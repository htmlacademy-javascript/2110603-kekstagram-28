import { createPhotoThumbnails } from './thumbnail.js';
import { showBigPhoto } from './big-photo.js';
import { closeImgEditing, blockSubmitButton, unblockSubmitButton, imgUploadForm } from './form.js';
import { showGettingAlert, showSendingErrorMessage } from './alert-messages.js';
import { init, createSortedGallery } from './filter.js';
import { debounce } from './util.js';
import { pristine } from './validation.js';
const RERENDER_DELAY = 500;
const BASE_URL = 'https://28.javascript.pages.academy/kekstagram';

const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

const ERROR_TEXT = 'Не удалось загрузить данные. Попробуйте обновить страницу';

export const getData = () =>
  fetch(`${BASE_URL}${Route.GET_DATA}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    })
    .then((data) => {
      init(data, debounce(createPhotoThumbnails, RERENDER_DELAY));
      createPhotoThumbnails(createSortedGallery());
      showBigPhoto(createSortedGallery());
    })
    .catch(() => {
      showGettingAlert(ERROR_TEXT);
    });

const sendData = (body) =>
  fetch(`${BASE_URL}${Route.SEND_DATA}`, {method:'POST', body})
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      // console.log(response.json());
      return response.json();
    })
    .catch(() => {
      showSendingErrorMessage();
    });

export const submitForm = () => {
  imgUploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if (pristine.validate()) {
      blockSubmitButton();
      const formData = new FormData(evt.target);
      sendData(formData)
        .then(() => {
          closeImgEditing();
        })
        .catch(() => {
          showSendingErrorMessage();
        })
        .finally(unblockSubmitButton());
    }
  });
};
