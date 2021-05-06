import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "http://localhost:3001/";

const accessToken =
  "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0aG9tYXNna3oiLCJpYXQiOjE1Mzc2MDMxOTUsImV4cCI6MTUzNzY4OTU5NX0.m2YMjTYmOnfR7nnVNxqCzWbQ2FhKRe1eiizxnC2TF4eAoEzKlwo7PheVkKcxj08ST3vB-ZOIhiORvYVfSgzcog";

const register = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
    accessToken: accessToken,
  });
};

const login = (username, password) => {
  return axios
    .get(API_URL + `signup?username=${username}&&password=${password}`, {
      username,
      password,
      accessToken,
    })
    .then((response) => {
      if (response.data.length !== 0) {
        localStorage.setItem("user", JSON.stringify(response.data));
      } else {
        return "User is not there...!!";
      }
    })
    .catch((err) => {
      return err;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
};
