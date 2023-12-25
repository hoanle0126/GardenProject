/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import { LoadingRouter } from "../Router/LoadingRouter";

const StateContext = createContext({
  user: null,
  token: null,
  notification: null,
  router: null,
  loading: false,
  selectedProducts: [],
  setUser: () => {},
  setToken: () => {},
  setNotification: () => {},
  setRouter: () => {},
  setLoading: () => {},
  setSelectedProducts: () => {},
});

export const ApiContext = ({ children }) => {
  const [user, _setUser] = useState(localStorage.getItem("ACCESS_USER"));
  const [token, _setToken] = useState(localStorage.getItem("ACCESS_TOKEN"));
  const [notification, _setNotification] = useState("");
  const [router, setRouter] = useState(LoadingRouter);
  const [loading, setLoading] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);

  const setToken = (token) => {
    _setToken(token);
    if (token) {
      localStorage.setItem("ACCESS_TOKEN", token);
    } else {
      localStorage.removeItem("ACCESS_TOKEN");
    }
  };

  const setUser = (user) => {
    _setUser(user);
    if (user) {
      localStorage.setItem("ACCESS_USER", user);
    } else {
      localStorage.removeItem("ACCESS_USER");
    }
  };

  const setNotification = (message) => {
    _setNotification(message);

    setTimeout(() => {
      _setNotification("");
    }, 5000);
  };

  return (
    <StateContext.Provider
      value={{
        user,
        setUser,
        token,
        router,
        loading,
        selectedProducts,
        setToken,
        notification,
        setNotification,
        setRouter,
        setLoading,
        setSelectedProducts,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
