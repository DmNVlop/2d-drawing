import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { Group, Layer, Line } from "react-konva";
import { GLOBAL_CT_M } from "../../mocks/global-ct.mock";
import { WORKS_TYPES } from "../../mocks/WORKS.types";

function ChaflanCNCWork(props) {
  // const tempWorkData = props.workData;
  const { workData, pieceSelected } = props;

  const [realChaflanWidth, setRealChaflanWidth] = useState(0);
  const [realChaflanHeight, setRealChaflanHeight] = useState(0);

  const [chaflanWidth, setChaflanWidth] = useState(0);
  const [chaflanHeight, setChaflanHeight] = useState(0);

  const [pieceWidth, setPieceWidth] = useState(0);
  const [pieceHeight, setPieceHeight] = useState(0);

  const [realPieceWidth, setRealPieceWidth] = useState(0);
  const [realPieceHeight, setRealPieceHeight] = useState(0);

  console.log("🚀 ~ workData:", workData);
  console.log("🚀 ~ ChaflanCNCWork ~ pieceSelected:", pieceSelected);

  if (workData.type != WORKS_TYPES.CCCHAFLAN) {
    return;
  }

  const cornersArray = workData.cornerPosition;

  if (
    !cornersArray ||
    Array.isArray(cornersArray) === false ||
    cornersArray.length !== 4
  ) {
    return;
  }

  const handleCornerShowed = (position) => {
    if (cornersArray[position]) {
      return true;
    }

    return false;
  };

  useEffect(() => {
    setRealPieceWidth(pieceSelected.realWidth);
    setRealPieceHeight(pieceSelected.realHeight);

    setPieceWidth(pieceSelected.width);
    setPieceHeight(pieceSelected.height);

    setRealChaflanWidth(
      workData.width / (pieceSelected.width / pieceSelected.realWidth)
    );

    setRealChaflanHeight(
      workData.height / (pieceSelected.height / pieceSelected.realHeight)
    );
  }, []);

  return (
    <Group x={GLOBAL_CT_M.xGlobalLayer} y={GLOBAL_CT_M.yGlobalLayer}>
      {handleCornerShowed(0) && (
        // <Group x={GLOBAL_CT_M.xGlobalLayer} y={GLOBAL_CT_M.yGlobalLayer}>
        <Line
          points={[0, 0, realChaflanWidth, 0, 0, realChaflanHeight]}
          closed={true}
          fill="white"
        />
        // </Group>
      )}
      {handleCornerShowed(1) && (
        // <Group x={GLOBAL_CT_M.xGlobalLayer} y={GLOBAL_CT_M.yGlobalLayer}>
        <Line
          points={[
            realPieceWidth + 1,
            0,
            realPieceWidth + 1 - realChaflanWidth,
            0,
            realPieceWidth + 1,
            realChaflanHeight,
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
            realPieceWidth + 1,
            realPieceHeight + 1,
            realPieceWidth + 1 - realChaflanWidth,
            realPieceHeight + 1,
            realPieceWidth + 1,
            realPieceHeight + 1 - realChaflanHeight,
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
            0,
            realPieceHeight + 1,
            realChaflanWidth,
            realPieceHeight + 1,
            0,
            realPieceHeight + 1 - realChaflanHeight,
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
