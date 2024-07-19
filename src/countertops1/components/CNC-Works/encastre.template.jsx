import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { Circle, Group, Layer, Line, Rect } from "react-konva";
import { GLOBAL_CT_M } from "../../mocks/global-ct.mock";
import { WORKS_TYPES } from "../../mocks/WORKS.types";
import { useCountertopContext } from "../../context/ct-context";
import { useCustomURLHandler } from "../../helpers/location.hook";
import { SHAPE_TYPES } from "../../mocks/SHAPE_TYPES.const";

function EncastreWork(props) {
  const { workData, pieceSelected } = props;

  const { ATTRIB_SETTED } = useCustomURLHandler();
  const {
    SIMPLE,
    SQUARE,
    CIRCLE,
    LShaped_l1,
    LShaped_l2,
    UShaped_u1,
    UShaped_u2,
    UShaped_u3,
    UShaped_u4,
  } = SHAPE_TYPES;

  const _strokeCorrection = 0;
  const [workWidth, setWorkWidth] = useState(workData.width);
  const [workHeight, setWorkHeight] = useState(workData.height);
  const [pieceWidth, setPieceWidth] = useState(pieceSelected.width);
  const [pieceHeight, setPieceHeight] = useState(pieceSelected.height);
  const { getPartsDataFromPieceCtx } = useCountertopContext();
  const cornersArray = workData.cornerPosition;

  useEffect(() => {
    setWorkWidth(workData.width);
    setWorkHeight(workData.height);
    setPieceWidth(pieceSelected.width);
    setPieceHeight(pieceSelected.height);
  }, [ATTRIB_SETTED, pieceSelected.width, pieceSelected.height]);

  // const xInit = positionLength + GLOBAL_CT_M.xGlobalLayer;
  const initialPositionX = GLOBAL_CT_M.xGlobalLayer - workData.width / 2;
  const xInit =
    workData.positionFrom == 2
      ? initialPositionX + pieceWidth - workData.positionLength
      : workData.positionFrom == 1
      ? initialPositionX + workData.positionLength
      : initialPositionX;

  const yInit =
    pieceHeight -
    workData.height -
    workData.frontLength +
    GLOBAL_CT_M.yGlobalLayer;

  return (
    <Group>
      {/* Hueco exterior */}
      <Rect
        x={xInit}
        y={yInit}
        width={workData.width}
        height={workData.height}
        fill="white"
        cornerRadius={[
          workData.radius,
          workData.radius,
          workData.radius,
          workData.radius,
        ]}
      />

      {/*  // LEFT */}
      {workData.tapPosition == 1 && workData.hasWaterTap && (
        <Circle
          x={xInit + workData.tapDiameter}
          y={yInit - 60}
          radius={workData.tapDiameter}
          fill="white"
        />
      )}

      {/*  // CENTRE */}
      {workData.tapPosition == 2 && workData.hasWaterTap && (
        <Circle
          x={xInit + workData.width / 2}
          y={yInit - 60}
          radius={workData.tapDiameter}
          fill="white"
        />
      )}

      {/*  // RIGHT */}
      {workData.tapPosition == 3 && workData.hasWaterTap && (
        <Circle
          x={xInit + workData.width - workData.tapDiameter}
          y={yInit - 60}
          radius={workData.tapDiameter}
          fill="white"
        />
      )}
    </Group>
  );
}
export default EncastreWork;
EncastreWork.propTypes = {
  workData: PropTypes.object,
  pieceSelected: PropTypes.object,
};
