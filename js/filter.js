import { renderGallery } from './render-gallery.js';
import { containerPhotosElement } from './render-gallery.js';
import { DEBOUNCE_DELAY, MAX_RANDOM_PHOTOS, ACTIVE } from './data.js';
const filterElement = document.querySelector('.img-filters');
let dataPhotos = [];
let originalPhotos = [];
let filterTimeoutId = null;

function onFilterChange(evt) {
  const targetButton = evt.target.closest('.img-filters__button');
  if (!targetButton || !filterElement.contains(targetButton)) {
    return;
  }

  const activeButton = filterElement.querySelector(`.${ACTIVE}`);
  if (targetButton === activeButton) {
    return;
  }

  activeButton?.classList.remove(ACTIVE);
  targetButton.classList.add(ACTIVE);
  const currentFilterType = targetButton.id;

  clearTimeout(filterTimeoutId);
  filterTimeoutId = setTimeout(() => {
    renderPhotos(currentFilterType);
  }, DEBOUNCE_DELAY);
}

function renderPhotos(filterType) {
  let filteredPhotos = [];
  switch (filterType) {
    case 'filter-default':
      filteredPhotos = originalPhotos;
      break;
    case 'filter-random':
      filteredPhotos = dataPhotos
        .slice()
        .sort(() => 0.5 - Math.random())
        .slice(0, MAX_RANDOM_PHOTOS);
      break;
    case 'filter-discussed':
      filteredPhotos = dataPhotos
        .slice()
        .sort((a, b) => b.comments.length - a.comments.length);
      break;
  }
  const pictures = containerPhotosElement.querySelectorAll('.picture');
  pictures.forEach((p) => p.remove());
  renderGallery(filteredPhotos);
}

function configFilter(data) {
  dataPhotos = data;
  originalPhotos = data.slice();
  filterElement.addEventListener('click', onFilterChange);
  filterElement.classList.remove('img-filters--inactive');
}

export { configFilter };
