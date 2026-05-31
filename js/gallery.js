import {fotos} from './data.js';

const template = document.querySelector('#picture').content.querySelector('.picture');
const containerFotosNode = document.querySelector('.pictures');
const fragment = document.createDocumentFragment();

const createFoto = (foto)=> {
  const cloneTemplateNode = template.cloneNode(true);
  const image = cloneTemplateNode.querySelector('.picture__img');
  image.src = foto.url;
  image.alt = foto.description;
  cloneTemplateNode.querySelector('.picture__likes').textContent = foto.likes;
  cloneTemplateNode.querySelector('.picture__comments').textContent = foto.comments.length;
  cloneTemplateNode.dataset.fotoId = foto.id;
  return cloneTemplateNode;
};

fotos.forEach((foto) => {
  const cloneFoto = createFoto(foto);
  fragment.append(cloneFoto);
});

containerFotosNode.appendChild(fragment);

export {containerFotosNode};
