const RANDOM_PHOTOS_COUNT = 10;
const Filter = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed'
};

const filtersButtonContainer = document.querySelector('.img-filters__form');
let currentFilter = Filter.DEFAULT;
let photos = [];

const randomSort = () => Math.random() - 0.5;

const byCommentsSort = (photoA, photoB) => photoB.comments.length - photoA.comments.length;

export const getSortedGallery = () => {
  switch(currentFilter) {
    case Filter.RANDOM
      :return photos.slice().sort(randomSort).slice(0, RANDOM_PHOTOS_COUNT);
    case Filter.DISCUSSED
      :return photos.slice().sort(byCommentsSort);
    default:
      return photos;
  }
};

const setOnFiltersClick = (cb) => {
  filtersButtonContainer.addEventListener('click', (evt) => {
    for (let i = 0; i < filtersButtonContainer.children.length; i++) {
      filtersButtonContainer.children[i].classList.remove('img-filters__button--active');
    }
    evt.target.classList.add('img-filters__button--active');
    currentFilter = evt.target.id;
    cb(getSortedGallery());
  });
};

export const init = (loadedGallery, createGallery) => {
  photos = [...loadedGallery];
  setOnFiltersClick(createGallery);
};
