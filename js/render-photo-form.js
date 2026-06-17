import {MAX_HASHTAGS_COUNT, MAX_HASHTAG_LENGTH, MAX_COMMENT_LENGTH, HASHTAG_SYMBOLS_REGEXP, RANGE_SCALE} from './data.js';
import { renderSlider, destroySlider } from './render-slider.js';
let scale = 1;

const uploadFormElement = document.querySelector('.img-upload__form');
const pageBodyElement = document.querySelector('body');

const uploadFileControlElement = uploadFormElement.querySelector('.img-upload__input');
const photoEditorFormElement = uploadFormElement.querySelector('.img-upload__overlay');
const photoEditorResetBtnElement = uploadFormElement.querySelector('.img-upload__cancel');

const hashtagInputElement = uploadFormElement.querySelector('.text__hashtags');
const commentInputElement = uploadFormElement.querySelector('.text__description');

const imgElement = uploadFormElement.querySelector('.img-upload__preview img');
const scaleSmallerElement = uploadFormElement.querySelector('.scale__control--smaller');
const scaleBiggerElement = uploadFormElement.querySelector('.scale__control--bigger');
const scaleControlElement = uploadFormElement.querySelector('.scale__control--value');

const onBiggerClick = () => {
  if(scale < 1) {
    scale += RANGE_SCALE;
    imgElement.style.transform = `scale(${scale})`;
    scaleControlElement.value = `${scale * 100}%`;
  }
};

const onSmallerClick = () => {
  if(scale > RANGE_SCALE) {
    scale -= RANGE_SCALE;
    imgElement.style.transform = `scale(${scale})`;
    scaleControlElement.value = `${scale * 100}%`;
  }
};


function closePhotoEditor () {
  photoEditorFormElement.classList.add('hidden');
  pageBodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  photoEditorResetBtnElement.removeEventListener('click', onPhotoEditorResetBtnClick);
  scaleBiggerElement.removeEventListener('click', onBiggerClick);
  scaleSmallerElement.removeEventListener('click', onSmallerClick);
  destroySlider();
  uploadFileControlElement.value = '';
}

function onPhotoEditorResetBtnClick () {
  closePhotoEditor();
}

function onDocumentKeydown (evt) {
  if (
    evt.key === 'Escape' &&
    document.activeElement !== hashtagInputElement &&
    document.activeElement !== commentInputElement
  ) {
    closePhotoEditor();
  }
}
const renderPhotoForm = () => {
  uploadFileControlElement.addEventListener('change', () => {
    renderSlider();
    photoEditorFormElement.classList.remove('hidden');
    pageBodyElement.classList.add('modal-open');
    photoEditorResetBtnElement.addEventListener('click', onPhotoEditorResetBtnClick);
    document.addEventListener('keydown', onDocumentKeydown);
    scaleBiggerElement.addEventListener('click', onBiggerClick);
    scaleSmallerElement.addEventListener('click', onSmallerClick);
  });
};
const pristine = new Pristine(uploadFormElement, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error',
});

const empty = (value) => value.trim().length === 0;

pristine.addValidator(hashtagInputElement, (value) => {
  if (empty(value)) {
    return true;
  }

  const hashtags = value.trim().split(/\s+/);
  return hashtags.every((hashtag) => hashtag.startsWith('#'));
}, 'Хэштег должен начинаться с символа #', 6, true);

pristine.addValidator(hashtagInputElement, (value) => {
  if (empty(value)) {
    return true;
  }

  const hashtags = value.trim().split(/\s+/);
  return hashtags.every((hashtag) => hashtag !== '#');
}, 'Хэштег не может состоять только из одной решётки', 5, true);

pristine.addValidator(hashtagInputElement, (value) => {
  if (empty(value)) {
    return true;
  }

  const hashtags = value.trim().split(/\s+/);
  return hashtags.every((hashtag) => !hashtag.slice(1).includes('#'));
}, 'Хэштеги должны быть разделены пробелами', 4, true);

pristine.addValidator(hashtagInputElement, (value) => {
  if (empty(value)) {
    return true;
  }

  const hashtags = value.trim().split(/\s+/);
  return hashtags.every((hashtag) => HASHTAG_SYMBOLS_REGEXP.test(hashtag));
}, 'Хэштег может содержать только буквы и цифры', 3, true);

pristine.addValidator(hashtagInputElement, (value) => {
  if (empty(value)) {
    return true;
  }

  const hashtags = value.trim().split(/\s+/);
  return hashtags.every((hashtag) => hashtag.length <= MAX_HASHTAG_LENGTH);
}, 'Максимальная длина хэштега 20 символов', 2, true);

pristine.addValidator(hashtagInputElement, (value) => {
  if (empty(value)) {
    return true;
  }

  const hashtags = value.trim().split(/\s+/).map((hashtag) => hashtag.toLowerCase());
  return hashtags.length === new Set(hashtags).size;
}, 'Один и тот же хэштег нельзя использовать дважды', 1, true);

pristine.addValidator(hashtagInputElement, (value) => {
  if (empty(value)) {
    return true;
  }

  const hashtags = value.trim().split(/\s+/);
  return hashtags.length <= MAX_HASHTAGS_COUNT;
}, 'Нельзя указывать больше 5 хэштегов');

pristine.addValidator(commentInputElement, (value) => value.length <= MAX_COMMENT_LENGTH, 'Длина комментария не может быть больше 140 символов');

uploadFormElement.addEventListener('submit', (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
});

export { renderPhotoForm };
