import { PropsWithChildren, useReducer } from 'react';
import authReducer from './reducers/authReducer';
import AuthContext from './contexts/authContext';

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, dispatch] = useReducer(authReducer, '');

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
