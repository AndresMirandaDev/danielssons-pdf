import jwtDecode from 'jwt-decode';
const key = 'authToken';

const storeToken = (authToken) => {
  try {
    sessionStorage.setItem(key, authToken);
  } catch (error) {
    console.log('Error storing the auth token.', error);
  }
};

const getToken = () => {
  try {
    const authToken = sessionStorage.getItem(key);
    return authToken;
  } catch (error) {
    console.log('Error getting the auth token. ', error);
  }
};

const getUser = () => {
  const token = getToken();
  if (token) return jwtDecode(token);
  return;
};

const removeToken = () => {
  try {
    sessionStorage.removeItem(key);
  } catch (error) {
    console.log('Error removing the auth token.', error);
  }
};

export default {
  storeToken,
  getUser,
  removeToken,
  getToken,
};
