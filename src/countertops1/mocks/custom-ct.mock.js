import { ASSEMBLY_TYPES } from "./ASSEMBLY_TYPES.const";
import { SHAPE_TYPES } from "./SHAPE_TYPES.const";

export const CUSTOM_CT_M = {
  shapeType: SHAPE_TYPES.CUSTOM,
  assemblyType: ASSEMBLY_TYPES.NOVENTA_SIMPLE,
  selectedToArdis: false,
  rootConfig: {
    scaleX: 1,
    scaleY: 1,
    rotationStage: 0,
    offsetXStage: 0,
    offsetYStage: 0,
  },
  partsData: [],
};

export const CUSTOM_LINE_CT_M = {
  shapeType: SHAPE_TYPES.CUSTOM,
  linesData: [],
};
