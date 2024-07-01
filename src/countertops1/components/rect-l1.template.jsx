import { Group, Layer, Rect } from "react-konva";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export default function RectLTemplateL1(props) {
  const { itemData, getPartsDataFromPieceCtx } = props;

  const [imageData, setImageData] = useState("");

  const setFillPriority = (priority, imgPath) => {
    const img = new window.Image();
    const fillPriority = priority || "color";
    img.src = imgPath;

    img.onload = () => {
      setImageData({ fillPriority, img });
    };
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
        />
      )}
    </Group>
  );
}

RectLTemplateL1.propTypes = {
  itemData: PropTypes.object,
  getPartsDataFromPieceCtx: PropTypes.array,
};
