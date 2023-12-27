import { axiosClient } from "~/axios/AxiosClient";
import {
  ADD_NEW_PRODUCT_REQUEST,
  ADD_NEW_PRODUCT_SUCCESS,
  GET_ALL_PRODUCTS_FAILURE,
  GET_ALL_PRODUCTS_REQUEST,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_STOCK_FAILURE,
  GET_STOCK_REQUEST,
  GET_STOCK_SUCCESS,
  UPDATE_PRODUCT_REQUEST,
} from "./actionType";

export const getAllProduct =
  (current_page, filter, setPage) => async (dispatch) => {
    dispatch({ type: GET_ALL_PRODUCTS_REQUEST });
    try {
      axiosClient
        .post(`/products/list?page=${current_page}`, filter)
        .then((data) => {
          dispatch({
            type: GET_ALL_PRODUCTS_SUCCESS,
            payload: data.data.data,
          });
          setPage(data.data.meta);
        });
    } catch (error) {
      dispatch({ type: GET_ALL_PRODUCTS_FAILURE, error: null });
    }
  };

export const addNewProduct = (product, navigate) => async (dispatch) => {
  dispatch({ type: ADD_NEW_PRODUCT_REQUEST });
  axiosClient.post("/products", product).then(() => {
    dispatch({ type: ADD_NEW_PRODUCT_SUCCESS });
    navigate("/stock");
  });
};

export const getProduct = (id, setProducts) => async (dispatch) => {
  dispatch({ type: GET_PRODUCTS_REQUEST });
  axiosClient.get(`/products/${id}`).then((data) => {
    setProducts(data.data.data);
    dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data.data.data });
  });
};

export const updateProduct = (product, id, navigate) => async (dispatch) => {
  dispatch({ type: UPDATE_PRODUCT_REQUEST });
  axiosClient.put(`/products/${id}`, product).then(() => {
    navigate("/stock");
  });
};

export const getStock = () => async (dispatch) => {
  dispatch({ type: GET_STOCK_REQUEST });
  axiosClient
    .get("/stocks")
    .then((data) => {
      dispatch({ type: GET_STOCK_SUCCESS, payload: data.data.data });
    })
    .catch((e) => {
      dispatch({ type: GET_STOCK_FAILURE, payload: e });
    });
};
