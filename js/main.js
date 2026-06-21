import { renderGallery } from './render-gallery.js';
import { renderPhoto } from './render-photo.js';
import { renderPhotoForm } from './render-photo-form.js';
import { getData } from './get-server-data.js';

getData().then((dataPhotos) => {
  renderGallery(dataPhotos);
  renderPhoto(dataPhotos);
});

renderPhotoForm();
