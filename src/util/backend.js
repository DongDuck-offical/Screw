import axios from 'axios';

const setupToken = (config) => {
  const accessToken = localStorage.getItem('accessToken');
  if (!accessToken) {
    return config;
  }
  return {
    ...config,
    headers: {
      ...config?.headers,
      Authorization: `Bearer ${accessToken}`,
    },
  };
};

const backend = {
  get(url, config) {
    return axios.get('http://localhost:5000' + url, setupToken(config));
  },
  post(url, data, config) {
    return axios.get('http://localhost:5000' + url, data, setupToken(config));
  },
  put(url, data, config) {
    return axios.get('http://localhost:5000' + url, data, setupToken(config));
  },
  patch(url, data, config) {
    return axios.get('http://localhost:5000' + url, data, setupToken(config));
  },
  delete(url, config) {
    return axios.get('http://localhost:5000' + url, setupToken(config));
  },
};

export default backend;
