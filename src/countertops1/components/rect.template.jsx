import { Group, Rect } from "react-konva";
import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { useCountertopContext } from "../context/ct-context";
import { NO_PIEZAS } from "../mocks/NO_PARTS.const";

export default function RectTemplate(props) {
  const { itemData } = props;
  const _BASE_CORNER_OPACITY = 0.2;
  const _BASE_CORNER_HOVER_OPACITY = 0.5;

  const {
    getSelectedPieceValueCtx,
    onSetSelectedPieceCtx,
    setSidebarRightOpenedCtx,
  } = useCountertopContext();

  const rect_REF = useRef(null);
  const rectCorner0_REF = useRef(null);
  const rectCorner1_REF = useRef(null);
  const rectCorner2_REF = useRef(null);
  const rectCorner3_REF = useRef(null);

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

  const handleClickOnCorner = (e, position, rectREF) => {
    e.cancelBubble = true;
  };

  const handleMouseEnter = (e, cornerPos, rectREF) => {
    rectREF.current.opacity(_BASE_CORNER_HOVER_OPACITY);
  };

  const handleMouseLeave = (e, cornerPos, rectREF) => {
    rectREF.current.opacity(_BASE_CORNER_OPACITY);
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

  return (
    <Group>
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

      {getSelectedPieceValueCtx() === 0 && (
        <Group>
          <Rect
            ref={rectCorner0_REF}
            x={itemData.x}
            y={itemData.y}
            offsetX={42}
            offsetY={42}
            width={48}
            height={48}
            cornerRadius={[24, 24, 24, 24]}
            fill={"red"}
            stroke={"black"}
            strokeWidth={4}
            opacity={_BASE_CORNER_OPACITY}
            onClick={(e) => handleClickOnCorner(e, 0, rectCorner0_REF)}
            onMouseEnter={(e) => handleMouseEnter(e, 0, rectCorner0_REF)}
            onMouseLeave={(e) => handleMouseLeave(e, 0, rectCorner0_REF)}
          />

          <Rect
            ref={rectCorner1_REF}
            x={itemData.x + itemData.width}
            y={itemData.y}
            offsetX={8}
            offsetY={42}
            width={48}
            height={48}
            cornerRadius={[24, 24, 24, 24]}
            fill={"red"}
            stroke={"black"}
            strokeWidth={4}
            opacity={_BASE_CORNER_OPACITY}
            onClick={(e) => handleClickOnCorner(e, 1, rectCorner1_REF)}
            onMouseEnter={(e) => handleMouseEnter(e, 1, rectCorner1_REF)}
            onMouseLeave={(e) => handleMouseLeave(e, 1, rectCorner1_REF)}
          />

          <Rect
            ref={rectCorner2_REF}
            x={itemData.x + itemData.width}
            y={itemData.y + itemData.height}
            offsetX={6}
            offsetY={6}
            width={48}
            height={48}
            cornerRadius={[24, 24, 24, 24]}
            fill={"red"}
            stroke={"black"}
            strokeWidth={4}
            opacity={_BASE_CORNER_OPACITY}
            onClick={(e) => handleClickOnCorner(e, 2, rectCorner2_REF)}
            onMouseEnter={(e) => handleMouseEnter(e, 2, rectCorner2_REF)}
            onMouseLeave={(e) => handleMouseLeave(e, 2, rectCorner2_REF)}
          />

          <Rect
            ref={rectCorner3_REF}
            x={itemData.x}
            y={itemData.y + itemData.height}
            offsetX={42}
            offsetY={8}
            width={48}
            height={48}
            cornerRadius={[24, 24, 24, 24]}
            fill={"red"}
            stroke={"black"}
            strokeWidth={4}
            opacity={_BASE_CORNER_OPACITY}
            onClick={(e) => handleClickOnCorner(e, 3, rectCorner3_REF)}
            onMouseEnter={(e) => handleMouseEnter(e, 3, rectCorner3_REF)}
            onMouseLeave={(e) => handleMouseLeave(e, 3, rectCorner3_REF)}
          />
        </Group>
      )}
    </Group>
  );
}

RectTemplate.propTypes = {
  id: PropTypes.number,
  itemData: PropTypes.object,
  setSidebarRightOpenedCtx: PropTypes.func,
};
