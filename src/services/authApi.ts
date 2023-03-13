import axios from "axios";

const BASE_API_URL =
  process.env.REACT_APP_BASE_API_URL || "http://localhost:3001/api/v1";

const authApi = () => {
  const instance = axios.create({
    baseURL: BASE_API_URL,
    timeout: 50000,
    headers: {
      "Content-Type": "application/json",
    },
  });

  // Add a request interceptor to instance
  instance.interceptors.request.use(
    (config) => {
      const token = sessionStorage.getItem("authToken");
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `Bearer ${token}`;

      return config;
    },
    (error) => Promise.reject(error)
  );

  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (!error.response || error.response.status === 401) {
        sessionStorage.clear();
        window.location.href = "/sign_in";
      } else {
        Promise.reject(error);
      }
    }
  );

  return instance;
};

export default authApi;
