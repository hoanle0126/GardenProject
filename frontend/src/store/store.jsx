import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "./Auth/reducer";
import { productReducer } from "./Product/reducer";
import { categoryReducer } from "./Category/reducer";

const rootReducers = combineReducers({
  auth: authReducer,
  product: productReducer,
  category: categoryReducer,
});

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk));
