import { ASSEMBLY_TYPES } from "../mocks/ASSEMBLY_TYPES.const";
import { DIRECTION } from "../mocks/LINES.const";
import { SHAPE_TYPES } from "../mocks/SHAPE_TYPES.const";
import { PARTS_POSITION } from "../mocks/PARTS.const";
import { SIMPLE_CT_M, SIMPLE_LINE_CT_M } from "../mocks/simple-ct.mock";
import { SQUARE_CT_M, SQUARE_LINE_CT_M } from "../mocks/square-ct.mock";
import { CIRCLE_CT_M, CIRCLE_LINE_CT_M } from "../mocks/circle-ct.mock";
import {
  L1_CT_M,
  L1_LINE_CT_M,
  L2_CT_M,
  L2_LINE_CT_M,
} from "../mocks/l-ct.mock";
import {
  U1_CT_M,
  U1_LINE_CT_M,
  U2_CT_M,
  U2_LINE_CT_M,
  U3_CT_M,
  U3_LINE_CT_M,
  U4_CT_M,
  U4_LINE_CT_M,
} from "../mocks/u-ct.mock";

export const temp_init_state = {
  selectedPiece: null,
  numberOfPiece: null,
  // shapeType: null,
  // partsData: SIMPLE_CT_M.partsData,
  // linesData: SIMPLE_LINE_CT_M.linesData,
  simple: {
    shapeType: SIMPLE_CT_M.shapeType,
    partsData: SIMPLE_CT_M.partsData,
    linesData: SIMPLE_LINE_CT_M.linesData,
    rootConfig: SIMPLE_CT_M.rootConfig,
    assemblyType: SIMPLE_CT_M.assemblyType,
    selectedToArdis: SIMPLE_CT_M.selectedToArdis,
  },
  square: {
    shapeType: SQUARE_CT_M.shapeType,
    partsData: SQUARE_CT_M.partsData,
    linesData: SQUARE_LINE_CT_M.linesData,
    rootConfig: SQUARE_CT_M.rootConfig,
    assemblyType: SQUARE_CT_M.assemblyType,
    selectedToArdis: SQUARE_CT_M.selectedToArdis,
  },
  circle: {
    shapeType: CIRCLE_CT_M.shapeType,
    partsData: CIRCLE_CT_M.partsData,
    linesData: CIRCLE_LINE_CT_M.linesData,
    rootConfig: CIRCLE_CT_M.rootConfig,
    assemblyType: CIRCLE_CT_M.assemblyType,
    selectedToArdis: CIRCLE_CT_M.selectedToArdis,
  },
  "l-shaped_l1": {
    shapeType: L1_CT_M.shapeType,
    partsData: L1_CT_M.partsData,
    linesData: L1_LINE_CT_M.linesData,
    rootConfig: L1_CT_M.rootConfig,
    assemblyType: L1_CT_M.assemblyType,
    selectedToArdis: L1_CT_M.selectedToArdis,
  },
  "l-shaped_l2": {
    shapeType: L2_CT_M.shapeType,
    partsData: L2_CT_M.partsData,
    linesData: L2_LINE_CT_M.linesData,
    rootConfig: L2_CT_M.rootConfig,
    assemblyType: L2_CT_M.assemblyType,
    selectedToArdis: L2_CT_M.selectedToArdis,
  },
  "u-shaped_u1": {
    shapeType: U1_CT_M.shapeType,
    partsData: U1_CT_M.partsData,
    linesData: U1_LINE_CT_M.linesData,
    rootConfig: U1_CT_M.rootConfig,
    assemblyType: U1_CT_M.assemblyType,
    selectedToArdis: U1_CT_M.selectedToArdis,
  },
  "u-shaped_u2": {
    shapeType: U2_CT_M.shapeType,
    partsData: U2_CT_M.partsData,
    linesData: U2_LINE_CT_M.linesData,
    rootConfig: U2_CT_M.rootConfig,
    assemblyType: U2_CT_M.assemblyType,
    selectedToArdis: U2_CT_M.selectedToArdis,
  },
  "u-shaped_u3": {
    shapeType: U3_CT_M.shapeType,
    partsData: U3_CT_M.partsData,
    linesData: U3_LINE_CT_M.linesData,
    rootConfig: U3_CT_M.rootConfig,
    assemblyType: U3_CT_M.assemblyType,
    selectedToArdis: U3_CT_M.selectedToArdis,
  },
  "u-shaped_u4": {
    shapeType: U4_CT_M.shapeType,
    partsData: U4_CT_M.partsData,
    linesData: U4_LINE_CT_M.linesData,
    rootConfig: U4_CT_M.rootConfig,
    assemblyType: U4_CT_M.assemblyType,
    selectedToArdis: U4_CT_M.selectedToArdis,
  },
};

// NO FUNCIONA POR AHORA
export const _INITIAL_STATE = {
  [SHAPE_TYPES.SIMPLE]: {
    shapeType: SHAPE_TYPES.SIMPLE,
    assemblyType: ASSEMBLY_TYPES.NOVENTA_SIMPLE,
    xInitial: 0,
    yInitial: 0,
    partsData: [
      {
        id: 1,
        x: 0,
        y: 0,
        width: 700,
        realWidth: 700,
        height: 400,
        realHeight: 400,
        fill: "#c7aa89",
        stroke: "black",
        rotation: 0,
        direction: DIRECTION.HORIZONTAL,
        positionAfter: PARTS_POSITION.FIRST,
        // fillPatternImage: "",
        fillPatternImage: "/images/patron-roble_hickory.jpg",
        fillPatternRepeat: "repeat",
        // top-left, top-right, bottom-right, bottom-left
        cornerRadius: [0, 0, 0, 0],
        cornerRadiusToProduction: [0, 0, 0, 0],
        cornerRadiusDisabled: [0, 0, 0, 0],
        works: [
          // {
          //   id: 1,
          //   width: 150,
          //   height: 150,
          //   type: WORKS_TYPES.CCCHAFLAN,
          //   // top-left, top-right, bottom-right, bottom-left
          //   cornerPosition: [1, 0, 0, 0],
          //   selected: false,
          // },
          // {
          //   id: 2,
          //   width: 20,
          //   height: 20,
          //   type: WORKS_TYPES.CCFALESC,
          //   cornerPosition: [0, 1, 0, 0],
          //   selected: false,
          // },
          // {
          //   id: 3,
          //   width: 20,
          //   height: 20,
          //   type: WORKS_TYPES.CCRECIN,
          //   cornerPosition: [0, 0, 0, 1],
          //   selected: false,
          // },
        ],
      },
    ],
    linesData: [
      {
        id: 1,
        xRef: 700,
        yRef: 0,
        xInitRef: 0,
        length: 400,
        level: 1,
        // widthOnLevel: 50,
        rotation: 90,
        text: "400",
        direction: DIRECTION.VERTICAL,
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
        direction: DIRECTION.HORIZONTAL,
      },
      // {
      //   id: 2,
      //   xRef: 500,
      //   yRef: 0,
      //   xInitRef: 0,
      //   length: 100,
      //   level: 2,
      //   // widthOnLevel: 50,
      //   rotation: 90,
      //   text: "",
      //   direction: DIRECTION.VERTICAL,
      // },
      // {
      //   id: 3,
      //   xRef: 500,
      //   yRef: 100,
      //   xInitRef: 0,
      //   length: 100,
      //   level: 2,
      //   // widthOnLevel: 50,
      //   rotation: 90,
      //   text: "",
      //   direction: DIRECTION.VERTICAL,
      // },
      // {
      //   id: 5,
      //   xRef: 0,
      //   yRef: 0,
      //   xInitRef: 0,
      //   length: 100,
      //   level: 2,
      //   // widthOnLevel: 50,
      //   rotation: 0,
      //   text: "",
      //   direction: DIRECTION.HORIZONTAL,
      // },
    ],
  },
  [SHAPE_TYPES.L1_SHAPED]: {
    shapeType: SHAPE_TYPES.SIMPLE,
    assemblyType: ASSEMBLY_TYPES.NOVENTA_SIMPLE,
    xInitial: 0,
    yInitial: 0,
    partsData: [
      {
        id: 1,
        x: 0,
        y: 0,
        width: 700,
        realWidth: 700,
        height: 400,
        realHeight: 400,
        fill: "#c7aa89",
        stroke: "black",
        rotation: 0,
        direction: DIRECTION.HORIZONTAL,
        positionAfter: PARTS_POSITION.FIRST,
        // fillPatternImage: "",
        fillPatternImage: "/images/patron-roble_hickory.jpg",
        fillPatternRepeat: "repeat",
        // top-left, top-right, bottom-right, bottom-left
        cornerRadius: [0, 0, 0, 0],
        cornerRadiusToProduction: [0, 0, 0, 0],
        cornerRadiusDisabled: [0, 0, 0, 0],
        works: [
          // {
          //   id: 1,
          //   width: 150,
          //   height: 150,
          //   type: WORKS_TYPES.CCCHAFLAN,
          //   // top-left, top-right, bottom-right, bottom-left
          //   cornerPosition: [1, 0, 0, 0],
          //   selected: false,
          // },
          // {
          //   id: 2,
          //   width: 20,
          //   height: 20,
          //   type: WORKS_TYPES.CCFALESC,
          //   cornerPosition: [0, 1, 0, 0],
          //   selected: false,
          // },
          // {
          //   id: 3,
          //   width: 20,
          //   height: 20,
          //   type: WORKS_TYPES.CCRECIN,
          //   cornerPosition: [0, 0, 0, 1],
          //   selected: false,
          // },
        ],
      },
    ],
    linesData: [
      {
        id: 1,
        xRef: 700,
        yRef: 0,
        xInitRef: 0,
        length: 400,
        level: 1,
        // widthOnLevel: 50,
        rotation: 90,
        text: "400",
        direction: DIRECTION.VERTICAL,
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
        direction: DIRECTION.HORIZONTAL,
      },
      // {
      //   id: 2,
      //   xRef: 500,
      //   yRef: 0,
      //   xInitRef: 0,
      //   length: 100,
      //   level: 2,
      //   // widthOnLevel: 50,
      //   rotation: 90,
      //   text: "",
      //   direction: DIRECTION.VERTICAL,
      // },
      // {
      //   id: 3,
      //   xRef: 500,
      //   yRef: 100,
      //   xInitRef: 0,
      //   length: 100,
      //   level: 2,
      //   // widthOnLevel: 50,
      //   rotation: 90,
      //   text: "",
      //   direction: DIRECTION.VERTICAL,
      // },
      // {
      //   id: 5,
      //   xRef: 0,
      //   yRef: 0,
      //   xInitRef: 0,
      //   length: 100,
      //   level: 2,
      //   // widthOnLevel: 50,
      //   rotation: 0,
      //   text: "",
      //   direction: DIRECTION.HORIZONTAL,
      // },
    ],
  },
};

export const _INITIAL_STATE_TEST = {
  simple: {
    config: {},
    piezas: [],
    lines: [],
  },
  double: {
    config: {},
    piezas: [],
    lines: [],
  },
  triple: {
    config: {},
    piezas: [],
    lines: [],
  },
};
