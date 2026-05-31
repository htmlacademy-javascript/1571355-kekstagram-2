import { fotos } from './data.js';
import { containerFotosNode } from './gallery.js';

const pictureNode = document.querySelector('.big-picture');
const bigPictureImgNode = pictureNode.querySelector('.big-picture__img').querySelector('img');
const likesCountNode = pictureNode.querySelector('.likes-count');
const socialCommentsNode = pictureNode.querySelector('.social__comments');
const socialCommentTemplate = socialCommentsNode.querySelector('.social__comment');
const commentsCaptionNode = pictureNode.querySelector('.social__caption');
const commentsCountNode = pictureNode.querySelector('.social__comment-count');
const commentsLoaderNode = pictureNode.querySelector('.social__comments-loader');
const pictureCancelNode = pictureNode.querySelector('.big-picture__cancel');

const cancelClickPicture = () => {
  document.body.classList.remove('modal-open');
  pictureNode.classList.add('hidden');
  pictureCancelNode.removeEventListener('click', cancelClickPicture);
  document.removeEventListener('keydown', onEscKeydown);
};

function onEscKeydown(evt) {
  if (evt.key === 'Escape') {
    cancelClickPicture();
  }
}

const clickPicture = () => {
  document.body.classList.add('modal-open');
  pictureNode.classList.remove('hidden');
  document.addEventListener('keydown', onEscKeydown);
  pictureCancelNode.addEventListener('click', cancelClickPicture);
};

const openPicture = (fotoId) => {
  const currentFoto = fotos.find((item) => item.id === +fotoId);
  if (!currentFoto) {
    return;
  }

  const commentsFragment = document.createDocumentFragment();

  bigPictureImgNode.src = currentFoto.url;
  likesCountNode.textContent = currentFoto.likes;
  commentsCaptionNode.textContent = currentFoto.description;
  socialCommentsNode.innerHTML = '';

  currentFoto.comments.forEach((comment) => {
    const commentNode = socialCommentTemplate.cloneNode(true);

    commentNode.querySelector('.social__picture').src = comment.avatar;
    commentNode.querySelector('.social__picture').alt = comment.name;
    commentNode.querySelector('.social__text').textContent = comment.message;

    commentsFragment.appendChild(commentNode);
  });

  socialCommentsNode.appendChild(commentsFragment);
  clickPicture();
  commentsCountNode.classList.add('hidden');
  commentsLoaderNode.classList.add('hidden');
};

containerFotosNode.addEventListener('click', (evt) => {
  const currentPictureNode = evt.target.closest('.picture');
  if (currentPictureNode) {
    evt.preventDefault();
    openPicture(currentPictureNode.dataset.fotoId);
  }
});

