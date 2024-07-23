import { Group, Line, Rect, Text } from "react-konva";
import PropTypes from "prop-types";
import { SHAPE_TYPES } from "../mocks/SHAPE_TYPES.const";
import { useRef } from "react";
import {
  xBaseMultiplierL,
  yBaseMultiplierL,
} from "./Rect-Helpers/base-line-multiplier.helper";

export default function LineLTemplate(props) {
  const { ATTRIB_SETTED, countertops, getPartsDataFromPieceCtx } = props;

  const textBaseHRef = useRef();
  const textBaseVRef = useRef();

  const scaleX = countertops[ATTRIB_SETTED]?.rootConfig?.scaleX;
  const scaleY = countertops[ATTRIB_SETTED]?.rootConfig?.scaleY;

  // HORIZONTAL
  const xRefBaseHORZ = 0; // itemData?.xRef || 0;
  const yRefBaseHORZ = 0; // itemData?.yRef || 0;

  const calculateLengthBaseHORZ = (ATTRIB_SETTED, partsData) => {
    const { LShaped_l1, LShaped_l2 } = SHAPE_TYPES;
    switch (ATTRIB_SETTED) {
      case LShaped_l1:
        return partsData[0].height + partsData[1].width;
      case LShaped_l2:
        return partsData[1].width;
      default:
        return 0;
    }
  };
  const lengthBaseHORZ = calculateLengthBaseHORZ(
    ATTRIB_SETTED,
    getPartsDataFromPieceCtx
  );

  const levelAdjustHORZ = 20; //itemData?.level == 1 ? 20 : 60;

  const textXHORZ = yRefBaseHORZ + lengthBaseHORZ / 2 - 10;
  const textYHORZ = xRefBaseHORZ - xBaseMultiplierL(scaleX); // itemData?.level == 1 ? xRefBaseHORZ + 36 : xRefBaseHORZ + 76;

  const rotationHORZ = 0; //itemData?.rotation || 0;

  // VERTICAL
  const xRefBaseVERT = 0; //itemData?.xRef || 0;
  const yRefBaseVERT = 0; // itemData?.yRef || 0;
  const calculateLengthBaseVERT = (ATTRIB_SETTED, partsData) => {
    const { LShaped_l1, LShaped_l2 } = SHAPE_TYPES;
    switch (ATTRIB_SETTED) {
      case LShaped_l1:
        return partsData[0].width;
      case LShaped_l2:
        return partsData[1].height + partsData[0].width;
      default:
        return 0;
    }
  };
  const lengthBaseVERT = calculateLengthBaseVERT(
    ATTRIB_SETTED,
    getPartsDataFromPieceCtx
  ); // itemData?.length || 0;

  const levelAdjustVERT = 20; // itemData?.level == 1 ? 20 : 60;

  const textXVERT = xRefBaseVERT + yBaseMultiplierL(scaleX) + lengthBaseHORZ; // itemData?.level == 1 ? xRefBaseVERT + 36 : xRefBaseVERT + 76;
  const textYVERT = yRefBaseVERT + lengthBaseVERT / 2 - 10;

  const rotationVERT = 90; //itemData?.rotation || 0;

  return (
    <Group>
      <Group>
        <Line
          points={[
            xRefBaseHORZ,
            yRefBaseHORZ - levelAdjustHORZ,
            lengthBaseHORZ,
            yRefBaseHORZ - levelAdjustHORZ,
          ]}
          fill="black"
          stroke="black"
          strokeWidth={1 / scaleX || 1}
        />
        <Line
          points={[
            xRefBaseHORZ,
            yRefBaseHORZ - levelAdjustHORZ - 10,
            xRefBaseHORZ,
            yRefBaseHORZ - levelAdjustHORZ + 10,
          ]}
          fill="black"
          stroke="black"
          strokeWidth={1 / scaleX || 1}
        />
        <Line
          points={[
            xRefBaseHORZ + lengthBaseHORZ,
            yRefBaseHORZ - levelAdjustHORZ - 10,
            xRefBaseHORZ + lengthBaseHORZ,
            yRefBaseHORZ - levelAdjustHORZ + 10,
          ]}
          fill="black"
          stroke="black"
          strokeWidth={1 / scaleX || 1}
        />
        <Rect
          x={textXHORZ - 6 / scaleX}
          y={textYHORZ - 6 / scaleX}
          fill="#f0f0f0"
          width={textBaseHRef?.current?.width() + 12 || 1}
          height={textBaseHRef?.current?.height() + 10 || 1}
          cornerRadius={[4, 4, 4, 4]}
          scaleX={1 / scaleX || 1}
          scaleY={1 / scaleY || 1}
          rotation={0}
          offsetX={0}
          offsetY={0}
        />
        <Text
          ref={textBaseHRef}
          x={textXHORZ}
          y={textYHORZ}
          text={lengthBaseHORZ}
          rotation={rotationHORZ}
          fontSize={16}
          scaleX={1 / scaleX || 1}
          scaleY={1 / scaleY || 1}
        />
      </Group>

      <Group>
        <Line
          points={[
            xRefBaseVERT + lengthBaseHORZ + levelAdjustVERT,
            yRefBaseVERT,
            xRefBaseVERT + lengthBaseHORZ + levelAdjustVERT,
            lengthBaseVERT,
          ]}
          fill="black"
          stroke="black"
          strokeWidth={1 / scaleX || 1}
        />
        <Line
          points={[
            xRefBaseVERT + levelAdjustVERT - 10 + lengthBaseHORZ,
            yRefBaseVERT,
            xRefBaseVERT + levelAdjustVERT + 10 + lengthBaseHORZ,
            yRefBaseVERT,
          ]}
          fill="black"
          stroke="black"
          strokeWidth={1 / scaleX || 1}
        />
        <Line
          points={[
            xRefBaseVERT + levelAdjustVERT - 10 + lengthBaseHORZ,
            yRefBaseVERT + lengthBaseVERT,
            xRefBaseVERT + levelAdjustVERT + 10 + lengthBaseHORZ,
            yRefBaseVERT + lengthBaseVERT,
          ]}
          fill="black"
          stroke="black"
          strokeWidth={1 / scaleX || 1}
        />
        <Rect
          x={textXVERT - 6 / scaleX}
          y={textYVERT - 6 / scaleX}
          fill="#f0f0f0"
          width={textBaseVRef?.current?.width() + 12 || 1}
          height={textBaseVRef?.current?.height() + 10 || 1}
          cornerRadius={[4, 4, 4, 4]}
          scaleX={1 / scaleX || 1}
          scaleY={1 / scaleY || 1}
          rotation={90}
          offsetX={0}
          offsetY={textBaseVRef?.current?.height() - 2 || 1}
        />
        <Text
          ref={textBaseVRef}
          x={textXVERT}
          y={textYVERT}
          text={lengthBaseVERT}
          rotation={rotationVERT}
          fontSize={16}
          scaleX={1 / scaleX || 1}
          scaleY={1 / scaleY || 1}
        />
      </Group>
    </Group>
  );
}

LineLTemplate.propTypes = {
  // itemData: PropTypes.object,
  ATTRIB_SETTED: PropTypes.string,
  getPartsDataFromPieceCtx: PropTypes.array,
};
