export const TOKEN_KEY = "@stories-instagram:token";

export const setToken = token => localStorage.setItem(TOKEN_KEY, JSON.stringify(token));

export const getToken = () => {
  const user = localStorage.getItem(TOKEN_KEY);
  return JSON.parse(user);
}

export const logout = () => localStorage.clear();

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;