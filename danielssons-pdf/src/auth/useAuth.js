import { useContext } from 'react';
import AuthContext from './context';
import jwtDecode from 'jwt-decode';

const useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logIn = (authToken) => {
    const user = jwtDecode(authToken);
    setUser(user);
  };

  const logOut = () => {
    setUser(null);
  };

  return { user, logIn, logOut };
};

export default useAuth;
