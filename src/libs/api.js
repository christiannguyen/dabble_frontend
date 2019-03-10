const axios = require('axios')

export function baseGet(url = '', params = {}) {
  return axios({
    method: 'get',
    url,
    params,
    withCredentials: true
  })
}

export function basePost(url = '', data = {}) {
  return axios({
    method: 'post',
    url,
    data,
    withCredentials: true
  })
}
