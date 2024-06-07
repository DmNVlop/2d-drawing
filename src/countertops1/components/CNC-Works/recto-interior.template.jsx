import PropTypes from "prop-types";

import { Group, Line } from "react-konva";
import { GLOBAL_CT_M } from "../../mocks/global-ct.mock";
import { useEffect, useState } from "react";
import { WORKS_TYPES } from "../../mocks/WORKS.types";

function RectoInteriorCNCWork(props) {
  const { workData, pieceSelected } = props;

  const [realWidth, setRealWidth] = useState(0);
  const [realHeight, setRealHeight] = useState(0);

  const [pieceWidth, setPieceWidth] = useState(0);
  const [pieceHeight, setPieceHeight] = useState(0);

  const [realPieceWidth, setRealPieceWidth] = useState(0);
  const [realPieceHeight, setRealPieceHeight] = useState(0);

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
          points={[0, 0, realWidth, 0, realWidth, realHeight, 0, realHeight]}
          closed={true}
          fill="white"
        />
      )}

      {handleCornerShowed(1) && (
        <Line
          points={[
            realPieceWidth,
            0,
            realPieceWidth - realWidth,
            0,
            realPieceWidth - realWidth,
            realHeight,
            realPieceWidth,
            realHeight,
          ]}
          closed={true}
          fill="white"
        />
      )}

      {handleCornerShowed(2) && (
        <Line
          points={[
            realPieceWidth,
            realPieceHeight,
            realPieceWidth - realWidth,
            realPieceHeight,
            realPieceWidth - realWidth,
            realPieceHeight - realHeight,
            realPieceWidth,
            realPieceHeight - realHeight,
          ]}
          closed={true}
          fill="white"
        />
      )}

      {handleCornerShowed(3) && (
        <Line
          points={[
            0,
            realPieceHeight,
            realWidth,
            realPieceHeight,
            realWidth,
            realPieceHeight - realHeight,
            0,
            realPieceHeight - realHeight,
          ]}
          closed={true}
          fill="white"
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
