import { ASSEMBLY_TYPES } from "./ASSEMBLY_TYPES.const";
import { SHAPE_TYPES } from "./SHAPE_TYPES.const";

export const U1_CT_M = {
  shapeType: SHAPE_TYPES.U1_SHAPED,
  assemblyType: ASSEMBLY_TYPES.NOVENTA_SIMPLE,
  partsData: [
    {
      id: 1,
      x: 0,
      y: 0,
      width: 500,
      height: 200,
      fill: "#c7aa89",
      stroke: "black",
      rotation: -90,
      offsetX: 500,
      offsetY: 0,
      // fillPatternImage: "",
      fillPatternImage: "/images/patron-de-tablero-de-madera.png",
      fillPatternRepeat: "repeat",
      // top-left, top-right, bottom-right, bottom-left
      cornerRadius: [0, 0, 0, 0],
      cornerRadiusProduction: [0, 0, 0, 0],
      cornerRadiusDisabled: [0, 0, 1, 0],
      works: [],
    },
    {
      id: 2,
      x: 0,
      y: 0,
      width: 500,
      height: 200,
      fill: "#c7aa89",
      stroke: "black",
      strokeWidth: 1,
      rotation: 0,
      offsetX: -200, // (-)height P1
      offsetY: 0,
      fillPatternImage: "",
      // fillPatternImage: "/images/patron-de-tablero-de-madera.png",
      fillPatternRepeat: "repeat",
      // top-left, top-right, bottom-right, bottom-left
      cornerRadius: [0, 0, 0, 0],
      cornerRadiusProduction: [0, 0, 0, 0],
      cornerRadiusDisabled: [1, 0, 1, 1],
      works: [],
    },
    {
      id: 3,
      x: 0,
      y: 0,
      width: 300,
      height: 200,
      fill: "#c7aa89",
      stroke: "black",
      rotation: 90,
      offsetX: -200, // (-)height P2
      offsetY: 700, // height P1 + width P2 + height P3
      // fillPatternImage: "",
      fillPatternImage: "/images/patron-de-tablero-de-madera.png",
      fillPatternRepeat: "repeat",
      // top-left, top-right, bottom-right, bottom-left
      cornerRadius: [0, 0, 0, 0],
      cornerRadiusProduction: [0, 0, 0, 0],
      cornerRadiusDisabled: [1, 0, 0, 1],
      works: [],
    },
  ],
};

export const U1_LINE_CT_M = {
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

export const U2_CT_M = {
  shapeType: SHAPE_TYPES.U2_CT_M,
  assemblyType: ASSEMBLY_TYPES.NOVENTA_SIMPLE,
  partsData: [
    {
      id: 1,
      x: 0,
      y: 0,
      width: 500,
      height: 200,
      fill: "#c7aa89",
      stroke: "black",
      rotation: -90,
      offsetX: 500,
      offsetY: 0,
      // fillPatternImage: "",
      fillPatternImage: "/images/patron-de-tablero-de-madera.png",
      fillPatternRepeat: "repeat",
      // top-left, top-right, bottom-right, bottom-left
      cornerRadius: [0, 0, 0, 0],
      cornerRadiusProduction: [0, 0, 0, 0],
      cornerRadiusDisabled: [0, 0, 1, 0],
      works: [],
    },
    {
      id: 2,
      x: 0,
      y: 0,
      width: 300,
      height: 200,
      fill: "#c7aa89",
      stroke: "black",
      strokeWidth: 1,
      rotation: 0,
      offsetX: -200, // (-)height P1
      offsetY: 0,
      fillPatternImage: "",
      // fillPatternImage: "/images/patron-de-tablero-de-madera.png",
      fillPatternRepeat: "repeat",
      // top-left, top-right, bottom-right, bottom-left
      cornerRadius: [0, 0, 0, 0],
      cornerRadiusProduction: [0, 0, 0, 0],
      cornerRadiusDisabled: [1, 0, 1, 1],
      works: [],
    },
    {
      id: 3,
      x: 0,
      y: 0,
      width: 500,
      height: 200,
      fill: "#c7aa89",
      stroke: "black",
      rotation: 90,
      offsetX: 0, // (-)height P2
      offsetY: 700, // height P1 + width P2 + height P3
      // fillPatternImage: "",
      fillPatternImage: "/images/patron-de-tablero-de-madera.png",
      fillPatternRepeat: "repeat",
      // top-left, top-right, bottom-right, bottom-left
      cornerRadius: [0, 0, 0, 0],
      cornerRadiusProduction: [0, 0, 0, 0],
      cornerRadiusDisabled: [1, 0, 0, 1],
      works: [],
    },
  ],
};

export const U2_LINE_CT_M = {
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

export const U3_CT_M = {
  shapeType: SHAPE_TYPES.U2_CT_M,
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
      rotation: -90,
      offsetX: 500,
      offsetY: 0,
      // fillPatternImage: "",
      fillPatternImage: "/images/patron-de-tablero-de-madera.png",
      fillPatternRepeat: "repeat",
      // top-left, top-right, bottom-right, bottom-left
      cornerRadius: [0, 0, 0, 0],
      cornerRadiusProduction: [0, 0, 0, 0],
      cornerRadiusDisabled: [0, 0, 1, 0],
      works: [],
    },
    {
      id: 2,
      x: 0,
      y: 0,
      width: 500,
      height: 200,
      fill: "#c7aa89",
      stroke: "black",
      strokeWidth: 1,
      rotation: 0,
      offsetX: 0, // (-)height P1
      offsetY: 0,
      fillPatternImage: "",
      // fillPatternImage: "/images/patron-de-tablero-de-madera.png",
      fillPatternRepeat: "repeat",
      // top-left, top-right, bottom-right, bottom-left
      cornerRadius: [0, 0, 0, 0],
      cornerRadiusProduction: [0, 0, 0, 0],
      cornerRadiusDisabled: [1, 0, 1, 1],
      works: [],
    },
    {
      id: 3,
      x: 0,
      y: 0,
      width: 500,
      height: 200,
      fill: "#c7aa89",
      stroke: "black",
      rotation: 90,
      offsetX: 0, // (-)height P2
      offsetY: 700, // height P1 + width P2 + height P3
      // fillPatternImage: "",
      fillPatternImage: "/images/patron-de-tablero-de-madera.png",
      fillPatternRepeat: "repeat",
      // top-left, top-right, bottom-right, bottom-left
      cornerRadius: [0, 0, 0, 0],
      cornerRadiusProduction: [0, 0, 0, 0],
      cornerRadiusDisabled: [1, 0, 0, 1],
      works: [],
    },
  ],
};

export const U3_LINE_CT_M = {
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

export const U4_CT_M = {
  shapeType: SHAPE_TYPES.U2_CT_M,
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
      rotation: -90,
      offsetX: 500,
      offsetY: 0,
      // fillPatternImage: "",
      fillPatternImage: "/images/patron-de-tablero-de-madera.png",
      fillPatternRepeat: "repeat",
      // top-left, top-right, bottom-right, bottom-left
      cornerRadius: [0, 0, 0, 0],
      cornerRadiusProduction: [0, 0, 0, 0],
      cornerRadiusDisabled: [0, 0, 1, 0],
      works: [],
    },
    {
      id: 2,
      x: 0,
      y: 0,
      width: 700,
      height: 200,
      fill: "#c7aa89",
      stroke: "black",
      strokeWidth: 1,
      rotation: 0,
      offsetX: 0, // (-)height P1
      offsetY: 0,
      fillPatternImage: "",
      // fillPatternImage: "/images/patron-de-tablero-de-madera.png",
      fillPatternRepeat: "repeat",
      // top-left, top-right, bottom-right, bottom-left
      cornerRadius: [0, 0, 0, 0],
      cornerRadiusProduction: [0, 0, 0, 0],
      cornerRadiusDisabled: [1, 0, 1, 1],
      works: [],
    },
    {
      id: 3,
      x: 0,
      y: 0,
      width: 300,
      height: 200,
      fill: "#c7aa89",
      stroke: "black",
      rotation: 90,
      offsetX: -200, // (-)height P2
      offsetY: 700, // height P1 + width P2 + height P3
      // fillPatternImage: "",
      fillPatternImage: "/images/patron-de-tablero-de-madera.png",
      fillPatternRepeat: "repeat",
      // top-left, top-right, bottom-right, bottom-left
      cornerRadius: [0, 0, 0, 0],
      cornerRadiusProduction: [0, 0, 0, 0],
      cornerRadiusDisabled: [1, 0, 0, 1],
      works: [],
    },
  ],
};

export const U4_LINE_CT_M = {
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

export const U_DIV_LINE_CT_M = {
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
