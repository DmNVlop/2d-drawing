import { INIT_SHAPE_POINTS } from "../Utils/RECT_DATA_INIT";
import { SCREEN_MULIPLY } from "../Utils/SCREEN_MULIPLY";

export const LctDataRotation_L1 = (
  tempData,
  directionRotation,
  arrayPosition
) => {
  console.log("🚀 ROTATION L ~ tempData:", tempData);
  const configData = {
    againstclockwise: () => {
      tempData[arrayPosition].textData[0].visible = true;
      tempData[arrayPosition].textData[1].visible = true;
      tempData[arrayPosition].textData[2].visible = false;
      tempData[arrayPosition].textData[3].visible = true;
      tempData[arrayPosition].rotation = -90;
      tempData[arrayPosition].xGroup = 0;
      tempData[arrayPosition].yGroup =
        tempData[arrayPosition].width * SCREEN_MULIPLY +
        INIT_SHAPE_POINTS.y * 2;
      tempData[arrayPosition].xLayer = 0;
      tempData[arrayPosition].yLayer = 0;
    },
    origin: () => {
      tempData[arrayPosition].textData[0].visible = true;
      tempData[arrayPosition].textData[1].visible = true;
      tempData[arrayPosition].textData[2].visible = true;
      tempData[arrayPosition].textData[3].visible = false;
      tempData[arrayPosition].rotation = 0;
      tempData[arrayPosition].xGroup = tempData[0].height * SCREEN_MULIPLY;
      tempData[arrayPosition].yGroup = 0;
      tempData[arrayPosition].xLayer = 0;
      tempData[arrayPosition].yLayer = 0;
    },
    counterclockwise: () => {
      tempData[arrayPosition].textData[0].visible = false;
      tempData[arrayPosition].textData[1].visible = true;
      tempData[arrayPosition].textData[2].visible = true;
      tempData[arrayPosition].textData[3].visible = true;
      tempData[arrayPosition].rotation = 90;
      tempData[arrayPosition].xGroup = 0;
      tempData[arrayPosition].yGroup = 0;
      tempData[arrayPosition].xLayer = 0;
      tempData[arrayPosition].yLayer = 0;
    },
  };

  configData[directionRotation]();
  return tempData;
};

export const LctDataRotation_L2 = (
  tempData,
  directionRotation,
  arrayPosition
) => {
  const configData = {
    againstclockwise: () => {
      tempData[arrayPosition].textData[0].visible = true;
      tempData[arrayPosition].textData[1].visible = true;
      tempData[arrayPosition].textData[2].visible = false;
      tempData[arrayPosition].textData[3].visible = true;
      tempData[arrayPosition].rotation = -90;
      tempData[arrayPosition].xGroup = 0;
      tempData[arrayPosition].yGroup =
        tempData[arrayPosition].width * SCREEN_MULIPLY +
        tempData[1].height * SCREEN_MULIPLY +
        INIT_SHAPE_POINTS.y * 2;
      tempData[arrayPosition].xLayer = 0;
      tempData[arrayPosition].yLayer = 0;
    },
    origin: () => {
      tempData[arrayPosition].textData[0].visible = true;
      tempData[arrayPosition].textData[1].visible = true;
      tempData[arrayPosition].textData[2].visible = false;
      tempData[arrayPosition].textData[3].visible = true;
      tempData[arrayPosition].rotation = 0;
      tempData[arrayPosition].xGroup = 0;
      tempData[arrayPosition].yGroup = 0;
      tempData[arrayPosition].xLayer = 0;
      tempData[arrayPosition].yLayer = 0;
    },
    counterclockwise: () => {
      tempData[arrayPosition].textData[0].visible = false;
      tempData[arrayPosition].textData[1].visible = false;
      tempData[arrayPosition].textData[2].visible = true;
      tempData[arrayPosition].textData[3].visible = true;
      tempData[arrayPosition].rotation = 90;
      tempData[arrayPosition].xGroup = 0;
      tempData[arrayPosition].yGroup = 0;
      tempData[arrayPosition].xLayer = 0;
      tempData[arrayPosition].yLayer = 0;
    },
  };

  configData[directionRotation]();
  return tempData;
};
