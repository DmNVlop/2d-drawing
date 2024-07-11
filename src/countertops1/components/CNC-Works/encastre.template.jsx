import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { Circle, Group, Layer, Line, Rect } from "react-konva";
import { GLOBAL_CT_M } from "../../mocks/global-ct.mock";
import { WORKS_TYPES } from "../../mocks/WORKS.types";
import { useCountertopContext } from "../../context/ct-context";
import { useCustomURLHandler } from "../../helpers/location.hook";
import { SHAPE_TYPES } from "../../mocks/SHAPE_TYPES.const";
function EncastreWork(props) {
  const { workData, pieceSelected, indexPiece } = props;
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

  const encastreData = {
    widthOut: 460,
    heightOut: 390,
    radiusOut: 20,
  };

  const standardSeparationOfEncastreFromFront = 70;

  const xInit =
    pieceWidth / 2 - encastreData.widthOut / 2 + GLOBAL_CT_M.xGlobalLayer;
  const yInit =
    pieceHeight -
    encastreData.heightOut -
    standardSeparationOfEncastreFromFront +
    GLOBAL_CT_M.yGlobalLayer;

  return (
    <Group>
      {/* Hueco exterior */}
      <Rect
        x={xInit}
        y={yInit}
        width={encastreData.widthOut}
        height={encastreData.heightOut}
        fill="white"
        cornerRadius={[
          encastreData.radiusOut,
          encastreData.radiusOut,
          encastreData.radiusOut,
          encastreData.radiusOut,
        ]}
      />

      {/*  // LEFT */}
      <Circle x={xInit + 20} y={yInit - 40} radius={20} fill="white" />

      {/*  // CENTRE */}
      <Circle
        x={xInit + encastreData.widthOut / 2}
        y={yInit - 40}
        radius={20}
        fill="white"
      />

      {/*  // RIGHT */}
      <Circle
        x={xInit + encastreData.widthOut - 20}
        y={yInit - 40}
        radius={20}
        fill="white"
      />
    </Group>
  );
}
export default EncastreWork;
EncastreWork.propTypes = {
  workData: PropTypes.object,
  pieceSelected: PropTypes.object,
};
