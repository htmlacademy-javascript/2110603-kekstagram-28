import { createPhotoThumbnails } from './thumbnail.js';
import { showBigPhoto } from './big-photo.js';
import { showGettingAlert } from './util.js';
import { openErrorMessage, openSuccessMessage } from './messages-modal.js';
import { init, getSortedGallery } from './filter.js';
import { debounce } from './util.js';
import { closeImgModal } from './form.js';

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
      createPhotoThumbnails(getSortedGallery());
      showBigPhoto(getSortedGallery());
    })
    .catch(() => {
      showGettingAlert(ERROR_TEXT);
    });

export const sendData = (body) =>
  fetch(`${BASE_URL}${Route.SEND_DATA}`, {method:'POST', body})
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      closeImgModal();
      openSuccessMessage();
      return response.json();
    })
    .catch(() => {
      openErrorMessage();
    });
