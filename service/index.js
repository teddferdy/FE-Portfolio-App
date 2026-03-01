import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (res) => res,
  (err) => {
    if (axios.isAxiosError(err)) {
      if (err.response) {
        console.group("🚨 Axios Response Error");
        console.log("URL:", err.config?.url);
        console.log("Method:", err.config?.method);
        console.log("Status:", err.response.status);
        console.log("Data:", err.response.data);
        console.groupEnd();
      } else if (err.request) {
        console.group("🌐 Axios Network Error");
        console.log("Message:", err.message);
        console.groupEnd();
      } else {
        console.group("❓ Axios Unknown Error");
        console.log("Message:", err.message);
        console.groupEnd();
      }
    } else {
      console.error("Non-Axios Error:", err);
    }

    return Promise.reject(err); // selalu return error asli
  },
);

export { axiosInstance };
