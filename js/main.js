const comment = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце-концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как-будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const descriptions = [
  'Отель Eden и пляж Mulini в Ровине, Хорватия',
  'Деревянный указатель к пляжу',
  'Вид на остров Тачай, расположенный в Таиланде',
  'Бикини цвета хаки',
  'Японская еда, оформленная в стиле «кярабэн',
  'McLaren P1, гибридный гиперкар',
  'Тарелка с клубникой',
  'Кисель — традиционный для славянских стран десерт ',
  'Пляж Махо на острове Сен-Мартен',
  'Роликовый органайзер для обуви под кровать',
  'Песчаный путь',
  'Audi RS5 Coupe',
  'Лосось,в фольге с овощами',
  'Суши кошка',
  'Тапочки  которые издают звуки робота при ходьбе',
  'Вид из самолета на высокогорную местность',
  'Хор на сцене во время выступления',
  'Автомобиль AMT 1964 Chevrolet Impala SS',
  'Светодиодные домашние тапочки — Bright Feet',
  'Курорт Long Beach Mauritius',
  'Тайскую курица в арахисовом соусе',
  'Закат на морском побережье',
  'Коричневый наземный краб',
  'Концерт Linkin Park,',
  'Внедорожник Land Rover Defender',
];

const names = ['Николай', 'Дмитрий', 'Василий', 'Харитон', 'Алексей', 'София'];

const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (array) =>
  array[getRandomPositiveInteger(0, array.length - 1)];

const createMessage = () => {
  const arr = [];
  for (let i = 1; i <= getRandomPositiveInteger(1, 2); i++) {
    arr.push(getRandomArrayElement(comment));
  }
  return arr.join(' ');
};

const createComment = (index) => ({
  id: index,
  avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(names),
});

const createArrayComments = () => {
  const arr = [];
  for (let i = 1; i <= getRandomPositiveInteger(0, 30); i++) {
    arr.push(createComment(i));
  }
  return arr;
};

const createPictureItem = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(descriptions),
  likes: getRandomPositiveInteger(15, 200),
  comments: createArrayComments()
});

const createArrayPictures = () => {
  const arr = [];
  for (let i = 1; i <= 25; i++) {
    arr.push(createPictureItem(i));
  }
  return arr;
};

createArrayPictures();
