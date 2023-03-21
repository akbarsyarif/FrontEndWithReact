import axios from "axios";

export const fetchProduct = (controller) => {
  return fetch("https://coffeeshop-api-sigma.vercel.app/products", {
    signal: controller.signal,
  });
};
// https://coffeeshop-api-sigma.vercel.app/products

export const getProducts = (controller) => {
  return axios.get("https://coffeeshop-api-sigma.vercel.app/products", {
    signal: controller.signal,
  });
};
