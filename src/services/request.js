import { getToken } from '../selectors/sessionSelector';
import store from '../store';
const request = (method, body) => {
  return fetch('http://localhost:7891/api/v1/jobs', {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken(store.getState())}`
    },
    body: body ? JSON.stringify(body) : null
  })
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'failed to post to API';

      return json;
    });
};

export const post = body => request('POST', body);
export const get = () => request('GET');
