import { ASSEMBLY_TYPES } from "./ASSEMBLY_TYPES.const";
import { DIRECTION } from "./LINES.const";
import { SHAPE_TYPES } from "./SHAPE_TYPES.const";

export const CIRCLE_CT_M = {
  shapeType: SHAPE_TYPES.CIRCLE,
  assemblyType: ASSEMBLY_TYPES.NOVENTA_SIMPLE,
  rootConfig: {
    scaleX: 0.6,
    scaleY: 0.6,
    rotationStage: 0,
    offsetXStage: 0,
    offsetYStage: 0,
  },
  partsData: [
    {
      id: 1,
      x: 0,
      y: 0,
      width: 1200,
      // realWidth: 1200,
      height: 1200,
      // realHeight: 1200,
      fill: "#c7aa89",
      stroke: "black",
      strokeWidth: 0,
      rotation: 0,
      // scaleX: 1,
      // scaleY: 1,
      opacity: 0.9,
      // fillPatternImage: "",
      fillPatternImage: "/images/patron-roble_hickory.jpg",
      fillPatternRepeat: "repeat",
      cornerRadius: [600, 600, 600, 600],
      // cornerRadiusProduction: [300, 300, 300, 300],
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
  ],
};
