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
import { LoadingRouter } from "~/Router/LoadingRouter";

export const loginUser =
  (loginData, navigate, setRouter) => async (dispatch) => {
    dispatch({ type: LOGIN_USER_REQUEST });
    try {
      const { data } = await axiosClient.post(
        `${API_BASE_URL}/signin`,
        loginData
      );
      if (data.token) {
        localStorage.setItem("token", data.token);
      }
      console.log("redux", data.user);
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: data.user,
      });
      setRouter(LoadingRouter);
      navigate("/");
    } catch (error) {
      dispatch({
        type: LOGIN_USER_FAILURE,
        payload: error.response.data.message,
        router: LoadingRouter,
      });
      console.log("error", error);
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
    dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({
      type: REGISTER_USER_FAILURE,
      payload: error.response.data.message,
    });
  }
};

export const logoutUser = (navigate, setRouter) => async (dispatch) => {
  localStorage.removeItem("token");
  axiosClient.post("/logout").then(() => {
    dispatch({ type: LOGOUT, payload: null });
    window.location.reload(false);
  });
  setRouter(LoadingRouter); 
  navigate("/");
};
