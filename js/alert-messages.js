import {onImgEditingEscKeydown} from './form.js';

const ALERT_SHOW_TIME = 5000;
const errorMessageTemplate = document.querySelector('#error').content;
const successMessageTemplate = document.querySelector('#success').content;
const messageContainer = document.querySelector('body');
//  const closeErrorButton = document.querySelector('.error__button');
// const closeSuccessButton = document.querySelector('.success__button');
const messageFragment = document.createDocumentFragment();

const onMessageEscKeydown = (evt) => {
  if(evt.key === 'Escape') {
    evt.preventDefault();
    messageContainer.removeChild(messageContainer.lastChild);
  }
};
const onButtonCloseMessage = () => {
  messageContainer.removeChild(messageContainer.lastChild);
};

// const onDocumentCloseMessage = (evt) => {
//   if(!evt.target.closest('.success__inner') || !evt.target.closest('.error__inner')) {
//     messageContainer.removeChild(messageContainer.lastChild);
//   }
// };
const createMessage = (template, type) => {
  const clone = template.cloneNode(true);
  clone.querySelector(`.${type}__button`).addEventListener('click', onButtonCloseMessage);
  document.removeEventListener('keydown', onImgEditingEscKeydown);
  document.addEventListener('keydown', onMessageEscKeydown);
  document.addEventListener('click', (evt) => {
    if(!evt.target.closest(`.${type}__inner`)) {
      messageContainer.removeChild(messageContainer.lastChild);
    }
  });

  messageFragment.appendChild(clone);
  messageContainer.appendChild(messageFragment);
};
export const showSendingSuccessMessage = () => {
  createMessage(successMessageTemplate, 'success');
  // document.addEventListener('keydown', onModalEscKeydown);
  // messageContainer .addEventListener('click', closeMessage);
};
export const showSendingErrorMessage = () => {
  createMessage(errorMessageTemplate, 'error');
  // document.addEventListener('keydown', onModalEscKeydown);
  // messageContainer.addEventListener('click', closeMessage);
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

// <!-- Сообщение об успешной загрузке изображения -->
// <template id="success">
//   <section class="success">
//     <div class="success__inner">
//       <h2 class="success__title">Изображение успешно загружено</h2>
//       <button type="button" class="success__button">Круто!</button>
//     </div>
//   </section>
// </template>

// const createMessage = () => {
//   const messageTemplateClone = errorMessageTemplate.cloneNode(true);
//   errorMessageTemplate.querySelector('.error__title')
//     .textContent = 'Произошла ошибка. Попробуйте перезагрузить страницу';
//   errorMessageTemplate.querySelector('.error__button').addEventListener('click', reloadPage);
//   messageFragment.appendChild(messageTemplateClone);
//   photoContainer.appendChild(messageFragment);
// };
