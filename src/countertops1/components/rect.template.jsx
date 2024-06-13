import { Rect } from "react-konva";
import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { RectHelperCalcSizes } from "./Rect-Helpers/rect-helper";

export default function RectTemplate(props) {
  const rect_REF = useRef();

  const [imageData, setImageData] = useState("");
  const [cornerRadiusState, setCornerRadiusState] = useState([0, 0, 0, 0]);

  const [dimensions, setDimensions] = useState({
    width: props?.itemData?.realWidth,
    height: props?.itemData?.realHeight,
  });

  const setFillPriority = (priority, imgPath) => {
    const img = new window.Image();
    const fillPriority = priority || "color";
    img.src = imgPath;

    img.onload = () => {
      setImageData({ fillPriority, img });
    };
  };

  const handleClickRect = () => {
    setFillPriority(
      "pattern",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5d7Y41hy4ntijBBsFIPYA7hcmojYFx7H3sVRZx_ffV6IElyPSW5vK1czr8A&s"
    );
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

  // Hanlde Dimensions
  // const maxWidth = 1120;
  // const maxHeight = 700;

  useEffect(() => {
    //   if (props?.itemData?.width && props?.itemData?.height) {
    //     const aspectRadio = props?.itemData?.width / props?.itemData?.height;

    //     const rectHelperCalcSizes = RectHelperCalcSizes(
    //       props?.itemData?.width,
    //       props?.itemData?.height,
    //       maxWidth,
    //       maxHeight,
    //       aspectRadio
    //     );

    //     props.setRealSizes(rectHelperCalcSizes, props?.id);

    setDimensions({
      width: props?.itemData?.realWidth,
      height: props?.itemData?.realHeight,
    });
    //   }
  }, [props?.itemData?.realWidth, props?.itemData?.realHeight]);

  return (
    <Rect
      ref={rect_REF}
      x={props?.itemData?.x}
      y={props?.itemData?.y}
      width={dimensions?.width || 10}
      height={dimensions?.height || 10}
      fill={props?.itemData?.fill}
      fillPriority={imageData.fillPriority}
      fillPatternImage={imageData.img}
      fillPatternRepeat={props?.itemData?.fillPatternRepeat}
      cornerRadius={cornerRadiusState}
      onClick={handleClickRect}
    />
  );
}

RectTemplate.propTypes = {
  itemData: PropTypes.object,
  // setRealSizes: PropTypes.func,
  id: PropTypes.number,
};
