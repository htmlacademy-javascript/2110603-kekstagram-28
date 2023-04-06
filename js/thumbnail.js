export const photoContainer = document.querySelector('.pictures');
const photoTemplate = document.querySelector('#picture').content;
const photoContentFragment = document.createDocumentFragment();
const filters = document.querySelector('.img-filters');

const createThumbnail = ({id, url, likes, comments}) => {
  const photoTemplateClone = photoTemplate.cloneNode(true);
  photoTemplateClone.querySelector('.picture').id = id;
  photoTemplateClone.querySelector('.picture__img').src = url;
  photoTemplateClone.querySelector('.picture__likes').textContent = likes;
  photoTemplateClone.querySelector('.picture__comments').textContent = comments.length;
  return photoTemplateClone;
};

export const createPhotoThumbnails = (gallery) => {
  gallery.forEach((thumbnail) => {
    photoContentFragment.appendChild(createThumbnail(thumbnail));
  });
  photoContainer.querySelectorAll('.picture').forEach((picture) => picture.remove());
  photoContainer.appendChild(photoContentFragment);
  filters.classList.remove('img-filters--inactive');
};

// export const createPhotoThumbnails = (gallery) => {
//   createRandomGallery(gallery.slice())
//     .forEach((thumbnail) => {
//       photoContentFragment.appendChild(createThumbnail(thumbnail));
//     });
//   photoContainer.appendChild(photoContentFragment);
//   filters.classList.remove('img-filters--inactive');
// };

// export const createPhotoThumbnails = (gallery) => {
//   const newGallery = gallery.slice();
//   createSortedGallery(newGallery);
//   newGallery
//     .forEach((thumbnail) => {
//       photoContentFragment.appendChild(createThumbnail(thumbnail));
//     });
//   photoContainer.appendChild(photoContentFragment);
//   filters.classList.remove('img-filters--inactive');
//   console.log(gallery);
//   console.log(newGallery);
// };
