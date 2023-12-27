import React from "react";
import ReactDOM from "react-dom/client";
import MainRouter from "./Router/index.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { ThemeProvider } from "@emotion/react";
import { ApiContext } from "~/context/ApiContext";
import ColorContext from "~/context/ColorContext";
import "./style/main.css";
import "./echo.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <Provider store={store}>
      <ApiContext>
        <ThemeProvider theme={ColorContext}>
          <MainRouter />
        </ThemeProvider>
      </ApiContext>
    </Provider>
  // </React.StrictMode>
);
