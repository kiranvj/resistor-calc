import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { Box, Hidden } from "@material-ui/core";
import "../styles/resistor.scss";
import clsx from "clsx";
import ColorCodeSelector from "./ColorCodeSelector";
import { colorCodes, NONE } from "../core/constants";
import ColorBand from "./ColorBand";
import { formatResistorValue } from "../core/helpers";

function Resistor() {
  const [codes, setCodes] = useState({
    band: "",
    color1: NONE,
    color2: NONE,
    color3: NONE,
    multiplier: "no-color-selected",
    tolerance: "no-color-selected",
    ppm: ""
  });

  const [resitorValue, setResistorValue] = useState(0);

  function setColorCode(key, value) {
    setCodes({ ...codes, [key]: value });
  }
  useEffect(() => {
    if (codes.color1 !== -1 && codes.color2 !== -1 && codes.color3 !== -1) {
      setResistorValue(
        formatResistorValue(
          parseInt(`${codes.color1}${codes.color2}`) *
            Math.pow(10, codes.color3)
        )
      );
    } else {
      setResistorValue("--");
    }
  }, [codes]);
  return (
    <div>
      <Box my={5} textAlign="center">
        <Box my={5} fontSize="3em">
          Resistor value : {resitorValue}Ω
        </Box>
        <Grid container spacing={0} justify="center" alignItems="center">
          <Grid item xs={1} md={3}>
            <div className="resistor-leads"></div>
          </Grid>
          <Grid item xs>
            <div className="resistor-body">
              <Grid container spacing={0} justify="space-around">
                <ColorBand codes={codes} band="color1" />
                <ColorBand codes={codes} band="color2" />
                <ColorBand codes={codes} band="color3" type="multiplier" />

                <Grid item xs={4} md={6}>
                  <Box display="flex" justifyContent="flex-end">
                    <Box className={clsx("colors tolerance", codes.multiplier)}>
                      t1
                    </Box>
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
      <section className="color-selector-section">
        <Grid container>
          <Grid item xs="auto" md={3} lg="auto">
            Band 1 color
          </Grid>
          <Grid item xs>
            <ColorCodeSelector setColorCode={setColorCode} bandName="color1" />
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs="auto" md={3} lg="auto">
            Band 2 color
          </Grid>
          <Grid item xs>
            <ColorCodeSelector setColorCode={setColorCode} bandName="color2" />
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs="auto" md={3} lg="auto">
            Band 3 color
          </Grid>
          <Grid item xs>
            <ColorCodeSelector setColorCode={setColorCode} bandName="color3" />
          </Grid>
        </Grid>
      </section>
    </div>
  );
}

export default Resistor;
