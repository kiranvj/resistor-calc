import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { Box } from "@material-ui/core";
import "../styles/resistor.scss";
import clsx from "clsx";
import ColorCodeSelector from "./ColorCodeSelector";
import {
  colorCodes,
  multiplerCodes,
  toleranceCodes,
  UNICODE_PLUS_MINUS
} from "../core/constants";
import ColorBand from "./ColorBand";
import {
  formatResistorValue,
  getLabel,
  getColorDisplayValue,
  getCalculationDisplayDetails
} from "../core/helpers";
import { useParams } from "react-router-dom";

function Resistor({ query, ...props }) {
  let { id } = useParams();
  console.log(id);
  let urlColor1 = 0;
  let urlColor2 = 0;
  let urlMultiplier = 0;
  let urltolerance = 0;

  if (query === "band") {
    let urlBandColors = id && id.split(",");
    urlColor1 = parseInt(urlBandColors[0]);
    urlColor2 = parseInt(urlBandColors[1]);
    urlMultiplier = parseInt(urlBandColors[2]);
    urltolerance = parseInt(urlBandColors[3]);
  }

  const [codes, setCodes] = useState({
    band: "",
    color1: urlColor1 || 0,
    color2: urlColor2 || 0,
    color3: urlMultiplier || 0,
    multiplier: urlMultiplier || 0,
    tolerance: urltolerance || 0,
    ppm: ""
  });

  useEffect(() => {
    console.log(query);
    console.log(id);
  }, [query, id]);
  const [resitorValue, setResistorValue] = useState(0);

  function setColorCode(key, value) {
    setCodes({ ...codes, [key]: value });
  }
  function findResistorValue({ color1, color2, color3, multiplier }) {
    //TODO: validations
    return formatResistorValue(
      (parseInt(`${colorCodes[color1].value}${colorCodes[color2].value}`) *
        (multiplerCodes[multiplier].value * 100)) /
        100 /* 100/100 to round to 2 decimals */
    );
  }
  useEffect(() => {
    if (
      colorCodes[codes.color1].value !== -1 &&
      colorCodes[codes.color2].value !== -1 &&
      multiplerCodes[codes.multiplier].value !== -1
    ) {
      setResistorValue(findResistorValue(codes));
      console.log("updating history...");
      window.location.hash = `/band=${codes.color1},${codes.color2}`;
    } else {
      setResistorValue("--");
      //window.location.hash = "/";
    }
  }, [codes, codes.color1]);
  return (
    <div>
      <Box my={2} textAlign="center">
        <Box my={1}>
          <Box component="span" fontSize="3em">
            {resitorValue}Ω{" "}
            <span className="text-gray">
              {` ${UNICODE_PLUS_MINUS}
               ${toleranceCodes[codes.tolerance] &&
                 toleranceCodes[codes.tolerance].value}`}
            </span>
          </Box>
          <Box component="div" fontSize="0.925em">
            Resistor value {getCalculationDisplayDetails(codes)}
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
                    <ColorBand
                      codes={codes}
                      band="tolerance"
                      type="tolerance"
                    />
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
      <Box mt={3} mb={2}>
        <b>Tip:</b>{" "}
        <i>Move or click the slider below to select a resistor band color.</i>
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
              {getLabel(codes.color1, colorCodes)}{" "}
              {getColorDisplayValue(codes.color1, colorCodes)}
            </small>
          </Grid>
          <Grid item xs>
            <ColorCodeSelector
              setColorCode={setColorCode}
              bandName="color1"
              type="color"
              codes={codes}
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
              {getLabel(codes.color2, colorCodes)}{" "}
              {getColorDisplayValue(codes.color2, colorCodes)}
            </small>
          </Grid>
          <Grid item xs>
            <ColorCodeSelector
              setColorCode={setColorCode}
              bandName="color2"
              codes={codes}
            />
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
              {getLabel(codes.multiplier, multiplerCodes)}{" "}
              {getColorDisplayValue(
                codes.multiplier,
                multiplerCodes,
                "multipler"
              )}
            </small>
          </Grid>
          <Grid item xs>
            <ColorCodeSelector
              setColorCode={setColorCode}
              bandName="multiplier"
              type="multiplier"
              codes={codes}
            />
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={3} sm={2} lg={1}>
            <div>Tolerance</div>
            <small
              className={clsx(
                "text-uppercase",
                `text-${getLabel(codes.tolerance, toleranceCodes)}`
              )}
            >
              {getLabel(codes.tolerance, toleranceCodes)}{" "}
              {getColorDisplayValue(
                codes.tolerance,
                toleranceCodes,
                "tolerance"
              )}
            </small>
          </Grid>
          <Grid item xs>
            <ColorCodeSelector
              setColorCode={setColorCode}
              bandName="tolerance"
              type="tolerance"
              codes={codes}
            />
          </Grid>
        </Grid>
      </section>
    </div>
  );
}

export default Resistor;
