import { Group, Layer, Rect } from "react-konva";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export default function RectLTemplate(props) {
  const { itemData } = props;

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
      <Rect
        // ref={rectNew}
        x={itemData?.x}
        y={itemData?.y}
        width={itemData?.width}
        height={itemData?.height}
        stroke={itemData?.stroke || ""}
        strokeWidth={itemData?.strokeWidth || 0}
        fill={itemData?.fill}
        fillPriority={imageData.fillPriority}
        fillPatternImage={imageData.img}
        fillPatternRepeat={itemData?.fillPatternRepeat}
        cornerRadius={itemData?.cornerRadius}
        rotation={itemData?.rotation}
        offsetX={itemData?.offsetX}
        offsetY={itemData?.offsetY}
      />
    </Group>
  );
}

RectLTemplate.propTypes = {
  itemData: PropTypes.object,
};
