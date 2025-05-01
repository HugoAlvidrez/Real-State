import React, { createContext, useState, useEffect, useContext } from "react";
import * as SecureStore from "expo-secure-store";

const TOKEN_KEY = 'session';
const BASE_URL = 'http://<ip>:5000'; 

export const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    data: null,
    token: null,
    authenticated: false,
  });

  useEffect(() => {
    const loadToken = async () => {
      const token = await SecureStore.getItemAsync(TOKEN_KEY);
      if (token) {
        setAuthState({
          token: token,
          authenticated: true,
        });
      }
    };
    loadToken();
  }, []);

  const register = async (username, email, password) => {
    try {
      const response = await fetch(`${BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.message || 'Registration failed');
      }

      const data = await response.json();
      return data; 

    } catch (e) {
      return { error: true, msg: e.message };
    }
  };

  const login = async (email, password) => {
    try {
      const response = await fetch(`${BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.message || 'Login failed');
      }

      const data = await response.json();
      setAuthState({
        data: data.user,
        token: data.token,
        authenticated: true,
      });

      await SecureStore.setItemAsync(TOKEN_KEY, data.token);
      return data; 

    } catch (e) {
      return { error: true, msg: e.message }; 
    }
  };

  const logout = async () => {
    await SecureStore.deleteItemAsync(TOKEN_KEY);
    setAuthState({
      data: null,
      token: null,
      authenticated: false,
    });
  };

  const value = {
    onRegister: register,
    onLogin: login,
    onLogout: logout,
    user: authState
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
