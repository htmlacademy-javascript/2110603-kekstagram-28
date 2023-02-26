const commentPatterns = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const commenterNamePatterns = [
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

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

function createIdGenerator (a, b) {
  const previousValues = [];

  return function () {
    let currentValue = 1;
    if (previousValues.length >= (b - a + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue ++;
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}
const createPhotoId = createIdGenerator(1, 25);
const createPhotoUrl = createIdGenerator(1, 25);
const createPhotoIndex = createIdGenerator(1, 25);
const createCommenterId = createIdGenerator(1, 200);

const getRandomElement = (someArray) =>
  someArray[getRandomInteger(0, someArray.length - 1)];

const createCommenter = () => ({
  id: createCommenterId(),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomElement(commentPatterns),
  name: getRandomElement(commenterNamePatterns)
});


const createPhotoContent = () => {
  const randomIntegerForLikes = getRandomInteger(15, 200);
  const commentersList = Array.from({length: getRandomInteger(1, 20)}, createCommenter);
  const createPhotoFile = {
    id: createPhotoId(),
    url: `photos/${createPhotoUrl()}.jpg`,
    description: `Ваша загруженная фотография №${createPhotoIndex()}`,
    likes: randomIntegerForLikes,
    comments: commentersList
  };
  return createPhotoFile;
};
console.log(Array.from({length: 25}, createPhotoContent));
