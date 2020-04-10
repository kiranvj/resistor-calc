import React from "react";
import "./App.scss";
import Header from "./components/Header";
import CssBaseline from "@material-ui/core/CssBaseline";
import Resistor from "./components/Resistor";
import { Container } from "@material-ui/core";
import Footer from "./components/Footer";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <CssBaseline>
      <Router>
        <div className="resistor-calc-app">
          <Header />
          <Container>
            <Switch>
              <Route path="/band=:id">
                <Resistor query="band" />
              </Route>
              <Route path="/value=:id">
                <Resistor query="value" />
              </Route>
              <Route exact path="/">
                <Resistor />
              </Route>
              <Route path="/">404</Route>
            </Switch>
          </Container>
        </div>
        <Footer />
      </Router>
    </CssBaseline>
  );
}

export default App;
