import {onImgEditingEscKeydown} from './form.js';

const errorMessageTemplate = document.querySelector('#error').content;
const successMessageTemplate = document.querySelector('#success').content;
const messageContainer = document.querySelector('body');

// Success

const onDocumentKeydownSuccess = (evt) => {
  if(evt.key === 'Escape') {
    evt.preventDefault();
    document.querySelector('.success').remove();
  }
};

const onSuccessOutsideClick = (evt) => {
  if(!evt.target.closest('.success__inner')) {
    document.querySelector('.success').remove();
  }
};

const onButtoncloseMessage = () => {
  document.querySelector('.success').remove();
  document.removeEventListener('keydown', onDocumentKeydownSuccess);
  document.addEventListener('keydown', onImgEditingEscKeydown);
};

// Error

const onDocumentKeydownError = (evt) => {
  if(evt.key === 'Escape') {
    evt.preventDefault();
    document.querySelector('.error').remove();
  }
};

const onErrorOutsideClick = (evt) => {
  if(!evt.target.closest('.error__inner')) {
    document.querySelector('.error').remove();
  }
};

const onButtoncloseMessageError = () => {
  document.querySelector('.error').remove();
  document.removeEventListener('keydown', onDocumentKeydownError);
  document.addEventListener('keydown', onImgEditingEscKeydown);
};

const openMessage = (template, type) => {
  document.removeEventListener('keydown', onImgEditingEscKeydown);
  const message = template.cloneNode(true);
  messageContainer.appendChild(message);
  switch(type) {
    case 'success':
      document.querySelector(`.${type}`).addEventListener('click', onSuccessOutsideClick);
      document.querySelector(`.${type}__button`).addEventListener('click', onButtoncloseMessage);
      document.addEventListener('keydown', onDocumentKeydownSuccess);
      break;
    case 'error':
      document.querySelector(`.${type}`).addEventListener('click', onErrorOutsideClick);
      document.querySelector(`.${type}__button`).addEventListener('click', onButtoncloseMessageError);
      document.addEventListener('keydown', onDocumentKeydownError);
      break;
  }
};

export const openSuccessMessage = () => openMessage(successMessageTemplate, 'success');

export const openErrorMessage = () => openMessage(errorMessageTemplate, 'error');
