export const SQUARE_CT_M = {
  layerData: { xLayer: 0, yLayer: 0 },
  partsData: [
    {
      id: 1,
      x: 0,
      y: 0,
      width: 500,
      height: 500,
      fill: "#c7aa89",
      stroke: "black",
      rotation: 0,
      // fillPatternImage: "",
      fillPatternImage: "/images/patron-de-tablero-de-madera.png",
      fillPatternRepeat: "repeat",
      cornerRadius: [0, 32, 0, 0],
    },
  ],
};

export const SQUARE_LINE_CT_M = {
  layerData: { xLayer: 0, yLayer: 0 },
  linesData: [
    {
      id: 1,
      xRef: 500,
      yRef: 0,
      xInitRef: 0,
      length: 500,
      level: 1,
      // widthOnLevel: 50,
      rotation: 90,
    },
    {
      id: 2,
      xRef: 500,
      yRef: 0,
      xInitRef: 0,
      length: 32,
      level: 2,
      // widthOnLevel: 50,
      rotation: 90,
    },
    {
      id: 3,
      xRef: 500,
      yRef: 32,
      xInitRef: 0,
      length: 468,
      level: 2,
      // widthOnLevel: 50,
      rotation: 90,
    },
  ],
};
