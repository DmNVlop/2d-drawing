import { SHAPE_TYPES } from "./SHAPE_TYPES";

export const CIRCLE_CT_M = {
  shapeType: SHAPE_TYPES.CIRCLE,
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
      cornerRadius: [250, 250, 250, 250],
      cornerRadiusDisabled: [false, false, true, false],
    },
  ],
};

export const CIRCLE_LINE_CT_M = {
  shapeType: SHAPE_TYPES.CIRCLE,
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
  ],
};
