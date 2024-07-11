import { Rect } from "react-konva";
import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { useCountertopContext } from "../context/ct-context";
import { NO_PIEZAS } from "../mocks/NO_PARTS.const";

export default function RectTemplate(props) {
  const { itemData } = props;
  const { onSetSelectedPieceCtx, setSidebarRightOpenedCtx } =
    useCountertopContext();

  const rect_REF = useRef(null);

  const [imageData, setImageData] = useState("");
  const [cornerRadiusState, setCornerRadiusState] = useState([0, 0, 0, 0]);

  // const [dimensions, setDimensions] = useState({
  //   width: itemData.realWidth,
  //   height: itemData.realHeight,
  // });

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

  const handleClickRect = (e) => {
    onSetSelectedPieceCtx(getPieceJSON(1));
    e.cancelBubble = true;

    // setFillPriority(
    //   "pattern",
    //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5d7Y41hy4ntijBBsFIPYA7hcmojYFx7H3sVRZx_ffV6IElyPSW5vK1czr8A&s"
    // );
  };

  const handleDblClickOnSelectPiece = (e) => {
    setSidebarRightOpenedCtx(true);
    e.cancelBubble = true;
  };

  useEffect(() => {
    if (itemData.fillPatternImage) {
      setFillPriority("pattern", itemData.fillPatternImage);
    }
  }, [itemData.fillPatternImage]);

  useEffect(() => {
    if (itemData.cornerRadius) {
      setCornerRadiusState(itemData.cornerRadius);
    }
  }, [itemData.cornerRadius]);

  // useEffect(() => {
  //   setDimensions({
  //     width: itemData.realWidth,
  //     height: itemData.realHeight,
  //   });
  //   //   }
  // }, [itemData.realWidth, itemData.realHeight]);

  return (
    <Rect
      ref={rect_REF}
      x={itemData.x}
      y={itemData.y}
      width={itemData?.width || 100}
      height={itemData?.height || 100}
      rotation={itemData.rotation}
      fill={itemData.fill}
      stroke={itemData?.stroke || ""}
      strokeWidth={itemData?.strokeWidth || 0}
      scaleX={itemData?.scaleX || 1}
      scaleY={itemData?.scaleY || 1}
      opacity={itemData?.opacity || 0.8}
      fillPriority={imageData.fillPriority}
      fillPatternImage={imageData.img}
      fillPatternRepeat={itemData.fillPatternRepeat}
      cornerRadius={cornerRadiusState}
      onClick={handleClickRect}
      onDblClick={handleDblClickOnSelectPiece}
    />
  );
}

RectTemplate.propTypes = {
  id: PropTypes.number,
  itemData: PropTypes.object,
  setSidebarRightOpenedCtx: PropTypes.func,
};
