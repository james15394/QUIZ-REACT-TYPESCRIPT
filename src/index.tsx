import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { StateProvider } from "./StateProvider";
import reducer, { initialState } from "./reducer";

const THEME = createMuiTheme({
  typography: {
    fontFamily: `"Poppins", sans-serif`,
  },
  palette: {
    primary: {
      main: "#ff577f",
    },
    secondary: {
      main: "#fff",
    },
  },
});
ReactDOM.render(
  <ThemeProvider theme={THEME}>
    <React.StrictMode>
      <StateProvider initialState={initialState} reducer={reducer}>
        <App />
      </StateProvider>
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById("root")
);
