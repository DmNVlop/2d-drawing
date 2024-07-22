import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { Circle, Group, Layer, Line, Rect } from "react-konva";
import { GLOBAL_CT_M } from "../../mocks/global-ct.mock";
import { useCountertopContext } from "../../context/ct-context";
import { useCustomURLHandler } from "../../helpers/location.hook";
import { SHAPE_TYPES } from "../../mocks/SHAPE_TYPES.const";

function EncastreWorkL(props) {
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
  const pointZeroYP2 = () => 0;
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
  // #endregion

  // #region Arreglos de Puntos a dibujar
  const initialPositionXPeerPiece = () => {
    if (pieceSelected.id == 1) {
      return {
        rotation: -90,
        x: pointZeroXP1(),
        y: pointZeroYP1(),
        offsetX: 0,
        offsetY: 0,
      };
    }

    if (pieceSelected.id == 2) {
      return {
        rotation: 0,
        x: pointZeroXP2(),
        y: pointZeroYP2(),
        offsetX: 0,
        offsetY: 0,
      };
    }

    if (pieceSelected.id == 3) {
      return {
        rotation: 90,
        x: pointZeroXP3(),
        y: pointZeroYP3(),
        offsetX: workData.width - 20,
        offsetY: 140,
      };
    }
  };
  // #endregion

  useEffect(() => {
    setWorkWidth(workData.width);
    setWorkHeight(workData.height);
    setPieceWidth(pieceSelected.width);
    setPieceHeight(pieceSelected.height);
  }, [ATTRIB_SETTED, pieceSelected.width, pieceSelected.height]);

  // const initialPositionX = workData.positionLength + GLOBAL_CT_M.xGlobalLayer;
  // const xInit =
  //   workData.positionFrom == 1
  //     ? initialPositionX + workData.positionLength
  //     : workData.positionFrom == 2
  //     ? initialPositionX + pieceWidth - workData.positionLength
  //     : initialPositionX;

  const xInitFn = () => {
    if (pieceSelected.id == 1) {
      return workData.positionFrom == 1
        ? -GLOBAL_CT_M.yGlobalLayer +
            workData.positionLength -
            workData.width / 2
        : pieceSelected.width -
            GLOBAL_CT_M.yGlobalLayer -
            workData.positionLength -
            workData.width / 2;
    }

    if (pieceSelected.id == 2) {
      return workData.positionFrom == 1
        ? GLOBAL_CT_M.xGlobalLayer +
            workData.positionLength -
            workData.width / 2
        : pieceSelected.width -
            workData.positionLength -
            workData.width / 2 +
            GLOBAL_CT_M.xGlobalLayer;
    }

    if (pieceSelected.id == 3) {
      return workData.positionFrom == 1
        ? GLOBAL_CT_M.xGlobalLayer +
            workData.positionLength +
            workData.width / 2
        : GLOBAL_CT_M.xGlobalLayer +
            pieceWidth -
            workData.positionLength +
            workData.width / 2;
    }
  };

  const yInitFn = () => {
    if (pieceSelected.id == 1) {
      return (
        GLOBAL_CT_M.xGlobalLayer +
        pieceHeight -
        workData.height -
        workData.frontLength
      );
    }

    if (pieceSelected.id == 2) {
      return (
        GLOBAL_CT_M.yGlobalLayer +
        pieceHeight -
        workData.height -
        workData.frontLength
      );
    }

    if (pieceSelected.id == 3) {
      return (
        GLOBAL_CT_M.yGlobalLayer +
        pieceHeight -
        workData.height -
        workData.frontLength
      );
    }
  };

  return (
    <Group
      rotation={initialPositionXPeerPiece()?.rotation || 0}
      x={initialPositionXPeerPiece()?.x || 0}
      y={initialPositionXPeerPiece()?.y || 0}
      offsetX={initialPositionXPeerPiece()?.offsetX || 0}
      offsetY={initialPositionXPeerPiece()?.offsetY || 0}
    >
      {/* Hueco exterior */}
      <Rect
        x={xInitFn()}
        y={yInitFn()}
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
          x={xInitFn() + workData.tapDiameter}
          y={yInitFn() - 60}
          radius={workData.tapDiameter}
          fill="white"
        />
      )}

      {/*  // CENTRE */}
      {workData.tapPosition == 2 && workData.hasWaterTap && (
        <Circle
          x={xInitFn() + workData.width / 2}
          y={yInitFn() - 60}
          radius={workData.tapDiameter}
          fill="white"
        />
      )}

      {/*  // RIGHT */}
      {workData.tapPosition == 3 && workData.hasWaterTap && (
        <Circle
          x={xInitFn() + workData.width - workData.tapDiameter}
          y={yInitFn() - 60}
          radius={workData.tapDiameter}
          fill="white"
        />
      )}
    </Group>
  );
}
export default EncastreWorkL;
EncastreWorkL.propTypes = {
  workData: PropTypes.object,
  pieceSelected: PropTypes.object,
};
