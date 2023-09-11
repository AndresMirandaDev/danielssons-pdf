import { create } from 'apisauce';
import authStorage from '../auth/storage';

const apiClient = create({
  // baseURL: 'http://192.168.3.4:3000/api',
  // baseURL: 'https://backdaniel-3-z9797916.deta.app/api',
  baseURL: 'https://danielssonsbck-1-d7461734.deta.app/api',
});

const get = apiClient.get;

apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = await authStorage.getToken();
  if (!authToken) return;

  request.headers['x-auth-token'] = authToken;
});

export default apiClient;
