import { Layer, Rect } from "react-konva";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { GLOBAL_CT_M } from "../mocks/global-ct.mock";

export default function RectTemplate(props) {
  const [imageData, setImageData] = useState("");
  const [cornerRadiusState, setCornerRadiusState] = useState([0, 0, 0, 0]);

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

  useEffect(() => {
    if (props?.itemData?.cornerRadius) {
      setCornerRadiusState(props?.itemData?.cornerRadius);
    }
  }, [props?.itemData?.cornerRadius]);

  const handleClickRect = () => {
    setFillPriority(
      "pattern",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5d7Y41hy4ntijBBsFIPYA7hcmojYFx7H3sVRZx_ffV6IElyPSW5vK1czr8A&s"
    );
  };

  return (
    <Layer x={GLOBAL_CT_M.xGlobalLayer} y={GLOBAL_CT_M.yGlobalLayer}>
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
        cornerRadius={cornerRadiusState}
        onClick={handleClickRect}
      />
    </Layer>
  );
}

RectTemplate.propTypes = {
  itemData: PropTypes.object,
};
