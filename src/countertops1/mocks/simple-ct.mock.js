import { ASSEMBLY_TYPES } from "./ASSEMBLY_TYPES.const";
import { DIRECTION } from "./LINES.const";
import { SHAPE_TYPES } from "./SHAPE_TYPES.const";

export const SIMPLE_CT_M = {
  shapeType: SHAPE_TYPES.SIMPLE,
  assemblyType: ASSEMBLY_TYPES.NOVENTA_SIMPLE,
  partsData: [
    {
      id: 1,
      x: 0,
      y: 0,
      width: 800,
      realWidth: 800,
      height: 500,
      realHeight: 500,
      fill: "#c7aa89",
      stroke: "black",
      strokeWidth: 1,
      rotation: 0,
      // fillPatternImage: "",
      fillPatternImage: "/images/patron-de-tablero-de-madera.png",
      fillPatternRepeat: "repeat",
      // top-left, top-right, bottom-right, bottom-left
      cornerRadius: [0, 0, 0, 0],
      cornerRadiusProduction: [0, 0, 0, 0],
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
};

export const SIMPLE_LINE_CT_M = {
  shapeType: SHAPE_TYPES.SIMPLE,
  linesData: [
    {
      id: 1,
      xRef: 800,
      yRef: 0,
      xInitRef: 0,
      length: 500,
      level: 1,
      // widthOnLevel: 50,
      rotation: 90,
      text: "500",
      direction: DIRECTION.VERTICAL,
    },
    {
      id: 2,
      xRef: 0,
      yRef: 0,
      xInitRef: 0,
      length: 800,
      level: 1,
      // widthOnLevel: 50,
      rotation: 0,
      text: "800",
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
};
