import {getRandomArrayItem, getRandomInteger} from './util.js';

const RANGE_STEP = 5;

const QUANTITY_PICTURES = 25;

const comments = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках, и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре, уронил фотоаппарат на кота, и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const descriptions = [
  'Отель Eden и пляж Mulini в Ровине, Хорватия',
  'Деревянный указатель к пляжу',
  'Вид на остров Тачай, расположенный в Таиланде',
  'Бикини цвета хаки',
  'Японская еда, оформленная в стиле «кярабэн»',
  'McLaren P1, гибридный гиперкар',
  'Тарелка с клубникой',
  'Кисель — традиционный для славянских стран десерт',
  'Пляж Махо на острове Сен-Мартен',
  'Роликовый органайзер для обуви под кроватью',
  'Песчаный путь',
  'Audi RS5 Coupe',
  'Лосось в фольге с овощами',
  'Суши-кошка',
  'Тапочки, которые издают звуки робота при ходьбе',
  'Вид из самолёта на высокогорную местность',
  'Хор на сцене во время выступления',
  'Автомобиль AMT 1964 Chevrolet Impala SS',
  'Светодиодные домашние тапочки — Bright Feet',
  'Курорт Long Beach Mauritius',
  'Тайская курица в арахисовом соусе',
  'Закат на морском побережье',
  'Коричневый наземный краб',
  'Концерт Linkin Park',
  'Внедорожник Land Rover Defender',
];

const names = [
  'Николай',
  'Дмитрий',
  'Василий',
  'Харитон',
  'Алексей',
  'София',
];

const MessageRange = {
  MIN: 1,
  MAX: 2,
};

const AvatarRange = {
  MIN: 1,
  MAX: 6,
};

const CommentRange = {
  MIN: 0,
  MAX: 30,
};

const createMessage = (commentList) => {
  const messageCount = getRandomInteger(MessageRange.MIN, MessageRange.MAX);
  return Array.from({ length: messageCount },() => getRandomArrayItem(commentList)).join('');
};

const createComment = (index) => ({
  id: index,
  avatar: `img/avatar-${getRandomInteger(AvatarRange.MIN, AvatarRange.MAX)}.svg`,
  message: createMessage(comments),
  name: getRandomArrayItem(names),
});

const createComments = () => {
  const CommentCount = getRandomInteger(CommentRange.MIN, CommentRange.MAX);
  return Array.from({ length: CommentCount },(_, index) => createComment(index + 1));
};

const createPictureItem = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: descriptions[index - 1],
  likes: getRandomInteger(15, 200),
  comments: createComments(),
});

const createArrayPictures = () =>
  Array.from({ length: QUANTITY_PICTURES }, (_, pictureIndex) =>
    createPictureItem(pictureIndex + 1)
  );


export {createArrayPictures, RANGE_STEP };
