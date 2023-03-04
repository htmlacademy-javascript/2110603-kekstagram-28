import {getRandomInteger, createIdGenerator, getRandomElement} from './util.js';

const PHOTO_MAX_COUNT = 25;
const COMMENTER_MAX_COUNT = 200;
const COMMENTS_COUNT = 20;
const AVATAR_MAX_COUNT = 6;
const LIKES_MIN_COUNT = 15;
const LIKES_MAX_COUNT = 200;
const COMMENT_PATTERNS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const COMMENTER_NAME_PATTERNS = [
  'Гарфилд',
  'Том',
  'Гудвин',
  'Рокки',
  'Пушок',
  'Бегемот',
  'Альбус',
  'Базилио',
  'Леопольд',
  'Нарцисс',
  'Атос',
  'Каспер',
  'Валли'
];

const createPhotoId = createIdGenerator(1, PHOTO_MAX_COUNT);
const createPhotoUrl = createIdGenerator(1, PHOTO_MAX_COUNT);
const createPhotoIndex = createIdGenerator(1, PHOTO_MAX_COUNT);
const createCommenterId = createIdGenerator(1, COMMENTER_MAX_COUNT);

const createCommenter = () => ({
  id: createCommenterId(),
  avatar: `img/avatar-${getRandomInteger(1, AVATAR_MAX_COUNT)}.svg`,
  message: getRandomElement(COMMENT_PATTERNS),
  name: getRandomElement(COMMENTER_NAME_PATTERNS)
});

const createPhotoContent = () => Array.from({length: PHOTO_MAX_COUNT},() => ({
  id: createPhotoId(),
  url: `photos/${createPhotoUrl()}.jpg`,
  description: `Ваша загруженная фотография №${createPhotoIndex()}`,
  likes: getRandomInteger(LIKES_MIN_COUNT, LIKES_MAX_COUNT),
  comments: Array.from({length: getRandomInteger(1, COMMENTS_COUNT)}, createCommenter)
})
);

export {createPhotoContent};
