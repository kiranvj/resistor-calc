export const NONE = -1;
const BLACK = 0;
const BROWN = 1;
const RED = 2;
const ORANGE = 3;
const YELLOW = 4;
const GREEN = 5;
const BLUE = 6;
const VIOLET = 7;
const GRAY = 8;
const WHITE = 9;
export const NO_COLOR = "no-color-selected";
export const colorCodes = {
  [NONE]: {
    value: "-1",
    label: "No color"
  },
  [BLACK]: {
    value: 0,
    label: "black"
  },
  [BROWN]: {
    value: 1,
    label: "brown"
  },
  [RED]: {
    value: 2,
    label: "red"
  },
  [ORANGE]: {
    value: 3,
    label: "orange"
  },
  [YELLOW]: {
    value: 4,
    label: "yellow"
  },
  [GREEN]: {
    value: 5,
    label: "green"
  },
  [BLUE]: {
    value: 6,
    label: "blue"
  },
  [VIOLET]: {
    value: 7,
    label: "violet"
  },
  [GRAY]: {
    value: 8,
    label: "gray"
  },
  [WHITE]: {
    value: 9,
    label: "white"
  }
};

export const toleranceColorCodes = {
  GOLD: {
    value: 0,
    label: "gold",
    isTolerance: true
  },
  SILVER: {
    value: 0,
    label: "silver",
    isTolerance: true
  },
  NONE: {
    value: 20,
    label: "none",
    isTolerance: true
  }
};
