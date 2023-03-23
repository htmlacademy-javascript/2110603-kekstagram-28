import {gallery, photoContainer} from './thumbnail.js';
import {openModal} from './modal.js';

const bigPhoto = document.querySelector('.big-picture');
const bigPhotoItem = bigPhoto.querySelector('img');
const bigPhotolikesCount = bigPhoto.querySelector('.likes-count');
const bigPhotoCommentsCount = bigPhoto.querySelector('.comments-count');
const bigPhotoComments = bigPhoto.querySelector('.social__comments');
const bigPhotoCaption = bigPhoto.querySelector('.social__caption');


export const createBigPhoto = ({url, description, likes}) => {
  bigPhotoItem.src = url;
  bigPhotoItem.alt = description;
  bigPhotolikesCount.textContent = likes;
  bigPhotoCaption.textContent = description;
};
export const showBigPhoto = () => {
  photoContainer.addEventListener('click', (evt) => {
    const thumbnail = evt.target.closest('[src]');
    console.log(thumbnail.src);
    const photo = gallery.find((item) => item.url === thumbnail.src);
    console.log(photo);
    openModal();
    createBigPhoto(photo);
  });
};

