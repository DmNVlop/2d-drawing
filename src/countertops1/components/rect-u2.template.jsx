import { Group, Rect } from "react-konva";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { NO_PIEZAS } from "../mocks/NO_PARTS.const";

export default function RectUTemplateU2(props) {
  const {
    itemData,
    getPartsDataFromPieceCtx,
    onSetSelectedPieceCtx,
    setSidebarRightOpenedCtx,
  } = props;
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
  const handleClickOnSelectPiece3 = (e) => {
    onSetSelectedPieceCtx(getPieceJSON(3));
    e.cancelBubble = true;
  };

  const handleDblClickOnSelectPiece = (e) => {
    setSidebarRightOpenedCtx(true);
    e.cancelBubble = true;
  };

  useEffect(() => {
    if (itemData?.fillPatternImage) {
      setFillPriority("pattern", itemData?.fillPatternImage);
    }
  }, [itemData?.fillPatternImage]);

  return (
    <>
      {itemData.id == 1 && (
        <Group>
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
        </Group>
      )}

      {itemData.id == 2 && (
        <Group>
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
        </Group>
      )}

      {itemData.id == 3 && (
        <Group>
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
            offsetX={0}
            offsetY={
              getPartsDataFromPieceCtx[0].height +
              getPartsDataFromPieceCtx[1].width +
              itemData?.height
            }
            onClick={handleClickOnSelectPiece3}
            onDblClick={handleDblClickOnSelectPiece}
          />
        </Group>
      )}
    </>
  );
}

RectUTemplateU2.propTypes = {
  itemData: PropTypes.object,
  getPartsDataFromPieceCtx: PropTypes.array,
  setSidebarRightOpenedCtx: PropTypes.func,
};
