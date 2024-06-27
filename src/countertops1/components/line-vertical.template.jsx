import { Group, Line, Text } from "react-konva";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export default function LineTemplateVertical(props) {
  const { itemData } = props;

  const xRefBase = itemData?.width || 0; // (itemData?.xRef || 0);
  const yRefBase = 0; // (itemData?.yRef || 0);
  const lengthBase = itemData?.height || 0;
  const levelAdjust = 20; // useState()(itemData?.level == 1 ? 20 : 60);

  const textBase = itemData?.height || "";
  const textX = xRefBase + 34; //itemData?.level == 1 ? xRefBase + 36 : xRefBase + 76
  const textY = yRefBase + lengthBase / 2 - 10;

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
        strokeWidth={1}
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
        strokeWidth={1}
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
        strokeWidth={1}
      />
      <Text
        x={Number.isFinite(textX) ? textX : 0}
        y={Number.isFinite(textY) ? textY : 0}
        text={textBase}
        rotation={rotation}
        fontSize={16}
        fill={"black"}
      />
    </Group>
  );
}

LineTemplateVertical.propTypes = {
  itemData: PropTypes.object,
  id: PropTypes.number,
};
