import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Container } from "react-bootstrap";
import Home from "./components/Home";
import Header from "./components/Header";

import "./App.css";

const App = () => {
  return (
    <Container fluid>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </Container>
  );
};

export default App;
