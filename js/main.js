import { getData } from './api.js';
import { DATA_ERROR_SHOW_TIME } from './data.js';
import { renderGallery } from './render-gallery.js';
import { renderPhoto } from './render-photo.js';
import { renderPhotoForm } from './render-photo-form.js';
import { showDataErrorMessage } from './util.js';
import { configFilter }from'./filter.js';

getData()
  .then((dataPhotos) => {
    renderGallery(dataPhotos);
    renderPhoto(dataPhotos);
    configFilter(dataPhotos);
  })
  .catch(() => showDataErrorMessage(DATA_ERROR_SHOW_TIME));

renderPhotoForm();
