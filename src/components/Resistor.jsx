import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { Box, Hidden } from "@material-ui/core";
import "../styles/resistor.scss";
import clsx from "clsx";
import ColorCodeSelector from "./ColorCodeSelector";
import { colorCodes, NONE, multiplerCodes } from "../core/constants";
import ColorBand from "./ColorBand";
import { formatResistorValue, getLabel } from "../core/helpers";

function Resistor() {
  const [codes, setCodes] = useState({
    band: "",
    color1: 0,
    color2: 0,
    color3: 0,
    multiplier: 0,
    tolerance: 0,
    ppm: ""
  });

  const [resitorValue, setResistorValue] = useState(0);

  function setColorCode(key, value) {
    setCodes({ ...codes, [key]: value });
  }
  function findResistorValue({ color1, color2, color3, multiplier }) {
    //TODO: validations
    return formatResistorValue(
      (parseInt(`${colorCodes[color1].value}${colorCodes[color2].value}`) *
        (multiplerCodes[multiplier].value * 100)) /
        100
    );
  }
  useEffect(() => {
    if (codes.color1 !== 0 && codes.color2 !== 0 && codes.multiplier !== 0) {
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
                `text-${getLabel(codes.color1, colorCodes)}`
              )}
            >
              {getLabel(codes.color1, colorCodes)}
            </small>
          </Grid>
          <Grid item xs>
            <ColorCodeSelector
              setColorCode={setColorCode}
              bandName="color1"
              type="color"
            />
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={3} sm={2} lg={1}>
            <div>2nd Band</div>
            <small
              className={clsx(
                "text-uppercase",
                `text-${getLabel(codes.color2, colorCodes)}`
              )}
            >
              {getLabel(codes.color2, colorCodes)}
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
                `text-${getLabel(codes.multiplier, multiplerCodes)}`
              )}
            >
              {getLabel(codes.multiplier, multiplerCodes)}
            </small>
          </Grid>
          <Grid item xs>
            <ColorCodeSelector
              setColorCode={setColorCode}
              bandName="multiplier"
              type="multiplier"
            />
          </Grid>
        </Grid>
      </section>
    </div>
  );
}

export default Resistor;
