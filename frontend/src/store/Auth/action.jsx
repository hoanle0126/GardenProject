import { API_BASE_URL } from "~/config/api";
import {
  GET_USER_PROFILE_REQUEST,
  GET_USER_PROFILE_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGOUT,
  REGISTER_USER_FAILURE,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
} from "./actionType";
import { axiosClient } from "~/axios/AxiosClient";
import { LoadingRouter } from "~/Router/LoadingRouter";

export const getProfile = () => async (dispatch) => {
  dispatch({ type: GET_USER_PROFILE_REQUEST });
  axiosClient.get("/user").then((data) => {
    dispatch({ type: GET_USER_PROFILE_SUCCESS, payload: data.data.data });
  });
};

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
    }
  };

export const registerUser = (registerData, navigate) => async (dispatch) => {
  dispatch({ type: REGISTER_USER_REQUEST });
  try {
    const { data } = await axiosClient.post(
      `${API_BASE_URL}/signup`,
      registerData
    );

    if (data.token) {
      localStorage.setItem("token", data.token);
    }
    dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user });
    navigate("/");
  } catch (error) {
    dispatch({
      type: REGISTER_USER_FAILURE,
      payload: error.response.data.message,
    });
  }
};

export const logoutUser = (navigate, setRouter) => async (dispatch) => {
  axiosClient.post("/logout").then(() => {
    localStorage.removeItem("token");
    dispatch({ type: LOGOUT, payload: null });
    setRouter(LoadingRouter);
    navigate("/");
  });
};
