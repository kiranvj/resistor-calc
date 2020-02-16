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
    multiplier: NONE,
    tolerance: NONE,
    ppm: ""
  });

  const [resitorValue, setResistorValue] = useState(0);

  function setColorCode(key, value) {
    setCodes({ ...codes, [key]: value });
  }
  function findResistorValue({ color1, color2, color3, multiplier }) {
    return formatResistorValue(
      parseInt(`${color1}${color2}`) * Math.pow(10, multiplier)
    );
  }
  useEffect(() => {
    if (codes.color1 !== -1 && codes.color2 !== -1 && codes.multiplier !== -1) {
      setResistorValue(findResistorValue(codes));
    } else {
      setResistorValue("--");
    }
  }, [codes]);
  return (
    <div>
      <Box my={5} textAlign="center">
        <Box my={5}>
          <Box component="span" fontSize="3em">
            {resitorValue}Ω <span className="text-gray"> &plusmn; 10%</span>
          </Box>
          <Box component="div" fontSize="0.925em">
            Resistor value
          </Box>
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
                <ColorBand codes={codes} band="multiplier" type="multiplier" />

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
          <Grid item xs={3} sm={2} lg={1}>
            <div>1st Band</div>
            <small
              className={clsx(
                "text-uppercase",
                `text-${colorCodes[codes.color1].label}`
              )}
            >
              {colorCodes[codes.color1].label}
            </small>
          </Grid>
          <Grid item xs>
            <ColorCodeSelector setColorCode={setColorCode} bandName="color1" />
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={3} sm={2} lg={1}>
            <div>2nd Band</div>
            <small
              className={clsx(
                "text-uppercase",
                `text-${colorCodes[codes.color2].label}`
              )}
            >
              {colorCodes[codes.color2].label}
            </small>
          </Grid>
          <Grid item xs>
            <ColorCodeSelector setColorCode={setColorCode} bandName="color2" />
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={3} sm={2} lg={1}>
            <div>Multiplier</div>
            <small
              className={clsx(
                "text-uppercase",
                `text-${colorCodes[codes.multiplier].label}`
              )}
            >
              {colorCodes[codes.multiplier].label}
            </small>
          </Grid>
          <Grid item xs>
            <ColorCodeSelector
              setColorCode={setColorCode}
              bandName="multiplier"
            />
          </Grid>
        </Grid>
      </section>
    </div>
  );
}

export default Resistor;
