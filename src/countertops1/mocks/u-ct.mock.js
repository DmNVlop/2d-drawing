import { ASSEMBLY_TYPES } from "./ASSEMBLY_TYPES.const";
import { SHAPE_TYPES } from "./SHAPE_TYPES.const";

export const U1_CT_M = {
  shapeType: SHAPE_TYPES.UShaped_u1,
  assemblyType: ASSEMBLY_TYPES.NOVENTA_SIMPLE,
  selectedToArdis: false,
  rootConfig: {
    scaleX: 0.4,
    scaleY: 0.4,
    rotationStage: 0,
    offsetXStage: 0,
    offsetYStage: 0,
  },
  partsData: [
    {
      id: 1,
      x: 0,
      y: 0,
      width: 1600,
      height: 645,
      fill: "#937e65",
      stroke: "black",
      strokeWidth: 0,
      rotation: -90,
      // scaleX: 1,
      // scaleY: 1,
      opacity: 0.9,
      // offsetX: 500,
      // offsetY: 0,
      // fillPatternImage: "",
      fillPatternImage: "/images/patron-roble_hickory.jpg",
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
      width: 2100,
      height: 645,
      fill: "#a99884",
      stroke: "black",
      strokeWidth: 0,
      rotation: 0,
      // scaleX: 1,
      // scaleY: 1,
      opacity: 0.9,
      // offsetX: -200, // (-)height P1
      // offsetY: 0,
      fillPatternImage: "",
      // fillPatternImage: "/images/patron-roble_hickory.jpg",
      fillPatternRepeat: "repeat",
      // top-left, top-right, bottom-right, bottom-left
      cornerRadius: [0, 0, 0, 0],
      cornerRadiusProduction: [0, 0, 0, 0],
      cornerRadiusDisabled: [1, 0, 1, 1],
      haveLines: [1, 0, 0, 0],
      works: [],
    },
    {
      id: 3,
      x: 0,
      y: 0,
      width: 1200,
      height: 645,
      fill: "#937e65",
      stroke: "black",
      strokeWidth: 0,
      rotation: 90,
      // scaleX: 1,
      // scaleY: 1,
      opacity: 0.9,
      // offsetX: -200, // (-)height P2
      // offsetY: 700, // height P1 + width P2 + height P3
      // fillPatternImage: "",
      fillPatternImage: "/images/patron-roble_hickory.jpg",
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
  shapeType: SHAPE_TYPES.UShaped_u2,
  assemblyType: ASSEMBLY_TYPES.NOVENTA_SIMPLE,
  selectedToArdis: false,
  rootConfig: {
    scaleX: 0.4,
    scaleY: 0.4,
    rotationStage: 0,
    offsetXStage: 0,
    offsetYStage: 0,
  },
  partsData: [
    {
      id: 1,
      x: 0,
      y: 0,
      width: 2100,
      height: 645,
      fill: "#937e65",
      stroke: "black",
      strokeWidth: 0,
      rotation: -90,
      // scaleX: 1,
      // scaleY: 1,
      opacity: 0.9,
      // offsetX: 500,
      // offsetY: 0,
      // fillPatternImage: "",
      fillPatternImage: "/images/patron-roble_hickory.jpg",
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
      width: 1600,
      height: 645,
      fill: "#937e65",
      stroke: "black",
      strokeWidth: 0,
      rotation: 0,
      // scaleX: 1,
      // scaleY: 1,
      opacity: 0.9,
      // offsetX: -200, // (-)height P1
      // offsetY: 0,
      fillPatternImage: "",
      // fillPatternImage: "/images/patron-roble_hickory.jpg",
      fillPatternRepeat: "repeat",
      // top-left, top-right, bottom-right, bottom-left
      cornerRadius: [0, 0, 0, 0],
      cornerRadiusProduction: [0, 0, 0, 0],
      cornerRadiusDisabled: [1, 1, 1, 1],
      works: [],
    },
    {
      id: 3,
      x: 0,
      y: 0,
      width: 1800,
      height: 645,
      fill: "#937e65",
      stroke: "black",
      strokeWidth: 0,
      rotation: 90,
      // scaleX: 1,
      // scaleY: 1,
      opacity: 0.9,
      // offsetX: 0, // (-)height P2
      // offsetY: 700, // height P1 + width P2 + height P3
      // fillPatternImage: "",
      fillPatternImage: "/images/patron-roble_hickory.jpg",
      fillPatternRepeat: "repeat",
      // top-left, top-right, bottom-right, bottom-left
      cornerRadius: [0, 0, 0, 0],
      cornerRadiusProduction: [0, 0, 0, 0],
      cornerRadiusDisabled: [0, 0, 0, 1],
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
  shapeType: SHAPE_TYPES.UShaped_u3,
  assemblyType: ASSEMBLY_TYPES.NOVENTA_SIMPLE,
  selectedToArdis: false,
  rootConfig: {
    scaleX: 0.4,
    scaleY: 0.4,
    rotationStage: 0,
    offsetXStage: 0,
    offsetYStage: 0,
  },
  partsData: [
    {
      id: 1,
      x: 0,
      y: 0,
      width: 1500,
      height: 645,
      fill: "#937e65",
      stroke: "black",
      strokeWidth: 0,
      rotation: -90,
      // scaleX: 1,
      // scaleY: 1,
      opacity: 0.9,
      // offsetX: 500, // width P1 + height P2
      // offsetY: 0,
      // fillPatternImage: "",
      fillPatternImage: "/images/patron-roble_hickory.jpg",
      fillPatternRepeat: "repeat",
      // top-left, top-right, bottom-right, bottom-left
      cornerRadius: [0, 0, 0, 0],
      cornerRadiusProduction: [0, 0, 0, 0],
      cornerRadiusDisabled: [0, 1, 1, 0],
      works: [],
    },
    {
      id: 2,
      x: 0,
      y: 0,
      width: 2100,
      height: 645,
      fill: "#937e65",
      stroke: "black",
      strokeWidth: 0,
      rotation: 0,
      // scaleX: 1,
      // scaleY: 1,
      opacity: 0.9,
      // offsetX: 0, // (-)height P1
      // offsetY: 0,
      fillPatternImage: "",
      // fillPatternImage: "/images/patron-roble_hickory.jpg",
      fillPatternRepeat: "repeat",
      // top-left, top-right, bottom-right, bottom-left
      cornerRadius: [0, 0, 0, 0],
      cornerRadiusProduction: [0, 0, 0, 0],
      cornerRadiusDisabled: [0, 1, 1, 1],
      works: [],
    },
    {
      id: 3,
      x: 0,
      y: 0,
      width: 2000,
      height: 645,
      fill: "#937e65",
      stroke: "black",
      strokeWidth: 0,
      rotation: 90,
      // scaleX: 1,
      // scaleY: 1,
      opacity: 0.9,
      // offsetX: 0, // (-)height P2
      // offsetY: 700, // height P1 + width P2
      // fillPatternImage: "",
      fillPatternImage: "/images/patron-roble_hickory.jpg",
      fillPatternRepeat: "repeat",
      // top-left, top-right, bottom-right, bottom-left
      cornerRadius: [0, 0, 0, 0],
      cornerRadiusProduction: [0, 0, 0, 0],
      cornerRadiusDisabled: [0, 0, 0, 1],
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
  shapeType: SHAPE_TYPES.UShaped_u4,
  assemblyType: ASSEMBLY_TYPES.NOVENTA_SIMPLE,
  selectedToArdis: false,
  rootConfig: {
    scaleX: 0.4,
    scaleY: 0.4,
    rotationStage: 0,
    offsetXStage: 0,
    offsetYStage: 0,
  },
  partsData: [
    {
      id: 1,
      x: 0,
      y: 0,
      width: 1400,
      height: 645,
      fill: "#937e65",
      stroke: "black",
      strokeWidth: 0,
      rotation: -90,
      // scaleX: 1,
      // scaleY: 1,
      opacity: 0.9,
      // offsetX: 500, // width P1 + height P2
      // offsetY: 0,
      // fillPatternImage: "",
      fillPatternImage: "/images/patron-roble_hickory.jpg",
      fillPatternRepeat: "repeat",
      // top-left, top-right, bottom-right, bottom-left
      cornerRadius: [0, 0, 0, 0],
      cornerRadiusProduction: [0, 0, 0, 0],
      cornerRadiusDisabled: [0, 1, 1, 0],
      works: [],
    },
    {
      id: 2,
      x: 0,
      y: 0,
      width: 2100,
      height: 645,
      fill: "#937e65",
      stroke: "black",
      strokeWidth: 0,
      rotation: 0,
      // scaleX: 1,
      // scaleY: 1,
      opacity: 0.9,
      // offsetX: 0,
      // offsetY: 0,
      fillPatternImage: "",
      // fillPatternImage: "/images/patron-roble_hickory.jpg",
      fillPatternRepeat: "repeat",
      // top-left, top-right, bottom-right, bottom-left
      cornerRadius: [0, 0, 0, 0],
      cornerRadiusProduction: [0, 0, 0, 0],
      cornerRadiusDisabled: [0, 0, 1, 1],
      works: [],
    },
    {
      id: 3,
      x: 0,
      y: 0,
      width: 1200,
      height: 645,
      fill: "#937e65",
      stroke: "black",
      strokeWidth: 0,
      rotation: 90,
      // scaleX: 1,
      // scaleY: 1,
      opacity: 0.9,
      // offsetX: -200, // (-)height P2
      // offsetY: 700, // width P2
      // fillPatternImage: "",
      fillPatternImage: "/images/patron-roble_hickory.jpg",
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
