import PropTypes from "prop-types";

import { Group, Line } from "react-konva";
import { GLOBAL_CT_M } from "../../mocks/global-ct.mock";
import { useEffect, useState } from "react";
import { WORKS_TYPES } from "../../mocks/WORKS.types";

function FalsaEscuadraCNCWork(props) {
  const { workData, pieceSelected } = props;

  const _strokeCorrection = 0;

  const [realWidth, setRealWidth] = useState(0);
  const [realHeight, setRealHeight] = useState(0);

  const [pieceWidth, setPieceWidth] = useState(0);
  const [pieceHeight, setPieceHeight] = useState(0);

  const [realPieceWidth, setRealPieceWidth] = useState(0);
  const [realPieceHeight, setRealPieceHeight] = useState(0);

  // Validate if the work is correct
  if (workData.type != WORKS_TYPES.CCFALESC) {
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
    setRealPieceWidth(pieceSelected.realWidth);
    setRealPieceHeight(pieceSelected.realHeight);

    setPieceWidth(pieceSelected.width);
    setPieceHeight(pieceSelected.height);

    setRealWidth(
      workData.width / (pieceSelected.width / pieceSelected.realWidth)
    );

    setRealHeight(
      workData.height / (pieceSelected.height / pieceSelected.realHeight)
    );
  }, []);

  return (
    <Group x={GLOBAL_CT_M.xGlobalLayer} y={GLOBAL_CT_M.yGlobalLayer}>
      {handleCornerShowed(0) && (
        <Line
          points={[
            0 - _strokeCorrection,
            0 - _strokeCorrection,
            realWidth,
            0 - _strokeCorrection,
            0 - _strokeCorrection,
            realPieceHeight,
          ]}
          closed={true}
          fill="white"
        />
      )}

      {handleCornerShowed(1) && (
        <Line
          points={[
            realPieceWidth + _strokeCorrection,
            0 - _strokeCorrection,
            realPieceWidth - realWidth,
            0 - _strokeCorrection,
            realPieceWidth + _strokeCorrection,
            realPieceHeight,
          ]}
          closed={true}
          fill="white"
        />
      )}

      {handleCornerShowed(2) && (
        <Line
          points={[
            realPieceWidth + _strokeCorrection,
            realPieceHeight + _strokeCorrection,
            realPieceWidth - realWidth,
            realPieceHeight + _strokeCorrection,
            realPieceWidth + _strokeCorrection,
            0,
          ]}
          closed={true}
          fill="white"
        />
      )}

      {handleCornerShowed(3) && (
        <Line
          points={[
            0 - _strokeCorrection,
            realPieceHeight + _strokeCorrection,
            realWidth,
            realPieceHeight + _strokeCorrection,
            0 - _strokeCorrection,
            0,
          ]}
          closed={true}
          fill="white"
        />
      )}
    </Group>
  );
}

export default FalsaEscuadraCNCWork;

FalsaEscuadraCNCWork.propTypes = {
  workData: PropTypes.object,
  pieceSelected: PropTypes.object,
};
