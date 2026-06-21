const template = document.querySelector('#data-error');

function showDataErrorMessage() {
  if (!template) {
    return;
  }
  const errorElement = template.content.cloneNode(true);
  document.body.append(errorElement);

  setTimeout(() => {
    const insertedError = document.querySelector('.data-error');
    insertedError?.remove();
  }, 5000);
}

function getData() {
  return fetch('https://31.javascript.htmlacademy.pro/kekstagram/data')
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Ошибка запроса: ${response.status}`);
      }
      return response.json();
    })
    .catch(() => {
      showDataErrorMessage();
      return [];
    });
}


export { getData };
