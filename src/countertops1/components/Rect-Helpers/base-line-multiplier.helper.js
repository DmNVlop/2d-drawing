export const xBaseMultiplier = (scaleX) => {
  const lookupTable = [
    { min: 0, max: 0.2, value: 25 },
    { min: 0.2, max: 0.4, value: 29 },
    { min: 0.4, max: 0.6, value: 33 },
    { min: 0.6, max: 0.8, value: 37 },
    { min: 0.8, max: 1.0, value: 41 },
    { min: 1.0, max: 1.2, value: 45 },
    { min: 1.2, max: 1.4, value: 48 },
    { min: 1.4, max: 1.6, value: 52 },
    { min: 1.6, max: 1.8, value: 56 },
    { min: 1.8, max: 2.0, value: 61 },
    { min: 2.0, max: Infinity, value: 68 },
  ];

  for (let i = 0; i < lookupTable.length; i++) {
    if (scaleX > lookupTable[i].min && scaleX <= lookupTable[i].max) {
      return lookupTable[i].value;
    }
  }

  return 40;
};

export const xBaseMultiplierL = (scaleX) => {
  const lookupTable = [
    { min: 0, max: 0.2, value: 130 },
    { min: 0.2, max: 0.4, value: 88 },
    { min: 0.4, max: 0.6, value: 66 },
    { min: 0.6, max: 0.8, value: 52 },
    { min: 0.8, max: 1.0, value: 46 },
    { min: 1.0, max: 1.2, value: 42 },
    { min: 1.2, max: 1.4, value: 38 },
    { min: 1.4, max: 1.6, value: 36 },
    { min: 1.6, max: 1.8, value: 34 },
    { min: 1.8, max: 2.0, value: 32 },
    { min: 2.0, max: Infinity, value: 30 },
  ];

  for (let i = 0; i < lookupTable.length; i++) {
    if (scaleX > lookupTable[i].min && scaleX <= lookupTable[i].max) {
      return lookupTable[i].value;
    }
  }

  return 40;
};

export const yBaseMultiplier = (scaleX) => {
  const lookupTable = [
    { min: 0, max: 0.2, value: 17 },
    { min: 0.2, max: 0.4, value: 16 },
    { min: 0.4, max: 0.6, value: 13 },
    { min: 0.6, max: 0.8, value: 10 },
    { min: 0.8, max: 1.0, value: 7 },
    { min: 1.0, max: 1.2, value: 5 },
    { min: 1.2, max: 1.4, value: 3 },
    { min: 1.4, max: 1.6, value: 1 },
    { min: 1.6, max: 1.8, value: -2 },
    { min: 1.8, max: 2.0, value: -5 },
    { min: 2.0, max: Infinity, value: -8 },
  ];

  for (let i = 0; i < lookupTable.length; i++) {
    if (scaleX > lookupTable[i].min && scaleX <= lookupTable[i].max) {
      return lookupTable[i].value;
    }
  }

  return 40;
};

export const yBaseMultiplierL = (scaleX) => {
  const lookupTable = [
    { min: 0, max: 0.2, value: 80 },
    { min: 0.2, max: 0.4, value: 76 },
    { min: 0.4, max: 0.6, value: 62 },
    { min: 0.6, max: 0.8, value: 52 },
    { min: 0.8, max: 1.0, value: 42 },
    { min: 1.0, max: 1.2, value: 38 },
    { min: 1.2, max: 1.4, value: 36 },
    { min: 1.4, max: 1.6, value: 34 },
    { min: 1.6, max: 1.8, value: 32 },
    { min: 1.8, max: 2.0, value: 31 },
    { min: 2.0, max: Infinity, value: 30 },
  ];

  for (let i = 0; i < lookupTable.length; i++) {
    if (scaleX > lookupTable[i].min && scaleX <= lookupTable[i].max) {
      return lookupTable[i].value;
    }
  }

  return 40;
};
