import { useEffect, useMemo, useRef, useState } from "react";
import { Group, Line, Rect, Text } from "react-konva";
import PropTypes from "prop-types";

import {
  RECT_DATA_INIT,
  SAFE_TEXT_OFFSET,
  SAFE_TEXT_OFFSET_B,
} from "../Utils/RECT_DATA_INIT";
import { SCREEN_MULIPLY } from "../Utils/SCREEN_MULIPLY";
import {
  INPUTS_DIMENTIONS_H,
  INPUTS_DIMENTIONS_W,
} from "../Utils/INPUT_VALIDATIONS";

const CounterTop = ({ rectDataIn, arrayPos, forReturnData }) => {
  const [image, setImage] = useState(null);

  let data = useMemo(() => {
    return rectDataIn
      ? { ...RECT_DATA_INIT[0], ...rectDataIn }
      : { ...RECT_DATA_INIT[0] };
  }, [rectDataIn]);

  const rectRef = useRef();
  const textTopWidthRef = useRef();
  const textRightHeighthRef = useRef();
  const textBottomWidthRef = useRef();
  const textLeftHeighthRef = useRef();

  useEffect(() => {
    if (rectRef) {
      const img = new window.Image();
      img.src = data.fillPatternImage;
      img.onload = () => {
        setImage(img);
      };
    }
  }, [data]);

  const onClickTextHandle = (side, event) => {
    const newValue = prompt("Ingresa un nuevo valor:");
    const txtExec = {
      w: () => {
        if (
          newValue >= INPUTS_DIMENTIONS_W.min &&
          newValue <= INPUTS_DIMENTIONS_W.max
        ) {
          data.width = parseInt(newValue);

          forReturnData(data, arrayPos);
        } else {
          alert(
            `Valor de largo incorrecto, debe estar entre ${INPUTS_DIMENTIONS_W.min} y ${INPUTS_DIMENTIONS_W.max}`
          );
        }
      },
      h: () => {
        if (
          newValue >= INPUTS_DIMENTIONS_H.min &&
          newValue <= INPUTS_DIMENTIONS_H.max
        ) {
          data.height = parseInt(newValue);

          forReturnData(data, arrayPos);
        } else {
          alert(
            `Valor de alto incorrecto, debe estar entre ${INPUTS_DIMENTIONS_H.min} y ${INPUTS_DIMENTIONS_H.max}`
          );
        }
      },
    };

    txtExec[side]();
  };

  return (
    <>
      <Group rotation={data?.rotation} x={data?.xGroup} y={data?.yGroup}>
        <Text
          id="textTopWidthRef"
          name="textTopWidthRef"
          fontSize={16}
          fill="#292929"
          ref={textTopWidthRef}
          text={`${data?.width}`}
          x={data?.x}
          y={SAFE_TEXT_OFFSET}
          width={data?.width * SCREEN_MULIPLY}
          rotation={data?.textData[0].rotation}
          visible={data?.textData[0].visible}
          onClick={(event) => onClickTextHandle("w", event)}
          verticalAlign="middle"
          align="center"
        />
        <Text
          id="textRightHeighthRef"
          name="textRightHeighthRef"
          fontSize={16}
          fill="#292929"
          ref={textRightHeighthRef}
          text={`${data?.height}`}
          x={data?.x + data?.width * SCREEN_MULIPLY + SAFE_TEXT_OFFSET}
          y={data?.y}
          width={data?.height * SCREEN_MULIPLY}
          rotation={data?.textData[1].rotation}
          visible={data?.textData[1].visible}
          onClick={(event) => onClickTextHandle("h", event)}
          verticalAlign="middle"
          align="center"
        />
        <Text
          id="textBottomWidthRef"
          name="textBottomWidthRef"
          fontSize={16}
          fill="#292929"
          ref={textBottomWidthRef}
          text={`${data?.width}`}
          x={data?.x}
          y={data?.y + data?.height * SCREEN_MULIPLY + SAFE_TEXT_OFFSET_B}
          width={data?.width * SCREEN_MULIPLY}
          rotation={data?.textData[2].rotation}
          visible={data?.textData[2].visible}
          onClick={(event) => onClickTextHandle("w", event)}
          verticalAlign="middle"
          align="center"
        />
        <Text
          id="textLeftHeighthRef"
          name="textLeftHeighthRef"
          fontSize={16}
          fill="#292929"
          ref={textLeftHeighthRef}
          text={`${data?.height}`}
          x={SAFE_TEXT_OFFSET}
          y={data.height * SCREEN_MULIPLY + data?.y}
          width={data?.height * SCREEN_MULIPLY}
          rotation={data?.textData[3].rotation}
          visible={data?.textData[3].visible}
          onClick={(event) => onClickTextHandle("h", event)}
          verticalAlign="middle"
          align="center"
        />
        <Rect
          id="rectRef"
          name="rectRef"
          ref={rectRef}
          x={data?.x}
          y={data?.y}
          width={data?.width * SCREEN_MULIPLY}
          height={data?.height * SCREEN_MULIPLY}
          fill={data?.fill}
          stroke={data?.stroke}
          strokeWidth={data?.strokeWidth}
          cornerRadius={data?.cornerRadius}
          fillPatternImage={image}
          fillPatternRepeat={data?.fillPatternRepeat}
          fillPatternScaleX={data?.fillPatternScaleX}
          fillPatternScaleY={data?.fillPatternScaleY}
          visible={data?.visible}
        />
        {/* <Line
          points={[40, 40, 80, 40, 40, 80]}
          closed={true}
          fill="white"
          stroke={"white"}
          strokeWidth={2}
          zIndex={100}
        /> */}
        {/* <Line
          points={[
            INIT_SHAPE_POINTS.x + (1800 * SCREEN_MULIPLY),
            INIT_SHAPE_POINTS.y,
            INIT_SHAPE_POINTS.x + (1550 * SCREEN_MULIPLY),
            INIT_SHAPE_POINTS.y,
            INIT_SHAPE_POINTS.x + (1800 * SCREEN_MULIPLY),
            INIT_SHAPE_POINTS.y + (780 * SCREEN_MULIPLY),
          ]}
          closed={true}
          fill="white"
          stroke={"white"}
          strokeWidth={2}
          zIndex={100}
        /> */}
      </Group>
    </>
  );
};

CounterTop.protoTypes = {
  rectDataIn: PropTypes.object.isRequired,
  arrayPos: PropTypes.number.isRequired,
  forReturnData: PropTypes.func.isRequired,
};

// dataIn: PropTypes.shape({
//   rectDataIn: PropTypes.object,
//   textDataIn1: PropTypes.object,
//   textDataIn2: PropTypes.object,
// }).isRequired,

// MiComponent.propTypes = {
//   valor: PropTypes.string.isRequired,
//   manejarCambio: PropTypes.func.isRequired,
// };

export default CounterTop;
