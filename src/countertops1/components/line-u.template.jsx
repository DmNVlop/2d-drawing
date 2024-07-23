import { Group, Line, Rect, Text } from "react-konva";
import PropTypes from "prop-types";
import { SHAPE_TYPES } from "../mocks/SHAPE_TYPES.const";
import {
  xBaseMultiplierL,
  yBaseMultiplierL,
} from "./Rect-Helpers/base-line-multiplier.helper";
import { useRef } from "react";

export default function LineUTemplate(props) {
  const { ATTRIB_SETTED, countertops, getPartsDataFromPieceCtx } = props;

  const textBaseHRef = useRef();
  const textBaseVRef = useRef();
  const textBaseVLRef = useRef();

  const scaleX = countertops[ATTRIB_SETTED]?.rootConfig?.scaleX;
  const scaleY = countertops[ATTRIB_SETTED]?.rootConfig?.scaleY;

  // #region HORIZONTAL CODE
  const calculateLengthBaseHORZ = (ATTRIB_SETTED, partsData) => {
    const { UShaped_u1, UShaped_u2, UShaped_u3, UShaped_u4 } = SHAPE_TYPES;
    switch (ATTRIB_SETTED) {
      case UShaped_u1:
        return partsData[0].height + partsData[1].width;
      case UShaped_u2:
        return partsData[0].height + partsData[1].width + partsData[2].height;
      case UShaped_u3:
        return partsData[1].width + partsData[2].height;
      case UShaped_u4:
        return partsData[1].width;
      default:
        return 0;
    }
  };

  const rotationHORZ = 0;
  const lengthBaseHORZ = calculateLengthBaseHORZ(
    ATTRIB_SETTED,
    getPartsDataFromPieceCtx
  );
  const xRefBaseHORZ = 0; //props?.itemData?.xRef || 0;
  const yRefBaseHORZ = 0; //props?.itemData?.yRef || 0;
  const levelAdjustHORZ = 20; //props?.itemData?.level == 1 ? 20 : 60;

  const textXHORZ = xRefBaseHORZ + lengthBaseHORZ / 2 - 10; //props?.itemData?.level == 1 ? xRefBaseHORZ + 36 : xRefBaseHORZ + 76;
  const textYHORZ = yRefBaseHORZ - xBaseMultiplierL(scaleX);
  // #endregion

  // #region VERTICAL RIGHT CODE
  const calculateLengthBaseVERT = (ATTRIB_SETTED, partsData) => {
    const { UShaped_u1, UShaped_u2, UShaped_u3, UShaped_u4 } = SHAPE_TYPES;
    switch (ATTRIB_SETTED) {
      case UShaped_u1:
        return partsData[1].height + partsData[2].width;
      case UShaped_u2:
        return partsData[2].width;
      case UShaped_u3:
        return partsData[2].width;
      case UShaped_u4:
        return partsData[1].height + partsData[2].width;
      default:
        return 0;
    }
  };

  const rotationVERT = 90;
  const lengthBaseVERT = calculateLengthBaseVERT(
    ATTRIB_SETTED,
    getPartsDataFromPieceCtx
  );
  const xRefBaseVERT = 0;
  const yRefBaseVERT = 0;
  const levelAdjustVERT = 20; //props?.itemData?.level == 1 ? 20 : 60;

  const textXVERT = xRefBaseVERT + yBaseMultiplierL(scaleX) + lengthBaseHORZ; // props?.itemData?.level == 1 ? xRefBaseVERT + 36 : xRefBaseVERT + 76;
  const textYVERT = yRefBaseVERT + lengthBaseVERT / 2 - 12;
  // #endregion

  // #region VERTICAL LEFT CODE
  const calculateLengthBaseVERT_L = (ATTRIB_SETTED, partsData) => {
    const { UShaped_u1, UShaped_u2, UShaped_u3, UShaped_u4 } = SHAPE_TYPES;
    switch (ATTRIB_SETTED) {
      case UShaped_u1:
        return partsData[0].width;
      case UShaped_u2:
        return partsData[0].width;
      case UShaped_u3:
        return partsData[0].width + partsData[1].height;
      case UShaped_u4:
        return partsData[0].width + partsData[1].height;
      default:
        return 0;
    }
  };

  const rotationVERT_L = -90;
  const lengthBaseVERT_L = calculateLengthBaseVERT_L(
    ATTRIB_SETTED,
    getPartsDataFromPieceCtx
  );
  const xRefBaseVERT_L = 0;
  const yRefBaseVERT_L = 0;
  const levelAdjustVERT_L = 20; //props?.itemData?.level == 1 ? 20 : 60;

  const textXVERT_L = xRefBaseVERT_L - yBaseMultiplierL(scaleX); // props?.itemData?.level == 1 ? xRefBaseVERT_L + 36 : xRefBaseVERT_L + 76;
  const textYVERT_L = yRefBaseVERT_L + lengthBaseVERT_L / 2 - 12;
  // #endregion

  return (
    <Group>
      {/* // HORIZONTAL VIEW */}
      <Group>
        <Line
          points={[
            xRefBaseHORZ,
            yRefBaseHORZ - levelAdjustHORZ,
            xRefBaseHORZ + lengthBaseHORZ,
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

      {/* // VERTICAL RIGHT VIEW */}
      <Group>
        <Line
          points={[
            xRefBaseVERT + levelAdjustVERT + lengthBaseHORZ,
            yRefBaseVERT,
            xRefBaseVERT + levelAdjustVERT + lengthBaseHORZ,
            yRefBaseVERT + lengthBaseVERT,
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

      {/* // VERTICAL LEFT VIEW */}
      <Group>
        <Line
          points={[
            xRefBaseVERT_L - levelAdjustVERT_L,
            yRefBaseVERT_L,
            xRefBaseVERT_L - levelAdjustVERT_L,
            yRefBaseVERT_L + lengthBaseVERT_L,
          ]}
          fill="black"
          stroke="black"
          strokeWidth={1 / scaleX || 1}
        />
        <Line
          points={[
            xRefBaseVERT_L - levelAdjustVERT_L - 10,
            yRefBaseVERT_L,
            xRefBaseVERT_L - levelAdjustVERT_L + 10,
            yRefBaseVERT_L,
          ]}
          fill="black"
          stroke="black"
          strokeWidth={1 / scaleX || 1}
        />
        <Line
          points={[
            xRefBaseVERT_L - levelAdjustVERT_L - 10,
            yRefBaseVERT_L + lengthBaseVERT_L,
            xRefBaseVERT_L - levelAdjustVERT_L + 10,
            yRefBaseVERT_L + lengthBaseVERT_L,
          ]}
          fill="black"
          stroke="black"
          strokeWidth={1 / scaleX || 1}
        />
        <Rect
          x={textXVERT_L + 6 / scaleX}
          y={textYVERT_L + 6 / scaleX}
          fill="#f0f0f0"
          width={textBaseVLRef?.current?.width() + 12 || 1}
          height={textBaseVLRef?.current?.height() + 10 || 1}
          cornerRadius={[4, 4, 4, 4]}
          scaleX={1 / scaleX || 1}
          scaleY={1 / scaleY || 1}
          rotation={-90}
          offsetX={0}
          offsetY={textBaseVLRef?.current?.height() - 2 || 1}
        />
        <Text
          ref={textBaseVLRef}
          x={textXVERT_L}
          y={textYVERT_L}
          text={lengthBaseVERT_L}
          rotation={rotationVERT_L}
          fontSize={16}
          scaleX={1 / scaleX || 1}
          scaleY={1 / scaleY || 1}
        />
      </Group>
    </Group>
  );
}

LineUTemplate.propTypes = {
  // itemData: PropTypes.object,
  ATTRIB_SETTED: PropTypes.string,
  getPartsDataFromPieceCtx: PropTypes.array,
};
