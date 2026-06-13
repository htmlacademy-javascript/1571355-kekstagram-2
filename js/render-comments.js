import { RANGE_STEP } from './data.js';

const pictureElement = document.querySelector('.big-picture');
const socialCommentsElement = pictureElement.querySelector('.social__comments');
const socialCommentTemplate = socialCommentsElement.querySelector('.social__comment');
const commentsCountElement = pictureElement.querySelector('.social__comment-count');
const commentsLoaderElement = pictureElement.querySelector('.social__comments-loader');

const clearComments = () => {
  socialCommentsElement.innerHTML = '';
};

const renderComments = (comments, renderedCommentsCount) => {
  const commentsFragment = document.createDocumentFragment();
  const commentsToRender = comments.slice(renderedCommentsCount, renderedCommentsCount + RANGE_STEP);

  commentsToRender.forEach((comment) => {
    const commentElement = socialCommentTemplate.cloneNode(true);

    commentElement.querySelector('.social__picture').src = comment.avatar;
    commentElement.querySelector('.social__picture').alt = comment.name;
    commentElement.querySelector('.social__text').textContent = comment.message;

    commentsFragment.appendChild(commentElement);
  });

  socialCommentsElement.appendChild(commentsFragment);

  const currentCommentsCount = renderedCommentsCount + commentsToRender.length;

  commentsCountElement.querySelector('.social__comment-shown-count').textContent = currentCommentsCount;
  commentsCountElement.querySelector('.social__comment-total-count').textContent = comments.length;
  commentsLoaderElement.classList.toggle('hidden', currentCommentsCount >= comments.length);

  return currentCommentsCount;
};

export { clearComments, commentsLoaderElement, renderComments };
