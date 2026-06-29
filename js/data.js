const Effects = {
  NONE: {
    filter: () => '',
    range: {min: 0, max: 1},
    step: 0.1,
    start: 1,
    unit: '',
    visible: false,
  },
  CHROME: {
    filter: (value) => `grayscale(${value})`,
    range: {min: 0, max: 1},
    step: 0.1,
    start: 1,
    unit: '',
    visible: true,
  },
  SEPIA: {
    filter: (value) => `sepia(${value})`,
    range: {min: 0, max: 1},
    step: 0.1,
    start: 1,
    unit: '',
    visible: true,
  },
  MARVIN: {
    filter: (value) => `invert(${value}%)`,
    range: {min: 0, max: 100},
    step: 1,
    start: 100,
    unit: '%',
    visible: true,
  },
  PHOBOS: {
    filter: (value) => `blur(${value}px)`,
    range: {min: 0, max: 3},
    step: 0.1,
    start: 3,
    unit: 'px',
    visible: true,
  },
  HEAT: {
    filter: (value) => `brightness(${value})`,
    range: {min: 1, max: 3},
    step: 0.1,
    start: 3,
    unit: '',
    visible: true,
  },
};

const MAX_HASHTAGS_COUNT = 5;
const MAX_HASHTAG_LENGTH = 20;
const MAX_COMMENT_LENGTH = 140;
const HASHTAG_SYMBOLS_REGEXP = /^#[a-zа-яё0-9]+$/i;
const RANGE_SCALE = 0.25;
const DEFAULT_SCALE = 1;
const FILE_TYPES = ['.jpg', '.jpeg', '.png'];
const DEFAULT_PREVIEW_SRC = 'img/upload-default-image.jpg';
const DATA_ERROR_SHOW_TIME = 5000;
const BASE_URL = 'https://31.javascript.htmlacademy.pro/kekstagram';

const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

const Method = {
  GET: 'GET',
  POST: 'POST',
};

const ErrorText = {
  GET_DATA: 'Не удалось загрузить данные',
  SEND_DATA: 'Не удалось отправить форму',
};

const RANGE_STEP = 5;

const DEBOUNCE_DELAY = 500;
const MAX_RANDOM_PHOTOS = 10;
const ACTIVE = 'img-filters__button--active';

export {RANGE_STEP, MAX_HASHTAGS_COUNT, MAX_HASHTAG_LENGTH, MAX_COMMENT_LENGTH, HASHTAG_SYMBOLS_REGEXP, Effects, RANGE_SCALE, DEFAULT_SCALE, FILE_TYPES, DEFAULT_PREVIEW_SRC, DATA_ERROR_SHOW_TIME, BASE_URL, Route, Method, ErrorText, DEBOUNCE_DELAY, MAX_RANDOM_PHOTOS, ACTIVE };
