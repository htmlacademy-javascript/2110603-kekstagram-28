import {onImgEditingEscKeydown} from './form.js';

const ALERT_SHOW_TIME = 5000;
const errorMessageTemplate = document.querySelector('#error').content;
const successMessageTemplate = document.querySelector('#success').content;
const messageContainer = document.querySelector('body');
const messageFragment = document.createDocumentFragment();

const onEscCloseMessage = (evt) => {
  if(evt.key === 'Escape') {
    evt.preventDefault();
    messageContainer.removeChild(messageContainer.lastChild);
  }
  document.addEventListener('keydown', onImgEditingEscKeydown);
};

const onWindowCloseMessage = (evt) => {
  if(!evt.target.closest('.success__inner') || !evt.target.closest('.error__inner')) {
    messageContainer.removeChild(messageContainer.lastChild);
  }
  document.addEventListener('keydown', onImgEditingEscKeydown);
};

const closeMessage = () => {
  messageContainer.removeChild(messageContainer.lastChild);
  document.removeEventListener('keydown', onEscCloseMessage);
  messageContainer.removeEventListener('click', onWindowCloseMessage);
  document.addEventListener('keydown', onImgEditingEscKeydown);
};

const createMessage = (template, type) => {
  document.removeEventListener('keydown', onImgEditingEscKeydown);
  const clone = template.cloneNode(true);
  clone.querySelector(`.${type}__button`).addEventListener('click', closeMessage);
  document.addEventListener('keydown', onEscCloseMessage);
  document.addEventListener('click', onWindowCloseMessage);

  messageFragment.appendChild(clone);
  messageContainer.appendChild(messageFragment);
};

export const showSendingSuccessMessage = () => {
  createMessage(successMessageTemplate, 'success');
};
export const showSendingErrorMessage = () => {
  createMessage(errorMessageTemplate, 'error');
};

document.addEventListener('keydown', onEscCloseMessage);
messageContainer.addEventListener('click', onWindowCloseMessage);


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

// export const createSuccess = () => {
//   document.removeEventListener('keydown', onImgEditingEscKeydown);
//   const clone = successMessageTemplate.cloneNode(true);
//   clone.querySelector('.success__button').addEventListener('click', onClickCloseMessage);
//   document.addEventListener('click', (evt) => {
//     if(!evt.target.closest('.success__inner')) {
//       onClickCloseMessage();
//     }
//     document.addEventListener('keydown', onMessageEscKeydown);
//   });
//   messageFragment.appendChild(clone);
//   messageContainer.appendChild(messageFragment);
// };

// export const createError = () => {
//   document.removeEventListener('keydown', onImgEditingEscKeydown);
//   const clone = errorMessageTemplate.cloneNode(true);
//   clone.querySelector('.error__button').addEventListener('click', onClickCloseMessage);
//   document.addEventListener('click', (evt) => {
//     if(!evt.target.closest('.error__inner')) {
//       onClickCloseMessage();
//     }
//   });
//   messageFragment.appendChild(clone);
//   messageContainer.appendChild(messageFragment);
// };
