import React from "react";
import Grid from "@material-ui/core/Grid";
import { Box } from "@material-ui/core";
import "../styles/resistor.scss";

function Resistor() {
  return (
    <Box my={5} py={5} textAlign="center">
      <Grid container spacing={0} justify="center" alignItems="center">
        <Grid item xs={1} md={3}>
          <div className="resistor-leads"></div>
        </Grid>
        <Grid item xs>
          <div className="resistor-body">
            <Grid container spacing={0} justify="space-around">
              <Grid item>
                <div className="colors">
                  <span>YELLOW</span>
                </div>
              </Grid>
              <Grid item>
                <div className="colors">
                  <span>RED</span>
                </div>
              </Grid>
              <Grid item>
                <div className="colors">
                  <span>BLACK</span>
                </div>
              </Grid>
              <Grid item xs={6}>
                <Box display="flex" justifyContent="flex-end">
                  <Box className="colors tolerance gold">t1</Box>
                </Box>
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item xs={1} md={3}>
          <div className="resistor-leads"></div>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Resistor;
