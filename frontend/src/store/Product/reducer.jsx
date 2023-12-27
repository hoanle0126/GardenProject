import {
  ADD_NEW_PRODUCT_REQUEST,
  ADD_NEW_PRODUCT_SUCCESS,
  GET_ALL_PRODUCTS_FAILURE,
  GET_ALL_PRODUCTS_REQUEST,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  UPDATE_PRODUCT_SUCCESS,
} from "./actionType";

const initialState = {
  product: [],
  loading: false,
  error: null,
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS_REQUEST:
    case ADD_NEW_PRODUCT_REQUEST:
    case GET_PRODUCTS_REQUEST:
      return { ...state, loading: true, product: [] };
    case GET_ALL_PRODUCTS_SUCCESS:
    case GET_PRODUCTS_SUCCESS:
      return { ...state, loading: false, product: action.payload };
    case ADD_NEW_PRODUCT_SUCCESS:
    case UPDATE_PRODUCT_SUCCESS:
      return { ...state, loading: false };
    case GET_ALL_PRODUCTS_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};
