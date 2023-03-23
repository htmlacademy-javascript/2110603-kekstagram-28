import {createPhotoContent} from './data.js';

export const photoContainer = document.querySelector('.pictures');
const photoTemplate = document.querySelector('#picture').content;
const photoContentFragment = document.createDocumentFragment();
export const gallery = createPhotoContent();

export const createPhotoThumbnail = () => {
  gallery.forEach(({id, url, likes, comments}) => {
    const photoTemplateClone = photoTemplate.cloneNode(true);
    photoTemplateClone.querySelector('.picture').id = id;
    photoTemplateClone.querySelector('.picture__img').src = url;
    photoTemplateClone.querySelector('.picture__likes').textContent = likes;
    photoTemplateClone.querySelector('.picture__comments').textContent = comments.length;
    photoContentFragment.appendChild(photoTemplateClone);
  });
  photoContainer.appendChild(photoContentFragment);
};
