import React from "react";
import "./App.scss";
import Header from "./components/Header";
import CssBaseline from "@material-ui/core/CssBaseline";
import Resistor from "./components/Resistor";
import { Container } from "@material-ui/core";

function App() {
  return (
    <CssBaseline>
      <div className="resistor-calc-app">
        <Header />
        <Container>
          <Resistor />
        </Container>
      </div>
    </CssBaseline>
  );
}

export default App;
