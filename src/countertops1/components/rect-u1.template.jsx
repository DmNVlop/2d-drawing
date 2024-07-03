import { Group, Rect } from "react-konva";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { NO_PIEZAS } from "../mocks/NO_PARTS.const";

export default function RectUTemplateU1(props) {
  const { itemData, getPartsDataFromPieceCtx, onSetSelectedPieceCtx } = props;
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

  const handleClickOnSelectPiece1 = () => {
    onSetSelectedPieceCtx(getPieceJSON(1));
  };
  const handleClickOnSelectPiece2 = () => {
    onSetSelectedPieceCtx(getPieceJSON(2));
  };
  const handleClickOnSelectPiece3 = () => {
    onSetSelectedPieceCtx(getPieceJSON(3));
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
            offsetX={-getPartsDataFromPieceCtx[1].height}
            offsetY={
              getPartsDataFromPieceCtx[0].height +
              getPartsDataFromPieceCtx[1].width
            }
            onClick={handleClickOnSelectPiece3}
          />
        </Group>
      )}
    </>
  );
}

RectUTemplateU1.propTypes = {
  itemData: PropTypes.object,
  getPartsDataFromPieceCtx: PropTypes.array,
};
