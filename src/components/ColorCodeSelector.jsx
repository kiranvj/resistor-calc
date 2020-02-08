import React, { useEffect } from "react";
import { Slider } from "@material-ui/core";
import { colorCodes } from "../core/constants";

function ColorCodeSelector({ setColorCode }) {
  /*   useEffect(() => {
    
  }, []); */
  function valuetext(value) {
    return `${value}°C`;
  }
  const marks = Object.entries(colorCodes).map(([key, codeInfo]) => {
    console.log(codeInfo);
    return { label: colorCodes[key].label, value: codeInfo.value };
  });
  return (
    <div>
      <Slider
        defaultValue={-1}
        getAriaValueText={valuetext}
        aria-labelledby="resistor-color-code-selector"
        valueLabelDisplay="on"
        onChange={(a, b) => {
          console.log(a, b);
        }}
        valueLabelFormat={(value) => {
          let label = colorCodes[value].value;
          if (value === -1) {
            label = "--";
          }
          return label;
        }}
        onChangeCommitted={(_, value) => {
          setColorCode("color1", value);
        }}
        step={1}
        min={-1}
        max={9}
        marks={marks}
      />
    </div>
  );
}

export default ColorCodeSelector;
