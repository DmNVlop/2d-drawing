import { ASSEMBLY_TYPES } from "./ASSEMBLY_TYPES";
import { DIRECTION_TYPES } from "./LINES_CONST";
import { SHAPE_TYPES } from "./SHAPE_TYPES";

export const CIRCLE_CT_M = {
  shapeType: SHAPE_TYPES.CIRCLE,
  assemblyType: ASSEMBLY_TYPES.NOVENTA_SIMPLE,
  partsData: [
    {
      id: 1,
      x: 0,
      y: 0,
      width: 700,
      realWidth: 700,
      height: 700,
      realHeight: 700,
      fill: "#c7aa89",
      stroke: "black",
      rotation: 0,
      // fillPatternImage: "",
      fillPatternImage: "/images/patron-de-tablero-de-madera.png",
      fillPatternRepeat: "repeat",
      cornerRadius: [350, 350, 350, 350],
      cornerRadiusProduction: [350, 350, 350, 350],
      cornerRadiusDisabled: [0, 0, 0, 0],
      works: [],
    },
  ],
};

export const CIRCLE_LINE_CT_M = {
  shapeType: SHAPE_TYPES.CIRCLE,
  layerData: { xLayer: 0, yLayer: 0 },
  linesData: [
    {
      id: 1,
      xRef: 700,
      yRef: 0,
      xInitRef: 0,
      length: 700,
      level: 1,
      // widthOnLevel: 50,
      rotation: 90,
      text: "700",
      direction: DIRECTION_TYPES.VERTICAL,
    },
    {
      id: 2,
      xRef: 0,
      yRef: 0,
      xInitRef: 0,
      length: 700,
      level: 1,
      // widthOnLevel: 50,
      rotation: 0,
      text: "700",
      direction: DIRECTION_TYPES.HORIZONTAL,
    },
  ],
};
