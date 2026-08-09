import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 500,
});

api.interceptors.request.use(
  (config) => {
    console.log("========== REQUEST INTERCEPTOR ==========");
    console.log("Method :", config.method?.toUpperCase());
    console.log("Base URL :", config.baseURL ?? "No Base URL");
    console.log("Endpoint :", config.url ?? "No Endpoint");
    console.log("Sending Request...");
    console.log("=========================================");

    return config;
  },
  (error) => {
    console.log("Request Error :", error);

    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    console.log("========== RESPONSE INTERCEPTOR ==========");
    console.log("Status :", response.status);
    console.log("Response Received Successfully");
    console.log("==========================================");

    return response;
  },
  (error) => {
    console.log("Response Error :", error);

    return Promise.reject(error);
  }
);

export default api;