export function formatResistorValue(value) {
  let formatedValue = value;

  if (value >= 1000) {
    formatedValue = value / 1000 + " k";
  }

  return formatedValue;
}
