// Валидация полей ввода хэштгов и комментария
const MAX_HASHTAG_COUNT = 5;
const MAX_DESCRIPTION_LENGTH = 140;
const HASHTAG_PATTERN = /^#[a-zа-яё0-9]{1,19}$/i;
const ERROR_MESSAGES = [
  'хеш-тег должен начинаться с #, максимальная длина одного хэш-тега 20 символов',
  'один и тот же хэш-тег не может быть использован дважды',
  'нельзя указать больше пяти хэш-тегов',
  'длина комментария не может составлять больше 140 символов'
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


const isUniqueHashtags = (value) => {
  const lowerCaseHashtags = getHashtags(value).map((hashtag) => hashtag.toLowerCase());
  return lowerCaseHashtags.length === new Set(lowerCaseHashtags).size;
};

const isValidHashtagsCount = (value) =>
  getHashtags(value).length <= MAX_HASHTAG_COUNT;

pristine.addValidator(hashtagInput, isValidHashtag, ERROR_MESSAGES[0]);
pristine.addValidator(hashtagInput, isUniqueHashtags, ERROR_MESSAGES[1]);
pristine.addValidator(hashtagInput, isValidHashtagsCount, ERROR_MESSAGES[2]);

const validateDescription = (value) =>
  value.length <= MAX_DESCRIPTION_LENGTH;

pristine.addValidator(descriptionInput, validateDescription, ERROR_MESSAGES[3]);
