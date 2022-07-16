import axios from "axios";

export const api = getApiClient();

function getApiClient () {
  const token = localStorage.access_token;

  const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  
  // api.interceptors.request.use((config) => {
  //   console.log(config);
  
  //   return config;
  // });

  if (token) {
    api.defaults.headers["Authorization"] = `Bearer ${token}`;
  }

  return api
}
