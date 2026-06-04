import { createArrayPictures } from './data.js';
import { renderGallery } from './render-gallery.js';
import { renderPhoto } from './render-foto.js';

const dataPhotos = createArrayPictures();

renderGallery(dataPhotos);
renderPhoto(dataPhotos);
