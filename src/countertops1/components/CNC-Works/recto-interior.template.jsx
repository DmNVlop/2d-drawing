import PropTypes from "prop-types";

import { Group, Line } from "react-konva";
import { GLOBAL_CT_M } from "../../mocks/global-ct.mock";
import { useEffect, useState } from "react";
import { WORKS_TYPES } from "../../mocks/WORKS.types";
import { SHAPE_TYPES } from "../../mocks/SHAPE_TYPES.const";
import { useCustomURLHandler } from "../../helpers/location.hook";

function RectoInteriorCNCWork(props) {
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

  const [realWidth, setRealWidth] = useState(0);
  const [realHeight, setRealHeight] = useState(0);

  const [pieceWidth, setPieceWidth] = useState(0);
  const [pieceHeight, setPieceHeight] = useState(0);

  // Validate if the work is correct
  if (workData.type != WORKS_TYPES.CCRECIN) {
    return;
  }

  const cornersArray = workData.cornerPosition;

  // Validate if array is valid
  if (
    !cornersArray ||
    Array.isArray(cornersArray) === false ||
    cornersArray.length !== 4
  ) {
    return;
  }

  // Handle what corner is showed
  const handleCornerShowed = (position) => {
    if (cornersArray[position]) {
      return true;
    }

    return false;
  };

  // Logic
  useEffect(() => {
    setPieceWidth(pieceSelected.width);
    setPieceHeight(pieceSelected.height);

    setRealWidth(workData.width);
    setRealHeight(workData.height);
  }, [ATTRIB_SETTED, pieceSelected.width, pieceSelected.height]);

  return (
    <Group x={GLOBAL_CT_M.xGlobalLayer} y={GLOBAL_CT_M.yGlobalLayer}>
      {handleCornerShowed(0) && (
        <Line
          points={[
            0 - _strokeCorrection,
            0 - _strokeCorrection,
            realWidth,
            0 - _strokeCorrection,
            realWidth,
            realHeight,
            0 - _strokeCorrection,
            realHeight,
          ]}
          closed={true}
          fill="white"
          rotation={0}
        />
      )}

      {handleCornerShowed(1) && (
        <Line
          points={[
            pieceWidth + _strokeCorrection,
            0 - _strokeCorrection,
            pieceWidth - realWidth,
            0 - _strokeCorrection,
            pieceWidth - realWidth,
            realHeight,
            pieceWidth + _strokeCorrection,
            realHeight,
          ]}
          closed={true}
          fill="white"
          rotation={0}
        />
      )}

      {handleCornerShowed(2) && (
        <Line
          points={[
            pieceWidth + _strokeCorrection,
            pieceHeight + _strokeCorrection,
            pieceWidth - realWidth,
            pieceHeight + _strokeCorrection,
            pieceWidth - realWidth,
            pieceHeight - realHeight,
            pieceWidth + _strokeCorrection,
            pieceHeight - realHeight,
          ]}
          closed={true}
          fill="white"
          rotation={0}
        />
      )}

      {handleCornerShowed(3) && (
        <Line
          points={[
            0 - _strokeCorrection,
            pieceHeight + _strokeCorrection,
            realWidth,
            pieceHeight + _strokeCorrection,
            realWidth,
            pieceHeight - realHeight,
            0 - _strokeCorrection,
            pieceHeight - realHeight,
          ]}
          closed={true}
          fill="white"
          rotation={0}
        />
      )}
    </Group>
  );
}

export default RectoInteriorCNCWork;

RectoInteriorCNCWork.propTypes = {
  workData: PropTypes.object,
  pieceSelected: PropTypes.object,
};
