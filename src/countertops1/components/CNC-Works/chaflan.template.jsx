import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { Group, Layer, Line } from "react-konva";
import { GLOBAL_CT_M } from "../../mocks/global-ct.mock";
import { WORKS_TYPES } from "../../mocks/WORKS.types";

function ChaflanCNCWork(props) {
  const { workData, pieceSelected } = props;

  const _strokeCorrection = 0;

  const [workWidth, setWorkWidth] = useState(0);
  const [workHeight, setWorkHeight] = useState(0);

  const [pieceWidth, setPieceWidth] = useState(0);
  const [pieceHeight, setPieceHeight] = useState(0);

  // const [realPieceWidth, setRealPieceWidth] = useState(0);
  // const [realPieceHeight, setRealPieceHeight] = useState(0);

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

  // Logic
  useEffect(() => {
    // setRealPieceWidth(pieceSelected.workWidth);
    // setRealPieceHeight(pieceSelected.workHeight);

    console.log("🚀 ~ useEffect ~ pieceSelected.width:", pieceSelected.width);
    setPieceWidth(pieceSelected.width);
    setPieceHeight(pieceSelected.height);

    console.log("🚀 ~ useEffect ~ workData.width:", workData.width);
    setWorkWidth(workData.width);
    setWorkHeight(workData.height);
  }, []);

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
            workHeight + _strokeCorrection,
            pieceWidth + _strokeCorrection - workWidth,
            workHeight + _strokeCorrection,
            pieceWidth + _strokeCorrection,
            workHeight + _strokeCorrection - workHeight,
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
            workHeight + _strokeCorrection,
            workWidth,
            workHeight + _strokeCorrection,
            0 - _strokeCorrection,
            workHeight + _strokeCorrection - workHeight,
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
