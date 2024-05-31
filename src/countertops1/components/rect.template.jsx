import { Layer, Rect } from "react-konva";
import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { GLOBAL_CT_M } from "../mocks/global-ct.mock";
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
  const maxWidth = 1120;
  const maxHeight = 700;
  // const aspectRadio = props?.itemData?.width / props?.itemData?.height;

  // INIT Dimensions
  // useEffect(() => {
  //   setDimensions(() => {
  //     return {
  //       width: props?.itemData?.realWidth,
  //       height: props?.itemData?.realHeight,
  //     };
  //   });
  // }, []);

  // MOD Width
  useEffect(() => {
    if (props?.itemData?.width && props?.itemData?.height) {
      const aspectRadio = props?.itemData?.width / props?.itemData?.height;

      const rectHelperCalcSizes = RectHelperCalcSizes(
        props?.itemData?.width,
        props?.itemData?.height,
        maxWidth,
        maxHeight,
        aspectRadio
      );

      props.setRealSizes(rectHelperCalcSizes, props?.id);

      setDimensions(() => {
        return rectHelperCalcSizes;
      });
    }
  }, [props?.itemData?.width, props?.itemData?.height]);

  // MOD Height
  // useEffect(() => {
  //   const aspectRadio = props?.itemData?.width / props?.itemData?.height;

  //   setDimensions(() => {
  //     if (
  //       props?.itemData?.width <= maxWidth &&
  //       props?.itemData?.height <= maxHeight
  //     ) {
  //       return {
  //         width: props?.itemData?.width,
  //         height: props?.itemData?.height,
  //       };
  //     }

  //     if (
  //       props?.itemData?.width > maxWidth &&
  //       props?.itemData?.height <= maxHeight
  //     ) {
  //       return {
  //         width: maxWidth,
  //         height: maxWidth / aspectRadio,
  //       };
  //     }

  //     if (
  //       props?.itemData?.width <= maxWidth &&
  //       props?.itemData?.height > maxHeight
  //     ) {
  //       return {
  //         width: maxHeight * aspectRadio,
  //         height: maxHeight,
  //       };
  //     }

  //     if (
  //       props?.itemData?.width > maxWidth &&
  //       props?.itemData?.height > maxHeight
  //     ) {
  //       if (props?.itemData?.width > props?.itemData?.height) {
  //         return {
  //           width: maxWidth,
  //           height: maxWidth / aspectRadio,
  //         };
  //       }
  //       if (props?.itemData?.width < props?.itemData?.height) {
  //         return {
  //           width: maxHeight * aspectRadio,
  //           height: maxHeight,
  //         };
  //       }
  //     }
  //   });
  // }, [props?.itemData?.height]);

  return (
    <Layer x={GLOBAL_CT_M.xGlobalLayer} y={GLOBAL_CT_M.yGlobalLayer}>
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
    </Layer>
  );
}

RectTemplate.propTypes = {
  itemData: PropTypes.object,
  setRealSizes: PropTypes.func,
  id: PropTypes.number,
};
