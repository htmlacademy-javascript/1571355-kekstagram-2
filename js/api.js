import { BASE_URL, ErrorText, Method, Route } from './data.js';

const checkResponse = (response, errorText) => {
  if (!response.ok) {
    throw new Error(errorText);
  }

  return response;
};

const load = (route, errorText, method = Method.GET, body = null) =>
  fetch(`${BASE_URL}${route}`, {method, body})
    .then((response) => checkResponse(response, errorText));

const getData = () => load(Route.GET_DATA, ErrorText.GET_DATA)
  .then((response) => response.json());

const sendData = (body) => load(Route.SEND_DATA, ErrorText.SEND_DATA, Method.POST, body);

export {getData, sendData};
