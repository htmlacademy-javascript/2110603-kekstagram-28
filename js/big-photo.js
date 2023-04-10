import {photoContainer} from './thumbnail.js';
import {bigPhoto, openModal} from './big-photo-modal.js';
import {createCommentsList} from './comments.js';

const bigPhotoItem = bigPhoto.querySelector('.big-picture__img img');
const bigPhotolikesCount = bigPhoto.querySelector('.likes-count');
const bigPhotoCommentsCount = bigPhoto.querySelector('.comments-count');
const bigPhotoCaption = bigPhoto.querySelector('.social__caption');

const createBigPhoto = ({url, description, likes, comments}) => {
  bigPhotoItem.src = url;
  bigPhotoItem.alt = description;
  bigPhotolikesCount.textContent = likes;
  bigPhotoCaption.textContent = description;
  bigPhotoCommentsCount.textContent = comments.length;
};

export const showBigPhoto = (gallery) => {
  photoContainer.addEventListener('click', (evt) => {
    const thumbnail = evt.target.closest('.picture');
    if (thumbnail) {
      const photo = gallery.find((item) => item.id === Number(thumbnail.id));
      openModal();
      createBigPhoto(photo);
      createCommentsList(photo.comments);
    }
  });
};
