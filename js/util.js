const dataErrorTemplateElement = document.querySelector('#data-error').content.querySelector('.data-error');

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayItem = (array) =>
  array[getRandomInteger(0, array.length - 1)];

const showDataErrorMessage = (showTime) => {
  const dataErrorElement = dataErrorTemplateElement.cloneNode(true);

  document.body.append(dataErrorElement);

  setTimeout(() => {
    dataErrorElement.remove();
  }, showTime);
};

export {getRandomInteger, getRandomArrayItem, showDataErrorMessage};
