import { NONE } from "./constants";

export function formatResistorValue(value) {
  let formatedValue = value;
  if (isNaN(value)) {
    formatedValue = "--";
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
