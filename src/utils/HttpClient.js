const corsAnywhere = 'https://cors-anywhere.herokuapp.com'
const baseURL = `${corsAnywhere}/https://imdb-api.com`

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