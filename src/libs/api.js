const axios = require('axios');

export function baseGet(url = '', params = {}) {
  return axios({
    method: 'get',
    url,
    data: params,
    withCredentials: true,
  });
};

export function basePost(url = '', params = {}) {
  return axios({
    method: 'post',
    url,
    data: params,
    withCredentials: true,
  });
};
