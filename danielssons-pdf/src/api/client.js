import { create } from 'apisauce';

const apiClient = create({
  // baseURL: 'http://192.168.3.4:3000/api',
  // baseURL: 'https://backdaniel-3-z9797916.deta.app/api',
  baseURL: 'https://danielssonsbck-1-d7461734.deta.app/api',
});

const get = apiClient.get;

export default apiClient;
