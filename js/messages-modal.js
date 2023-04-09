import { onDocumentKeydown } from './form.js';
import { isEscapeKey } from './util.js';

const errorMessageTemplate = document.querySelector('#error').content;
const successMessageTemplate = document.querySelector('#success').content;
const messageContainer = document.querySelector('body');

// Success

const onDocumentKeydownSuccess = (evt) => {
  if(isEscapeKey) {
    evt.preventDefault();
    closeSuccessMessage();
  }
};

const onSuccessOutsideClick = (evt) => {
  if(!evt.target.closest('.success__inner')) {
    closeSuccessMessage();
  }
};

function closeSuccessMessage () {
  document.querySelector('.success').remove();
  document.removeEventListener('keydown', onDocumentKeydownSuccess);
}

// Error

const onDocumentKeydownError = (evt) => {
  if(isEscapeKey) {
    evt.preventDefault();
    closeErrorMessage();
  }
};

const onErrorOutsideClick = (evt) => {
  if(!evt.target.closest('.error__inner')) {
    closeErrorMessage();
  }
};

function closeErrorMessage () {
  document.addEventListener('keydown', onDocumentKeydown);
  document.querySelector('.error').remove();
  document.removeEventListener('keydown', onDocumentKeydownError);
}

function openMessage (template, type) {
  document.removeEventListener('keydown', onDocumentKeydown);
  const message = template.cloneNode(true);
  messageContainer.appendChild(message);
  switch(type) {
    case 'success':
      document.querySelector(`.${type}`).addEventListener('click', onSuccessOutsideClick);
      document.querySelector(`.${type}__button`).addEventListener('click', closeSuccessMessage);
      document.addEventListener('keydown', onDocumentKeydownSuccess);
      break;
    case 'error':
      document.querySelector(`.${type}`).addEventListener('click', onErrorOutsideClick);
      document.querySelector(`.${type}__button`).addEventListener('click', closeErrorMessage);
      document.addEventListener('keydown', onDocumentKeydownError);
      break;
  }
}

export const openSuccessMessage = () => openMessage(successMessageTemplate, 'success');

export const openErrorMessage = () => openMessage(errorMessageTemplate, 'error');
