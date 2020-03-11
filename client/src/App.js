import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import "./App.css";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes />
      </Router>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
