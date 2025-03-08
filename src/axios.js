import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  timeout: 30000,
  withCredentials: true,
    headers: {
      Authorization: localStorage.getItem("access_token")
        ? "Bearer " + localStorage.getItem("access_token")
        : null,
      "Content-Type": "application/json",
      accept: "application/json",
    },
});

export default axiosInstance
