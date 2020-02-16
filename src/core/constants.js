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
const SILVER = 10;
const GOLD = 11;

export const NO_COLOR = "no-color-selected";
export const colorCodes = {
  [NONE]: {
    value: -1,
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

const MULTI_NONE = -1;
const MULTI_SILVER = 0.01;
const MULTI_GOLD = 0.1;
const MULTI_BLACK = 1;
const MULTI_BROWN = 10;
const MULTI_RED = 100;
const MULTI_ORANGE = 1000;
const MULTI_YELLOW = 10000;
const MULTI_GREEN = 100000;
const MULTI_BLUE = 1000000;
const MULTI_VIOLET = 10000000;

export const multipierColorCodes = {
  [MULTI_NONE]: {
    value: "-1",
    label: "No color"
  },
  [MULTI_SILVER]: {
    value: 0.01,
    label: "silver"
  },
  [MULTI_GOLD]: {
    value: 0.1,
    label: "gold"
  },
  [MULTI_BLACK]: {
    value: 0,
    label: "black"
  },
  [MULTI_BROWN]: {
    value: 1,
    label: "brown"
  },
  [MULTI_RED]: {
    value: 2,
    label: "red"
  },
  [MULTI_ORANGE]: {
    value: 3,
    label: "orange"
  },
  [MULTI_YELLOW]: {
    value: 4,
    label: "yellow"
  },
  [MULTI_GREEN]: {
    value: 5,
    label: "green"
  },
  [MULTI_BLUE]: {
    value: 6,
    label: "blue"
  },
  [MULTI_VIOLET]: {
    value: 7,
    label: "violet"
  }
}; /* ;
export const toleranceColorCodes = {
  [TOLERANCE_NONE]: {
    value: 20,
    label: "none"
  },
  [TOLERANCE_GOLD]: {
    value: 0,
    label: "gold"
  },
  [TOLERANCE_SILVER]: {
    value: 0,
    label: "silver"
  },
  [TOLERANCE_BROWN]: {
    value: 0,
    label: "silver"
  },
  [TOLERANCE_RED]: {
    value: 0,
    label: "silver"
  },
  [TOLERANCE_GREEN]: {
    value: 0,
    label: "silver"
  },
  [TOLERANCE_BLUE]: {
    value: 0,
    label: "silver"
  },
  [TOLERANCE_VIOLET]: {
    value: 0,
    label: "silver"
  },
  [TOLERANCE_GRAY]: {
    value: 0,
    label: "silver"
  }
};
 */
