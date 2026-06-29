const dataErrorTemplateElement = document.querySelector('#data-error').content.querySelector('.data-error');

const showDataErrorMessage = (showTime) => {
  const dataErrorElement = dataErrorTemplateElement.cloneNode(true);

  document.body.append(dataErrorElement);

  setTimeout(() => {
    dataErrorElement.remove();
  }, showTime);
};

export {showDataErrorMessage};
