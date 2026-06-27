const templateElement = document.querySelector('#picture').content.querySelector('.picture');
const containerPhotosElement = document.querySelector('.pictures');

const createPhoto = (photo) => {
  const cloneTemplateElement = templateElement.cloneNode(true);
  const image = cloneTemplateElement.querySelector('.picture__img');
  image.src = photo.url;
  image.alt = photo.description;
  cloneTemplateElement.querySelector('.picture__likes').textContent = photo.likes;
  cloneTemplateElement.querySelector('.picture__comments').textContent = photo.comments.length;
  cloneTemplateElement.dataset.photoId = photo.id;
  return cloneTemplateElement;
};

const renderGallery = (photos) => {
  const fragment = document.createDocumentFragment();
  photos.forEach((photo) => {
    const clonePhoto = createPhoto(photo);
    fragment.append(clonePhoto);
  });
  return containerPhotosElement.appendChild(fragment);
};

export {renderGallery, containerPhotosElement};
