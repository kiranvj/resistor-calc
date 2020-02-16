import React from "react";
import { Slider, Hidden, Box } from "@material-ui/core";
import { colorCodes } from "../core/constants";

function ColorCodeSelector({ setColorCode, bandName }) {
  /*   useEffect(() => {
    
  }, []); */
  function valuetext(value) {
    return value;
  }
  const marks = Object.entries(colorCodes).map(([key, codeInfo], index) => {
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
      value: codeInfo.value
    };
  });
  return (
    <Box pl={3} className="color-selector">
      <Slider
        defaultValue={-1}
        getAriaValueText={valuetext}
        track={false}
        aria-labelledby="resistor-color-code-selector"
        valueLabelFormat={(value) => {
          let label = colorCodes[value].value;
          if (value === -1) {
            label = "--";
          }
          return label;
        }}
        onChange={(_, value) => {
          setColorCode(bandName, colorCodes[value].value);
        }}
        step={1}
        min={-1}
        max={9}
        marks={marks}
        valueLabelDisplay="off"
      />
    </Box>
  );
}

export default ColorCodeSelector;
