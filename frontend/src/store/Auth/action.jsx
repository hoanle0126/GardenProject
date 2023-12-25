import { API_BASE_URL } from "~/config/api";
import {
  LOGIN_USER_FAILURE,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGOUT,
  REGISTER_USER_FAILURE,
  REGISTER_USER_SUCCESS,
} from "./actionType";
import { axiosClient } from "~/axios/AxiosClient";

export const loginUser = (loginData) => async (dispatch) => {
  dispatch({ type: LOGIN_USER_REQUEST });
  try {
    const { data } = await axiosClient.post(
      `${API_BASE_URL}/signin`,
      loginData
    );
    console.log("redux", data.user);
    if (data.token) {
      localStorage.setItem("token", data.token);
    }
    dispatch({ type: LOGIN_USER_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({
      type: LOGIN_USER_FAILURE,
      payload: error.response.data.message,
    });
  }
};

export const registerUser = (registerData) => async (dispatch) => {
  try {
    const { data } = await axiosClient.post(
      `${API_BASE_URL}/signup`,
      registerData
    );

    if (data.token) {
      localStorage.setItem("token", data.token);
    }
    dispatch({ type: REGISTER_USER_SUCCESS, payload: data.token });
  } catch (error) {
    dispatch({ type: REGISTER_USER_FAILURE, payload: error.token });
  }
};

export const logout = () => async (dispatch) => {
  localStorage.removeItem("token");

  dispatch({ type: LOGOUT, payload: null });
};
