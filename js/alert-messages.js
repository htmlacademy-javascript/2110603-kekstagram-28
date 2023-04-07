import {onImgEditingEscKeydown} from './form.js';

const ALERT_SHOW_TIME = 5000;
const errorMessageTemplate = document.querySelector('#error').content;
const successMessageTemplate = document.querySelector('#success').content;
const messageContainer = document.querySelector('body');
const messageFragment = document.createDocumentFragment();

const isCorrectTarget = (evt) => !evt.target.closest('.success__inner') || !evt.target.closest('.error__inner');

const onDocumentKeydown = (evt) => {
  if(evt.key === 'Escape') {
    evt.preventDefault();
    messageContainer.removeChild(messageContainer.lastChild);
  }
  document.addEventListener('keydown', onImgEditingEscKeydown);
};

const onDocumentClick = (evt) => {
  if(isCorrectTarget(evt)) {
    messageContainer.removeChild(messageContainer.lastChild);
  }
  document.addEventListener('keydown', onImgEditingEscKeydown);
};

const closeMessage = () => {
  messageContainer.removeChild(messageContainer.lastChild);

  document.removeEventListener('keydown', onDocumentKeydown);
  document.removeEventListener('click', onDocumentClick);
  document.addEventListener('keydown', onImgEditingEscKeydown);
};

const createMessage = (template, type) => {
  document.removeEventListener('keydown', onImgEditingEscKeydown);

  const clone = template.cloneNode(true);

  clone.querySelector(`.${type}__button`).addEventListener('click', closeMessage);
  document.addEventListener('keydown', onDocumentKeydown);
  document.addEventListener('click', onDocumentClick);

  messageFragment.appendChild(clone);
  messageContainer.appendChild(messageFragment);
};

export const showSendingSuccessMessage = () => {
  createMessage(successMessageTemplate, 'success');
};

export const showSendingErrorMessage = () => {
  createMessage(errorMessageTemplate, 'error');
};

export const showGettingAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.lineHeight = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

// export const showSendingSuccessMessage = () => {
//   const clone = successMessageTemplate.cloneNode(true);
//   clone.querySelector('.success__button').addEventListener('click', closeMessage);
//   document.addEventListener('keydown', onDocumentKeydown);
//   document.addEventListener('click', onDocumentClick);

//   messageFragment.appendChild(clone);
//   messageContainer.appendChild(messageFragment);
// };

// export const showSendingErrorMessage = () => {
//   document.removeEventListener('keydown', onImgEditingEscKeydown);
//   const clone = errorMessageTemplate.cloneNode(true);
//   clone.querySelector('.error__button').addEventListener('click', closeMessage);
//   document.addEventListener('keydown', onDocumentKeydown);
//   document.addEventListener('click', onDocumentClick);
//   messageFragment.appendChild(clone);
//   messageContainer.appendChild(messageFragment);
// };

