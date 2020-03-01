import React from "react";
import "./App.scss";
import Header from "./components/Header";
import CssBaseline from "@material-ui/core/CssBaseline";
import Resistor from "./components/Resistor";
import { Container, Box } from "@material-ui/core";

function App() {
  return (
    <CssBaseline>
      <div className="resistor-calc-app">
        <Header />
        <Container>
          <Resistor />
        </Container>
      </div>
      <Box component="footer" textAlign="center" pt={5} pb={3} mt={15}>
        <small>
          <div>
            Handcrafted with{" "}
            <Box component="span" fontSize="1.25rem" className="text-red">
              ❤
            </Box>{" "}
            by Kiran Paul VJ for{" "}
            <a href="https://alfran.in/" title="Alfran Technology Solutions">
              {" "}
              Alfran Technology Solutions
            </a>
          </div>
        </small>
      </Box>
    </CssBaseline>
  );
}

export default App;
