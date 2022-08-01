import React, { useState, createContext, useCallback, useContext } from 'react';

import { api } from '../services/api';

interface IAuthState {
  user: object;
  token: string;
}

interface ISignInCredentials {
  email: string;
  password: string;
}

interface IAuthContext {
  user: object;
  signIn: (credentials: ISignInCredentials) => Promise<void>;
  signOut: () => void;
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
  const [data, setData] = useState<IAuthState>(() => {
    const user = localStorage.getItem('@GoBarber:user');
    const token = localStorage.getItem('@GoBarber:token');

    if (!!user && !!token) {
      return { user: JSON.parse(user), token };
    }

    return {} as IAuthState;
  });

  const signIn = useCallback(async ({ email, password }: ISignInRequest) => {
    const response = await api.post('/v1/sessions', {
      email,
      password,
    });

    const { user, token } = response.data;

    localStorage.setItem('@GoBarber:user', JSON.stringify(user));
    localStorage.setItem('@GoBarber:token', token);

    setData({ user, token });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@GoBarber:user');
    localStorage.removeItem('@GoBarber:token');

    setData({} as IAuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(): IAuthContext {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export {
  AuthProvider,
  useAuth,
};
