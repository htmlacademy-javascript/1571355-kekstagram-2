import { containerPhotosElement } from './render-gallery.js';
import { RANGE_STEP } from './data.js';
let currentQuantityComments = 0;
let currentComments = [];

const pictureElement = document.querySelector('.big-picture');
const bigPictureImgElement = pictureElement.querySelector('.big-picture__img').querySelector('img');
const likesCountElement = pictureElement.querySelector('.likes-count');
const socialCommentsElement = pictureElement.querySelector('.social__comments');
const socialCommentTemplate = socialCommentsElement.querySelector('.social__comment');
const commentsCaptionElement = pictureElement.querySelector('.social__caption');
const commentsCountElement = pictureElement.querySelector('.social__comment-count');
const commentsLoaderElement = pictureElement.querySelector('.social__comments-loader');
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

const renderComments = () => {
  const commentsFragment = document.createDocumentFragment();
  const quantityComments = currentComments.slice(currentQuantityComments, currentQuantityComments + RANGE_STEP);

  quantityComments.forEach((comment) => {
    const commentElement = socialCommentTemplate.cloneNode(true);

    commentElement.querySelector('.social__picture').src = comment.avatar;
    commentElement.querySelector('.social__picture').alt = comment.name;
    commentElement.querySelector('.social__text').textContent = comment.message;

    commentsFragment.appendChild(commentElement);
  });

  socialCommentsElement.appendChild(commentsFragment);
  currentQuantityComments += quantityComments.length;

  commentsCountElement.querySelector('.social__comment-shown-count').textContent = currentQuantityComments;
  commentsCountElement.querySelector('.social__comment-total-count').textContent = currentComments.length;
  commentsLoaderElement.classList.toggle('hidden', currentQuantityComments >= currentComments.length);
};

function onCommentsLoaderClick() {
  renderComments();
}

const openPicture = (photoId, photos) => {
  const currentPhoto = photos.find((item) => item.id === +photoId);
  if (!currentPhoto) {
    return;
  }

  bigPictureImgElement.src = currentPhoto.url;
  likesCountElement.textContent = currentPhoto.likes;
  commentsCaptionElement.textContent = currentPhoto.description;
  socialCommentsElement.innerHTML = '';
  currentQuantityComments = 0;
  currentComments = currentPhoto.comments;

  renderComments();

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
