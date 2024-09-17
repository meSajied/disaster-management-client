import axios from "axios";

export const fetcher = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
})