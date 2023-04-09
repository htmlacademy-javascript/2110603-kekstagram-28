const EFFECTS_DATA = [
  {
    name: 'none',
    filter: 'none',
    min: 0,
    max: 100,
    step: 1,
    unit: ''
  },
  {
    name: 'chrome',
    filter: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: ''
  },
  {
    name: 'sepia',
    filter: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: ''
  },
  {
    name: 'marvin',
    filter: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%'
  },
  {
    name: 'phobos',
    filter: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px'
  },
  {
    name: 'heat',
    filter: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: ''
  }
];

const defaultData = EFFECTS_DATA[0];
const imgUploadForm = document.querySelector('.img-upload__form');
const imgPreview = imgUploadForm.querySelector('.img-upload__preview img');
export const sliderContainer = imgUploadForm.querySelector('.img-upload__effect-level');
const slider = sliderContainer.querySelector('.effect-level__slider');
const effectLevelValue = sliderContainer.querySelector('.effect-level__value');
const effectsContainer = imgUploadForm.querySelector('.img-upload__effects');

effectLevelValue.value = 0;

let currentData = defaultData;

const showSlider = () => {
  slider.removeAttribute('disabled');
  sliderContainer.classList.remove('visually-hidden');
};

const hideSlider = () => {
  slider.setAttribute('disabled', true);
  sliderContainer.classList.add('visually-hidden');
};

noUiSlider.create(slider, {
  range: {
    min: defaultData.min,
    max: defaultData.max,
  },
  start: defaultData.max,
  step: defaultData.step,
});
hideSlider();

const sliderChange = () => {
  slider.noUiSlider.updateOptions({
    range: {
      min: currentData.min,
      max: currentData.max,
    },
    start: currentData.max,
    step: currentData.step
  });
  return (currentData !== defaultData)
    ? showSlider()
    : hideSlider();
};

const onPreviewEffectCreate = () => {
  if (currentData === defaultData) {
    imgPreview.style.filter = defaultData.filter;
  }
  imgPreview.style.filter = `${currentData.filter}(${slider.noUiSlider.get()}${currentData.unit})`;
  effectLevelValue.value = slider.noUiSlider.get();
};

slider.noUiSlider.on('update', onPreviewEffectCreate);

const onImgPreviewClassName = (evt) => {
  if (evt.target.closest('.effects__radio')) {
    currentData = EFFECTS_DATA.find((effectData) => effectData.name === evt.target.value);
    imgPreview.className = `effects__preview--${currentData.name}`;
    sliderChange();
  }
};

effectsContainer.addEventListener('change', onImgPreviewClassName);

export const resetEffects = () => {
  currentData = defaultData;
  sliderChange();
};
