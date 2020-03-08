import React from "react";
import ReactDOM from "react-dom";
import MainSection from "./containers/MainSection";
// import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MainSection />
      </ThemeProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
