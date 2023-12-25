import {
  LOGIN_USER_FAILURE,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGOUT,
  REGISTER_USER_FAILURE,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
} from "./actionType";

const initialState = {
  user: null,
  loading: false,
  error: null,
  token: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
    case REGISTER_USER_REQUEST:
      return { ...state, loading: true, error: null };

    case LOGIN_USER_SUCCESS:
    case REGISTER_USER_SUCCESS:
      return { ...state, loading: false, error: null, user: action.payload };

    case LOGIN_USER_FAILURE:
    case REGISTER_USER_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case LOGOUT:
      return initialState;

    default:
      return state;
  }
};
