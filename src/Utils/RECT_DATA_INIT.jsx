export const SAFE_TEXT_OFFSET = 20;

export const SAFE_TEXT_OFFSET_B = 5;

export const INIT_SHAPE_POINTS = { x: 40, y: 40 };

export const RECT_DATA_INIT = [
  {
    x: INIT_SHAPE_POINTS.x,
    y: INIT_SHAPE_POINTS.y,
    xGroup: 0,
    yGroup: 0,
    width: 1800,
    height: 780,
    fill: null,
    // fill: "grey",
    stroke: "black",
    strokeWidth: 0,
    rotation: 0,
    cornerRadius: [0, 0, 0, 0],
    fillPatternImage: "/images/patron-roble_hickory.jpg",
    fillPatternRepeat: "repeat",
    fillPatternScaleX: 0.6,
    fillPatternScaleY: 0.3,
    textData: [
      {
        visible: true,
        rotation: 0,
        text: "Text",
        position: 0,
        name: "textTopWidthRef",
      },
      {
        visible: true,
        rotation: 90,
        text: "Text",
        position: 1,
        name: "textRightHeighthRef",
      },
      {
        visible: true,
        rotation: 0,
        text: "Text",
        position: 2,
        name: "textBottomWidthRef",
      },
      {
        visible: true,
        rotation: -90,
        text: "Text",
        position: 3,
        name: "textLeftHeighthRef",
      },
    ],
  },
];
