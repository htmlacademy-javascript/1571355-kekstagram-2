import {createArrayPictures} from './data.js';

const template = document.querySelector('#picture').content.querySelector('.picture');
const container = document.querySelector('.pictures');
const fotos = createArrayPictures();

const createFoto = (foto)=> {
  const cloneTemplate = template.cloneNode(true);
  const image = cloneTemplate.querySelector('.picture__img');
  image.src = foto.url;
  image.alt = foto.description;
  cloneTemplate.querySelector('.picture__likes').textContent = foto.likes;
  cloneTemplate.querySelector('.picture__comments').textContent = foto.comments.length;
  return cloneTemplate;
};
const fragment = document.createDocumentFragment();

fotos.forEach((foto) => {
  const cloneFoto = createFoto(foto);
  fragment.append(cloneFoto);
});

container.appendChild(fragment);
