import axios from "axios";

const BASE_API_URL =
  process.env.REACT_APP_BASE_API_URL || "http://localhost:3001/api/v1";

const Api = () => {
  const instance = axios.create({
    baseURL: BASE_API_URL,
    timeout: 1000 * 60,
    headers: {
      "Content-Type": "application/json",
    },
  });

  instance.interceptors.response.use(
    (response) => response,
    (error) => error.response
  );
  return instance;
};

export default Api;
