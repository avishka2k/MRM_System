import { REGISTER_SUCCESS, LOGIN_SUCCESS, LOGOUT } from "./types";
import { register, login, logout } from "../api/auth";

export const registerUser = (userData) => async (dispatch) => {
  try {
    const user = await register(userData);
    dispatch({ type: REGISTER_SUCCESS, payload: user });
  } catch (err) {
    console.log(err);
  }
};

export const loginUser = (userData) => async (dispatch) => {
  try {
    const user = await login(userData);
    dispatch({ type: LOGIN_SUCCESS, payload: user });
  } catch (err) {
    console.log(err);
  }
};

export const logoutUser = () => async (dispatch) => {
  logout();
  dispatch({ type: LOGOUT });
};
