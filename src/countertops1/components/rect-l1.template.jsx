import { Circle, Group, Layer, Line, Rect } from "react-konva";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { NO_PIEZAS } from "../mocks/NO_PARTS.const";
import { useCustomURLHandler } from "../helpers/location.hook";
import { ASSEMBLY_TYPES } from "../mocks/ASSEMBLY_TYPES.const";

export default function RectLTemplateL1(props) {
  const {
    itemData,
    getPartsDataFromPieceCtx,
    getAssemblyTypeFromPiecesCtx,
    onSetSelectedPieceCtx,
    setSidebarRightOpenedCtx,
  } = props;

  const { ATTRIB_SETTED } = useCustomURLHandler();

  const [imageData, setImageData] = useState("");

  const setFillPriority = (priority, imgPath) => {
    const img = new window.Image();
    const fillPriority = priority || "color";
    img.src = imgPath;

    img.onload = () => {
      setImageData({ fillPriority, img });
    };
  };

  const getPieceJSON = (numberOfPiece) => {
    return NO_PIEZAS.find((item) => {
      return item.value === numberOfPiece;
    });
  };

  const handleClickOnSelectPiece1 = (e) => {
    onSetSelectedPieceCtx(getPieceJSON(1));
    e.cancelBubble = true;
  };
  const handleClickOnSelectPiece2 = (e) => {
    onSetSelectedPieceCtx(getPieceJSON(2));
    e.cancelBubble = true;
  };

  const handleDblClickOnSelectPiece = (e) => {
    setSidebarRightOpenedCtx(true);
    e.cancelBubble = true;
  };

  const canActivateIfHaveLines = (position) => {
    return (
      Array.isArray(itemData?.haveLines) &&
      itemData?.haveLines.length > 0 &&
      itemData?.haveLines[position] === 1
    );
  };

  const calcPointLines = (position) => {
    if (
      itemData?.haveLines[position] === 1 &&
      getAssemblyTypeFromPiecesCtx(ATTRIB_SETTED) ==
        ASSEMBLY_TYPES.VARIABLE_MECANIZADO
    ) {
      return [
        0,
        0,
        Number(getPartsDataFromPieceCtx[0].height),
        Number(itemData?.height),
      ];
    }

    if (
      itemData?.haveLines[position] === 1 &&
      getAssemblyTypeFromPiecesCtx(ATTRIB_SETTED) ==
        ASSEMBLY_TYPES.NOVENTA_MECANIZADO_EMBOQUILLADO
    ) {
      return [
        Number(getPartsDataFromPieceCtx[0].height),
        Number(itemData?.height),
        Number(getPartsDataFromPieceCtx[0].height) - 10,
        Number(itemData?.height) - 10,
        Number(getPartsDataFromPieceCtx[0].height) - 10,
        0,
      ];
    }

    return [
      Number(getPartsDataFromPieceCtx[0].height),
      0,
      Number(getPartsDataFromPieceCtx[0].height),
      Number(itemData?.height),
    ];
  };

  const calcAssemblysHPL = (assemblyPosition) => {
    const centerLine = Number(getPartsDataFromPieceCtx[0].height);
    const heightPiece = Number(getPartsDataFromPieceCtx[1].height);
    if (
      getAssemblyTypeFromPiecesCtx(ATTRIB_SETTED) ==
      ASSEMBLY_TYPES.VARIABLE_MECANIZADO
    ) {
      const pointsPosition = {
        1: [
          centerLine,
          (heightPiece * 1) / 3,
          centerLine - 20,
          (heightPiece * 1) / 3,
        ],
        2: [0, 0, 0, Number(itemData?.height)],
        3: [0, 0, 0, Number(itemData?.height)],
        4: [0, 0, Number(getPartsDataFromPieceCtx[0].height), 0],
      };
      return pointsPosition[assemblyPosition];
    }

    if (
      getAssemblyTypeFromPiecesCtx(ATTRIB_SETTED) ==
      ASSEMBLY_TYPES.NOVENTA_MECANIZADO_EMBOQUILLADO
    ) {
      const pointsPosition = {
        1: [
          centerLine - 10,
          heightPiece * (1 / 3),
          centerLine - 10 - 80,
          heightPiece * (1 / 3),
        ],
        2: [
          centerLine - 10,
          heightPiece * (1 / 3),
          centerLine - 10 + 80,
          heightPiece * (1 / 3),
        ],
        3: [
          centerLine - 10,
          heightPiece * (2 / 3),
          centerLine - 10 - 80,
          heightPiece * (2 / 3),
        ],
        4: [
          centerLine - 10,
          heightPiece * (2 / 3),
          centerLine - 10 + 80,
          heightPiece * (2 / 3),
        ],
      };
      const circlePositionX = {
        1: centerLine - 10 - 80,
        2: centerLine - 10 + 80,
        3: centerLine - 10 - 80,
        4: centerLine - 10 + 80,
      };
      const circlePositionY = {
        1: heightPiece * (1 / 3),
        2: heightPiece * (1 / 3),
        3: heightPiece * (2 / 3),
        4: heightPiece * (2 / 3),
      };
      return {
        line: pointsPosition[assemblyPosition],
        circleX: circlePositionX[assemblyPosition],
        circleY: circlePositionY[assemblyPosition],
      };
    }

    return [];
  };

  useEffect(() => {
    if (itemData?.fillPatternImage) {
      setFillPriority("pattern", itemData?.fillPatternImage);
    }
  }, [itemData?.fillPatternImage]);

  return (
    <Group>
      {itemData.id == 1 && (
        <Rect
          // ref={rectNew}
          x={itemData?.x}
          y={itemData?.y}
          width={itemData?.width}
          height={itemData?.height}
          stroke={itemData?.stroke || ""}
          strokeWidth={itemData?.strokeWidth || 0}
          scaleX={itemData?.scaleX || 1}
          scaleY={itemData?.scaleY || 1}
          opacity={itemData?.opacity || 0.8}
          fill={itemData?.fill}
          fillPriority={imageData.fillPriority}
          fillPatternImage={imageData.img}
          fillPatternRepeat={itemData?.fillPatternRepeat}
          cornerRadius={itemData?.cornerRadius}
          rotation={itemData?.rotation}
          offsetX={itemData?.width}
          offsetY={0}
          onClick={handleClickOnSelectPiece1}
          onDblClick={handleDblClickOnSelectPiece}
        />
      )}
      {itemData.id == 2 && (
        <Rect
          // ref={rectNew}
          x={itemData?.x}
          y={itemData?.y}
          width={itemData?.width}
          height={itemData?.height}
          stroke={itemData?.stroke || ""}
          strokeWidth={itemData?.strokeWidth || 0}
          scaleX={itemData?.scaleX || 1}
          scaleY={itemData?.scaleY || 1}
          opacity={itemData?.opacity || 0.8}
          fill={itemData?.fill}
          fillPriority={imageData.fillPriority}
          fillPatternImage={imageData.img}
          fillPatternRepeat={itemData?.fillPatternRepeat}
          cornerRadius={itemData?.cornerRadius}
          rotation={itemData?.rotation}
          offsetX={-getPartsDataFromPieceCtx[0].height}
          offsetY={0}
          onClick={handleClickOnSelectPiece2}
          onDblClick={handleDblClickOnSelectPiece}
        />
      )}
      {itemData?.id == 2 && canActivateIfHaveLines(2) && (
        <>
          <Line
            x={itemData?.x || 0}
            y={itemData?.y || 0}
            points={calcPointLines(2)}
            stroke={"black"}
            strokeWidth={1}
          />

          {[1, 2, 3, 4].map((item) => (
            <>
              <Line
                x={itemData?.x || 0}
                y={itemData?.y || 0}
                points={calcAssemblysHPL(item).line || 0}
                stroke={"gray"}
                strokeWidth={8}
              />

              <Circle
                x={calcAssemblysHPL(item)?.circleX || 0}
                y={calcAssemblysHPL(item)?.circleY || 0}
                radius={20}
                fill="gray"
              />
            </>
          ))}
        </>
      )}
    </Group>
  );
}

RectLTemplateL1.propTypes = {
  itemData: PropTypes.object,
  getPartsDataFromPieceCtx: PropTypes.array,
  setSidebarRightOpenedCtx: PropTypes.func,
};
