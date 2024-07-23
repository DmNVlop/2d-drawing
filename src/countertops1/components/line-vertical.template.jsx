import { Group, Line, Rect, Text } from "react-konva";
import PropTypes from "prop-types";
import { useCustomURLHandler } from "../helpers/location.hook";
import { useCountertopContext } from "../context/ct-context";
import { useRef } from "react";
import { yBaseMultiplier } from "./Rect-Helpers/base-line-multiplier.helper";

export default function LineTemplateVertical(props) {
  const { itemData } = props;
  const { countertops } = useCountertopContext();
  const { ATTRIB_SETTED } = useCustomURLHandler();

  const textBaseRef = useRef();

  const xRefBase = itemData?.width || 0; // (itemData?.xRef || 0);
  const yRefBase = 0; // (itemData?.yRef || 0);
  const lengthBase = itemData?.height || 0;
  const levelAdjust = 20; // useState()(itemData?.level == 1 ? 20 : 60);

  const textBase = itemData?.height || "";
  const scaleX = countertops[ATTRIB_SETTED]?.rootConfig?.scaleX;
  const scaleY = countertops[ATTRIB_SETTED]?.rootConfig?.scaleY;

  // const xBase_multiplier = scaleX <= 0.5 ? 10 : 4.5;
  const textX = xRefBase + 34 + yBaseMultiplier(scaleX) / scaleX || 1; //itemData?.level == 1 ? xRefBase + 36 : xRefBase + 76
  const textY = yRefBase + lengthBase / 2 - 12 / scaleX || 1;

  const rotation = itemData?.rotation || 90;

  return (
    <Group>
      <Line
        points={[
          xRefBase + levelAdjust,
          yRefBase,
          xRefBase + levelAdjust,
          yRefBase + lengthBase,
        ]}
        fill="black"
        stroke="black"
        strokeWidth={1 / scaleX || 1}
      />
      <Line
        points={[
          xRefBase + levelAdjust - 10,
          yRefBase,
          xRefBase + levelAdjust + 10,
          yRefBase,
        ]}
        fill="black"
        stroke="black"
        strokeWidth={1 / scaleX || 1}
      />
      <Line
        points={[
          xRefBase + levelAdjust - 10,
          yRefBase + lengthBase,
          xRefBase + levelAdjust + 10,
          yRefBase + lengthBase,
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
        rotation={90}
        offsetX={0}
        offsetY={textBaseRef?.current?.height() - 2 || 1}
      />
      <Text
        ref={textBaseRef}
        x={Number.isFinite(textX) ? textX : 0}
        y={Number.isFinite(textY) ? textY : 0}
        text={textBase}
        rotation={rotation}
        fontSize={16}
        fill={"black"}
        scaleX={1 / scaleX || 1}
        scaleY={1 / scaleY || 1}
      />
    </Group>
  );
}

LineTemplateVertical.propTypes = {
  itemData: PropTypes.object,
};
