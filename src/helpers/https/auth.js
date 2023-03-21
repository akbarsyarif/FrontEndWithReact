import axios from "axios";

export const login = (email, password, controller) => {
  const body = {
    email,
    password,
  };
  const url = "https://coffeeshop-k1jzw0k6u-akbarsyarif.vercel.app/auth";
  return axios.post(url, body, {
    signal: controller.signal,
  });
};
// https://coffeeshop-k1jzw0k6u-akbarsyarif.vercel.app
