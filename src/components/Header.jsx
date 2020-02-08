import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import resistorIcon from "../images/resistor.svg";
import { Box } from "@material-ui/core";

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box component="span" mr={1}>
          <img src={resistorIcon} height="40" alt="Resistor Calculator" />
        </Box>
        <Typography variant="h6">Resistor Calculator</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
