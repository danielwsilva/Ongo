import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage  from '@react-native-async-storage/async-storage';

import api from '../services/api';

interface AuthContextData {
  signed: boolean;
  error: boolean;
  loading: boolean;
  signIn(credentials: object): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC  = ({children}) => {
  const [token, setToken] = useState<string | null>(null);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    async function loadStorageData() {
      const storageToken = await AsyncStorage.getItem('@ONGOAuth:token');

      if (storageToken) {
        api.defaults.headers.Authorization = `Bearer ${storageToken}`;
        api.defaults.headers['Ocp-Apim-Subscription-Key'] = "9e8f156f82aa4e419ed36284f9b5a393";
        setToken(storageToken);
      }
    }

    loadStorageData();
  }, []);

  async function signIn(credentials: object) {
    try {
      setLoading(true);
      
      const response = await api.post('public/api/Auth/login', credentials);
      
      const { access_token } = response.data;

      setToken(access_token);

      api.defaults.headers.Authorization = `Bearer ${access_token}`;
      api.defaults.headers['Ocp-Apim-Subscription-Key'] = "9e8f156f82aa4e419ed36284f9b5a393";

      await AsyncStorage.setItem('@ONGOAuth:token', access_token);

      setLoading(false);
      setError(false);
    } catch { 
      setLoading(false);
      setError(true);
    }
  }

  async function signOut() {
    api.defaults.headers['Ocp-Apim-Subscription-Key'] = null;
    AsyncStorage.clear();
    setToken(null);
  }

  return (
    <AuthContext.Provider value={{signed: !!token, loading, error, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
};