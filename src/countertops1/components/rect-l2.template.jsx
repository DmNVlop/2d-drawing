import { Group, Layer, Rect } from "react-konva";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { NO_PIEZAS } from "../mocks/NO_PARTS.const";

export default function RectLTemplateL2(props) {
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
          offsetX={itemData?.width + getPartsDataFromPieceCtx[1].height}
          offsetY={0}
          onClick={handleClickOnSelectPiece1}
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
          offsetX={0}
          offsetY={0}
          onClick={handleClickOnSelectPiece2}
        />
      )}
    </Group>
  );
}

RectLTemplateL2.propTypes = {
  itemData: PropTypes.object,
  getPartsDataFromPieceCtx: PropTypes.array,
};
