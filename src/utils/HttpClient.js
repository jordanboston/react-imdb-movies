const baseURL = 'https://imdb-api.com'

function get(path, params) {
  const url = baseURL + path
  return sendRequest(url, params);
}

async function sendRequest(url, params = null, method = 'GET') {
  const config = {
    method: method,
    redirect: 'follow',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'mode': 'no-cors'
    }
  };

  if (method !== 'GET') {
    config['body'] = JSON.stringify(params)
  }
  return fetch(url, config).then((response) => response.json());
}

export default {
  get
}