import React from "react";
import { Slider, Hidden, Box } from "@material-ui/core";
import { colorCodes, multiplerCodes, toleranceCodes } from "../core/constants";

function ColorCodeSelector({ setColorCode, bandName, type = "color" }) {
  /*   useEffect(() => {
    
  }, []); */
  let typeData = colorCodes;

  switch (type) {
    case "multiplier":
      typeData = multiplerCodes;
      break;
    case "tolerance":
      typeData = toleranceCodes;
      break;

    default:
      typeData = colorCodes;
  }
  function valuetext(value) {
    return value;
  }
  /* const marks = Object.entries(colorCodes).map(([key, codeInfo], index) => {
    console.log(codeInfo);
    return {
      label: (
        <>
          <span className={`text-${colorCodes[key].label}`}>
            <Hidden mdDown>{colorCodes[key].label}</Hidden>
            <Hidden mdUp>{colorCodes[key].label.charAt(0)}</Hidden>
          </span>
        </>
      ),
      value: codeInfo.index
    };
  }); */
  const marks = typeData.map((colorItem, index) => {
    return {
      label: (
        <>
          <span className={`text-${colorItem.label}`}>
            <Hidden mdDown>{colorItem.label}</Hidden>
            <Hidden mdUp>
              <b>{colorItem.label.charAt(0)}</b>
            </Hidden>
          </span>
        </>
      ),
      value: index
    };
  });
  return (
    <Box pl={3} className="color-selector">
      <Slider
        defaultValue={-1}
        getAriaValueText={valuetext}
        track={false}
        aria-labelledby="resistor-color-code-selector"
        valueLabelFormat={(sliderValue) => {
          /*  let label = colorCodes[sliderValue].label;
          if (colorCodes[sliderValue].value === -1) {
            label = "--";
          } */
          return "label";
        }}
        onChange={(_, value) => {
          setColorCode(bandName, value);
        }}
        step={1}
        min={0}
        max={typeData.length - 1}
        marks={marks}
        valueLabelDisplay="off"
      />
    </Box>
  );
}

export default ColorCodeSelector;
