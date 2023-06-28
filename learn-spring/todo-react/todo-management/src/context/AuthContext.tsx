import React, { createContext, useState } from "react";
import { apiClient } from "../api/ApiClient";
import { executeBasicAuthenticationService } from "../api/HelloWorldApiService";

// 1. Create a Context
export const AuthContext = createContext<{
  isAuthenticated: boolean;
  username: string | null;
  login: (_username: string, _password: string) => Promise<boolean>;
  logout: () => void;
  token: string | null;
}>({
  isAuthenticated: false,
  username: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
  login: (_username: string, _password: string) => {
    return Promise.resolve(false);
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  logout: () => {},
  token: null,
});

// 2. Put some state in the context
// Share the created context with other components
export function AuthProvider({ children }: { children: React.ReactNode }) {
  // 3. Put some state in the context
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);

  async function login(username: string, password: string) {
    console.log("login called!");
    const baToken = "Basic " + window.btoa(username + ":" + password);

    try {
      const response = await executeBasicAuthenticationService(baToken);

      if (response.status == 200) {
        setAuthenticated(true);
        setUsername(username);
        setToken(baToken);

        apiClient.interceptors.request.use((config) => {
          console.log("intercepting and adding a token");
          config.headers.Authorization = baToken;
          return config;
        });

        return true;
      } else {
        logout();
        return false;
      }
    } catch (error) {
      logout();
      return false;
    }
  }

  function logout() {
    setAuthenticated(false);
    setToken(null);
    setUsername(null);
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout, username, token }}
    >
      {children}
    </AuthContext.Provider>
  );
}
