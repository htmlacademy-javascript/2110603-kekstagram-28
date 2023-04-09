const SCALE_STEP = 25;
const SCALE_MAX = 100;
const SCALE_MIN = 25;
const SCALE_DEFAULT = 100;
const scaleControl = document.querySelector('.img-upload__scale');
const smallerButton = scaleControl.querySelector('.scale__control--smaller');
const biggerButton = scaleControl.querySelector('.scale__control--bigger');
const scaleValue = scaleControl.querySelector('.scale__control--value');
const imgPreview = document.querySelector('.img-upload__preview img');

const onSmallerButtonClick = () => {
  let newValue = parseInt(scaleValue.value, 10) - SCALE_STEP;
  if (newValue < SCALE_MIN) {
    newValue = SCALE_MIN;
  }
  scaleValue.value = `${newValue}%`;
  imgPreview.style.transform = `scale(${newValue / 100})`;
};

const onBiggerButtonClick = () => {
  let newValue = parseInt(scaleValue.value, 10) + SCALE_STEP;
  if (newValue > SCALE_MAX) {
    newValue = SCALE_MAX;
  }
  scaleValue.value = `${newValue}%`;
  imgPreview.style.transform = `scale(${newValue / 100})`;
};

export const setScale = () => {
  scaleValue.value = `${SCALE_DEFAULT}%`;
  smallerButton.addEventListener('click', onSmallerButtonClick);
  biggerButton.addEventListener('click', onBiggerButtonClick);
};
