import { DIRECTION_TYPES } from "./LINES_CONST";
import { SHAPE_TYPES } from "./SHAPE_TYPES";
import { WORKS_TYPES } from "./WORKS.types";

export const SIMPLE_CT_M = {
  shapeType: SHAPE_TYPES.SIMPLE,
  partsData: [
    {
      id: 1,
      x: 0,
      y: 0,
      width: 500,
      height: 200,
      fill: "#c7aa89",
      stroke: "black",
      rotation: 0,
      // fillPatternImage: "",
      fillPatternImage: "/images/patron-de-tablero-de-madera.png",
      fillPatternRepeat: "repeat",
      // top-left, top-right, bottom-right, bottom-left
      cornerRadius: [0, 0, 0, 0],
      cornerRadiusDisabled: [false, false, false, false],
      works: [
        {
          id: 1,
          width: 20,
          height: 20,
          type: WORKS_TYPES.CCCHAFLAN,
          // top-left, top-right, bottom-right, bottom-left
          cornerPosition: [1, 0, 0, 0],
          selected: true,
        },
        {
          id: 2,
          width: 20,
          height: 20,
          type: WORKS_TYPES.CCFALESC,
          cornerPosition: [0, 1, 1, 0],
          selected: false,
        },
        {
          id: 3,
          width: 20,
          height: 20,
          type: WORKS_TYPES.CCRECIN,
          cornerPosition: [0, 0, 0, 1],
          selected: false,
        },
      ],
    },
  ],
};

export const SIMPLE_LINE_CT_M = {
  shapeType: SHAPE_TYPES.SIMPLE,
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
      direction: DIRECTION_TYPES.VERTIICAL,
    },
    {
      id: 2,
      xRef: 0,
      yRef: 0,
      xInitRef: 0,
      length: 500,
      level: 1,
      // widthOnLevel: 50,
      rotation: 0,
      direction: DIRECTION_TYPES.HORIZONTAL,
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
    //   direction: DIRECTION_TYPES.VERTIICAL,
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
    //   direction: DIRECTION_TYPES.VERTIICAL,
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
    //   direction: DIRECTION_TYPES.HORIZONTAL,
    // },
  ],
};
