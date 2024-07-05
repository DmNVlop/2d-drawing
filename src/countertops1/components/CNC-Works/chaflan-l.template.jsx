import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { Group, Layer, Line } from "react-konva";
import { GLOBAL_CT_M } from "../../mocks/global-ct.mock";
import { WORKS_TYPES } from "../../mocks/WORKS.types";
import { useCountertopContext } from "../../context/ct-context";
import { useCustomURLHandler } from "../../helpers/location.hook";
import { SHAPE_TYPES } from "../../mocks/SHAPE_TYPES.const";

function ChaflanCNCWorkL(props) {
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

  const [workWidth, setWorkWidth] = useState(0);
  const [workHeight, setWorkHeight] = useState(0);

  const [pieceWidth, setPieceWidth] = useState(0);
  const [pieceHeight, setPieceHeight] = useState(0);

  const { getPartsDataFromPieceCtx } = useCountertopContext();

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

  // #region Calculo de coordenadas de la Pieza 1
  // Esquina 0 para P1
  const pointZeroXP1 = () => 0;
  const pointZeroYP1 = () => {
    if (
      ATTRIB_SETTED == LShaped_l1 ||
      ATTRIB_SETTED == UShaped_u1 ||
      ATTRIB_SETTED == UShaped_u2
    ) {
      return pieceWidth;
    }
    if (
      ATTRIB_SETTED == LShaped_l2 ||
      ATTRIB_SETTED == UShaped_u3 ||
      ATTRIB_SETTED == UShaped_u4
    ) {
      return pieceWidth + getPartsDataFromPieceCtx(ATTRIB_SETTED)[1].height;
    }
    return 0;
  };

  // Esquina 1 para P1
  const pointOneXP1 = () => 0;
  const pointOneYP1 = () => {
    if (
      ATTRIB_SETTED == LShaped_l1 ||
      ATTRIB_SETTED == UShaped_u1 ||
      ATTRIB_SETTED == UShaped_u2
    ) {
      return 0;
    }
    if (
      ATTRIB_SETTED == LShaped_l2 ||
      ATTRIB_SETTED == UShaped_u3 ||
      ATTRIB_SETTED == UShaped_u4
    ) {
      return getPartsDataFromPieceCtx(ATTRIB_SETTED)[1].height;
    }
    return 0;
  };

  // Esquina 2 para P1
  const pointTwoXP1 = () => pieceHeight;
  const pointTwoYP1 = () => {
    if (
      ATTRIB_SETTED == LShaped_l1 ||
      ATTRIB_SETTED == UShaped_u1 ||
      ATTRIB_SETTED == UShaped_u2
    ) {
      return 0;
    }
    if (
      ATTRIB_SETTED == LShaped_l2 ||
      ATTRIB_SETTED == UShaped_u3 ||
      ATTRIB_SETTED == UShaped_u4
    ) {
      return getPartsDataFromPieceCtx(ATTRIB_SETTED)[1].height;
    }
    return 0;
  };

  // Esquina 3 para P1
  const pointThreeXP1 = () => pieceHeight;
  const pointThreeYP1 = () => {
    if (
      ATTRIB_SETTED == LShaped_l1 ||
      ATTRIB_SETTED == UShaped_u1 ||
      ATTRIB_SETTED == UShaped_u2
    ) {
      return pieceWidth;
    }
    if (
      ATTRIB_SETTED == LShaped_l2 ||
      ATTRIB_SETTED == UShaped_u3 ||
      ATTRIB_SETTED == UShaped_u4
    ) {
      return pieceWidth + getPartsDataFromPieceCtx(ATTRIB_SETTED)[1].height;
    }
    return 0;
  };
  // #endregion

  // #region Calculo de coordenadas de la Pieza 2
  // Esquina 0 para P2
  const pointZeroXP2 = () => {
    if (
      ATTRIB_SETTED == LShaped_l1 ||
      ATTRIB_SETTED == UShaped_u1 ||
      ATTRIB_SETTED == UShaped_u2
    ) {
      return getPartsDataFromPieceCtx(ATTRIB_SETTED)[0].height;
    }
    if (
      ATTRIB_SETTED == LShaped_l2 ||
      ATTRIB_SETTED == UShaped_u3 ||
      ATTRIB_SETTED == UShaped_u4
    ) {
      return 0;
    }
    return 0;
  };
  const pointZeroYP2 = () => {
    if (
      ATTRIB_SETTED == LShaped_l1 ||
      ATTRIB_SETTED == UShaped_u1 ||
      ATTRIB_SETTED == UShaped_u2
    ) {
      return 0;
    }
    if (
      ATTRIB_SETTED == LShaped_l2 ||
      ATTRIB_SETTED == UShaped_u3 ||
      ATTRIB_SETTED == UShaped_u4
    ) {
      return 0;
    }
    return 0;
  };

  // Esquina 1 para P2
  const pointOneXP2 = () => {
    if (
      ATTRIB_SETTED == LShaped_l1 ||
      ATTRIB_SETTED == UShaped_u1 ||
      ATTRIB_SETTED == UShaped_u2
    ) {
      return pieceWidth + getPartsDataFromPieceCtx(ATTRIB_SETTED)[0].height;
    }
    if (
      ATTRIB_SETTED == LShaped_l2 ||
      ATTRIB_SETTED == UShaped_u3 ||
      ATTRIB_SETTED == UShaped_u4
    ) {
      return pieceWidth;
    }
    return 0;
  };
  const pointOneYP2 = () => 0;

  // Esquina 2 para P2
  const pointTwoXP2 = () => {
    if (
      ATTRIB_SETTED == LShaped_l1 ||
      ATTRIB_SETTED == UShaped_u1 ||
      ATTRIB_SETTED == UShaped_u2
    ) {
      return pieceWidth + getPartsDataFromPieceCtx(ATTRIB_SETTED)[0].height;
    }
    if (
      ATTRIB_SETTED == LShaped_l2 ||
      ATTRIB_SETTED == UShaped_u3 ||
      ATTRIB_SETTED == UShaped_u4
    ) {
      return pieceWidth;
    }
    return 0;
  };
  const pointTwoYP2 = () => pieceHeight;

  // Esquina 3 para P2
  const pointThreeXP2 = () => {
    if (
      ATTRIB_SETTED == LShaped_l1 ||
      ATTRIB_SETTED == UShaped_u1 ||
      ATTRIB_SETTED == UShaped_u2
    ) {
      return getPartsDataFromPieceCtx(ATTRIB_SETTED)[0].height;
    }
    if (
      ATTRIB_SETTED == LShaped_l2 ||
      ATTRIB_SETTED == UShaped_u3 ||
      ATTRIB_SETTED == UShaped_u4
    ) {
      return 0;
    }
    return 0;
  };
  const pointThreeYP2 = () => pieceHeight;
  // #endregion

  // #region Calculo de coordenadas de la Pieza 3
  // Esquina 0 para P3
  const pointZeroXP3 = () => {
    if (ATTRIB_SETTED == UShaped_u1) {
      return (
        getPartsDataFromPieceCtx(ATTRIB_SETTED)[0].height +
        getPartsDataFromPieceCtx(ATTRIB_SETTED)[1].width
      );
    }
    if (ATTRIB_SETTED == UShaped_u2) {
      return (
        getPartsDataFromPieceCtx(ATTRIB_SETTED)[0].height +
        getPartsDataFromPieceCtx(ATTRIB_SETTED)[1].width +
        getPartsDataFromPieceCtx(ATTRIB_SETTED)[2].height
      );
    }
    if (ATTRIB_SETTED == UShaped_u3) {
      return (
        getPartsDataFromPieceCtx(ATTRIB_SETTED)[1].width +
        getPartsDataFromPieceCtx(ATTRIB_SETTED)[2].height
      );
    }
    if (ATTRIB_SETTED == UShaped_u4) {
      return getPartsDataFromPieceCtx(ATTRIB_SETTED)[1].width;
    }
    return 0;
  };
  const pointZeroYP3 = () => {
    if (ATTRIB_SETTED == UShaped_u1 || ATTRIB_SETTED == UShaped_u4) {
      return getPartsDataFromPieceCtx(ATTRIB_SETTED)[1].height;
    }
    if (ATTRIB_SETTED == UShaped_u2 || ATTRIB_SETTED == UShaped_u3) {
      return 0;
    }
    return 0;
  };

  // Esquina 1 para P3
  const pointOneXP3 = () => pointZeroXP3();
  const pointOneYP3 = () => pointZeroYP3() + pieceWidth;

  // Esquina 2 para P3
  const pointTwoXP3 = () => pointZeroXP3() - pieceHeight;
  const pointTwoYP3 = () => pointZeroYP3() + pieceWidth;

  // Esquina 3 para P3
  const pointThreeXP3 = () => pointZeroXP3() - pieceHeight;
  const pointThreeYP3 = () => pointZeroYP3();
  // #endregion

  // #region Arreglos de Puntos a dibujar
  // Esquina 0
  const pointsDataArrayZero = () => {
    if (
      indexPiece == 0 &&
      (ATTRIB_SETTED == LShaped_l1 ||
        ATTRIB_SETTED == LShaped_l2 ||
        ATTRIB_SETTED == UShaped_u1 ||
        ATTRIB_SETTED == UShaped_u2 ||
        ATTRIB_SETTED == UShaped_u3 ||
        ATTRIB_SETTED == UShaped_u4)
    ) {
      return [
        pointZeroXP1(),
        pointZeroYP1(),
        pointZeroXP1(),
        pointZeroYP1() - parseFloat(workWidth),
        pointZeroXP1() + parseFloat(workHeight),
        pointZeroYP1(),
      ];
    }

    if (
      indexPiece == 1 &&
      (ATTRIB_SETTED == LShaped_l1 ||
        ATTRIB_SETTED == LShaped_l2 ||
        ATTRIB_SETTED == UShaped_u1 ||
        ATTRIB_SETTED == UShaped_u2 ||
        ATTRIB_SETTED == UShaped_u3 ||
        ATTRIB_SETTED == UShaped_u4)
    ) {
      return [
        pointZeroXP2(),
        pointZeroYP2(),
        pointZeroXP2(),
        pointZeroYP2() + parseFloat(workHeight),
        pointZeroXP2() + parseFloat(workWidth),
        pointZeroYP2(),
      ];
    }

    if (
      indexPiece == 2 &&
      (ATTRIB_SETTED == UShaped_u1 ||
        ATTRIB_SETTED == UShaped_u2 ||
        ATTRIB_SETTED == UShaped_u3 ||
        ATTRIB_SETTED == UShaped_u4)
    ) {
      return [
        pointZeroXP3(),
        pointZeroYP3(),
        pointZeroXP3(),
        pointZeroYP3() + parseFloat(workWidth),
        pointZeroXP3() - parseFloat(workHeight),
        pointZeroYP3(),
      ];
    }
    return [];
  };
  // Esquina 1
  const pointsDataArrayOne = () => {
    if (
      indexPiece == 0 &&
      (ATTRIB_SETTED == LShaped_l1 ||
        ATTRIB_SETTED == LShaped_l2 ||
        ATTRIB_SETTED == UShaped_u1 ||
        ATTRIB_SETTED == UShaped_u2 ||
        ATTRIB_SETTED == UShaped_u3 ||
        ATTRIB_SETTED == UShaped_u4)
    ) {
      return [
        pointOneXP1(),
        pointOneYP1(),
        pointOneXP1(),
        pointOneYP1() + parseFloat(workWidth),
        pointOneXP1() + parseFloat(workHeight),
        pointOneYP1(),
      ];
    }

    if (
      indexPiece == 1 &&
      (ATTRIB_SETTED == LShaped_l1 ||
        ATTRIB_SETTED == LShaped_l2 ||
        ATTRIB_SETTED == UShaped_u1 ||
        ATTRIB_SETTED == UShaped_u2 ||
        ATTRIB_SETTED == UShaped_u3 ||
        ATTRIB_SETTED == UShaped_u4)
    ) {
      return [
        pointOneXP2(),
        pointOneYP2(),
        pointOneXP2(),
        pointOneYP2() + parseFloat(workHeight),
        pointOneXP2() - parseFloat(workWidth),
        pointOneYP2(),
      ];
    }

    if (
      indexPiece == 2 &&
      (ATTRIB_SETTED == UShaped_u1 ||
        ATTRIB_SETTED == UShaped_u2 ||
        ATTRIB_SETTED == UShaped_u3 ||
        ATTRIB_SETTED == UShaped_u4)
    ) {
      return [
        pointOneXP3(),
        pointOneYP3(),
        pointOneXP3(),
        pointOneYP3() - parseFloat(workWidth),
        pointOneXP3() - parseFloat(workHeight),
        pointOneYP3(),
      ];
    }
    return [];
  };
  // Esquina 2
  const pointsDataArrayTwo = () => {
    if (
      indexPiece == 0 &&
      (ATTRIB_SETTED == LShaped_l1 ||
        ATTRIB_SETTED == LShaped_l2 ||
        ATTRIB_SETTED == UShaped_u1 ||
        ATTRIB_SETTED == UShaped_u2 ||
        ATTRIB_SETTED == UShaped_u3 ||
        ATTRIB_SETTED == UShaped_u4)
    ) {
      return [
        pointTwoXP1(),
        pointTwoYP1(),
        pointTwoXP1(),
        pointTwoYP1() + parseFloat(workWidth),
        pointTwoXP1() - parseFloat(workHeight),
        pointTwoYP1(),
      ];
    }

    if (
      indexPiece == 1 &&
      (ATTRIB_SETTED == LShaped_l1 ||
        ATTRIB_SETTED == LShaped_l2 ||
        ATTRIB_SETTED == UShaped_u1 ||
        ATTRIB_SETTED == UShaped_u2 ||
        ATTRIB_SETTED == UShaped_u3 ||
        ATTRIB_SETTED == UShaped_u4)
    ) {
      return [
        pointTwoXP2(),
        pointTwoYP2(),
        pointTwoXP2(),
        pointTwoYP2() - parseFloat(workHeight),
        pointTwoXP2() - parseFloat(workWidth),
        pointTwoYP2(),
      ];
    }

    if (
      indexPiece == 2 &&
      (ATTRIB_SETTED == UShaped_u1 ||
        ATTRIB_SETTED == UShaped_u2 ||
        ATTRIB_SETTED == UShaped_u3 ||
        ATTRIB_SETTED == UShaped_u4)
    ) {
      return [
        pointTwoXP3(),
        pointTwoYP3(),
        pointTwoXP3(),
        pointTwoYP3() - parseFloat(workWidth),
        pointTwoXP3() + parseFloat(workHeight),
        pointTwoYP3(),
      ];
    }

    return [];
  };
  // Esquina 3
  const pointsDataArrayThree = () => {
    if (
      indexPiece == 0 &&
      (ATTRIB_SETTED == LShaped_l1 ||
        ATTRIB_SETTED == LShaped_l2 ||
        ATTRIB_SETTED == UShaped_u1 ||
        ATTRIB_SETTED == UShaped_u2 ||
        ATTRIB_SETTED == UShaped_u3 ||
        ATTRIB_SETTED == UShaped_u4)
    ) {
      return [
        pointThreeXP1(),
        pointThreeYP1(),
        pointThreeXP1(),
        pointThreeYP1() - parseFloat(workWidth),
        pointThreeXP1() - parseFloat(workHeight),
        pointThreeYP1(),
      ];
    }

    if (
      indexPiece == 1 &&
      (ATTRIB_SETTED == LShaped_l1 ||
        ATTRIB_SETTED == LShaped_l2 ||
        ATTRIB_SETTED == UShaped_u1 ||
        ATTRIB_SETTED == UShaped_u2 ||
        ATTRIB_SETTED == UShaped_u3 ||
        ATTRIB_SETTED == UShaped_u4)
    ) {
      return [
        pointThreeXP2(),
        pointThreeYP2(),
        pointThreeXP2(),
        pointThreeYP2() - parseFloat(workHeight),
        pointThreeXP2() + parseFloat(workWidth),
        pointThreeYP2(),
      ];
    }

    if (
      indexPiece == 2 &&
      (ATTRIB_SETTED == UShaped_u1 ||
        ATTRIB_SETTED == UShaped_u2 ||
        ATTRIB_SETTED == UShaped_u3 ||
        ATTRIB_SETTED == UShaped_u4)
    ) {
      return [
        pointThreeXP3(),
        pointThreeYP3(),
        pointThreeXP3(),
        pointThreeYP3() + parseFloat(workWidth),
        pointThreeXP3() + parseFloat(workHeight),
        pointThreeYP3(),
      ];
    }

    return [];
  };
  // #endregion

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
  }, [ATTRIB_SETTED, pieceSelected.width, pieceSelected.height]);

  return (
    <Group>
      {workData.type == WORKS_TYPES.CCCHAFLAN && (
        <Group x={GLOBAL_CT_M.xGlobalLayer} y={GLOBAL_CT_M.yGlobalLayer}>
          {handleCornerShowed(0) && (
            // <Group x={GLOBAL_CT_M.xGlobalLayer} y={GLOBAL_CT_M.yGlobalLayer}>
            <Line points={pointsDataArrayZero()} closed={true} fill="white" />
            // </Group>
          )}
          {handleCornerShowed(1) && (
            // <Group x={GLOBAL_CT_M.xGlobalLayer} y={GLOBAL_CT_M.yGlobalLayer}>
            <Line points={pointsDataArrayOne()} closed={true} fill="white" />
            // </Group>
          )}
          {handleCornerShowed(2) && (
            // <Group x={GLOBAL_CT_M.xGlobalLayer} y={GLOBAL_CT_M.yGlobalLayer}>
            <Line points={pointsDataArrayTwo()} closed={true} fill="white" />
            // </Group>
          )}
          {handleCornerShowed(3) && (
            // <Group x={GLOBAL_CT_M.xGlobalLayer} y={GLOBAL_CT_M.yGlobalLayer}>
            <Line points={pointsDataArrayThree()} closed={true} fill="white" />
            // </Group>
          )}
        </Group>
      )}
    </Group>
  );
}

export default ChaflanCNCWorkL;

ChaflanCNCWorkL.propTypes = {
  workData: PropTypes.object,
  pieceSelected: PropTypes.object,
};
