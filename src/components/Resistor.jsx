import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { Box } from "@material-ui/core";
import "../styles/resistor.scss";
import clsx from "clsx";
import ColorCodeSelector from "./ColorCodeSelector";
import { colorCodes, NO_COLOR, NONE } from "../core/constants";

function Resistor() {
  const [codes, setCodes] = useState({
    band: "",
    color1: NONE,
    color2: "no-color-selected",
    color3: "no-color-selected",
    multiplier: "no-color-selected",
    tolerance: "no-color-selected",
    ppm: ""
  });

  function setColorCode(key, value) {
    setCodes({ ...codes, [key]: value });
  }
  return (
    <div>
      <Box my={5} textAlign="center">
        <Box my={5} fontSize="3em">
          Resistor value : 100 kΩ
        </Box>
        <Grid container spacing={0} justify="center" alignItems="center">
          <Grid item xs={1} md={3}>
            <div className="resistor-leads"></div>
          </Grid>
          <Grid item xs>
            <div className="resistor-body">
              <Grid container spacing={0} justify="space-around">
                <Grid item>
                  <div
                    className={clsx(
                      "colors",
                      codes.color1 === -1
                        ? "no-color-selected"
                        : colorCodes[codes.color1]
                        ? colorCodes[codes.color1].label
                        : ""
                    )}
                  >
                    <span>{colorCodes[codes.color1].label}</span>
                  </div>
                </Grid>
                <Grid item>
                  <div className={clsx("colors", codes.color2)}>
                    <span>RED</span>
                  </div>
                </Grid>
                {/*               <Grid item>
                <div className={clsx("colors", codes.color3)}>
                  <span>BLACK</span>
                </div>
              </Grid> */}
                <Grid item>
                  <div className={clsx("colors multiplier", codes.multiplier)}>
                    <span>BLACK</span>
                  </div>
                </Grid>
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
      <div>
        <ColorCodeSelector setColorCode={setColorCode} />
      </div>
    </div>
  );
}

export default Resistor;
