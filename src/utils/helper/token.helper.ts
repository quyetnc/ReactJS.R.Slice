export const getToken = () => {
  const token = localStorage.getItem("token");
  return token;
};

export const getUsers = () => {
  const token = localStorage.getItem("users");
  return token;
};

export const saveToken = (token: string | undefined) => {
  if (token) localStorage.setItem("token", token);
};

export const removeToken = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expiration");
  localStorage.removeItem("refreshToken");
};
