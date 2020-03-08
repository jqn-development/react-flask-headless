import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Typography, Container } from "@material-ui/core";
// import "./styles/MainSection.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "../components/layout/header";
import Landing from "../components/layout/Landing";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import Dashboard from "../components/dashboard/Dashboard";

const MainSection = () => (
  <Router>
    <section className="container">
      <React.Fragment>
        <Header />
        <Container maxWidth="xl">
          <Switch>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
              <Landing />
            </Route>
          </Switch>
        </Container>
      </React.Fragment>
    </section>
  </Router>
);

export default MainSection;

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
