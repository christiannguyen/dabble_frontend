const axios = require('axios');

export function baseGet(url = '', data = {}) {
  return axios({
    method: 'get',
    url,
    data,
    withCredentials: true,
  });
};

export function basePost(url = '', data = {}) {
  return axios({
    method: 'post',
    url,
    data,
    withCredentials: true,
  });
};
