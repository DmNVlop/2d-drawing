import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { Group, Line } from "react-konva";
import { GLOBAL_CT_M } from "../../mocks/global-ct.mock";
import { WORKS_TYPES } from "../../mocks/WORKS.types";
import { useCustomURLHandler } from "../../helpers/location.hook";
import { SHAPE_TYPES } from "../../mocks/SHAPE_TYPES.const";

function ChaflanCNCWork(props) {
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

  const [workWidth, setWorkWidth] = useState(0);
  const [workHeight, setWorkHeight] = useState(0);

  const [pieceWidth, setPieceWidth] = useState(0);
  const [pieceHeight, setPieceHeight] = useState(0);

  // Validate if the work is correct
  if (workData.type != WORKS_TYPES.CCCHAFLAN) {
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

  const setInitState = () => {
    setPieceWidth(pieceSelected.width);
    setPieceHeight(pieceSelected.height);

    setWorkWidth(workData.width);
    setWorkHeight(workData.height);
  };

  // Logic
  useEffect(() => {
    if (
      ATTRIB_SETTED == SIMPLE ||
      ATTRIB_SETTED == SQUARE ||
      ATTRIB_SETTED == CIRCLE
    ) {
      setInitState();
    }
  }, [ATTRIB_SETTED, pieceSelected.width, pieceSelected.height]);

  return (
    <Group x={GLOBAL_CT_M.xGlobalLayer} y={GLOBAL_CT_M.yGlobalLayer}>
      {handleCornerShowed(0) && (
        // <Group x={GLOBAL_CT_M.xGlobalLayer} y={GLOBAL_CT_M.yGlobalLayer}>
        <Line
          points={[
            0 - _strokeCorrection,
            0 - _strokeCorrection,
            workWidth,
            0 - _strokeCorrection,
            0 - _strokeCorrection,
            workHeight,
          ]}
          closed={true}
          fill="white"
        />
        // </Group>
      )}
      {handleCornerShowed(1) && (
        // <Group x={GLOBAL_CT_M.xGlobalLayer} y={GLOBAL_CT_M.yGlobalLayer}>
        <Line
          points={[
            pieceWidth + _strokeCorrection,
            0 - _strokeCorrection,
            pieceWidth + _strokeCorrection - workWidth,
            0 - _strokeCorrection,
            pieceWidth + _strokeCorrection,
            workHeight,
          ]}
          closed={true}
          fill="white"
        />
        // </Group>
      )}
      {handleCornerShowed(2) && (
        // <Group x={GLOBAL_CT_M.xGlobalLayer} y={GLOBAL_CT_M.yGlobalLayer}>
        <Line
          points={[
            pieceWidth + _strokeCorrection,
            pieceHeight + _strokeCorrection,
            pieceWidth + _strokeCorrection - workWidth,
            pieceHeight + _strokeCorrection,
            pieceWidth + _strokeCorrection,
            pieceHeight + _strokeCorrection - workHeight,
          ]}
          closed={true}
          fill="white"
        />
        // </Group>
      )}
      {handleCornerShowed(3) && (
        // <Group x={GLOBAL_CT_M.xGlobalLayer} y={GLOBAL_CT_M.yGlobalLayer}>
        <Line
          points={[
            0 - _strokeCorrection,
            pieceHeight + _strokeCorrection,
            workWidth,
            pieceHeight + _strokeCorrection,
            0 - _strokeCorrection,
            pieceHeight + _strokeCorrection - workHeight,
          ]}
          closed={true}
          fill="white"
        />
        // </Group>
      )}
    </Group>
  );
}

export default ChaflanCNCWork;

ChaflanCNCWork.propTypes = {
  workData: PropTypes.object,
  pieceSelected: PropTypes.object,
};
