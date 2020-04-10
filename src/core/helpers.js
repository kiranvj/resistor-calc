import React from "react";
import {
  NONE,
  colorCodes,
  multiplerCodes,
  toleranceCodes,
  UNICODE_PLUS_MINUS
} from "./constants";

export function formatResistorValue(value) {
  let formatedValue = value;
  if (isNaN(value)) {
    formatedValue = "--";
  } else if (value >= 1000000000) {
    formatedValue = value / 1000000000 + " G";
  } else if (value >= 1000000) {
    formatedValue = value / 1000000 + " M";
  } else if (value >= 1000) {
    formatedValue = value / 1000 + " k";
  } else {
    formatedValue = formatedValue + " ";
  }
  return formatedValue;
}

export function getLabel(value, colorData) {
  return colorData[value] !== 0 || colorData[value] !== undefined
    ? colorData[value].label
    : NONE;
}

/**
 * Get value of the selected color
 *
 * @param {integer} index | the array index
 * @param {Array} typeData | Array where color code values are stored
 * @param {String} band | Band name multiplier/tolerance
 */
export function getColorDisplayValue(index, typeData, band = "") {
  let colorValue = NONE;
  if (band === "multipler") {
    colorValue =
      typeData[index].value !== -1 ? (
        <>
          - 10{" "}
          <sup>
            {Math.round(Math.log(typeData[index].value) / Math.log(10))}
          </sup>
        </>
      ) : null;
  } else if (band === "tolerance") {
    colorValue = UNICODE_PLUS_MINUS + typeData[index].value;
  } else {
    colorValue =
      typeData[index].value !== -1 ? `- ${typeData[index].value}` : null;
  }
  return colorValue;
}

export function getCalculationDisplayDetails(codes) {
  if (
    colorCodes[codes.color1].value !== -1 &&
    colorCodes[codes.color2].value !== -1 &&
    multiplerCodes[codes.multiplier].value !== -1
  ) {
    return ` = ${colorCodes[codes.color1].value}${
      colorCodes[codes.color2].value
    } x ${multiplerCodes[codes.multiplier].value}Ω ${UNICODE_PLUS_MINUS} ${
      toleranceCodes[codes.tolerance].value
    }`;
  } else {
    return null;
  }
}
