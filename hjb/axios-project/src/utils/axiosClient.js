import axios from "axios";

const getUrl = import.meta.env.VITE_API_GET;
const postUrl = import.meta.env.VITE_API_POST;

export const getInstance = axios.create({
  baseURL: getUrl,
});

export const postInstance = axios.create({
  baseURL: postUrl,
});
