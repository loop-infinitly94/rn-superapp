// setup axios config for react native application


import axios from 'axios';
import { API_URL } from './constants';
import { getToken } from '../utils/storage';

const apiConfig = axios.create({
  baseURL: API_URL,
  timeout: 10000, // 10 seconds timeout
});

apiConfig.interceptors.request.use(
  async (config) => {
    // You can add any request headers or configurations here
    // For example, adding an authorization token
    // const token = await getToken();
    if (!config.headers) {
      config.headers = {} as import('axios').AxiosRequestHeaders;
    }
    config.headers['Content-Type'] = 'application/json';
    // if(token) {
    //     config.headers.Authorization = `Bearer ${token}`;
    // }
    console.log(config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiConfig.interceptors.response.use(
  (response) => {
    // You can handle the response here if needed
    return response;
  },
  (error) => {
    // Handle errors globally
    if (error.response) {
      // The request was made and the server responded with a status code
      console.error('API Error:', error.response.data);
    } else if (error.request) {
      // The request was made but no response was received
      console.error('API No Response:', error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('API Error Message:', error.message);
    }
    return Promise.reject(error);
  }
);

export default apiConfig;
