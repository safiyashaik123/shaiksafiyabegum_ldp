import axios from "axios";

const advancedApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 5,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default advancedApi;