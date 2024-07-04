import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { Group, Layer, Line } from "react-konva";
import { GLOBAL_CT_M } from "../../mocks/global-ct.mock";
import { WORKS_TYPES } from "../../mocks/WORKS.types";
import { useCountertopContext } from "../../context/ct-context";
import { useCustomURLHandler } from "../../helpers/location.hook";
import { SHAPE_TYPES } from "../../mocks/SHAPE_TYPES.const";

function ChaflanCNCWorkL(props) {
  const { workData, pieceSelected } = props;

  const _strokeCorrection = 0;

  const [workWidth, setWorkWidth] = useState(0);
  const [workHeight, setWorkHeight] = useState(0);

  const [pieceWidth, setPieceWidth] = useState(0);
  const [pieceHeight, setPieceHeight] = useState(0);

  const { getPartsDataFromPieceCtx } = useCountertopContext();

  const { ATTRIB_SETTED } = useCustomURLHandler();
  const { LShaped_l1, LShaped_l2 } = SHAPE_TYPES;

  // Validate if the work is correct
  if (workData.type != WORKS_TYPES.CCCHAFLAN) {
    return;
  }

  // #region Calculo de coordenada de la esquina 0 para P1
  const pointZeroX = () => 0;
  const pointZeroY = () => {
    if (ATTRIB_SETTED == LShaped_l1) {
      return pieceWidth;
    }
    if (ATTRIB_SETTED == LShaped_l2) {
      return pieceWidth + getPartsDataFromPieceCtx(LShaped_l2)[1].height;
    }
    return 0;
  };
  // #endregion

  // #region Calculo de coordenada de la esquina 1 para P1
  const pointOneX = () => 0;
  const pointOneY = () => {
    if (ATTRIB_SETTED == LShaped_l1) {
      return 0;
    }
    if (ATTRIB_SETTED == LShaped_l2) {
      return getPartsDataFromPieceCtx(LShaped_l2)[1].height;
    }
    return 0;
  };
  // #endregion

  // #region Calculo de coordenada de la esquina 2 para P1
  const pointTwoX = () => pieceHeight;
  const pointTwoY = () => {
    if (ATTRIB_SETTED == LShaped_l1) {
      return 0;
    }
    if (ATTRIB_SETTED == LShaped_l2) {
      return getPartsDataFromPieceCtx(LShaped_l2)[1].height;
    }
    return 0;
  };
  // #endregion

  // #region Calculo de coordenada de la esquina 3 para P1
  const pointThreeX = () => pieceHeight;
  const pointThreeY = () => {
    if (ATTRIB_SETTED == LShaped_l1) {
      return pieceWidth;
    }
    if (ATTRIB_SETTED == LShaped_l2) {
      return pieceWidth + getPartsDataFromPieceCtx(LShaped_l2)[1].height;
    }
    return 0;
  };
  // #endregion

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

    setWorkWidth(workData.width);
    setWorkHeight(workData.height);
  }, [ATTRIB_SETTED]);

  return (
    <>
      {workData.type == WORKS_TYPES.CCCHAFLAN && (
        <Group x={GLOBAL_CT_M.xGlobalLayer} y={GLOBAL_CT_M.yGlobalLayer}>
          {handleCornerShowed(0) && (
            // <Group x={GLOBAL_CT_M.xGlobalLayer} y={GLOBAL_CT_M.yGlobalLayer}>
            <Line
              points={[
                pointZeroX(),
                pointZeroY(),
                pointZeroX(),
                pointZeroY() - parseFloat(workWidth),
                pointZeroX() + parseFloat(workHeight),
                pointZeroY(),
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
                pointOneX(),
                pointOneY(),
                pointOneX(),
                pointOneY() + parseFloat(workWidth),
                pointOneX() + parseFloat(workHeight),
                pointOneY(),
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
                pointTwoX(),
                pointTwoY(),
                pointTwoX(),
                pointTwoY() + parseFloat(workWidth),
                pointTwoX() - parseFloat(workHeight),
                pointTwoY(),
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
                pointThreeX(),
                pointThreeY(),
                pointThreeX(),
                pointThreeY() - parseFloat(workWidth),
                pointThreeX() - parseFloat(workHeight),
                pointThreeY(),
              ]}
              closed={true}
              fill="white"
            />
            // </Group>
          )}
        </Group>
      )}
    </>
  );
}

export default ChaflanCNCWorkL;

ChaflanCNCWorkL.propTypes = {
  workData: PropTypes.object,
  pieceSelected: PropTypes.object,
};
