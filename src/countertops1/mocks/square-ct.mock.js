import { ASSEMBLY_TYPES } from "./ASSEMBLY_TYPES.const";
import { DIRECTION } from "./LINES.const";
import { SHAPE_TYPES } from "./SHAPE_TYPES.const";

export const SQUARE_CT_M = {
  shapeType: SHAPE_TYPES.SQUARE,
  assemblyType: ASSEMBLY_TYPES.NOVENTA_SIMPLE,
  rootConfig: {
    scaleX: 1,
    scaleY: 1,
  },
  partsData: [
    {
      id: 1,
      x: 0,
      y: 0,
      width: 600,
      realWidth: 600,
      height: 600,
      realHeight: 600,
      fill: "#c7aa89",
      stroke: "black",
      strokeWidth: 1,
      rotation: 0,
      // scaleX: 1,
      // scaleY: 1,
      opacity: 0.8,
      // fillPatternImage: "",
      fillPatternImage: "/images/patron-de-tablero-de-madera.png",
      fillPatternRepeat: "repeat",
      cornerRadius: [0, 0, 0, 0],
      cornerRadiusProduction: [0, 0, 0, 0],
      cornerRadiusDisabled: [0, 0, 0, 0],
      works: [],
    },
  ],
};

export const SQUARE_LINE_CT_M = {
  shapeType: SHAPE_TYPES.SQUARE,
  layerData: { xLayer: 0, yLayer: 0 },
  linesData: [
    {
      id: 1,
      xRef: 600,
      yRef: 0,
      xInitRef: 0,
      length: 600,
      level: 1,
      // widthOnLevel: 50,
      rotation: 90,
      text: "600",
      direction: DIRECTION.VERTICAL,
    },
    {
      id: 2,
      xRef: 0,
      yRef: 0,
      xInitRef: 0,
      length: 600,
      level: 1,
      // widthOnLevel: 50,
      rotation: 0,
      text: "600",
      direction: DIRECTION.HORIZONTAL,
    },
    // {
    //   id: 3,
    //   xRef: 500,
    //   yRef: 32,
    //   xInitRef: 0,
    //   length: 468,
    //   level: 2,
    //   // widthOnLevel: 50,
    //   rotation: 90,
    // },
  ],
};
