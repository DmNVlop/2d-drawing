import { Layer, Rect } from "react-konva";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export default function RectUTemplate(props) {
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
    if (props?.itemData?.fillPatternImage) {
      setFillPriority("pattern", props?.itemData?.fillPatternImage);
    }
  }, [props?.itemData?.fillPatternImage]);

  return (
    <Layer>
      <Rect
        // ref={rectNew}
        x={props?.itemData?.x}
        y={props?.itemData?.y}
        width={props?.itemData?.width}
        height={props?.itemData?.height}
        fill={props?.itemData?.fill}
        fillPriority={imageData.fillPriority}
        fillPatternImage={imageData.img}
        fillPatternRepeat={props?.itemData?.fillPatternRepeat}
        cornerRadius={props?.itemData?.cornerRadius}
        rotation={props?.itemData?.rotation}
        offsetX={props?.itemData?.offsetX}
        offsetY={props?.itemData?.offsetY}
      />
    </Layer>
  );
}

RectUTemplate.propTypes = {
  itemData: PropTypes.object,
};
