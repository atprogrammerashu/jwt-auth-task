import axios from "axios";

const API_URL = "http://localhost:3001/";

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

export default {
  getPublicContent,
};
