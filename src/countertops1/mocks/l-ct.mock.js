import { ASSEMBLY_TYPES } from "./ASSEMBLY_TYPES.const";
import { SHAPE_TYPES } from "./SHAPE_TYPES.const";

export const L1_CT_M = {
  shapeType: SHAPE_TYPES.U1_SHAPED,
  assemblyType: ASSEMBLY_TYPES.NOVENTA_SIMPLE,
  partsData: [
    {
      id: 1,
      x: 0,
      y: 0,
      width: 1200,
      height: 600,
      fill: "#c7aa89",
      stroke: "black",
      strokeWidth: 1,
      rotation: -90,
      // offsetX: 500,
      // offsetY: 0,
      // fillPatternImage: "",
      fillPatternImage: "/images/patron-de-tablero-de-madera.png",
      fillPatternRepeat: "repeat",
      // top-left, top-right, bottom-right, bottom-left
      cornerRadius: [0, 0, 0, 0],
      cornerRadiusProduction: [0, 0, 0, 0],
      cornerRadiusDisabled: [0, 0, 1, 0],
      scaleX: 0.55,
      scaleY: 0.55,
      opacity: 1,
      works: [],
    },
    {
      id: 2,
      x: 0,
      y: 0,
      width: 650,
      height: 600,
      fill: "#c7aa89",
      stroke: "black",
      strokeWidth: 1,
      rotation: 0,
      // offsetX: -200,
      // offsetY: 0,
      fillPatternImage: "",
      // fillPatternImage: "/images/patron-de-tablero-de-madera.png",
      fillPatternRepeat: "repeat",
      // top-left, top-right, bottom-right, bottom-left
      cornerRadius: [0, 0, 0, 0],
      cornerRadiusProduction: [0, 0, 0, 0],
      cornerRadiusDisabled: [1, 0, 0, 1],
      scaleX: 0.55,
      scaleY: 0.55,
      opacity: 1,
      works: [],
    },
  ],
};

export const L1_LINE_CT_M = {
  layerData: { xLayer: 0, yLayer: 0 },
  linesData: [
    {
      id: 1,
      xRef: 700,
      yRef: 0,
      xInitRef: 0,
      length: 500,
      level: 2,
      // widthOnLevel: 50,
      rotation: 90,
    },
    {
      id: 2,
      xRef: 700,
      yRef: 0,
      xInitRef: 0,
      length: 200,
      level: 1,
      // widthOnLevel: 50,
      rotation: 90,
    },
    {
      id: 3,
      xRef: 700,
      yRef: 200,
      xInitRef: 0,
      length: 300,
      level: 1,
      // widthOnLevel: 50,
      rotation: 90,
    },
  ],
};

export const L2_CT_M = {
  shapeType: SHAPE_TYPES.U1_SHAPED,
  assemblyType: ASSEMBLY_TYPES.NOVENTA_SIMPLE,
  partsData: [
    {
      id: 1,
      x: 0,
      y: 0,
      width: 300,
      height: 200,
      fill: "#c7aa89",
      stroke: "black",
      strokeWidth: 1,
      rotation: -90,
      offsetX: 500,
      offsetY: 0,
      // fillPatternImage: "",
      fillPatternImage: "/images/patron-de-tablero-de-madera.png",
      fillPatternRepeat: "repeat",
      cornerRadius: [0, 0, 0, 0],
      cornerRadiusProduction: [0, 0, 0, 0],
      cornerRadiusDisabled: [false, false, true, false],
    },
    {
      id: 2,
      x: 0,
      y: 0,
      width: 650,
      height: 200,
      fill: "#c7aa89",
      stroke: "black",
      strokeWidth: 1,
      rotation: 0,
      offsetX: 0,
      offsetY: 0,
      fillPatternImage: "",
      // fillPatternImage: "/images/patron-de-tablero-de-madera.png",
      fillPatternRepeat: "repeat",
      cornerRadius: [0, 0, 0, 0],
      cornerRadiusDisabled: [false, false, true, false],
    },
  ],
};

export const L2_LINE_CT_M = {
  layerData: { xLayer: 0, yLayer: 0 },
  linesData: [
    {
      id: 1,
      xRef: 650,
      yRef: 0,
      xInitRef: 0,
      length: 500,
      level: 1,
      // widthOnLevel: 50,
      rotation: 90,
    },
    {
      id: 2,
      xRef: 650,
      yRef: 0,
      xInitRef: 0,
      length: 200,
      level: 2,
      // widthOnLevel: 50,
      rotation: 90,
    },
    {
      id: 3,
      xRef: 650,
      yRef: 200,
      xInitRef: 0,
      length: 300,
      level: 2,
      // widthOnLevel: 50,
      rotation: 90,
    },
  ],
};

export const L_DIV_LINE_CT_M = {
  layerData: { xLayer: 0, yLayer: 0 },
  linesData: [
    {
      id: 1,
      xRef: 500,
      yRef: 0,
      xInitRef: 0,
      length: 200,
      level: 1,
      // widthOnLevel: 50,
      rotation: 90,
    },
  ],
};
