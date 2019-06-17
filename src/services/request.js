// import store from '../store';
// import { getToken } from '../selectors/sessionSelector';

const request = (path, method, body) => {
  return fetch(`${process.env.API_URL}${path}`, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      // Authorization: `Bearer ${getToken(store.getState())}`
    },
    body: body ? JSON.stringify(body) : null
  })
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'failed to post to API';

      return json;
    });
};

export const post = (path, body) => request(path, 'POST', body);
export const get = path => request(path, 'GET');
export const put = (path, body) => request(path, 'PUT', body);
// ----- patch instead of put ---- \\
export const del = path => request(path, 'DELETE');
