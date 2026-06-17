import { createArrayPictures } from './data.js';
import { renderGallery } from './render-gallery.js';
import { renderPhoto } from './render-photo.js';
import { renderPhotoForm } from'./render-photo-form.js';

const dataPhotos = createArrayPictures();

renderGallery(dataPhotos);
renderPhoto(dataPhotos);
renderPhotoForm();
