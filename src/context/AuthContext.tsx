import React, { createContext, useCallback } from 'react';

import { api } from '../services/api';

interface ISignInCredentials {
  email: string;
  password: string;
}

interface IAuthContext {
  name: string;
  signIn: (credentials: ISignInCredentials) => Promise<void>;
}

interface IAuthProvider {
  children: React.ReactNode;
}

interface ISignInRequest {
  email: string;
  password: string;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider = ({ children }: IAuthProvider) => {
  const signIn = useCallback(async ({ email, password }: ISignInRequest) => {
    const response = await api.post('/v1/sessions', {
      email,
      password,
    });

    console.log(response.data);
  }, []);

  return (
    <AuthContext.Provider value={{ name: 'Taka', signIn }}>
      {children}
    </AuthContext.Provider>
  )
}

export {
  AuthContext,
  AuthProvider,
};
