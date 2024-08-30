import { ASSEMBLY_TYPES } from "./ASSEMBLY_TYPES.const";
import { SHAPE_TYPES } from "./SHAPE_TYPES.const";

export const CUSTOM_CT_M = {
  shapeType: SHAPE_TYPES.CUSTOM,
  assemblyType: ASSEMBLY_TYPES.NOVENTA_SIMPLE,
  selectedToArdis: false,
  rootConfig: {
    scaleX: 0.35,
    scaleY: 0.35,
    rotationStage: 0,
    offsetXStage: 0,
    offsetYStage: 0,
  },
  partsData: [
    {
      id: 1,
      x: 0,
      y: 0,
      width1: 2400,
      width2: 2300,
      height: 645,
      fill: "#785f41",
      stroke: "black",
      strokeWidth: 0,
      rotation: -90,
      opacity: 0.9,
      // offsetX: 500,
      // offsetY: 0,
      // fillPatternImage: "",
      fillPatternImage: "/images/patron-roble_hickory.jpg",
      fillPatternRepeat: "repeat",
      // top-left, top-right, bottom-right, bottom-left
      cornerRadius: [20, 40, 60, 80],
      cornerRadiusDisabled: [0, 0, 0, 0],
      haveLines: [0, 0, 0, 0],
      works: [],
    },
    {
      id: 2,
      x: 0,
      y: 0,
      width1: 1500,
      width2: 1500,
      height: 645,
      fill: "#785f41",
      stroke: "black",
      strokeWidth: 0,
      rotation: 0,
      opacity: 0.9,
      // offsetX: -200,
      // offsetY: 0,
      // fillPatternImage: "",
      fillPatternImage: "/images/patron-roble_hickory.jpg",
      fillPatternRepeat: "repeat",
      // top-left, top-right, bottom-right, bottom-left
      cornerRadius: [20, 250, 160, 80],
      cornerRadiusDisabled: [0, 0, 0, 0],
      // top, bottom, left, right
      haveLines: [0, 0, 0, 0],
      works: [],
    },
  ],
};

export const CUSTOM_LINE_CT_M = {
  shapeType: SHAPE_TYPES.CUSTOM,
  linesData: [],
};
