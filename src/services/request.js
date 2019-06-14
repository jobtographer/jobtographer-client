const request = (method, body) => {
  return fetch('http://localhost:7891/api/v1/jobs', {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
  })
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'failed to post to API';

      return json;
    });
};

export const post = body => request('POST', body);
export const get = () => request('GET');
