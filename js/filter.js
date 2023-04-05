// Доступные фильтры:

// «По умолчанию» — фотографии в изначальном порядке с сервера;
// «Случайные» — 10 случайных, не повторяющихся фотографий;
// «Обсуждаемые» — фотографии, отсортированные в порядке убывания количества комментариев.
// 5.2. Блок, с помощью которого производится фильтрация фотографий, скрыт изначально
//  и показывается только после получения от сервера данных об изображениях других пользователей.

// 5.3. При переключении фильтров, отрисовка изображений, подходящих под новый фильтр,
// должна производиться не чаще, чем один раз 500 мс (устранение дребезга).

import {getRandomUniqueArray} from './util.js';
const RANDOM_PHOTOS_COUNT = 10;
const filtersButtonContainer = document.querySelector('.img-filters__form');
//const filterButtons = filtersButtonContainer.querySelectorAll('.img-filters__button');


filtersButtonContainer.addEventListener('click', (evt) => {
  for (let i = 0; i < filtersButtonContainer.children.length; i++) {
    filtersButtonContainer.children[i].classList.remove('img-filters__button--active');
  }
  evt.target.classList.add('img-filters__button--active');
  // console.log(evt.target);

});

// «Случайные» — 10 случайных, не повторяющихся фотографий;


export const createRandomGallery = (gallery) => {
  const randGallery = getRandomUniqueArray(gallery, RANDOM_PHOTOS_COUNT);
  // console.log(gallery);
  // console.log(randGallery);
  return randGallery;
};
