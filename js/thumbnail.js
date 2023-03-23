import {createPhotoContent} from './data.js';

export const photoContainer = document.querySelector('.pictures');

const photoTemplate = document.querySelector('#picture').content;

const photoContentFragment = document.createDocumentFragment();
export const gallery = createPhotoContent();
console.log(gallery);
export const createPhotoThumbnail = () => {
  gallery.forEach(({url, likes, comments}) => {
    const photoTemplateClone = photoTemplate.cloneNode(true);
    photoTemplateClone.querySelector('.picture__img').src = url;
    photoTemplateClone.querySelector('.picture__likes').textContent = likes;
    photoTemplateClone.querySelector('.picture__comments').textContent = comments.length;
    photoContentFragment.appendChild(photoTemplateClone);
  });
  photoContainer.appendChild(photoContentFragment);
};
