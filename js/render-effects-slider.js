import { uploadFormElement } from './render-photo-form.js';
import { EFFECTS } from './data.js';

const effectLevelElement = uploadFormElement.querySelector('.img-upload__effect-level');
const effectValueElement = uploadFormElement.querySelector('.effect-level__value');
const sliderElement = uploadFormElement.querySelector('.effect-level__slider');
const imgElement = uploadFormElement.querySelector('.img-upload__preview img');


noUiSlider.create(sliderElement, {
  start: EFFECTS.chrome.start,
  connect: 'lower',
  range: EFFECTS.chrome.range,
  step: EFFECTS.chrome.step,
  format: {
    to: (value) => value.toString(),
    from: (value) => parseFloat(value),
  },
});

const updateEffectValue = (value) => {
  effectValueElement.value = value;
};

const updateImageFilter = (effectName, value) => {
  const effect = EFFECTS[effectName];

  if (!effect || effectName === 'none') {
    imgElement.style.filter = '';
    return;
  }

  imgElement.style.filter = effect.filter(value);
};

const updateSliderOptions = (effectName) => {
  const effect = EFFECTS[effectName];

  sliderElement.noUiSlider.updateOptions({
    range: effect.range,
    step: effect.step,
  });

  sliderElement.noUiSlider.set(effect.start);
};

const setEffect = (effectName) => {
  const effect = EFFECTS[effectName];

  if (!effect) {
    return;
  }

  effectLevelElement.classList.toggle('hidden', !effect.visible);

  if (!effect.visible) {
    effectValueElement.value = '';
    imgElement.style.filter = '';
    return;
  }

  updateSliderOptions(effectName);
  updateEffectValue(effect.start);
  updateImageFilter(effectName, effect.start);
};

const onSliderUpdate = () => {
  const activeEffect = uploadFormElement.querySelector('.effects__radio:checked').value;
  const value = sliderElement.noUiSlider.get();

  updateEffectValue(value);
  updateImageFilter(activeEffect, value);
};

const onEffectChange = (evt) => {
  if (evt.target.classList.contains('effects__radio')) {
    const effectName = evt.target.value;
    setEffect(effectName);
  }
};
const renderEffectsSlider = () => {
  sliderElement.noUiSlider.on('update', onSliderUpdate);
  uploadFormElement.addEventListener('change', onEffectChange);
  setEffect('none');
};

export { renderEffectsSlider };


