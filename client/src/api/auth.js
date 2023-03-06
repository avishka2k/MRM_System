import axios from "axios";

export const register = async (userData) => {
  try {
    const res = await axios.post(`http://localhost:5000/register`, userData);
    localStorage.setItem("token", res.data.token);
    return res.data.user;
  } catch (err) {
    throw err.response.data;
  }
};

export const login = async (userData) => {
  try {
    const res = await axios.post(`http://localhost:5000/login`, userData);
    localStorage.setItem("token", res.data.token);
    return res.data.user;
  } catch (err) {
    throw err.response.data;
  }
};

export const logout = () => {
  localStorage.removeItem("token");
};
