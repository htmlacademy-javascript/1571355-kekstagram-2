import { containerPhotosElement } from './render-gallery.js';
import { clearComments, commentsLoaderElement, renderComments } from './render-comments.js';
let currentQuantityComments = 0;
let currentComments = [];

const pictureElement = document.querySelector('.big-picture');
const bigPictureImgElement = pictureElement.querySelector('.big-picture__img').querySelector('img');
const likesCountElement = pictureElement.querySelector('.likes-count');
const commentsCaptionElement = pictureElement.querySelector('.social__caption');
const pictureCancelElement = pictureElement.querySelector('.big-picture__cancel');

const cancelClickPicture = () => {
  document.body.classList.remove('modal-open');
  pictureElement.classList.add('hidden');
  pictureCancelElement.removeEventListener('click', cancelClickPicture);
  document.removeEventListener('keydown', onEscKeydown);
  commentsLoaderElement.removeEventListener('click', onCommentsLoaderClick);
};

function onEscKeydown(evt) {
  if (evt.key === 'Escape') {
    cancelClickPicture();
  }
}

const clickPicture = () => {
  document.body.classList.add('modal-open');
  pictureElement.classList.remove('hidden');
  document.addEventListener('keydown', onEscKeydown);
  pictureCancelElement.addEventListener('click', cancelClickPicture);
  commentsLoaderElement.addEventListener('click', onCommentsLoaderClick);
};

function onCommentsLoaderClick() {
  currentQuantityComments = renderComments(currentComments, currentQuantityComments);
}

const openPicture = (photoId, photos) => {
  const currentPhoto = photos.find((item) => item.id === +photoId);
  if (!currentPhoto) {
    return;
  }

  bigPictureImgElement.src = currentPhoto.url;
  likesCountElement.textContent = currentPhoto.likes;
  commentsCaptionElement.textContent = currentPhoto.description;
  clearComments();
  currentQuantityComments = 0;
  currentComments = currentPhoto.comments;

  currentQuantityComments = renderComments(currentComments, currentQuantityComments);

  clickPicture();
};

const renderPhoto = (data) => {
  containerPhotosElement.addEventListener('click', (evt) => {
    const currentPictureElement = evt.target.closest('.picture');
    if (currentPictureElement) {
      evt.preventDefault();
      openPicture(currentPictureElement.dataset.photoId, data);
    }
  });
};

export {renderPhoto};
