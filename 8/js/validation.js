// Валидация полей ввода хэштгов и комментария
const MAX_HASHTAG_COUNT = 5;
const MAX_HASHTAG_LENGTH = 20;
const MIN_HASHTAG_LENGTH = 1;
const MAX_DESCRIPTION_LENGTH = 140;
const HASHTAG_PATTERN = /[a-zа-яё0-9]$/i;
const HASHTAG_START_PATTERN = /^#/;
const ERROR_MESSAGES = [
  'используйте только #, буквы и цифры',
  'максимальная длина одного хэш-тега 20 символов',
  'один и тот же хэш-тег не может быть использован дважды',
  'нельзя указать больше пяти хэш-тегов',
  'длина комментария не может составлять больше 140 символов',
  'начинайте с #',
  'хэш-тег должен содержать хотя бы 1 символ после #'
];

const imgUploadForm = document.querySelector('.img-upload__form');
export const hashtagInput = imgUploadForm.querySelector('.text__hashtags');
export const descriptionInput = imgUploadForm.querySelector('.text__description');

export const pristine = new Pristine(imgUploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'p',
  errorTextClass: 'text__help',
});

const getHashtags = (str) => str.trim().split(' ');


const isValidHashtag = (value) =>
  getHashtags(value).every((hashtag) => HASHTAG_PATTERN.test(hashtag));

const isHashtagHasHash = (value) =>
  getHashtags(value).every((hashtag) => HASHTAG_START_PATTERN.test(hashtag));

const isHashtagNotShort = (value) =>
  getHashtags(value).every((hashtag) => hashtag.length > MIN_HASHTAG_LENGTH);


const isHashtagNotLong = (value) =>
  getHashtags(value).every((hashtag) => hashtag.length <= MAX_HASHTAG_LENGTH);


const isUniqueHashtags = (value) => {
  const lowerCaseHashtags = getHashtags(value).map((hashtag) => hashtag.toLowerCase());
  return lowerCaseHashtags.length === new Set(lowerCaseHashtags).size;
};

const isValidHashtagsCount = (value) =>
  getHashtags(value).length <= MAX_HASHTAG_COUNT;

const isValidDescription = (value) =>
  value.length <= MAX_DESCRIPTION_LENGTH;

pristine.addValidator(hashtagInput, isValidHashtag, ERROR_MESSAGES[0]);
pristine.addValidator(hashtagInput, isHashtagNotLong, ERROR_MESSAGES[1]);
pristine.addValidator(hashtagInput, isUniqueHashtags, ERROR_MESSAGES[2]);
pristine.addValidator(hashtagInput, isValidHashtagsCount, ERROR_MESSAGES[3]);
pristine.addValidator(descriptionInput, isValidDescription, ERROR_MESSAGES[4]);
pristine.addValidator(hashtagInput, isHashtagHasHash, ERROR_MESSAGES[5]);
pristine.addValidator(hashtagInput, isHashtagNotShort, ERROR_MESSAGES[6]);

