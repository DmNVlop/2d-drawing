import { Line, Rect, Text } from "react-konva";
import PropTypes from "prop-types";
import { useCustomURLHandler } from "../helpers/location.hook";
import { useCountertopContext } from "../context/ct-context";
import { useRef } from "react";
import { xBaseMultiplier } from "./Rect-Helpers/base-line-multiplier.helper";

export default function LineTemplateHorizontal(props) {
  const { itemData } = props;
  const { countertops } = useCountertopContext();
  const { ATTRIB_SETTED } = useCustomURLHandler();

  const textBaseRef = useRef();

  const xRefBase = 0; // itemData.xRef || 0
  const yRefBase = 0; // itemData.yRef || 0
  const lengthBase = itemData.width || 0;
  const levelAdjust = 20; // itemData.level == 1 ? 20 : 60;

  const textBase = itemData.width || "";
  const scaleX = countertops[ATTRIB_SETTED]?.rootConfig?.scaleX;
  const scaleY = countertops[ATTRIB_SETTED]?.rootConfig?.scaleY;

  const textX = xRefBase + lengthBase / 2 - 10 / scaleX || 1; //
  const textY = yRefBase - xBaseMultiplier(scaleX) / scaleX || 1; // itemData.level == 1 ? yRefBase - 36 : yRefBase - 76;

  const rotation = 0; // itemData.rotation || 0;

  return (
    <>
      <Line
        points={[
          xRefBase,
          yRefBase - levelAdjust,
          xRefBase + lengthBase,
          yRefBase - levelAdjust,
        ]}
        fill="black"
        stroke="black"
        strokeWidth={1 / scaleX || 1}
      />
      <Line
        points={[
          xRefBase,
          yRefBase - levelAdjust + 10,
          xRefBase,
          yRefBase - levelAdjust - 10,
        ]}
        fill="black"
        stroke="black"
        strokeWidth={1 / scaleX || 1}
      />
      <Line
        points={[
          xRefBase + lengthBase,
          yRefBase - levelAdjust + 10,
          xRefBase + lengthBase,
          yRefBase - levelAdjust - 10,
        ]}
        fill="black"
        stroke="black"
        strokeWidth={1 / scaleX || 1}
      />

      <Rect
        x={Number.isFinite(textX) ? textX - 6 / scaleX : 0}
        y={Number.isFinite(textY) ? textY - 6 / scaleX : 0}
        fill="#f0f0f0"
        width={textBaseRef?.current?.width() + 12 || 1}
        height={textBaseRef?.current?.height() + 10 || 1}
        cornerRadius={[4, 4, 4, 4]}
        scaleX={1 / scaleX || 1}
        scaleY={1 / scaleY || 1}
      />
      <Text
        ref={textBaseRef}
        x={Number.isFinite(textX) ? textX : 0}
        y={Number.isFinite(textY) ? textY : 0}
        text={
          Number(textBase) % 1 !== 0
            ? Number(textBase).toFixed(2)
            : Number(textBase)
        }
        rotation={rotation}
        fontSize={16}
        scaleX={1 / scaleX || 1}
        scaleY={1 / scaleY || 1}
      />
    </>
  );
}

LineTemplateHorizontal.propTypes = {
  itemData: PropTypes.object,
};
